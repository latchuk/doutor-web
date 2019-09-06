import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diagnostico } from 'src/app/models/diagnostico.model';
import { DiagnosticosService } from 'src/app/services/diagnosticos.service';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriasService } from 'src/app/services/categorias.service';
import { IconDefinition, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-diagnostico',
    templateUrl: './diagnostico.component.html',
    styleUrls: ['./diagnostico.component.scss']
})
export class DiagnosticoComponent implements OnInit {

    idDiagnostico: string;
    diagnostico: Diagnostico;
    categoria: Categoria;
    iconeVoltar: IconDefinition = faArrowLeft;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private diagnosticosService: DiagnosticosService,
        private categoriasService: CategoriasService,
    ) { }

    async ngOnInit() {
        this.idDiagnostico = this.route.snapshot.paramMap.get('idDiagnostico');

        this.diagnostico = await this.diagnosticosService.get(this.idDiagnostico);
        this.categoria = await this.categoriasService.get(this.diagnostico.idCategoria);
    }

    escolherOutroSintoma() {
        this.router.navigate(['/sintomas', this.diagnostico.idCategoria]);
    }
}
