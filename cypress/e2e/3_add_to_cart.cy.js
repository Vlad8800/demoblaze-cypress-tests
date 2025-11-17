
describe("Add phone to cart", () => {
  it("should add item to cart and verify alert", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.contains("Phones").click();
    cy.get(".card-title a").first().click();
    cy.contains("Add to cart").click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Product added');
    });
  });
});
