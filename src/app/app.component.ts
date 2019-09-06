import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastrosService } from './services/cadastros.service';
import { environment } from 'src/environments/environment';
import { IconDefinition, faStethoscope } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    debug: boolean;
    iconeDoutorWeb: IconDefinition = faStethoscope;

    constructor(
        private router: Router,
        private cadastrosService: CadastrosService,
    ) { }

    ngOnInit(): void {
        this.debug = !environment.production;
    }

    navegarParaHome() {
        this.router.navigate(['']);
    }

    async cadastrar() {
        if (environment.production === false) {
            await this.cadastrosService.cadastrarTudo();
            alert('Dados cadastrados com sucesso!');
        }
    }

}
