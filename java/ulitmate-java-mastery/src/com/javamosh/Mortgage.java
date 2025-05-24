package com.javamosh;


import java.text.NumberFormat;
import java.util.Scanner;

class Mortgage {
    final static byte PERCENT = 100;
    final static byte MONTH_IN_YEAR = 12;

    public static void main(String[] args) {
        mortgage();
    }

    public static void mortgage() {


        Scanner scanner = new Scanner(System.in);
        long principal = getPrincipal(scanner);
        float annualInterest = getAnnualInterest(scanner);
        int year = getYear(scanner);


        double mortgage = calculateMortgage(principal, annualInterest, year);
        int totalNumberOfMonthlyPayments = MONTH_IN_YEAR * year;

        System.out.printf("Mortgage: %s\n", NumberFormat.getCurrencyInstance().format(mortgage));
        for (int month = 1; month <= totalNumberOfMonthlyPayments; month++) {
            double balance = calculateRemainingMortgage(month, principal, annualInterest, year);
            System.out.println("Payment #" + month + ": " + NumberFormat.getCurrencyInstance().format(balance));
        }

        scanner.close();
    }

    private static byte getYear(Scanner scanner) {
        final byte MIN_YEAR = 1;
        final byte MAX_YEAR = 30;
        byte year = 0;
        while (true) {
            System.out.print("Period (Years) : ");
            year = scanner.nextByte();
            if (year < MIN_YEAR || year > MAX_YEAR) {
                System.out.printf("%s %s and %s", "Enter a Value b/w", MIN_YEAR, MAX_YEAR).println();
            } else break;
        }
        return year;
    }

    private static float getAnnualInterest(Scanner scanner) {
        final byte MIN_ANNUAL_INTEREST = 1;
        final byte MAX_ANNUAL_INTEREST = 30;

        float annualInterest = 0;
        while (true) {
            System.out.print("Annual Interset Rate : ");
            annualInterest = scanner.nextFloat();
            if (annualInterest < MIN_ANNUAL_INTEREST || annualInterest > MAX_ANNUAL_INTEREST) {
                System.out.printf("%s %s and %s", "Enter a Value b/w", MIN_ANNUAL_INTEREST, MAX_ANNUAL_INTEREST).println();
            } else break;
        }
        return annualInterest;
    }

    private static long getPrincipal(Scanner scanner) {
        final int MIN_PRINCIPAL = 1000;
        final int MAX_PRINCIPAL = 1000_000;
        long principal = 0;
        while (true) {
            System.out.print("Principal : ");
            principal = scanner.nextLong();
            if (principal < MIN_PRINCIPAL || principal > MAX_PRINCIPAL) {
                System.out.printf("%s %s and %s", "Enter a Num b/w", NumberFormat.getCurrencyInstance().format(MIN_PRINCIPAL), NumberFormat.getCurrencyInstance().format(MAX_PRINCIPAL)).println();
            } else break;


        }
        return principal;
    }

    private static double getMonthlyInterestRate(double annualInterestRate) {
        return (annualInterestRate / PERCENT) / MONTH_IN_YEAR;
    }

    private static double powerFactor(double rate, int months) {
        return Math.pow(1 + rate, months);
    }

    private static double calculateMortgage(double principal, double annualInterestRate, int totalYears) {
        double monthlyRate = getMonthlyInterestRate(annualInterestRate);
        int totalMonths = MONTH_IN_YEAR * totalYears;

        double pow = powerFactor(monthlyRate, totalMonths);
        return principal * (monthlyRate * pow) / (pow - 1);
    }

    private static double calculateRemainingMortgage(int paymentsMade, double principal, double annualInterestRate, int totalYears) {
        double monthlyRate = getMonthlyInterestRate(annualInterestRate);
        int totalMonths = MONTH_IN_YEAR * totalYears;

        double powTotal = powerFactor(monthlyRate, totalMonths);
        double powPaid = powerFactor(monthlyRate, paymentsMade);

        return principal * (powTotal - powPaid) / (powTotal - 1);
    }
}