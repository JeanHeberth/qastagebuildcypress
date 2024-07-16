const elemento_registroPessoa = require("../fixtures/cadastro_registro_pessoa.json")
const base = require("../fixtures/elemento_pagina.json")
const massaDeDadosPessoa = require("../fixtures/massa_dados_cadastro_pessoa.json")
const massaDeDadosEndereco = require("../fixtures/massa_dados_cadastro_endereco.json")
const elemento_registroEndereco = require("../fixtures/cadastro_registro_endereco.json")


describe('Cadastro', () => {
  beforeEach(() => {
     cy.visit(base.base_uri)
  });

  it('deve cadastrar com sucesso com dados válidos', () => {

    cy.get(elemento_registroPessoa.botaoInscricao).click()
    cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
    cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
    cy.get(elemento_registroPessoa.dataAniversario).type(massaDeDadosPessoa.dataNascimento)
    cy.get(elemento_registroPessoa.cpf).type(massaDeDadosPessoa.cpf)
    cy.get(elemento_registroPessoa.email).type(massaDeDadosPessoa.email)
    cy.get(elemento_registroPessoa.confirmarEmail).type(massaDeDadosPessoa.confirmarEmail)
    cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
    cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.confirmarSenha)
    cy.contains(elemento_registroPessoa.clicaNivel).click()
    cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
    cy.get(elemento_registroPessoa.selecionaLgpd).click()
    cy.get(elemento_registroPessoa.botaoProximo).click()
    cy.get(elemento_registroEndereco.cep).type(massaDeDadosEndereco.cep)
    cy.get(elemento_registroEndereco.casa).type(massaDeDadosEndereco.casa)
    cy.get(elemento_registroEndereco.complemento).type(massaDeDadosEndereco.complemento)

  });

})
