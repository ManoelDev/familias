import { Pessoa } from "./Pessoa";
import { Renda } from "./Renda";
import { StatusFamilia } from "./StatusFamilia";

export interface Familia {
    id: string;
    pessoas: Pessoa[];
    rendas: Renda[];
    status: StatusFamilia;
}