export interface IUsuario {
    nome: string
    senha: string
    email: string

    entrar(): any
    sair(): any
}