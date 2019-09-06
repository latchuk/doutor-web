import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SintomasComponent } from './pages/sintomas/sintomas.component';
import { SintomaComponent } from './pages/sintoma/sintoma.component';
import { QuestionarioComponent } from './pages/questionario/questionario.component';
import { DiagnosticoComponent } from './pages/diagnostico/diagnostico.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sintomas/:idCategoria', component: SintomasComponent },
    { path: 'sintomas/:idSintoma/detalhes', component: SintomaComponent },
    { path: 'sintomas/:idSintoma/questionario', component: QuestionarioComponent },
    { path: 'diagnosticos/:idDiagnostico', component: DiagnosticoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
