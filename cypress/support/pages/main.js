class Main {
    lbl_welcome = 'span.wellcome-name'
    img_logo = 'span.brand > a >img'

    acessarTela(){
        cy.acessarTelaPrincipal();
    }
    
    verificarElementosVisiveis(){
        this.verificacao = [
            this.lbl_welcome,
            this.img_logo
        ]
        return this.verificacao;
    }
}
export default Main;