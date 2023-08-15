describe("", function () {
  it("frontpage can be opened", function () {
    cy.visit("http://localhost:3000");
    cy.contains("Tu historial de partidos.");
  });
});

// nueva version test
