package com.javamosh;

public class TaxCalculator2030 implements TaxCalculator {
    private double taxableIncome;

    public TaxCalculator2030(double taxableIncome) {
        this.taxableIncome = taxableIncome;
    }

    @Override
    public double calculateTax() {
        return taxableIncome * 0.3;
    }
}
