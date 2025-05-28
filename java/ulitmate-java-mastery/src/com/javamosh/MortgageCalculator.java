package com.javamosh;

public class MortgageCalculator {
    final static byte PERCENT = 100;
    final static byte MONTH_IN_YEAR = 12;


    private final double principal;
    private final double annualInterestRate;
    private final byte years;

    public double[] getRemainingBalances() {
        var remining = new double[getNumberOfPayments()];
        for (int month = 1; month <= remining.length; month++) {
            remining[month - 1] = calculateRemainingMortgage(month);
        }

        return remining;
    }

    public MortgageCalculator(double principal, double annualInterestRate, byte years) {
        this.principal = principal;
        this.annualInterestRate = annualInterestRate;
        this.years = years;
    }

    public double calculateMortgage() {
        double monthlyRate = getMonthlyInterestRate(annualInterestRate);
        int totalMonths = getNumberOfPayments();

        double pow = powerFactor(monthlyRate, totalMonths);
        return principal * (monthlyRate * pow) / (pow - 1);
    }

    public double calculateRemainingMortgage(int paymentsMade) {
        double monthlyRate = getMonthlyInterestRate(annualInterestRate);
        int totalMonths = getNumberOfPayments();

        double powTotal = powerFactor(monthlyRate, totalMonths);
        double powPaid = powerFactor(monthlyRate, paymentsMade);

        return principal * (powTotal - powPaid) / (powTotal - 1);
    }

    private int getNumberOfPayments() {
        return MONTH_IN_YEAR * years;
    }

    private static double getMonthlyInterestRate(double annualInterestRate) {
        return (annualInterestRate / PERCENT) / MONTH_IN_YEAR;
    }

    private static double powerFactor(double rate, int months) {
        return Math.pow(1 + rate, months);
    }
}
