package com.javamosh;

import java.text.NumberFormat;

class MortgageReport {

    private final MortgageCalculator calculator;

    MortgageReport(MortgageCalculator calculator) {
        this.calculator = calculator;
    }

    public void printMortgage() {
        System.out.println("Mortgage #" + ": " + getFormat(calculator.calculateMortgage()));
    }

    private String getFormat(double value) {
        return NumberFormat.getCurrencyInstance().format(value);
    }

    public void printPaymentSchedule() {

        for (double b : calculator.getRemainingBalances()) {
            System.out.println(getFormat(b));
        }
    }

}