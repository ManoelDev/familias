import { obterIdadeAtravezDaDataDeNascimento as idade } from "../../utils/obter-idade-atravez-da-data-de-nascimento";
import { Familia } from "../model/Familia";
import { CriterioDeAvaliacao } from "./CriterioDeAvaliacao";

export class QunatidadeDeDependentes implements CriterioDeAvaliacao {
    pontuar(familia: Familia): number {
        const quantidadeDeDependentes = familia.pessoas.filter(
            ({ tipo, dataDeNascimento }) =>
                tipo === 'Dependente' && idade(dataDeNascimento) > 18,
        ).length;

        if (quantidadeDeDependentes >= 1 && quantidadeDeDependentes <= 2) {
            return 2;
        }

        if (quantidadeDeDependentes >= 3) {
            return 3;
        }

        return 0;
    }
}