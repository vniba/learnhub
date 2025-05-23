package com.javamosh;


import java.text.NumberFormat;
import java.util.Scanner;

class Mortgage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Principal : ");
        long principal = scanner.nextLong();

        System.out.print("Annual Interset Rate : ");
        float rate = scanner.nextFloat();

        System.out.print("Period (Years) : ");
        int year = scanner.nextInt();


        double mortgage = Mortgage.calculateMortgage(principal, rate, year);

        System.out.printf("Mortgage: %s", NumberFormat.getCurrencyInstance().format(mortgage));
        scanner.close();
    }

    private static double calculateMortgage(double principal, double annualInterestRate, int totalYear) {
        final byte PERCENT = 100;
        final byte MONTH_IN_YEAR = 12;
        double monthlyInterestRate = (annualInterestRate / PERCENT) / MONTH_IN_YEAR;
        int totalNumberOfMonthlyPayments = MONTH_IN_YEAR * totalYear;
        double monthlyPayment = Math.pow(1 + monthlyInterestRate, totalNumberOfMonthlyPayments);

        return principal * (monthlyInterestRate * monthlyPayment) / (monthlyPayment - 1);

    }
}