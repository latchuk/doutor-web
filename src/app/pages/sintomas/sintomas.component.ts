import { Component, OnInit } from '@angular/core';
import { SintomasService } from 'src/app/services/sintomas.service';
import { Sintoma } from 'src/app/models/sintoma.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriasService } from 'src/app/services/categorias.service';
import { IconDefinition, faNotesMedical, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-sintomas',
    templateUrl: './sintomas.component.html',
    styleUrls: ['./sintomas.component.scss']
})
export class SintomasComponent implements OnInit {

    idCategoria: string;
    categoria: Categoria;
    sintomas: Sintoma[];
    iconeListaVazia: IconDefinition = faNotesMedical;
    iconeVoltar: IconDefinition = faArrowLeft;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private categogiasService: CategoriasService,
        private sintomasService: SintomasService
    ) { }

    async ngOnInit() {
        this.idCategoria = this.route.snapshot.paramMap.get('idCategoria');

        this.categoria = await this.categogiasService.get(this.idCategoria);
        this.sintomas = await this.sintomasService.getAll(this.idCategoria);
    }

    sintomaSelecionado(sintoma: Sintoma) {
        this.router.navigate(['/sintomas/' + sintoma.id + '/detalhes']);
    }

    escolherOutroCategoria() {
        this.router.navigate(['']);
    }

}
