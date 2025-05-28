package com.javamosh;


class Mortgage {


    public static void main(String[] args) {
        mortgage();
    }

    public static void mortgage() {

        final int MIN_PRINCIPAL = 1000;
        final int MAX_PRINCIPAL = 1000_000;

        final byte MIN_ANNUAL_INTEREST = 1;
        final byte MAX_ANNUAL_INTEREST = 30;

        final byte MIN_YEAR = 1;
        final byte MAX_YEAR = 30;


        double principal = Console.readNumber("Principal : ", MIN_PRINCIPAL, MAX_PRINCIPAL);
        double annualInterest = (float) Console.readNumber("Annual Interset Rate : ", MIN_ANNUAL_INTEREST, MAX_ANNUAL_INTEREST);
        byte year = (byte) Console.readNumber("Period (Years) : ", MIN_YEAR, MAX_YEAR);

        var calculator = new MortgageCalculator(principal, annualInterest, year);
        var report = new MortgageReport(calculator);
        report.printMortgage();
        report.printPaymentSchedule();

    }

//    private static byte getYear(Scanner scanner) {
//        final byte MIN_YEAR = 1;
//        final byte MAX_YEAR = 30;
//        byte year = 0;
//        while (true) {
//            System.out.print("Period (Years) : ");
//            year = scanner.nextByte();
//            if (year < MIN_YEAR || year > MAX_YEAR) {
//                System.out.printf("%s %s and %s", "Enter a Value b/w", MIN_YEAR, MAX_YEAR).println();
//            } else break;
//        }
//        return year;
//    }
//
//    private static float getAnnualInterest(Scanner scanner) {
//        final byte MIN_ANNUAL_INTEREST = 1;
//        final byte MAX_ANNUAL_INTEREST = 30;
//
//        float annualInterest = 0;
//        while (true) {
//            System.out.print("Annual Interset Rate : ");
//            annualInterest = scanner.nextFloat();
//            if (annualInterest < MIN_ANNUAL_INTEREST || annualInterest > MAX_ANNUAL_INTEREST) {
//                System.out.printf("%s %s and %s", "Enter a Value b/w", MIN_ANNUAL_INTEREST, MAX_ANNUAL_INTEREST).println();
//            } else break;
//        }
//        return annualInterest;
//    }
//
//    private static long getPrincipal(Scanner scanner) {
//        final int MIN_PRINCIPAL = 1000;
//        final int MAX_PRINCIPAL = 1000_000;
//        long principal = 0;
//        while (true) {
//            System.out.print("Principal : ");
//            principal = scanner.nextLong();
//            if (principal < MIN_PRINCIPAL || principal > MAX_PRINCIPAL) {
//                System.out.printf("%s %s and %s", "Enter a Num b/w", NumberFormat.getCurrencyInstance().format(MIN_PRINCIPAL), NumberFormat.getCurrencyInstance().format(MAX_PRINCIPAL)).println();
//            } else break;
//
//
//        }
//        return principal;
//    }


}