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

    cy.get(elemento_registroPessoa.btnInscricao).click()
    cy.get(elemento_registroPessoa.firstName).type(massaDeDadosPessoa.nome)
    cy.get(elemento_registroPessoa.lastName).type(massaDeDadosPessoa.sobrenome)
    cy.get(elemento_registroPessoa.birthDate).type(massaDeDadosPessoa.dataNascimento)
    cy.get(elemento_registroPessoa.cpf).type(massaDeDadosPessoa.cpf)
    cy.get(elemento_registroPessoa.fillEmail).type(massaDeDadosPessoa.email)
    cy.get(elemento_registroPessoa.emailConfirmation).type(massaDeDadosPessoa.confirmarEmail)
    cy.get(elemento_registroPessoa.password).type(massaDeDadosPessoa.senha)
    cy.get(elemento_registroPessoa.passwordConfirmation).type(massaDeDadosPessoa.confirmarSenha)
    cy.contains(elemento_registroPessoa.openLevel).click()
    cy.contains(elemento_registroPessoa.selectProviciency).click()
    cy.get(elemento_registroPessoa.selectionLGPD).click()
    cy.get(elemento_registroPessoa.btnSubmit).click()
    cy.get(elemento_registroEndereco.cep).type(massaDeDadosEndereco.cep)
    cy.get(elemento_registroEndereco.casa).type(massaDeDadosEndereco.casa)
    cy.get(elemento_registroEndereco.complemento).type(massaDeDadosEndereco.complemento)

  });

})
