import LoginPage from '../pages/LoginPage';

describe('Test logowania na stronie edu.goit.global z innymi danymi', () => {
  it('Powinien zalogować użytkownika', () => {
    LoginPage.visit();
    LoginPage.login('testowyqa@qa.team', 'QA!automation-1');
    LoginPage.logout();
    LoginPage.verifyUrl();
  });
});