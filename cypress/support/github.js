import { githubLoginUrl } from "./authentication.constant"


export class github{

verifySignInUrl(){
    cy.contains("Sign in").click()
    cy.url().should('eq',githubLoginUrl)
}


navigatetoMainPage(){
    cy.go('back')
}


}

export const ongithubPage = new github