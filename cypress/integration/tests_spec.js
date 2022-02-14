import {Homepage} from "../page-objects/page";

describe ('Sign Up tests', () => {
const homepage = new Homepage()

    beforeEach (() => {
        cy.visit('http://japan.timelot.ru/');
    })

    it('Elements existance', () => {
        homepage.image().should('exist');
        homepage.logo().should('exist');
        homepage.searchField().should('exist');
    });

    it('searching', () => {
        homepage.searchField().click().type('1234');
        homepage.searchButton().click();
        homepage.searchResults().should('contain', 'Результаты поиска')
        
    });

    it('contacts', () => {
        homepage.contactPage().click();
        homepage.telNumber().should('contain', 'Телефон: +7 (495) 514-81-35, с 10:00 до 19:00')
    });

});