/// <reference types="cypress"/>

import { LoginPage } from "../../support/pageObjects/loginPage"
import { ProductPage } from "../../support/pageObjects/productsPage";

beforeEach(() => {
    cy.visit('/v1/index.html'); 
  });

describe('Login page verification', () => {

    let loginPage = new LoginPage();
    let productsPage = new ProductPage();

    it('login with Accepted username standard_user & Password', () =>{   
        loginPage.enterUsername('standard_user')
        loginPage.enterPassword('secret_sauce')
        loginPage.clickLoginButton()
        productsPage.cartButtonExists()
    });

    it('login with incorrect username standard_user & Password', () =>{
        loginPage.enterUsername('standard_user')
        loginPage.enterPassword('secret_sauce_wrong')
        loginPage.clickLoginButton()
        loginPage.loginPageElements.errorMessage().should('be.visible')
    });

})