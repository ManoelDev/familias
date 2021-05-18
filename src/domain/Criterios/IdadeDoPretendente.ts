import { obterIdadeAtravezDaDataDeNascimento as getIdade } from "../../utils/obter-idade-atravez-da-data-de-nascimento";
import { Familia } from "../model/Familia";
import { CriterioDeAvaliacao } from "./CriterioDeAvaliacao";

export class IdadeDoPretendente implements CriterioDeAvaliacao {
    pontuar(familia: Familia): number {
        const pretendente = familia.pessoas.find(
            ({ tipo }) => tipo === 'Pretendente',
        );

        if (!pretendente) {
            return 0;
        }

        const idade = getIdade(pretendente.dataDeNascimento);

        if (idade < 30) {
            return 1;
        }

        if (idade >= 30 && idade <= 44) {
            return 2;
        }

        if (idade >= 45) {
            return 3;
        }

        return 0;
    }
}