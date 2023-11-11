
describe('Покупка нового фото для тренера', function () {
    
    it('Покупка аватара', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('shinkvlada@gmail.com');
        cy.get('#password').type('Гавгав7');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5467929858074128');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/26')
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('VlADA SHINKOVA')
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456')
        cy.get('.payment__submit-button').click();
        })
})