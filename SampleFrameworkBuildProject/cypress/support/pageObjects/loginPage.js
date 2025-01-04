/// <reference types="cypress"/>

export class LoginPage{

    loginPageElements={

        userNameInput : () => cy.get('#user-name'),
        passwordInput : () => cy.get('#password'),
        loginButton : () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test="error"]'),

    };

    enterUsername(username){
        this.loginPageElements.userNameInput().type(username);

    };

    enterPassword(password){
        this.loginPageElements.passwordInput().type(password);

    };

    clickLoginButton(){
        this.loginPageElements.loginButton().click();

    };    

    login(username,password){
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginButton()
    }



}