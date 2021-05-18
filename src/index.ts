import { CriterioDeAvaliacao } from "./domain/Criterios/CriterioDeAvaliacao";
import { IdadeDoPretendente } from "./domain/Criterios/IdadeDoPretendente";
import { QunatidadeDeDependentes } from "./domain/Criterios/QuantidadeDeDependentes";
import { RendaTotal } from "./domain/Criterios/RendaTotal";
import { FamiliaAvaliada } from "./domain/model/FamiliaAvaliada";
import { StatusFamilia } from "./domain/model/StatusFamilia";

import { create } from "./seed/familia-seeder";
import { comparador } from "./utils/comparador";

const familias = create(50);

const criterios: CriterioDeAvaliacao[] = [
    new RendaTotal(),
    new IdadeDoPretendente(),
    new QunatidadeDeDependentes(),
];

const avaliadas: FamiliaAvaliada[] = familias
    .filter(({ status }) => status === StatusFamilia.CADASTRO_VALIDO)
    .map(familia => ({
        ...familia,
        pontos: criterios.reduce(
            (total, criterio) => criterio.pontuar(familia) + total,
            0,
        ),
    }));

console.log(JSON.stringify(avaliadas.sort(comparador), undefined, 4))