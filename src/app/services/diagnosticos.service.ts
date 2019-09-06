import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Diagnostico } from '../models/diagnostico.model';

@Injectable({
    providedIn: 'root'
})
export class DiagnosticosService {

    constructor(private firestore: AngularFirestore) { }

    async get(id: string): Promise<Diagnostico> {

        return new Promise<Diagnostico>((resolve) => {

            this.firestore.collection('diagnosticos').doc(id).get()
                .toPromise()
                .then(x => {

                    const diagnostico = {
                        id: x.id,
                        ...x.data()
                    } as Diagnostico;

                    resolve(diagnostico);

                });

        });

    }

    async put(diagnostico: Diagnostico) {
        const { id, ...data } = diagnostico;
        await this.firestore.collection('diagnosticos').doc(diagnostico.id).set(data);
    }

}
