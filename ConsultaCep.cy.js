/// <reference types="cypress" />

//Descrição do grupo de testes
describe('Teste no site dos correios', () => {

    //Descrição do teste
    it('Consulta Cep', () => {
        
        //Abre a página dos correios
        cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php?t');

        //Digita o cep 89209674 no campo de pesquisa
        cy.get('#endereco').type('89209674');

        //Clica no botão de pesquisar
        cy.get('#btn_pesquisar').click();

        //Pega o resultado retornado pela pesquisa e confere se contêm o texto esperado
        cy.get('tbody > tr > [data-th="Logradouro/Nome"]').then(function(e){
            const t = e.text()
            expect(t).to.contains('Rua Boehmerwald - lado ímpar')
         })

    });
})
