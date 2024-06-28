import { IUsuario } from "../interfaces/usuario";

class Usuario implements IUsuario {
    nome: string
    email: string
    senha: string

    constructor:(nome: 'string', email: 'string', senha: 'string')

    entrar() {
        
        console.log('login efetuado com sucesso!')
    }

    sair() {

      console.log('loug')
    }
}