package com.numberguessgame;

import java.util.Scanner;

public class Console {
    private static final String RESET = "\033[0m";  // Text Reset
    private static final String GREEN = "\033[0;32m";   // GREEN

    private static final Scanner scanner = new Scanner(System.in);

    public static byte readNumber(String prompt, byte min, byte max) {
        byte value;
        do {
            System.out.print(prompt);
            value = scanner.nextByte();
        } while (value < min || value > max);
        return value;
    }

    public static void print(String value) {
        System.out.print(GREEN + value + RESET);
    }
}
