const base = require("../fixtures/elemento_pagina.json");
const elemento_registroPessoa = require("../fixtures/cadastro_registro_pessoa.json");
const massaDeDadosPessoa = require("../fixtures/massa_dados_cadastro_pessoa.json");
const elemento_registroEndereco = require("../fixtures/cadastro_registro_endereco.json");
const massaDeDadosEndereco = require("../fixtures/massa_dados_cadastro_endereco.json");
const cpf = require("gerador-validador-cpf");
const {faker} = require("@faker-js/faker");

describe('Cadastro inválido', () => {
    beforeEach(() => {
        cy.visit(base.base_uri)
        cy.get(elemento_registroPessoa.botaoInscricao).click()
    });


    const cpfAleatorio = cpf.generate();
    const emailAleatorio = faker.internet.email();


    it('deve falhar ao tentar cadastrar com campo nome vazio', () => {

        cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
        cy.get(elemento_registroPessoa.dataNascimento).type(massaDeDadosPessoa.dataNascimento)
        cy.get(elemento_registroPessoa.cpf).type(cpfAleatorio)
        cy.get(elemento_registroPessoa.email).type(emailAleatorio)
        cy.get(elemento_registroPessoa.confirmarEmail).type(emailAleatorio)
        cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
        cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.confirmarSenha)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
        // cy.get(elemento_registroPessoa.selecionaLgpd).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroPessoa.nome).then($input => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });
    });

    it('deve falhar ao tentar cadastrar com campo sobrenome vazio', () => {
        cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
        cy.get(elemento_registroPessoa.dataNascimento).type(massaDeDadosPessoa.dataNascimento)
        cy.get(elemento_registroPessoa.cpf).type(cpfAleatorio)
        cy.get(elemento_registroPessoa.email).type(emailAleatorio)
        cy.get(elemento_registroPessoa.confirmarEmail).type(emailAleatorio)
        cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
        cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.confirmarSenha)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
        cy.get(elemento_registroPessoa.selecionaLgpd).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroPessoa.sobreNome).then($input => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });
    });

    it('deve falhar ao tentar cadastrar com campo data de nascimento vazio', () => {
        cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
        cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
        cy.get(elemento_registroPessoa.cpf).type(cpfAleatorio)
        cy.get(elemento_registroPessoa.email).type(emailAleatorio)
        cy.get(elemento_registroPessoa.confirmarEmail).type(emailAleatorio)
        cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
        cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.confirmarSenha)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
        cy.get(elemento_registroPessoa.selecionaLgpd).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroPessoa.dataNascimento).then($input => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });
    });
    it('deve falhar ao tentar cadastrar com campo data de nascimento invalida', () => {
        cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
        cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
        cy.get(elemento_registroPessoa.dataNascimento).type(massaDeDadosPessoa.dataNascimentoInvalida)
        cy.get(elemento_registroPessoa.cpf).type(cpfAleatorio)
        cy.get(elemento_registroPessoa.email).type(emailAleatorio)
        cy.get(elemento_registroPessoa.confirmarEmail).type(emailAleatorio)
        cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
        cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.confirmarSenha)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
        cy.get(elemento_registroPessoa.selecionaLgpd).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroPessoa.dataNascimento).then($input => {
            expect($input[0].validationMessage).to.eq('Data de nascimento inválida.');
        });
    });


    it('deve falhar ao tentar cadastrar com campo cpf vazio', () => {
        cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
        cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
        cy.get(elemento_registroPessoa.dataNascimento).type(massaDeDadosPessoa.dataNascimento)
        cy.get(elemento_registroPessoa.email).type(emailAleatorio)
        cy.get(elemento_registroPessoa.confirmarEmail).type(emailAleatorio)
        cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
        cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.confirmarSenha)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
        cy.get(elemento_registroPessoa.selecionaLgpd).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroPessoa.cpf).then($input => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });
    });

    it('deve falhar ao tentar cadastrar um cpf invalido', () => {
        cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
        cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
        cy.get(elemento_registroPessoa.dataNascimento).type(massaDeDadosPessoa.dataNascimento)
        cy.get(elemento_registroPessoa.cpf).type(massaDeDadosPessoa.cpfInvalido)
        cy.get(elemento_registroPessoa.email).type(emailAleatorio)
        cy.get(elemento_registroPessoa.confirmarEmail).type(emailAleatorio)
        cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
        cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.confirmarSenha)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
        cy.get(elemento_registroPessoa.selecionaLgpd).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroPessoa.cpf).then($input => {
            expect($input[0].validationMessage).to.eq('CPF inválido.');
        });
    });

    it('deve falhar ao tentar cadastrar um cpf que já está cadastrado', () => {
        cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
        cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
        cy.get(elemento_registroPessoa.dataNascimento).type(massaDeDadosPessoa.dataNascimento)
        cy.get(elemento_registroPessoa.cpf).type(massaDeDadosPessoa.cpfEmUso)
        cy.get(elemento_registroPessoa.email).type(emailAleatorio)
        cy.get(elemento_registroPessoa.confirmarEmail).type(emailAleatorio)
        cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
        cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.confirmarSenha)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
        cy.get(elemento_registroPessoa.selecionaLgpd).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroPessoa.cpf).then($input => {
            expect($input[0].validationMessage).to.eq('Este CPF já está em uso.');
        });
    });

    it('deve falhar ao tentar cadastrar com campo email vazio', () => {
        cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
        cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
        cy.get(elemento_registroPessoa.dataNascimento).type(massaDeDadosPessoa.dataNascimento)
        cy.get(elemento_registroPessoa.cpf).type(cpfAleatorio)
        cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
        cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.confirmarSenha)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
        cy.get(elemento_registroPessoa.selecionaLgpd).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroPessoa.email).then($input => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });
    });

    it('deve falhar ao tentar cadastrar com campo email invalido', () => {
        cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
        cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
        cy.get(elemento_registroPessoa.dataNascimento).type(massaDeDadosPessoa.dataNascimento)
        cy.get(elemento_registroPessoa.cpf).type(cpfAleatorio)
        cy.get(elemento_registroPessoa.email).type(massaDeDadosPessoa.emailInvalido)
        cy.get(elemento_registroPessoa.confirmarEmail).type(massaDeDadosPessoa.confirmarEmail)
        cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
        cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.confirmarSenha)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
        cy.get(elemento_registroPessoa.selecionaLgpd).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroPessoa.email).then($input => {
            expect($input[0].validationMessage).to.eq('Email inválido.');
        });
    });
    it('deve falhar ao tentar cadastrar um email que já está cadastrado', () => {
        cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
        cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
        cy.get(elemento_registroPessoa.dataNascimento).type(massaDeDadosPessoa.dataNascimento)
        cy.get(elemento_registroPessoa.cpf).type(cpfAleatorio)
        cy.get(elemento_registroPessoa.email).type(massaDeDadosPessoa.emailEmUso)
        cy.get(elemento_registroPessoa.confirmarEmail).type(massaDeDadosPessoa.confirmarEmail)
        cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
        cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.confirmarSenha)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
        cy.get(elemento_registroPessoa.selecionaLgpd).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroPessoa.email).then($input => {
            expect($input[0].validationMessage).to.eq('Este email já está em uso.');
        });
    });


    it('deve falhar ao tentar cadastrar com campo confirmar email vazio', () => {
        cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
        cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
        cy.get(elemento_registroPessoa.dataNascimento).type(massaDeDadosPessoa.dataNascimento)
        cy.get(elemento_registroPessoa.cpf).type(cpfAleatorio)
        cy.get(elemento_registroPessoa.email).type(emailAleatorio)
        cy.get(elemento_registroPessoa.confirmarEmail).type(massaDeDadosPessoa.confirmarEmail)
        cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
        cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.confirmarSenha)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
        cy.get(elemento_registroPessoa.selecionaLgpd).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroPessoa.confirmarEmail).then($input => {
            expect($input[0].validationMessage).to.eq('Os e-mails não são iguais.');
        });
    });

    it('deve falhar ao tentar cadastrar com campo confirmar email diferente do email informado', () => {
        cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
        cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
        cy.get(elemento_registroPessoa.dataNascimento).type(massaDeDadosPessoa.dataNascimento)
        cy.get(elemento_registroPessoa.cpf).type(cpfAleatorio)
        cy.get(elemento_registroPessoa.email).type(emailAleatorio)
        cy.get(elemento_registroPessoa.confirmarEmail).type(massaDeDadosPessoa.emailDiferente)
        cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
        cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.confirmarSenha)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
        cy.get(elemento_registroPessoa.selecionaLgpd).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroPessoa.confirmarEmail).then($input => {
            expect($input[0].validationMessage).to.eq('Os e-mails não são iguais.');
        });
    });


    it('deve falhar ao tentar cadastrar com campo senha vazio', () => {
        cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
        cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
        cy.get(elemento_registroPessoa.dataNascimento).type(massaDeDadosPessoa.dataNascimento)
        cy.get(elemento_registroPessoa.cpf).type(cpfAleatorio)
        cy.get(elemento_registroPessoa.email).type(emailAleatorio)
        cy.get(elemento_registroPessoa.confirmarEmail).type(emailAleatorio)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
        cy.get(elemento_registroPessoa.selecionaLgpd).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroPessoa.senha).then($input => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });
    });

    it('deve falhar ao tentar cadastrar com campo confirmar senha vazio', () => {
        cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
        cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
        cy.get(elemento_registroPessoa.dataNascimento).type(massaDeDadosPessoa.dataNascimento)
        cy.get(elemento_registroPessoa.cpf).type(cpfAleatorio)
        cy.get(elemento_registroPessoa.email).type(emailAleatorio)
        cy.get(elemento_registroPessoa.confirmarEmail).type(emailAleatorio)
        cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
        // cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.confirmarSenha)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
        cy.get(elemento_registroPessoa.selecionaLgpd).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroPessoa.confirmarSenha).then($input => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
        });
    });

    it('deve falhar ao tentar cadastrar com campo confirmar senha diferente', () => {
        cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
        cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
        cy.get(elemento_registroPessoa.dataNascimento).type(massaDeDadosPessoa.dataNascimento)
        cy.get(elemento_registroPessoa.cpf).type(cpfAleatorio)
        cy.get(elemento_registroPessoa.email).type(emailAleatorio)
        cy.get(elemento_registroPessoa.confirmarEmail).type(emailAleatorio)
        cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
        cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.senhaDiferente)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
        cy.get(elemento_registroPessoa.selecionaLgpd).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroPessoa.confirmarSenha).then($input => {
            expect($input[0].validationMessage).to.eq('As senhas não são iguais.');
        });
    });


    it('deve falhar ao tentar cadastrar com campo de termos desmarcado', () => {
        cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
        cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
        cy.get(elemento_registroPessoa.dataNascimento).type(massaDeDadosPessoa.dataNascimento)
        cy.get(elemento_registroPessoa.cpf).type(cpfAleatorio)
        cy.get(elemento_registroPessoa.email).type(emailAleatorio)
        cy.get(elemento_registroPessoa.confirmarEmail).type(emailAleatorio)
        cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
        cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.confirmarSenha)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroPessoa.selecionaLgpd).then($input => {
            expect($input[0].validationMessage).to.eq('Marque esta caixa se deseja continuar.');
        });
    });

    it('deve falhar ao tentar cadastrar com cep vazio', () => {
        cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
        cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
        cy.get(elemento_registroPessoa.dataNascimento).type(massaDeDadosPessoa.dataNascimento)
        cy.get(elemento_registroPessoa.cpf).type(cpfAleatorio)
        cy.get(elemento_registroPessoa.email).type(emailAleatorio)
        cy.get(elemento_registroPessoa.confirmarEmail).type(emailAleatorio)
        cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
        cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.confirmarSenha)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
        cy.get(elemento_registroPessoa.selecionaLgpd).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroEndereco.casa).type(massaDeDadosEndereco.casa)
        cy.get(elemento_registroEndereco.botaoProximo).click()
        cy.get(elemento_registroEndereco.cep).then($input => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.');

        });
    });


    it('deve falhar ao tentar cadastrar com casa vazio', () => {
        cy.get(elemento_registroPessoa.nome).type(massaDeDadosPessoa.nome)
        cy.get(elemento_registroPessoa.sobreNome).type(massaDeDadosPessoa.sobrenome)
        cy.get(elemento_registroPessoa.dataNascimento).type(massaDeDadosPessoa.dataNascimento)
        cy.get(elemento_registroPessoa.cpf).type(cpfAleatorio)
        cy.get(elemento_registroPessoa.email).type(emailAleatorio)
        cy.get(elemento_registroPessoa.confirmarEmail).type(emailAleatorio)
        cy.get(elemento_registroPessoa.senha).type(massaDeDadosPessoa.senha)
        cy.get(elemento_registroPessoa.confirmarSenha).type(massaDeDadosPessoa.confirmarSenha)
        cy.contains(elemento_registroPessoa.clicaNivel).click()
        cy.contains(elemento_registroPessoa.selecionaProviciencia).click()
        cy.get(elemento_registroPessoa.selecionaLgpd).click()
        cy.get(elemento_registroPessoa.botaoProximo).click()
        cy.get(elemento_registroEndereco.cep).type(massaDeDadosEndereco.cep)
        cy.get(elemento_registroEndereco.botaoProximo).click()
        cy.get(elemento_registroEndereco.casa).then($input => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.');

        });
    });
    afterEach(()=> {
        cy.screenshot()
    })
})
