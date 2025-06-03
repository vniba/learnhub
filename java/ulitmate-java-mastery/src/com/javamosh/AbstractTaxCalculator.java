package com.javamosh;

public abstract class AbstractTaxCalculator implements TaxCalculator {

    protected double getTaxableIncome(double income, double expense) {
        return income - expense;
    }

}
