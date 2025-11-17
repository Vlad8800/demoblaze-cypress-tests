describe("Place Order form", () => {

  it("should navigate from Home → Cart → Place Order and show the form", () => {

    // 1. Відкрити головну сторінку
    cy.visit("https://www.demoblaze.com/index.html");

    // 2. Перейти в Cart
    cy.contains("Cart").click();

    // Переконатися, що ми на cart.html
    cy.url().should("include", "cart.html");

    // 3. Натиснути кнопку Place Order
    cy.contains("Place Order").click();

    // 4. Очікуване модальне вікно
    cy.get("#orderModal")
      .should("be.visible");

    // 5. Перевіряємо, що форма має необхідні поля
    cy.get("#orderModalLabel").should("contain", "Place order");

    cy.get("#name").should("be.visible");
    cy.get("#country").should("be.visible");
    cy.get("#city").should("be.visible");
    cy.get("#card").should("be.visible");
    cy.get("#month").should("be.visible");
    cy.get("#year").should("be.visible");

    // 6. Кнопка Purchase існує
    cy.contains("Purchase").should("be.visible");
  });

});
