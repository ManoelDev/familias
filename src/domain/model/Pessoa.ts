import { TipoPessoa } from "./TipoPessoa";

export interface Pessoa {
    id: string;
    nome: string;
    tipo: TipoPessoa;
    dataDeNascimento: string;
}