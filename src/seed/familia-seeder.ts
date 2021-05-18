import { v4 as uuid } from 'uuid';
import { name, date } from 'faker/locale/pt_BR';
import { format } from 'date-fns';

import { Familia } from "../domain/model/Familia";
import { Pessoa } from "../domain/model/Pessoa";
import { StatusFamilia } from "../domain/model/StatusFamilia";
import { Renda } from '../domain/model/Renda';

import { between } from '../utils/ramdom/between';
import { itemFromArray } from '../utils/ramdom/item-from-array';
import { itemsFromArray } from '../utils/ramdom/items-from-array';

export function create(quantidade: number): Familia[] {
    const familias: Familia[] = [];

    for (let index = 0; index < quantidade; index++) {
      const pessoas: Pessoa[] = [
        {
          id: uuid(),
          nome: name.firstName(),
          tipo: 'Pretendente',
          dataDeNascimento: format(date.past(between(1, 60)), 'yyyy-MM-dd'),
        },
        {
          id: uuid(),
          nome: name.firstName(),
          tipo: 'Cônjuge',
          dataDeNascimento: format(date.past(between(1, 60)), 'yyyy-MM-dd'),
        },
        ...Array(between(1, 4))
          .fill(0)
          .map(
            (): Pessoa => ({
              id: uuid(),
              nome: name.firstName(),
              tipo: 'Dependente',
              dataDeNascimento: format(date.past(between(1, 60)), 'yyyy-MM-dd'),
            }),
          ),
      ];

      const rendas: Renda[] = itemsFromArray(pessoas, between(2, 3)).map(
        ({ id }) => ({
          pessoaId: id,
          valor: between(0, 1000),
        }),
      );

      familias.push({
        id: uuid(),
        pessoas,
        rendas,
        status: itemFromArray([
          StatusFamilia.CADASTRO_INCOMPLETO,
          StatusFamilia.CADASTRO_VALIDO,
          StatusFamilia.JA_POSSUI_UMA_CASA,
          StatusFamilia.SELECIONADA_EM_OUTRO_PROCESSO_DE_SELECAO,
        ]),
      });
    }
    return familias
}