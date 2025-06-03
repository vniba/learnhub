package com.javamosh;

public class TaxCalculator2031 implements TaxCalculator {

    private double taxableIncome;

    public TaxCalculator2031(double taxableIncome) {
        this.taxableIncome = taxableIncome;
    }

    @Override
    public double calculateTax() {
        return taxableIncome * 0.8;
    }
}
