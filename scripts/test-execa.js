const execa = require('execa')

execa('echo Hello', {
  shell: true,
}).then(console.log)

it ('locators',() =>{
  cy.visit('http://localhost:8080/');

  cy.get('//*[@id="navbar"]//*[@href="/commands/querying"]');

  cy.get('//*[@id="navbar"]//*[@href="commands/traversal"]');

  cy.get('//*[@id="navbar"]//*[@href="/commands/actions"]');

  cy.get('//*[@id="navbar"]//*[@href="/commands/window"]');

  cy.get('//*[@id="navbar"]//*[@href="/commands/viewport"]');

  cy.get('//*[@id="navbar"]//*[@href="/commands/location"]');

  cy.get('//*[@id="navbar"]//*[@href="/commands/navigation"]');

  cy.get('//*[@id="navbar"]//*[@href="/commands/assertions"]');

  cy.get('//*[@id="navbar"]//*[@href="commands/misc"]');

  cy.get('//*[@id="navbar"]//*[@href="/commands/connector"]');

  cy.get('//*[@id="navbar"]//*[@href="/commands/aliasing"]');

  cy.get('//*[@id="navbar"]//*[@href="/commands/waiting"]');

  cy.get('//*[@id="navbar"]//*[@href="/commands/network-requests"]');

  cy.get('//*[@id="navbar"]//*[@href="/commands/files"]');

  cy.get('//*[@id="navbar"]//*[@href="/commands/local-storage"]');

  cy.get('//*[@id="navbar"]//*[@href="/commands/cookies"]');

  cy.get('//*[@id="navbar"]//*[@href="/commands/spies-stubs-clocks"]');
})
