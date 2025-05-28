package com.javamosh;

import java.util.Scanner;

public class Console {

    private static final Scanner scanner = new Scanner(System.in);

    public static double readNumber(String prompt, double min, double max) {
        double value;
        while (true) {
            System.out.print(prompt);
            value = scanner.nextDouble();
            if (value >= min || value <= max) break;
            System.out.printf("Enter a value b/w %f and %f", min, max);
        }
        return value;
    }

    public static double readNumber(String prompt) {
        return scanner.nextDouble();
    }
}
