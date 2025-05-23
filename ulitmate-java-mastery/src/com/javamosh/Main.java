package com.javamosh;

public class Main {
    public static void main(String[] args) {
        byte age = 99;
        age = 1;
        long viewsCount = 2000_0000_000L;
        double price = 10.20;
        char letter = 'A';
        System.out.printf("%,d %f %c", viewsCount, price,letter);
    }
}