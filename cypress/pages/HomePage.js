class HomePage {
    visit() {
        cy.visit('https://www.edu.goit.global/');
      }

      logout() {
        cy.get('#open-navigation-menu-mobile').click();
        cy.contains('Log out').click();
      }
}

export default new HomePage();