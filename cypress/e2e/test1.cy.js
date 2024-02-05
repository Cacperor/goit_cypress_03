import LoginPage from '../pages/LoginPage';

describe('Test logowania na stronie edu.goit.global', () => {
  it('Powinien zalogować użytkownika', () => {
    LoginPage.visit();
    LoginPage.login('user888@gmail.com', '1234567890');
    LoginPage.logout();
    LoginPage.verifyUrl();
  });
});