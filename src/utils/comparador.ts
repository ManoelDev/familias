import { FamiliaAvaliada } from "../domain/model/FamiliaAvaliada";

/**
 * Ordernar familias a partir dos pontos
 * @param Familia A
 * @param Familia B
 * @returns ordenation
 */
export const comparador = ({ pontos: a }: FamiliaAvaliada, { pontos: b }: FamiliaAvaliada): number => {
    if (a < b) {
        return 1;
    }

    if (a > b) {
        return -1;
    }

    return 0;
}