import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Categoria } from '../models/categoria.model';
import {
    faBaby,
    faChild,
    faUserNinja,
    faUser,
    faMars,
    faVenus,
    faStarOfLife,
    faBabyCarriage,
    IconDefinition
} from '@fortawesome/free-solid-svg-icons';

@Injectable({
    providedIn: 'root'
})
export class CategoriasService {

    constructor(private firestore: AngularFirestore) { }

    async getAll(): Promise<Categoria[]> {

        return new Promise<Categoria[]>((resolve) => {

            this.firestore.collection('categorias').get()
                .toPromise()
                .then(x => {

                    const categorias = x.docs.map(y => {

                        return {
                            id: y.id,
                            ...y.data(),
                            icone: this.getIcone(y.id)
                        } as Categoria;

                    });

                    resolve(categorias);

                });

        });

    }

    async get(id: string): Promise<Categoria> {

        return new Promise<Categoria>((resolve) => {

            this.firestore.collection('categorias').doc(id).get()
                .toPromise()
                .then(x => {

                    const categoria = {
                        id: x.id,
                        ...x.data(),
                        icone: this.getIcone(x.id)
                    } as Categoria;

                    resolve(categoria);

                });

        });

    }

    getIcone(id: string): IconDefinition {

        switch (id) {

            case 'c1':
                return faBaby;

            case 'c2':
                return faChild;

            case 'c3':
                return faUserNinja;

            case 'c4':
                return faUser;

            case 'c5':
                return faMars;

            case 'c6':
                return faVenus;

            case 'c7':
                return faBabyCarriage;

            default:
                return faStarOfLife;
        }
    }

    async put(categoria: Categoria) {
        const { id, ...data } = categoria;
        await this.firestore.collection('categorias').doc(categoria.id).set(data);
    }

}
