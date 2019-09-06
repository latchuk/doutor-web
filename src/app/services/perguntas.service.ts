import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pergunta } from '../models/pergunta.model';

@Injectable({
    providedIn: 'root'
})
export class PerguntasService {

    constructor(private firestore: AngularFirestore) { }

    async get(id: string): Promise<Pergunta> {

        return new Promise<Pergunta>((resolve) => {

            this.firestore.collection('perguntas').doc(id).get()
                .toPromise()
                .then(x => {

                    const pergunta = {
                        id: x.id,
                        ...x.data()
                    } as Pergunta;

                    resolve(pergunta);

                });

        });

    }

    async put(pergunta: Pergunta) {
        const { id, ...data } = pergunta;
        await this.firestore.collection('perguntas').doc(pergunta.id).set(data);
    }

}
