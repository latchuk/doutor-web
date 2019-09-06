import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { SintomasComponent } from './pages/sintomas/sintomas.component';
import { QuestionarioComponent } from './pages/questionario/questionario.component';
import { DiagnosticoComponent } from './pages/diagnostico/diagnostico.component';
import { SintomaComponent } from './pages/sintoma/sintoma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
} from '@angular/material';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SintomasComponent,
        QuestionarioComponent,
        DiagnosticoComponent,
        SintomaComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatListModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        FontAwesomeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
