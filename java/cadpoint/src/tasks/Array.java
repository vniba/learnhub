package src.tasks;

import java.util.Scanner;


public class Array {

    public static void main(String[] args) {
        int[] values = {1, 3, 5, 2};
        Array ar = new Array();
//		ar.sum();
        ar.sort(values);

        for (int i = 0; i < values.length; i++) {
            System.out.println(values[i]);
        }
    }


    public int sum() {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter first Number: ");
        int num1 = sc.nextInt();

        System.out.print("Enter Second Number: ");
        int num2 = sc.nextInt();

        int sum = num1 + num2;
        System.out.println("sum" + " " + sum);

        return sum;

    }

    public int[] sort(int[] values) {

        for (int i = 0; i < values.length - 1; i++) {
            int min_inx = i;

            for (int j = i + 1; j < values.length; j++) {

                if (values[j] < values[min_inx]) min_inx = j;
            }

            int temp = values[i];
            values[i] = values[min_inx];
            values[min_inx] = temp;

        }

        return values;

    }

    private static void linear() {
        int[] numbers = {1, 2, 3, 4, 90, 87, 74, 39, 82, 29};
        int item = 87;
        for (int i = 1; i < numbers.length; i++) {

            if (numbers[i] == item) {
                System.out.println(numbers[i]);
            }
        }
    }
}
