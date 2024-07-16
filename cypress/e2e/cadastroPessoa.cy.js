const elemento_registro = require("../fixtures/cadastro_registro.json")
const base = require("../fixtures/elemento_pagina.json")
const massaDeDados = require("../fixtures/massa_dados_cadastro_pessoa.json")


describe('Cadastro', () => {
  beforeEach(() => {
     cy.visit(base.base_uri)
  });

  it('deve cadastrar com sucesso com dados válidos', () => {

    cy.get(elemento_registro.btnInscricao).click()
    cy.get(elemento_registro.firstName).type(massaDeDados.nome)
    cy.get(elemento_registro.lastName).type(massaDeDados.sobrenome)
    cy.get(elemento_registro.birthDate).type(massaDeDados.dataNascimento)
    cy.get(elemento_registro.cpf).type(massaDeDados.cpf)
    cy.get(elemento_registro.fillEmail).type(massaDeDados.email)
    cy.get(elemento_registro.emailConfirmation).type(massaDeDados.confirmarEmail)
    cy.get(elemento_registro.password).type(massaDeDados.senha)
    cy.get(elemento_registro.passwordConfirmation).type(massaDeDados.confirmarSenha)
    cy.contains(elemento_registro.openLevel).click()
    cy.contains(elemento_registro.selectProviciency).click()
    cy.get(elemento_registro.selectionLGPD).click()
    cy.get(elemento_registro.btnSubmit).click()

  });

})
