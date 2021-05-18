import { Familia } from "../model/Familia";
import { CriterioDeAvaliacao } from "./CriterioDeAvaliacao";

export class RendaTotal implements CriterioDeAvaliacao {
    pontuar(familia: Familia): number {
        const renda = familia.rendas.reduce((total, { valor }) => total + valor, 0);
        if (renda <= 900) {
            return 5;
        }
        if (renda > 900 && renda <= 1500) {
            return 3;
        }
        if (renda > 1500 && renda <= 2000) {
            return 1;
        }
        return 0;
    }
}