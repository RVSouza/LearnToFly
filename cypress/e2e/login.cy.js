import Login from '../support/pages/login';
import Main from '../support/pages/main';
const mensagem = require('../fixtures/message.json')
const faker = require('faker')
const login = new Login();
const main = new Main();

const email_incorreto = faker.internet.email();
const senha_incorreta = faker.internet.password();

describe('Validações elementos', () => {
  before(() => {
    login.acessarTela();
  });
  
  login.verificarElementosVisiveis().forEach(elemento => {
  it(`Validar elementos visiveis na tela: ${elemento}`, () => {
      cy.get(elemento).should('be.visible');
    });
  });
});

describe('Realizar login pelo autenticador do site', () => {
    beforeEach(() => {
      login.acessarTela();
    });
    it('Logar com sucesso ', () => {
      login.realizarLogin();
      verificarSeEstaNaTelaPrincipal();
    });
    it('Validar mensagem erro no login: usuário e senha inválidos', () => {
      login.preencherEmail(email_incorreto);
      login.preencherSenha(senha_incorreta);
      login.clicarEmContinuar();
      login.validarMensagemToast(mensagem.login.usuario_senha_invalidos);
    });
    it('Verificar se o botão está desabilitado com os campos vazios', () => {
      verificarSeBotaoContinuarEstaDesabilitado();
    });
    it('Verificar se o botão está desabilitado com o campo email vazio', () => {
      login.preencherSenha(senha_incorreta);
      verificarSeBotaoContinuarEstaDesabilitado();
    });
    it('Verificar se o botão está desabilitado com o campo senha vazio', () => {
      login.preencherEmail(email_incorreto);
      verificarSeBotaoContinuarEstaDesabilitado();
    });
});

function verificarSeBotaoContinuarEstaDesabilitado(){
  cy.get(login.btn_continuar).should('be.disabled')
}

function verificarSeEstaNaTelaPrincipal(){
  cy.get(main.lbl_welcome).should('be.visible').should('have.text', mensagem.main.bem_vindo)
  cy.get(main.img_logo).should('be.visible')
}