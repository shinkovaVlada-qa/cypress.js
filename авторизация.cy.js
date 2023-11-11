
describe('Проверка авторизации', function () {
    
    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').click(); // кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })

it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click(); // кнопка забыли пароль
        cy.get('#mailForgot').type('vlada@mail.ru')
        cy.get('#restoreEmailButton').click(); // нажали кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })

it('Верный логин, неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio'); // ввели неправильный пароль
        cy.get('#loginButton').click(); // кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })

it('Неправильный логин, правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('gerиman@dolnikov.ru'); // ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели правильный пароль
        cy.get('#loginButton').click(); // кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })

it('Негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без собачки
        cy.get('#pass').type('iLoveqastudio1'); // ввели правильный пароль
        cy.get('#loginButton').click(); // кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })

it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // ввели правильный пароль
        cy.get('#loginButton').click(); // кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })

})