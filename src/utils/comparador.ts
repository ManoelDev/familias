import { FamiliaAvaliada } from "../domain/model/FamiliaAvaliada";

/**
 * Ordernar familias a partir dos pontos
 * @param Familia A
 * @param Familia B
 * @returns ordenation
 */
export const comparador = ({ pontos: a }: FamiliaAvaliada, { pontos: b }: FamiliaAvaliada): number => {
    // if (a é menor que b em algum critério de ordenação) {
    if (a < b) {
        return 1;
    }
    // if (a é maior que b em algum critério de ordenação) {
    if (a > b) {
        return -1;
    }

    // a deve ser igual a b
    return 0;
}