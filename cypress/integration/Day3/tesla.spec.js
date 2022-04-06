
import {teslaURL} from '../../support/authentication.constant'
import { onModelSPage } from '../../support/models'


describe('tesla.com automation testing',()=>{

    beforeEach('navigate to page to tesla.com',()=>{
        cy.visit(teslaURL)
    })

    it('Test One',()=>{

        onModelSPage.urlVerification()
        onModelSPage.privacy_Verification()

    })


})