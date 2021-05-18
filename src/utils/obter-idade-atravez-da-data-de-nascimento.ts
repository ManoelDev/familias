import { differenceInYears } from 'date-fns';

/**
 * Data de nascimento no formato string (yyyy-mm-dd).
 * @param nascimento Date
 */
export const obterIdadeAtravezDaDataDeNascimento = (nascimento: string): number =>
    differenceInYears(new Date(nascimento), new Date)
