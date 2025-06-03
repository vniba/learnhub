package com.javamosh;

public class TaxCalculator2031 extends AbstractTaxCalculator {

    private double taxableIncome;

    public TaxCalculator2031(double taxableIncome) {
        this.taxableIncome = taxableIncome;
    }

    @Override
    public double calculateTax() {
        return taxableIncome * 0.8;
    }

    @Override
    public double getTaxableIncome(double income, double expense) {
        return super.getTaxableIncome(income, expense);
    }
}
