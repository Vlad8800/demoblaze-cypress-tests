
describe("Change category", () => {
  it("should switch to Laptops", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.contains("Laptops").click();
    cy.get(".card-title a").should("exist");
  });
});
