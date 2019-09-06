import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diagnostico } from 'src/app/models/diagnostico.model';
import { DiagnosticosService } from 'src/app/services/diagnosticos.service';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriasService } from 'src/app/services/categorias.service';
import { IconDefinition, faArrowLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Sintoma } from 'src/app/models/sintoma.model';
import { SintomasService } from 'src/app/services/sintomas.service';

@Component({
    selector: 'app-diagnostico',
    templateUrl: './diagnostico.component.html',
    styleUrls: ['./diagnostico.component.scss']
})
export class DiagnosticoComponent implements OnInit {

    idDiagnostico: string;
    diagnostico: Diagnostico;
    categoria: Categoria;
    proximoSintoma: Sintoma;
    iconeVoltar: IconDefinition = faArrowLeft;
    iconeProximoSintoma: IconDefinition = faChevronRight;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private diagnosticosService: DiagnosticosService,
        private sintomasService: SintomasService,
        private categoriasService: CategoriasService,
    ) { }

    async ngOnInit() {
        this.idDiagnostico = this.route.snapshot.paramMap.get('idDiagnostico');

        this.diagnostico = await this.diagnosticosService.get(this.idDiagnostico);

        if (this.diagnostico.idProximoSintoma) {
            this.proximoSintoma = await this.sintomasService.get(this.diagnostico.idProximoSintoma);
        }

        this.categoria = await this.categoriasService.get(this.diagnostico.idCategoria);
    }

    escolherOutroSintoma() {
        this.router.navigate(['/sintomas', this.diagnostico.idCategoria]);
    }

    irParaProximoSintoma() {
        this.router.navigate(['/sintomas/' + this.diagnostico.idProximoSintoma + '/detalhes']);
    }

}
