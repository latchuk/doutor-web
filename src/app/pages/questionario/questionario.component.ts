import { Component, OnInit } from '@angular/core';
import { Resposta } from 'src/app/models/resposta.model';
import { Sintoma } from 'src/app/models/sintoma.model';
import { Pergunta } from 'src/app/models/pergunta.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SintomasService } from 'src/app/services/sintomas.service';
import { PerguntasService } from 'src/app/services/perguntas.service';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
    selector: 'app-questionario',
    templateUrl: './questionario.component.html',
    styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {

    idSintoma: string;
    categoria: Categoria;
    sintoma: Sintoma;
    pergunta: Pergunta;
    carregando: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private categoriasService: CategoriasService,
        private sintomasService: SintomasService,
        private perguntasService: PerguntasService,
    ) { }

    async ngOnInit() {
        this.idSintoma = this.route.snapshot.paramMap.get('idSintoma');

        this.sintoma = await this.sintomasService.get(this.idSintoma);
        this.pergunta = await this.perguntasService.get(this.sintoma.idPergunta);
        this.categoria = await this.categoriasService.get(this.sintoma.idCategoria);

    }

    async respondeu(resposta: Resposta) {

        this.carregando = true;

        if (resposta.idDiagnostico) {

            this.router.navigate(['/diagnosticos', resposta.idDiagnostico]);

        } else if (resposta.idProximaPergunta) {

            this.pergunta = await this.perguntasService.get(resposta.idProximaPergunta);

            this.carregando = false;

        } else {

            // TODO: Ir para uma tela de erro
            console.log('resposta não implementadda');
        }


    }
}
