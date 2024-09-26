describe('pagina de login', () => {

  it('Login com sucesso', () => {
    cy.visit('http://127.0.0.1:5500/pg-login-testes-3C-main/pg-login-testes-3C-main/index.html?');

    //preencher os campos de usuario e senha
    cy.get('#usuario').type('admin');
    cy.get('#senha').type('admin');
    cy.get('#entrar').click()

    cy.on('window:alert', (txt) =>{
      expect(txt).to.contains('Login efetuado!')
    });

  });

  it('Login com erro', () => {
    cy.visit('http://127.0.0.1:5500/pg-login-testes-3C-main/pg-login-testes-3C-main/index.html?');

    cy.get('#usuario').type('1234');
    cy.get('#senha').type('errado');
    cy.get('#entrar').click()

    cy.get('#erro').should('be.visible')

  });
});

describe('pagina de cadastro', () => {
  it('cadastro com sucesso', () => {
    cy.visit('http://127.0.0.1:5500/pg-login-testes-3C-main/pg-login-testes-3C-main/cadastro.html?');
    
    cy.get('#nome').type('Matheus');
    cy.get('#senha').type('Senha_123')
    cy.get('#senha2').type('Senha_123')
    cy.get('#botao').click()

    cy.on('window:alert', (txt) =>{
      expect(txt).to.contains("Cadastro efetuado com sucesso")
    });
  })

  it('campos vazios', () => {
    cy.visit('http://127.0.0.1:5500/pg-login-testes-3C-main/pg-login-testes-3C-main/cadastro.html?');
    
    cy.get('#nome').type('Pedrinho')
    cy.get('#senha').type('Senha_123')
    cy.get('#senha2').type('Senha_123')
    cy.get('#botao').click()

    cy.get('#error').contains('Todos os campos devem ser preenchidos')
  })

  it('senhas diferentes', () => {
    cy.visit('http://127.0.0.1:5500/pg-login-testes-3C-main/pg-login-testes-3C-main/cadastro.html?');
    
    cy.get('#nome').type('Pedro')
    cy.get('#email').type('Pedro@gmail.com')
    cy.get('#senha').type('Senha_123')
    cy.get('#senha2').type('Senha_1234')
    cy.get('#botao').click()

    cy.get('#error').contains('As senhas tao diferente')
  })
})