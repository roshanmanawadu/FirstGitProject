
import { LoginPage } from "./pageObjects/loginPage";

// Define the custom login command
Cypress.Commands.add('login', (username, password) => {
    let loginPage = new LoginPage();
    cy.visit('https://www.saucedemo.com/v1/index.html');
    loginPage.login(username, password);
});
