package com.javamosh;

import java.awt.*;
import java.util.Arrays;
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        byte age = 99;
        age = 1;
        long viewsCount = 2000_0000_000L;
        double price = 10.20;
        char letter = 'A';
//        System.out.printf("%,d %f %c", viewsCount, price,letter);
//        Main.reference();
//        Main.string();
        Main.array();
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