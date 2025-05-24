package com.javamosh;

import java.util.Scanner;

class FizzBuzz {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();
        System.out.println(FizzBuzz.fizzBuzz(number));
    }

    public static String fizzBuzz(int n) {
        if (n % 3 == 0 && n % 5 == 0)
            return "FizzBuzz";
        else if (n % 3 == 0)
            return "Fizz";
        else if (n % 5 == 0)
            return "Buzz";
        else
            return Integer.toString(n);
    }
}