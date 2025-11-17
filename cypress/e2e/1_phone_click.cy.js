
describe("Click on phone", () => {
  it("should open phone details", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.contains("Phones").click();
    cy.get(".card-title a").first().click();
    cy.get(".name").should("exist");
  });
});
