/// <reference types="cypress"/>

describe('Buscando dados - Usuários API', () => {
    
    it('GET - Buscando usuário específico', () => {
        const userId = 'TDnBdaXiJEx0LpZh'

        cy.request({
            method: 'GET',
            url: `https://serverest.dev/usuarios/${userId}`,
            failOnStatusCode: false
        }).as('getUsuario')

        cy.get('@getUsuario')
            .then((response) =>{
                expect(response.status).equal(200)
                expect(response.body).not.empty
                expect(response.body.nome).equal('Teste')
        })
        
    });

    it('GET - Buscando usuário que não existe', () => {
        const userId = '000156'

        cy.request({
            method: 'GET',
            url: `https://serverest.dev/usuarios/${userId}`,
            failOnStatusCode: false
        }).as('getUsuario')

        cy.get('@getUsuario')
            .then((response) =>{
                expect(response.status).equal(400)
                expect(response.body.message).equal('Usuário não encontrado')
        })
        
    });

});