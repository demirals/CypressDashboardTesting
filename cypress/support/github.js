import { githubLoginUrl } from "./authentication.constant"


export class github{

verifySignInUrl(){
    cy.contains("Sign in").click()
    cy.url().should('eq',githubLoginUrl)
}







}

export const ongithubPage = new github