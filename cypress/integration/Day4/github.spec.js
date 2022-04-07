import {githubUrl} from '../../support/authentication.constant'
import {udemy} from '../../support/authentication.constant'
import { ongithubPage } from '../../support/github'

describe('Udemy test cases',()=>{


    beforeEach('Navigate to page Google',()=>{

        cy.visit(githubUrl)
      
    })

    
    it('Login to the Udemy',()=>{

        ongithubPage.verifySignInUrl() 
       })        

    it('Navigate to page back',()=>{

        ongithubPage.navigatetoMainPage
    })   
})