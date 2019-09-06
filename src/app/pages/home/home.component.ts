import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    categorias: Categoria[];

    constructor(private router: Router, private categoriasService: CategoriasService) { }

    async ngOnInit() {
        this.categorias = await this.categoriasService.getAll();
    }

    categoriaSelecionada(categoria: Categoria) {
        this.router.navigate(['/sintomas', categoria.id]);
    }

}
