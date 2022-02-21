export class Homepage {


    logo () {
        return cy.get('.logo > a > img');
    }

    searchField () {
        return cy.get('.pull-right > :nth-child(2) > .info-link');
    }

    searchButton () {
        return cy.get('.btn');
    }

    searchResults () {
        return cy.get('.block-title');
    }

    contactPage () {
        return cy.get('.pull-right > :nth-child(3) > .info-link');
    }

    telNumber () {
        return cy.get('.block-title');
    }
}