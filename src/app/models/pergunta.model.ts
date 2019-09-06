import { Resposta } from './resposta.model';

export class Pergunta {
    id: string;
    conteudo: string;
    respostas: Resposta[];
}
