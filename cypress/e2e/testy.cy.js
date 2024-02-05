import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

describe('Testy logowania na stronie edu.goit.global', () => {
  it('Powinien zalogować użytkownika i wylogować - Test 1', () => {
    LoginPage.visit();
    LoginPage.login('user888@gmail.com', '1234567890');
    HomePage.logout();
    LoginPage.verifyUrl();
  });

  it('Powinien zalogować użytkownika i wylogować - Test 2', () => {
    LoginPage.visit();
    LoginPage.login('testowyqa@qa.team', 'QA!automation-1');
    HomePage.logout();
    LoginPage.verifyUrl();
  });
});