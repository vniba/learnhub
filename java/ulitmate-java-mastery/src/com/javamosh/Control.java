package com.javamosh;

import java.util.Scanner;

class Control {
    public static void main(String[] args) {
        int x = 10, y = 1;
        boolean isHigh = x > y || x < 20;
//        ==, >= , <= , > , <, !=
//        && , || , !
//        System.out.println(!isHigh);
//        Control.flow(x);

        int income = 120_00;
        boolean hasHighIncome = income > 100_00;
//        ternary
        String className = income > 100_000 ? "First" : "Economy";
//        System.out.println(className);
        String role = "Admin";
//        Control.flowSwitch(role);

        Control.loops();
//        Control.repl();
    }

    public static void repl() {
        String input = "";

        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.print("echo: ");
            input = scanner.nextLine().toLowerCase();
            if (input.equals("quit")) break;
            if (input.equals("pass")) continue;
            System.out.println(input);

        }
        scanner.close();
    }

    public static void loops() {
        for (int i = 0; i < 5; i++) {
            System.out.println("what " + i);
        }
        byte st = 2;
        while (st > 0) {
            System.out.println("while " + st);
            st--;
        }

        byte dt = 2;
        do {
            dt--;
            System.out.println("do " + dt);
        } while (dt > 0);

        String[] characters = {"Afro", "Justice", "Partner 1"};
        for (String character : characters) {
            System.out.println(character);
        }
    }

    public static void flowSwitch(String role) {
        switch (role) {
            case "Admin":
                System.out.println("you are Admin");
                break;
            case "Moderator":
                System.out.println("you are Moderator");
                break;
            default:
                System.out.println("you are not what you are");
        }
    }

    public static void flow(int temperature) {

        if (temperature > 30)
            System.out.println("It's Hot day, Drink water :)");
        else if (temperature > 20)
            System.out.println("It's nice day :)");
        else
            System.out.println("It's cold :(");

    }
}