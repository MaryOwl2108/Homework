export class Homepage {

    image () {
        return cy.get('[src="images/product_images/thumbnail_images/GW-3000M-4A.jpg"]');
    }

    logo () {
        return cy.get('.logo');
    }

    searchField () {
        return cy.get('.search_input-rep');
    }

    searchButton () {
        return cy.get('.search_button-rep > input');
    }

    searchResults () {
        return cy.get('[href="http://japan.timelot.ru/advanced_search_result.php/keywords/1234/search_in_description//categories_id/0/inc_subcat//manufacturers_id/0/pfrom//pto//dfrom//dto/"]');
    }

    contactPage () {
        return cy.get('tr > :nth-child(9) > a');
    }

    telNumber () {
        return cy.get('h2');
    }
}