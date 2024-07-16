import CadastroPessoaPage from "../integration/pages/CadastroPessaPage";

describe('Cadastro', () => {
  
  const cadastroPessoaPage = new CadastroPessoaPage();
  
  
  beforeEach(() => {
      cadastroPessoaPage.visit().btnInscricao();
  });

  it('deve cadastrar com sucesso com dados válidos', () => {

      cadastroPessoaPage
          .firstName('Usuário Teste')
          .lastName('Sobrenome Teste')
          .birthDate('01/01/2000')
          .cpf('91958982040')
          .fillEmail('testes@example.com')
          .emailConfirm("testes@example.com")
          .fillPassword('senha123')
          .passwordConfirm('senha123')
          .selectProficiencyLevel('Intermediate')
          .selctionLGPD()
          .submit();


  });

})
