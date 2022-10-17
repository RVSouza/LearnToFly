class Login {
    img_logo = 'img.brand'
    img_google = 'img.brand-google'
    span_barra_separacao = 'span.separation-bar'
    txt_email = '#mat-input-0';
    txt_senha = '#mat-input-1';
    btn_ver_senha = 'div.mat-form-field-suffix.ng-tns-c69-1.ng-star-inserted > button';
    btn_continuar = 'button[type="submit"]';
    a_esqueci_senha = 'body > app-root > app-login > div > div > div.login-container-card-footer.ng-star-inserted > button';
    tst_mensagem_erro = 'app-toast > div > p'

    acessarTela(){
        cy.visit(Cypress.env('learnToFly'))
    }
    preencherEmail(conta){
        cy.get(this.txt_email).type(conta);
    }
    preencherSenha(senha){
        cy.get(this.txt_senha).type(senha);
    }
    clicarEmContinuar(){
        cy.get(this.btn_continuar).should('be.enabled').click()
    }
    validarMensagemToast(mensagem){
        cy.get(this.tst_mensagem_erro).should('be.visible').should('have.text', mensagem);
    }
    realizarLogin(){
        this.preencherEmail(Cypress.env('usuario'));
        this.preencherSenha(Cypress.env('senha'));
        this.clicarEmContinuar();
    }
    verificarElementosVisiveis(){
        this.verificacao = [
            this.img_logo,
            this.img_google,
            this.span_barra_separacao,
            this.txt_email,
            this.txt_senha,
            this.btn_ver_senha,
            this.btn_continuar,
            this.a_esqueci_senha
        ]
        return this.verificacao;
    }
}
export default Login;