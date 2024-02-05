class LoginPage {
    visit() {
      cy.visit('https://www.edu.goit.global/account/login');
    }
  
    login(email, password) {
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="password"]').type(password);
      cy.contains('Log in').click();
    }
  
    verifyUrl() {
      cy.url().should('include', '/account/login');
    }
  }
  
  export default new LoginPage();