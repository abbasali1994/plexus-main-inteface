describe("Cypress", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });
});
describe("Dashboard component tests", () => {
  it("visits the app", () => {
    cy.visit("/");
  });

  it("should render BSC text", () => {
    cy.get("[data-testid=bscText]").contains("BSC");
  });

  it("should render Bsc Coming Soon text", () => {
    cy.get("[data-testid=bscComingSoonText]").contains("COMING SOON");
  });

  it("should render Solana text", () => {
    cy.get("[data-testid=solanaText]").contains("SOLANA");
  });

  it("should render Solana Coming Soon text", () => {
    cy.get("[data-testid=solanaComingSoonText]").contains("COMING SOON");
  });

  it("should render ETHEREUM text", () => {
    cy.get("[data-testid=ethText]").contains("ETHEREUM");
  });
});
