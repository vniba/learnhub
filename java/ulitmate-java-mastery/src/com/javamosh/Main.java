package com.javamosh;

import java.awt.*;
import java.text.NumberFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        int baseSalary = 2000;
        byte extraHours = 12;
        byte hourlyRate = 22;
        var employee = new Employee(baseSalary, hourlyRate);
        employee.setBaseSalary(1);
        employee.setHourlyRate(200);
        int wage = employee.calculateWage(extraHours);
        System.out.printf("%d > %d", wage, employee.getBaseSalary());


        var textBox = new TextBox();
        textBox.setText("new text");
//        System.out.println(textBox.text.toUpperCase());


//        procedure();

        byte age = 99;
        age = 1;
        long viewsCount = 2000_0000_000L;
        double price = 10.20;
        char letter = 'A';
//        System.out.printf("%,d %f %c", viewsCount, price,letter);
//        Main.reference();
//        Main.string();
//        Main.array();
//        Main.constants();
//        Main.arithmetic();
//        Main.typeCasting();
//        Main.math();
//        Main.formatNumber();
//        Main.input();
//        Main.debug();
    }

    static void input() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("name : ");
        String name = scanner.nextLine().trim();
        System.out.print(name);
//        System.out.print("Please enter a number between 1 and 100: ");
//        byte age = scanner.nextByte();
//        System.out.printf("the number is %d", age);


        scanner.close();
    }

    private static void procedure() {
        int baseSalary = 2000;
        byte extraHours = 12;
        byte hourlyRate = 22;
        System.out.println(calculateWage(baseSalary, extraHours, hourlyRate));
    }

    private static int calculateWage(int baseSalary, byte extraHours, byte hourlyRate) {
        return baseSalary + (extraHours * hourlyRate);
    }

    private static void debug() {
        System.out.println("start");
        printMe(4);
        System.out.println("end");
    }

    private static void printMe(int n) {
        for (int i = 0; i < n; i += 2) {
            System.out.println(i);
        }
    }

    static void formatNumber() {
//        $0.1
        NumberFormat numberFormat = NumberFormat.getCurrencyInstance();
        String rs = numberFormat.format(1234.8383);
        NumberFormat numberPer = NumberFormat.getPercentInstance();
        String ns = numberPer.format(999.999);
        System.out.println(ns);
    }

    public static void math() {
        int r = Math.round(2.5F);
        System.out.println(r);
        System.out.println(Math.max(200, 30.3));
        double rand = (int) Math.round(Math.random() * 10);
        System.out.println(rand);
        System.out.printf("%s", Math.PI);
    }

    protected static void typeCasting() {
//        implicit casting
//        byte -> shot -> int -> long -> float -> double
//          1 ->   2 ->    4 ->   8 ->    4 ->     8
        double x = 2.2;
        double y = x + 9;
        String st = "20";
//        explicit casting
        int z = (int) y;
        int stN = Integer.parseInt(st);
        System.out.println(Float.parseFloat("30.03"));

        System.out.println(stN);
    }

    protected static void arithmetic() {
        int result = 1 - 20 * 20;
        double avg = (double) result / 2;

//        BODMAS
        int x = 2;
        x *= 3;
        System.out.println(result);
    }

    private static void constants() {
        final byte PWD = 69;
    }


    public static void array() {

        int[][] matrix = {{1, 1}, {2, 2}};

        System.out.println(Arrays.deepToString(matrix));

        int[] years = new int[2];
        years[0] = 2012;
        years[1] = 2013;

        float[] prices = {10.1f, 20.2f, 1.9f};
        Arrays.sort(prices);
//        System.out.printf("%s , %s", Arrays.toString(years), Arrays.toString(prices));
    }

    public static void reference() {
        byte age = 12;
        Date date = new Date();
        byte x = 1;
        byte y = x;
        x = 2;
        Point point = new Point(x, 2);
        Point point2 = point;
        point.x = 3;
        System.out.println(point2.getX());
    }

    public static void string() {
        String msg = "Hello \"World!\" \uD83D\uDE06";
        String ne = msg.replace('H', 'N');
        System.out.printf("%s -> %d %s", msg, msg.indexOf('l'), ne);
    }
}