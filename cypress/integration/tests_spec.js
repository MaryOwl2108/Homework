import {Homepage} from "../page-objects/page";

describe ('Sign Up tests', () => {
const homepage = new Homepage()

    beforeEach (() => {
        cy.visit('https://zp.gov.ua/uk');
    })

    it('Elements existance', () => {
        homepage.logo().should('exist');
        homepage.searchField().should('exist');
    });

    it('searching', () => {
        homepage.searchField();
        cy.get('.form-control').click().type('1234');
        homepage.searchButton().click();
        homepage.searchResults().should('contain', 'Пошук на сайті')
        
    });

    it('contacts FAILED TEST', () => {
        homepage.contactPage().click();
        homepage.telNumber().should('contain', 'какой-то текст')
    });

});