import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { CategoriasService } from './categorias.service';
import { Sintoma } from '../models/sintoma.model';
import { SintomasService } from './sintomas.service';
import { PerguntasService } from './perguntas.service';
import { DiagnosticosService } from './diagnosticos.service';
import { Pergunta } from '../models/pergunta.model';
import { Diagnostico } from '../models/diagnostico.model';

@Injectable({
    providedIn: 'root'
})
export class CadastrosService {

    constructor(
        private categoriasService: CategoriasService,
        private sintomasService: SintomasService,
        private perguntasService: PerguntasService,
        private diagnosticosService: DiagnosticosService,
    ) { }

    async cadastrarTudo() {

        await this.cadastrarCategorias();
        await this.cadastrarSintomas();
        await this.cadastrarPerguntas();
        await this.cadastrarDiagnosticos();

    }

    private async _cadastrarCategorias(categorias: Categoria[]) {

        for (const categoria of categorias) {
            await this.categoriasService.put(categoria);
        }

    }

    private async _cadastrarSintomas(sintomas: Sintoma[]) {

        for (const sintoma of sintomas) {
            await this.sintomasService.put(sintoma);
        }

    }

    private async _cadastrarPerguntas(perguntas: Pergunta[]) {

        for (const pergunta of perguntas) {
            await this.perguntasService.put(pergunta);
        }

    }

    private async _cadastrarDiagnosticos(diagnosticos: Diagnostico[]) {

        for (const diagnostico of diagnosticos) {
            await this.diagnosticosService.put(diagnostico);
        }

    }



    //#region CATEGORIAS

    private async cadastrarCategorias() {

        const categorias: Categoria[] = [
            { id: 'c1', titulo: 'Bebês com menos de 1 ano' },
            { id: 'c2', titulo: 'Crianças de todas as idades' },
            { id: 'c3', titulo: 'Adolescentes' },
            { id: 'c4', titulo: 'Clínica geral para homens e mulheres' },
            { id: 'c5', titulo: 'Problemas especiais em homens' },
            { id: 'c6', titulo: 'Problemas especiais em mulheres' },
            { id: 'c7', titulo: 'Gravidez e parto' },
        ];

        await this._cadastrarCategorias(categorias);
    }

    //#endregion



    //#region SINTOMAS

    private async cadastrarSintomas() {
        await this.cadastrarSintomasC1();
        await this.cadastrarSintomasC2();
        await this.cadastrarSintomasC3();
        await this.cadastrarSintomasC4();
        await this.cadastrarSintomasC5();
        await this.cadastrarSintomasC6();
        await this.cadastrarSintomasC7();
    }

    /**
     * C1 - Bebês com menos de 1 ano
     */
    private async cadastrarSintomasC1() {

        const sintomas: Sintoma[] = [

            {
                id: 's001_c1',
                idCategoria: 'c1',
                idPergunta: 'p01_s001',
                titulo: 'Baixo ganho de peso',
                // tslint:disable-next-line: max-line-length
                descricao: 'É importante acompanhar o aumento do peso do seu bebê pois o baixo ganho de peso pode indicar uma grande de problemas. Normalmente o bebê é pesado sempre que você o leva ao pediatra, onde qualquer distúrbio logo é observado e tem início o tratamento. Mesmo assim, é sempre bom manter o seu próprio histórico de peso do bebê atualizado, para ter certeza de que ele está se desenvolvendo como esperado.',
                disponivel: true
            },

            {
                id: 's002_c1',
                idCategoria: 'c1',
                idPergunta: '',
                titulo: 'Acordando durante a noite',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's003_c1',
                idCategoria: 'c1',
                idPergunta: '',
                titulo: 'Febre em bebês',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's004_c1',
                idCategoria: 'c1',
                idPergunta: '',
                titulo: 'Problemas de pele',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's005_c1',
                idCategoria: 'c1',
                idPergunta: '',
                titulo: 'Choro excessivo',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's006_c1',
                idCategoria: 'c1',
                idPergunta: '',
                titulo: 'Problemas de alimentação',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's007_c1',
                idCategoria: 'c1',
                idPergunta: '',
                titulo: 'Vômito em bebês',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's008_c1',
                idCategoria: 'c1',
                idPergunta: '',
                titulo: 'Diarréia em bebês',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

        ];

        await this._cadastrarSintomas(sintomas);

    }


    /**
     * C2 - Crianças de todas as idades
     */
    private async cadastrarSintomasC2() {

        const sintomas: Sintoma[] = [

            {
                id: 's009_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s009',
                titulo: 'Mal-estar geral',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's010_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s010',
                titulo: 'Crescimento lento',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's011_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s011',
                titulo: 'Ganho excessivo de peso',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's012_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s012',
                titulo: 'Problemas do sono',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's013_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s013',
                titulo: 'Sonolência',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's014_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s014',
                titulo: 'Febre em crianças',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's015_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s015',
                titulo: 'Gânglios inchados',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's016_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s016',
                titulo: 'Coceira',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's017_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s017',
                titulo: 'Desmaios, tonturas e crises convulsivas',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's018_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s018',
                titulo: 'Dor de cabeça',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's019_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s019',
                titulo: 'Falta de coordenação',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's020_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s020',
                titulo: 'Confusão',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's021_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s021',
                titulo: 'Dificultades da fala',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's022_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s022',
                titulo: 'Problemas de comportamento',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's023_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s023',
                titulo: 'Dificuldades na escola',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's024_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s024',
                titulo: 'Problemas de cabelo, couro cabeludo e unhas',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's025_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s025',
                titulo: 'Manchas e erupções',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's026_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s026',
                titulo: 'Erupção com febre',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's027_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s027',
                titulo: 'Problemas nos olhos',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's028_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s028',
                titulo: 'Distúrbios da visão',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's029_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s029',
                titulo: 'Dor ou irritação no ouvido',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's030_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s030',
                titulo: 'Surdez',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's031_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s031',
                titulo: 'Nariz entupido ou escorrendo',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's032_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s032',
                titulo: 'Dor de garganta',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's033_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s033',
                titulo: 'Tosse',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's034_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s034',
                titulo: 'Respiração rápida',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's035_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s035',
                titulo: 'Respiração ruidosa',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's036_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s036',
                titulo: 'Dor de dente',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's037_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s037',
                titulo: 'Vômito em crianças',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's038_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s038',
                titulo: 'Dor abdominal',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's039_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s039',
                titulo: 'Falta de apetite',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's040_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s040',
                titulo: 'Diarréia em crianças',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's041_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s041',
                titulo: 'Prisão de ventre',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's042_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s042',
                titulo: 'Fezes anormais',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's043_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s043',
                titulo: 'Problemas urinários',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's044_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s044',
                titulo: 'Problemas ao largar as fraldas',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's045_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s045',
                titulo: 'Dor nos braços ou nas pernas',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's046_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s046',
                titulo: 'Dor nas articulações',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's047_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s047',
                titulo: 'Problemas nos pés',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's048_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s048',
                titulo: 'Problemas genitais em meninos',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's049_c2',
                idCategoria: 'c2',
                idPergunta: 'p01_s049',
                titulo: 'Problemas genitais em meninas',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

        ];

        await this._cadastrarSintomas(sintomas);

    }

    /**
     * C3 - Adolescentes
     */
    private async cadastrarSintomasC3() {

        const sintomas: Sintoma[] = [

            {
                id: 's050_c3',
                idCategoria: 'c3',
                idPergunta: 'p01_s050',
                titulo: 'Puberdade tardia',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's051_c3',
                idCategoria: 'c3',
                idPergunta: 'p01_s051',
                titulo: 'Problemas de comportamento na adolescência',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's052_c3',
                idCategoria: 'c3',
                idPergunta: 'p01_s052',
                titulo: 'Problemas de pele na adolescência',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's053_c3',
                idCategoria: 'c3',
                idPergunta: 'p01_s053',
                titulo: 'Problemas de peso na adolescência',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

        ];

        await this._cadastrarSintomas(sintomas);

    }

    /**
     * C4 - Clínica geral para homens e mulheres
     */
    private async cadastrarSintomasC4() {

        const sintomas: Sintoma[] = [

            {
                id: 's054_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s054',
                titulo: 'Mal-estar geral',
                // tslint:disable-next-line: max-line-length
                descricao: 'Às vezes você pode sentir um vago mal estar geral mas não é capaz de localizar um sintoma específico como uma dor. Em geral, isso é causado por uma pequena infecção ou um estilo de vida inadequado, mas pode também ser sinal de problema latente sério que exige tratamento médico.',
                disponivel: true
            },

            {
                id: 's055_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s055',
                titulo: 'Cansaço',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's056_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s056',
                titulo: 'Perda de peso',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's057_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s057',
                titulo: 'Excesso de peso',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's058_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s058',
                titulo: 'Dificuldade para dormir',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's059_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s059',
                titulo: 'Febre',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's060_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s060',
                titulo: 'Suor excessivo',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's061_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s061',
                titulo: 'Coceira',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's062_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s062',
                titulo: 'Caroços e inchaços',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's063_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s063',
                titulo: 'Tonturas e desmaios',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's064_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s064',
                titulo: 'Dor de cabeça',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's065_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s065',
                titulo: 'Vertigem',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's066_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s066',
                titulo: 'Dormência e formigamentos',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's067_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s067',
                titulo: 'Tiques e tremores',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's068_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s068',
                titulo: 'Dores na face',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's069_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s069',
                titulo: 'Esquecimento e confusão',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's070_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s070',
                titulo: 'Dificuldades na fala',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's071_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s071',
                titulo: 'Disturbio nos pensamentos e emoções',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's072_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s072',
                titulo: 'Depressão',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's073_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s073',
                titulo: 'Ansiedade',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's074_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s074',
                titulo: 'Problemas de cabelo e couro cabeludo',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's075_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s075',
                titulo: 'Problemas nas unhas',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's076_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s076',
                titulo: 'Problemas de pele',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's077_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s077',
                titulo: 'Manchas e erupções',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's078_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s078',
                titulo: 'Protuberâncias ou pintas na pele',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's079_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s079',
                titulo: 'Erupção com febre',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's080_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s080',
                titulo: 'Dor ou irritação nos olhos',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's081_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s081',
                titulo: 'Distúrbios da visão',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's082_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s082',
                titulo: 'Dor de ouvido',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's083_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s083',
                titulo: 'Ruídos no ouvido',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's084_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s084',
                titulo: 'Surdez',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's085_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s085',
                titulo: 'Nariz escorrendo',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's086_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s086',
                titulo: 'Dor de garganta',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's087_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s087',
                titulo: 'Rouquidão ou perda da voz',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's088_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s088',
                titulo: 'Chiado no peito',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's089_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s089',
                titulo: 'Tosse',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's090_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s090',
                titulo: 'Dificuldade para respirar',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's091_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s091',
                titulo: 'Dor de dente',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's092_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s092',
                titulo: 'Dificuldade para engolir',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's093_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s093',
                titulo: 'Problemas na boca e na língua',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's094_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s094',
                titulo: 'Vômitos',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's095_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s095',
                titulo: 'Vômitos recorrentes',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's096_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s096',
                titulo: 'Dor abdominal',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's097_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s097',
                titulo: 'Dor abdominal recorrente',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's098_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s098',
                titulo: 'Aumento do abdome',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's099_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s099',
                titulo: 'Gases',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's100_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s100',
                titulo: 'Diarréia',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's101_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s101',
                titulo: 'Prisão de ventre',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's102_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s102',
                titulo: 'Fezes anormais',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's103_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s103',
                titulo: 'Problemas no ânus',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's104_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s104',
                titulo: 'Problemas urinários',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's105_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s105',
                titulo: 'Palpitações',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's106_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s106',
                titulo: 'Dor no peito',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's107_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s107',
                titulo: 'Dor nas costas',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's108_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s108',
                titulo: 'Dor no pescoço ou torcicolo',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's109_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s109',
                titulo: 'Dor no braço',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's110_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s110',
                titulo: 'Dor na perna',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's111_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s111',
                titulo: 'Problemas nos pés',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's112_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s112',
                titulo: 'Dor ou inchaço nas articulações',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's113_c4',
                idCategoria: 'c4',
                idPergunta: 'p01_s113',
                titulo: 'Dor no joelho',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

        ];

        await this._cadastrarSintomas(sintomas);

    }

    /**
     * C5 - Problemas especiais em homens
     */
    private async cadastrarSintomasC5() {

        const sintomas: Sintoma[] = [

            {
                id: 's114_c5',
                idCategoria: 'c5',
                idPergunta: 'p01_s114',
                titulo: 'Calvície',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's115_c5',
                idCategoria: 'c5',
                idPergunta: 'p01_s115',
                titulo: 'Dor ou inchaço nos testículos',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's116_c5',
                idCategoria: 'c5',
                idPergunta: 'p01_s116',
                titulo: 'Dor no pênis',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's117_c5',
                idCategoria: 'c5',
                idPergunta: 'p01_s117',
                titulo: 'Dor ao urinar',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's118_c5',
                idCategoria: 'c5',
                idPergunta: 'p01_s118',
                titulo: 'Dificuldade de ereção',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's119_c5',
                idCategoria: 'c5',
                idPergunta: 'p01_s119',
                titulo: 'Ejaculação precoce',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's120_c5',
                idCategoria: 'c5',
                idPergunta: 'p01_s120',
                titulo: 'Ejaculação tardia',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's121_c5',
                idCategoria: 'c5',
                idPergunta: 'p01_s121',
                titulo: 'Falta de interesse sexual',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's122_c5',
                idCategoria: 'c5',
                idPergunta: 'p01_s122',
                titulo: 'Problemas de fertilidade',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's123_c5',
                idCategoria: 'c5',
                idPergunta: 'p01_s123',
                titulo: 'Métodos anticoncepcionais',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

        ];

        await this._cadastrarSintomas(sintomas);

    }

    /**
     * C6 - Problemas especiais em mulheres
     */
    private async cadastrarSintomasC6() {

        const sintomas: Sintoma[] = [

            {
                id: 's124_c6',
                idCategoria: 'c6',
                idPergunta: 'p01_s124',
                titulo: 'Problemas nas mamas',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's125_c6',
                idCategoria: 'c6',
                idPergunta: 'p01_s125',
                titulo: 'Ausência de menstruação',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's126_c6',
                idCategoria: 'c6',
                idPergunta: 'p01_s126',
                titulo: 'Menstruação excessiva',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's127_c6',
                idCategoria: 'c6',
                idPergunta: 'p01_s127',
                titulo: 'Cólicas menstruais',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's128_c6',
                idCategoria: 'c6',
                idPergunta: 'p01_s128',
                titulo: 'Sangramento vaginal irregular',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's129_c6',
                idCategoria: 'c6',
                idPergunta: 'p01_s129',
                titulo: 'Corrimento vaginal anormal',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's130_c6',
                idCategoria: 'c6',
                idPergunta: 'p01_s130',
                titulo: 'Irritação genital',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's131_c6',
                idCategoria: 'c6',
                idPergunta: 'p01_s131',
                titulo: 'Falta de controle da bexiga',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's132_c6',
                idCategoria: 'c6',
                idPergunta: 'p01_s132',
                titulo: 'Dor ao urinar',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's133_c6',
                idCategoria: 'c6',
                idPergunta: 'p01_s133',
                titulo: 'Urinando frequentemente',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's134_c6',
                idCategoria: 'c6',
                idPergunta: 'p01_s134',
                titulo: 'Dor nas relações sexuais',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's135_c6',
                idCategoria: 'c6',
                idPergunta: 'p01_s135',
                titulo: 'Falta de interesse sexual',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's136_c6',
                idCategoria: 'c6',
                idPergunta: 'p01_s136',
                titulo: 'Escolhendo um método anticoncepcional',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's137_c6',
                idCategoria: 'c6',
                idPergunta: 'p01_s137',
                titulo: 'Dificuldade para engravidar',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

        ];

        await this._cadastrarSintomas(sintomas);

    }

    /**
     * C7 - Gravidez e parto
     */
    private async cadastrarSintomasC7() {

        const sintomas: Sintoma[] = [

            {
                id: 's138_c7',
                idCategoria: 'c7',
                idPergunta: 'p01_s138',
                titulo: 'Náuseas e vômitos na gravidez',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's139_c7',
                idCategoria: 'c7',
                idPergunta: 'p01_s139',
                titulo: 'Alterações na pele na gravidez',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's140_c7',
                idCategoria: 'c7',
                idPergunta: 'p01_s140',
                titulo: 'Dor nas costas na gravidez',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's141_c7',
                idCategoria: 'c7',
                idPergunta: 'p01_s141',
                titulo: 'Azia na gravidez',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's142_c7',
                idCategoria: 'c7',
                idPergunta: 'p01_s142',
                titulo: 'Sangramento vaginal na gravidez',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's143_c7',
                idCategoria: 'c7',
                idPergunta: 'p01_s143',
                titulo: 'Falta de ar na gravidez',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's144_c7',
                idCategoria: 'c7',
                idPergunta: 'p01_s144',
                titulo: 'Tornozelo inchado na gravidez',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's145_c7',
                idCategoria: 'c7',
                idPergunta: 'p01_s145',
                titulo: 'Estou em trabalho de parto?',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's146_c7',
                idCategoria: 'c7',
                idPergunta: 'p01_s146',
                titulo: 'Problemas na amamentação',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

            {
                id: 's147_c7',
                idCategoria: 'c7',
                idPergunta: 'p01_s146',
                titulo: 'Depressão pós-parto',
                // tslint:disable-next-line: max-line-length
                descricao: '',
                disponivel: false
            },

        ];

        await this._cadastrarSintomas(sintomas);

    }

    //#endregion



    //#region PERGUNTAS

    private async cadastrarPerguntas() {
        await this.CadastrarPerguntasS001();

        await this.CadastrarPerguntasS054();
    }

    /**
     * S001 - Baixo ganho de peso.
     */
    private async CadastrarPerguntasS001() {

        const perguntas: Pergunta[] = [

            {
                id: 'p01_s001',
                // tslint:disable-next-line: max-line-length
                conteudo: 'Você tem a impressão de que seu bebê não está bem? Por exemplo, é lento para mamar ou parece apático ou irritado?',
                respostas: [
                    {
                        id: 'sim',
                        texto: 'Sim',
                        ordem: 1,
                        idDiagnostico: 'd01_s001',
                        idProximaPergunta: null
                    },
                    {
                        id: 'nao',
                        texto: 'Não',
                        ordem: 2,
                        idDiagnostico: null,
                        idProximaPergunta: 'p02_s001'
                    }
                ]
            },

            {
                id: 'p02_s001',
                // tslint:disable-next-line: max-line-length
                conteudo: 'O bebê mama só no peito?',
                respostas: [
                    {
                        id: 'sim',
                        texto: 'Sim',
                        ordem: 1,
                        idDiagnostico: null,
                        idProximaPergunta: 'p04_s001'
                    },
                    {
                        id: 'nao',
                        texto: 'Não',
                        ordem: 2,
                        idDiagnostico: null,
                        idProximaPergunta: 'p03_s001'
                    }
                ]
            },

            {
                id: 'p03_s001',
                // tslint:disable-next-line: max-line-length
                conteudo: 'O bebê toma mamadeira?',
                respostas: [
                    {
                        id: 'sim',
                        texto: 'Sim',
                        ordem: 1,
                        idDiagnostico: null,
                        idProximaPergunta: 'p05_s001'
                    },
                    {
                        id: 'nao',
                        texto: 'Não',
                        ordem: 2,
                        idDiagnostico: 'd04_s001',
                        idProximaPergunta: null
                    }
                ]
            },

            {
                id: 'p04_s001',
                // tslint:disable-next-line: max-line-length
                conteudo: 'Você oferece alimento sempre que o bebê chora?',
                respostas: [
                    {
                        id: 'sim',
                        texto: 'Sim',
                        ordem: 1,
                        idDiagnostico: 'd02_s001',
                        idProximaPergunta: null
                    },
                    {
                        id: 'nao',
                        texto: 'Não',
                        ordem: 2,
                        idDiagnostico: 'd03_s001',
                        idProximaPergunta: null
                    }
                ]
            },

            {
                id: 'p05_s001',
                // tslint:disable-next-line: max-line-length
                conteudo: 'Você oferece mamadeira sempre que o bebê chora?',
                respostas: [
                    {
                        id: 'sim',
                        texto: 'Sim',
                        ordem: 1,
                        idDiagnostico: null,
                        idProximaPergunta: 'p07_s001'
                    },
                    {
                        id: 'nao',
                        texto: 'Não',
                        ordem: 2,
                        idDiagnostico: 'd04_s001',
                        idProximaPergunta: null
                    }
                ]
            },

            {
                id: 'p06_s001',
                // tslint:disable-next-line: max-line-length
                conteudo: 'O bebê sempre toma a mamadeira até o fim?',
                respostas: [
                    {
                        id: 'sim',
                        texto: 'Sim',
                        ordem: 1,
                        idDiagnostico: 'd07_s001',
                        idProximaPergunta: null
                    },
                    {
                        id: 'nao',
                        texto: 'Não',
                        ordem: 2,
                        idDiagnostico: 'd05_s001',
                        idProximaPergunta: null
                    }
                ]
            },

            {
                id: 'p07_s001',
                // tslint:disable-next-line: max-line-length
                conteudo: 'Por acaso você não está pondo água demais ou leite de menos ao preparar as mamadeiras?',
                respostas: [
                    {
                        id: 'sim',
                        texto: 'Sim',
                        ordem: 1,
                        idDiagnostico: 'd06_s001',
                        idProximaPergunta: null
                    },
                    {
                        id: 'nao',
                        texto: 'Não',
                        ordem: 2,
                        idDiagnostico: null,
                        idProximaPergunta: 'p06_s001'
                    }
                ]
            },

        ];

        await this._cadastrarPerguntas(perguntas);

    }


    private async CadastrarPerguntasS054() {

        const perguntas: Pergunta[] = [

            {
                id: 'p01_s054',
                // tslint:disable-next-line: max-line-length
                conteudo: 'Você se sente constantemente no "limite", com uam sensação de frio no estômago?',
                respostas: [
                    {
                        id: 'sim',
                        texto: 'Sim',
                        ordem: 1,
                        idDiagnostico: 'd01_s054',
                        idProximaPergunta: null
                    },
                    {
                        id: 'nao',
                        texto: 'Não',
                        ordem: 2,
                        idDiagnostico: null,
                        idProximaPergunta: 'p02_s054'
                    }
                ]
            },

            {
                id: 'p02_s054',
                // tslint:disable-next-line: max-line-length
                conteudo: 'Você perdeu mais do que 4,5 kg nas últimas dez semanas, sem que fizesse nada para isso?',
                respostas: [
                    {
                        id: 'sim',
                        texto: 'Sim',
                        ordem: 1,
                        idDiagnostico: 'd02_s054',
                        idProximaPergunta: null
                    },
                    {
                        id: 'nao',
                        texto: 'Não',
                        ordem: 2,
                        idDiagnostico: null,
                        idProximaPergunta: 'p03_s054'
                    }
                ]
            },

            {
                id: 'p03_s054',
                // tslint:disable-next-line: max-line-length
                conteudo: 'Sua temperatura é de 38ºC ou mais?',
                respostas: [
                    {
                        id: 'sim',
                        texto: 'Sim',
                        ordem: 1,
                        idDiagnostico: 'd03_s054',
                        idProximaPergunta: null
                    },
                    {
                        id: 'nao',
                        texto: 'Não',
                        ordem: 2,
                        idDiagnostico: null,
                        idProximaPergunta: 'p04_s054'
                    }
                ]
            },

            {
                id: 'p04_s054',
                // tslint:disable-next-line: max-line-length
                conteudo: 'Você anda cansado ou sem energia?',
                respostas: [
                    {
                        id: 'sim',
                        texto: 'Sim',
                        ordem: 1,
                        idDiagnostico: 'd04_s054',
                        idProximaPergunta: null
                    },
                    {
                        id: 'nao',
                        texto: 'Não',
                        ordem: 2,
                        idDiagnostico: null,
                        idProximaPergunta: 'p05_s054'
                    }
                ]
            },

            {
                id: 'p05_s054',
                // tslint:disable-next-line: max-line-length
                conteudo: 'Você está tomando algum remédio?',
                respostas: [
                    {
                        id: 'sim',
                        texto: 'Sim',
                        ordem: 1,
                        idDiagnostico: 'd05_s054',
                        idProximaPergunta: null
                    },
                    {
                        id: 'nao',
                        texto: 'Não',
                        ordem: 2,
                        idDiagnostico: 'd06_s054',
                        idProximaPergunta: null
                    }
                ]
            },
        ];

        await this._cadastrarPerguntas(perguntas);
    }

    //#endregion



    //#region DIAGNÓSTICOS

    private async cadastrarDiagnosticos() {
        await this.CadastrarDiagnosticosS001();

        await this.CadastrarDiagnosticosS054();
    }

    /**
     * S001 - Baixo ganho de peso.
     */
    private async CadastrarDiagnosticosS001() {

        const diagnosticos: Diagnostico[] = [

            {
                id: 'd01_s001',
                idCategoria: 'c1',
                titulo: 'Uma doença latente',
                // tslint:disable-next-line: max-line-length
                descricao: ' pode estar causando o baixo ganho de peso. Consulte um médico.',
                // tslint:disable-next-line: max-line-length
                autoAjuda: null
            },

            {
                id: 'd02_s001',
                idCategoria: 'c1',
                titulo: 'Uma quantidade insuficiente de leite',
                // tslint:disable-next-line: max-line-length
                descricao: ' pode estar causando a má nutrição. Se o bebê estiver com mais de 3 meses, ele pode começar a ingerir alimentos sólidos. Converse com o médico, que poderá recomendar mamadeiras suplementares ou orientar o desmame.',
                // tslint:disable-next-line: max-line-length
                autoAjuda: null
            },

            {
                id: 'd03_s001',
                idCategoria: 'c1',
                titulo: 'A má nutrição',
                // tslint:disable-next-line: max-line-length
                descricao: 'pode ser a causa do baixo ganho de peso.',
                // tslint:disable-next-line: max-line-length
                autoAjuda: 'O bebê chora para avisar que está com fome. Impor uma rotina de alimentação muito rígida pode impedor que o bebê receba a quantidade necessária de leite e também resultar redução de sua produção de leite. Por isso, sempre ofereça alimento ao bebê quando ele chorar, mesmo que as vezes ele recuse. Se o bebê não começar a ganhar peso em 3 semanas, consulte um médico.'
            },

            {
                id: 'd04_s001',
                idCategoria: 'c1',
                titulo: 'A má nutrição',
                // tslint:disable-next-line: max-line-length
                descricao: ' pode ser a causa do baixo ganho de peso.',
                // tslint:disable-next-line: max-line-length
                autoAjuda: 'O bebê chora para avisar que está com fome. Impor uma rotina de alimentação muito rígida pode impedor que o bebê receba a quantidade necessária de leite. Por isso, sempre ofereça alimento ao bebê quando ele chorar, mesmo que as vezes ele recuse. Se o bebê não começar a ganhar peso em 2 semanas, consulte um médico.'
            },

            {
                id: 'd05_s001',
                idCategoria: 'c1',
                titulo: 'Consulte um médico',
                // tslint:disable-next-line: max-line-length
                descricao: ' pois não foi possível fazer um diagnóstico seguindo esses sintomas.',
                // tslint:disable-next-line: max-line-length
                autoAjuda: null
            },

            {
                id: 'd06_s001',
                idCategoria: 'c1',
                titulo: 'A diluição excessiva do leite',
                // tslint:disable-next-line: max-line-length
                descricao: ' pode fazer com que o bebê não receba a nutrição adequada.',
                // tslint:disable-next-line: max-line-length
                autoAjuda: 'Siga exatamente as instruções do fabricante ao preparar as mamadeiras. Se você acha que o bebê tem sede, ofereça água fresca, previamente fervida, muna mamadeira separada. Se o bebê não começar a ganhar peso dentro de 2 semanas, consulte um médico.'
            },

            {
                id: 'd07_s001',
                idCategoria: 'c1',
                titulo: 'O aumento de apetite',
                // tslint:disable-next-line: max-line-length
                descricao: ' pode indicar que o bebê precisa de mais alimento do que você está oferecendo, mesmo que esteja recebendo a quantidade correta para a sua idade.',
                // tslint:disable-next-line: max-line-length
                autoAjuda: 'Sempre ofereça mais leite do que lhe parece necessário e deixe o bebê mamar até ficar satisfeito. Se ele tem mais de 3 meses, talvez esteja pronto para começar com alimentos sólidos. Sele ele não começar a ganhar peso dentro de 2 semanas ou se você precisar de orientação sobre o desmame, consulte um médico.'
            },

        ];

        await this._cadastrarDiagnosticos(diagnosticos);

    }


    /**
     * S054 - Mal-estar geral
     */
    private async CadastrarDiagnosticosS054() {

        const diagnosticos: Diagnostico[] = [

            {
                id: 'd01_s054',
                idCategoria: 'c4',
                titulo: 'A ansiedade,',
                // tslint:disable-next-line: max-line-length
                descricao: ' em virtude de um problema específico ou proveniente de estresse, pode provocar mal-estar. Consulte o próximo sintoma para saber mais.',
                // tslint:disable-next-line: max-line-length
                autoAjuda: null,
                idProximoSintoma: 's073_c4'
            },

            {
                id: 'd02_s054',
                idCategoria: 'c4',
                titulo: null,
                // tslint:disable-next-line: max-line-length
                descricao: 'Consulte o próximo sintoma para saber mais.',
                // tslint:disable-next-line: max-line-length
                autoAjuda: null,
                idProximoSintoma: 's056_c4'
            },

            {
                id: 'd03_s054',
                idCategoria: 'c4',
                titulo: 'Infecção viral',
                // tslint:disable-next-line: max-line-length
                descricao: ' é a causa provável da sensação geral de mal-estar e febre. Consulte o próximo sintoma para saber mais.',
                // tslint:disable-next-line: max-line-length
                autoAjuda: null,
                idProximoSintoma: 's059_c4'
            },

            {
                id: 'd04_s054',
                idCategoria: 'c4',
                titulo: null,
                // tslint:disable-next-line: max-line-length
                descricao: 'Consulte o próximo sintoma para saber mais.',
                // tslint:disable-next-line: max-line-length
                autoAjuda: null,
                idProximoSintoma: 's055_c4'
            },

            {
                id: 'd05_s054',
                idCategoria: 'c4',
                titulo: 'Certas drogas',
                // tslint:disable-next-line: max-line-length
                descricao: ' podem causar mal-estar como efeito colateral. Discuta o problema com um médico.',
                // tslint:disable-next-line: max-line-length
                autoAjuda: null,
                idProximoSintoma: null
            },

            {
                id: 'd06_s054',
                idCategoria: 'c4',
                titulo: 'Consulte um médico',
                // tslint:disable-next-line: max-line-length
                descricao: ' pois não foi possível fazer um diagnóstico seguindo esses sintomas.',
                // tslint:disable-next-line: max-line-length
                autoAjuda: null,
                idProximoSintoma: null
            },
        ];

        await this._cadastrarDiagnosticos(diagnosticos);

    }

    //#endregion


}
