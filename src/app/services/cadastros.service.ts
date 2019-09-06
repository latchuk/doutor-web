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
        ];

        await this._cadastrarCategorias(categorias);
    }

    //#endregion



    //#region SINTOMAS

    private async cadastrarSintomas() {
        await this.cadastrarSintomasC1();
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
    }

    /**
     * C3 - Adolescentes
     */
    private async cadastrarSintomasC3() {
    }

    /**
     * C4 - Clínica geral para homens e mulheres
     */
    private async cadastrarSintomasC4() {
    }

    /**
     * C5 - Problemas especiais em homens
     */
    private async cadastrarSintomasC5() {
    }

    /**
     * C6 - Problemas especiais em mulheres
     */
    private async cadastrarSintomasC6() {
    }

    //#endregion



    //#region PERGUNTAS

    private async cadastrarPerguntas() {
        await this.CadastrarPerguntasS001();
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

    //#endregion



    //#region DIAGNÓSTICOS

    private async cadastrarDiagnosticos() {
        await this.CadastrarDiagnosticosS001();
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
                descricao: ' pode estar causando a má nutrição. Se o bebê estiver com mais de 3 meses, ele pode começar a ingerir alimentos sólidos. Converse com médico, que poderá recomendar mamadeiras suplementares ou orientar o desmame.',
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

    //#endregion


}
