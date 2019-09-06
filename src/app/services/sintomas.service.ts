import { Injectable } from '@angular/core';
import { Sintoma } from '../models/sintoma.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class SintomasService {

    constructor(private firestore: AngularFirestore) { }

    async getAll(idCategoria: string): Promise<Sintoma[]> {

        return new Promise<Sintoma[]>((resolve) => {

            this.firestore.collection('sintomas', query => query.where('idCategoria', '==', idCategoria)).get()
                .toPromise()
                .then(x => {

                    const sintomas = x.docs.map(y => {

                        return { id: y.id, ...y.data() } as Sintoma;

                    });

                    resolve(sintomas);

                });

        });

    }

    async get(id: string): Promise<Sintoma> {

        return new Promise<Sintoma>((resolve) => {

            this.firestore.collection('sintomas').doc(id).get()
                .toPromise()
                .then(x => {

                    const sintoma = {
                        id: x.id,
                        ...x.data()
                    } as Sintoma;

                    resolve(sintoma);

                });

        });

    }

    async put(sintoma: Sintoma) {
        const { id, ...data } = sintoma;
        this.firestore.collection('sintomas').doc(sintoma.id).set(data);
    }

}

