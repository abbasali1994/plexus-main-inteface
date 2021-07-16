/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
import React from "react";
import { mount } from '@cypress/react'
import DashboardUI from "../../components/dashboard-ui";
import store from "../../store";
import { Provider } from "react-redux";

describe("Dashboard component tests", () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <DashboardUI />
      </Provider>
    )
  });

  it("Text Rendering Test", () => {
    cy.get('[data-testid="bscText"]').should('have.text', 'BSC');
    cy.get('[data-testid="bscComingSoonText"]').should('have.text', 'COMING SOON');
    cy.get('[data-testid="solanaText"]').should('have.text', 'SOLANA');
    cy.get('[data-testid="solanaComingSoonText"]').should('have.text', 'COMING SOON');
    cy.get('[data-testid="ethText"]').should('have.text', 'ETHEREUM');
  });

  it("Image Rendering Test", () => {
    cy.get('[data-testid="ethImg"]')
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    });
    cy.get('[data-testid="bscImg"]')
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    });
    cy.get('[data-testid="solanaImg"]')
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    });
  });

  it("Click WALLET Button", () => {
    cy.get('[data-testid="button-WALLET"]').click();
    cy.get('#walletText').should('have.text', 'WALLET');
  });

  it("Click LIQUIDITY Button", () => {
    cy.get('[data-testid="button-LIQUIDITY"]').click();
    cy.get('[data-testid="liquidityText"]').should('have.text', 'LIQUIDITY POSITIONS');
  });

  it("Click STAKING Button", () => {
    cy.get('[data-testid="button-STAKING"]').click();
    cy.get('#stakingText').should('have.text', 'STAKING');
  });

  it("Click REWARDS Button", () => {
    cy.get('[data-testid="button-REWARDS"]').click();
    cy.get('#rewardsText').should('have.text', 'REWARDS');
  });
});
