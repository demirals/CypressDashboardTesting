
//https://github.com/AltayIbrhm/Cypress

import {teslaURL} from '../../support/authentication.constant'
import { onModelSPage } from '../../support/models'


describe('tesla.com automation testing',()=>{

    beforeEach('navigate to page to tesla.com',()=>{
        cy.visit(teslaURL)
    })

    it('Test One',()=>{

        onModelSPage.urlVerification()
        onModelSPage.privacyPageVerification()
        onModelSPage.modelScomparePage()
    })
})

//navigate to page https://www.tesla.com/models
//click compare
//check every single text on the page