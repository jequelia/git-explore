import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://jamesmarcos2123.github.io/`;

test('usuario/repository existente', async t => {
    await t
        .typeText('#input-search', 'DevExpress/testcafe')
        .click('#button-submit')
        .expect(Selector('.Toastify').innerText).eql('adicionado com sucesso');;
});



test('usuario/repository não existente', async t => {
    await t
        .typeText('#input-search', 'DevExpress/selenium')
        .click('#button-submit')
        .expect(Selector('.Toastify').innerText).eql('deu erro');;
});

test('usuario/repository duplicado', async t => {
    await t
        .typeText('#input-search', 'jequelia/git-explore')
        .click('#button-submit')
        .typeText('#input-search', 'jequelia/git-explore')
        .click('#button-submit').expect(Selector('.Toastify').innerText).eql('Repositorio já existente');
});


