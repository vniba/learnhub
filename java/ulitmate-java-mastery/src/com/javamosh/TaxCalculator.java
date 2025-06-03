package com.javamosh;

public interface TaxCalculator {
    float minimumTax = 1;

    double calculateTax();

    static double getTaxableIncome(double income, double expense) {
        return income - expense;
    }

    private double getTaxableExpense(double income, double expense) {
        return income - expense;
    }
}
