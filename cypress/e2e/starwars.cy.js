/// <reference types="cypress"/>

describe('Buscando dados - StarWars API', () => {
    
    it('GET - Busca personagem específico', () => {
        const peopleId = '1'

        cy.request({
            method: 'GET',
            url: `https://swapi.dev/api/people/${peopleId}`,
            failOnStatusCode: false
        }).as('getPersonStarWars')

        cy.get('@getPersonStarWars')
            .then((response) =>{
                expect(response.status).equal(200)
                expect(response.body.name).equal('Luke Skywalker')
                expect(response.body).not.empty
        })
        
    });

});