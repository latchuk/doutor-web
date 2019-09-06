import { Component, OnInit } from '@angular/core';
import { Sintoma } from 'src/app/models/sintoma.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SintomasService } from 'src/app/services/sintomas.service';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriasService } from 'src/app/services/categorias.service';
import { IconDefinition, faPlay, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-sintoma',
    templateUrl: './sintoma.component.html',
    styleUrls: ['./sintoma.component.scss']
})
export class SintomaComponent implements OnInit {

    idSintoma: string;
    sintoma: Sintoma;
    categoria: Categoria;
    iconePlay: IconDefinition = faPlay;
    iconeListaVazia: IconDefinition = faNotesMedical;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private sintomasService: SintomasService,
        private categoriasService: CategoriasService,
    ) { }

    async ngOnInit() {
        this.idSintoma = this.route.snapshot.paramMap.get('idSintoma');

        this.sintoma = await this.sintomasService.get(this.idSintoma);
        this.categoria = await this.categoriasService.get(this.sintoma.idCategoria);
    }

    iniciarDiagnostico() {
        this.router.navigate(['/sintomas/' + this.idSintoma + '/questionario']);
    }

}
