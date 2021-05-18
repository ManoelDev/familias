import { Familia } from "../model/Familia";

export interface CriterioDeAvaliacao {
    pontuar(familia: Familia): number;
}