package src.tasks;

import java.util.Arrays;
import java.util.Scanner;


public class Array {

    public static void main(String[] args) {

        matricMultiplication();

        int[] values = {1, 7, 8, 6, 5, 2, 2, 4, 9, 0, 1};
        Array ar = new Array();
//		ar.sum();
//        ar.sort(values);

        int[] reversed = reverse(values);
        int sum = sum(values);
        int[] set = set(reversed);
//        printArr(set);
        int[] odd = oddPosition(values);
//        printArr(odd);
//        System.out.println(sum);
        //        printArr(reversed);

    }


    private static void matricMultiplication() {
//        [2,3] [3,4]
//

        var sc = new Scanner(System.in);

        int limit = 2;
        var mt1 = readMatrix(limit, sc);
        var mt2 = readMatrix(limit, sc);

        System.out.printf("matrices %s , %s", Arrays.deepToString(mt1), Arrays.deepToString(mt2));
//        limit to 2

//        var sum = matrixCalcOld(mt1, mt2, limit);
        var sum = matrixStrassen(mt1, mt2, limit);

        System.out.println(Arrays.deepToString(sum));


        sc.close();
    }


    private static int[][] matrixStrassen(int[][] x, int[][] y, Integer limit) {

        int[][] sum = new int[limit][limit];

        int a, b, c, d, e, f, g;
        a = (x[0][0] + x[1][1]) * (y[0][0] + y[1][1]);
        b = (x[1][0] + x[1][1]) * y[0][0];
        c = (y[0][1] - y[1][1]) * x[0][0];
        d = (-y[0][0] + y[1][0]) * x[1][1];
        e = (x[0][0] + x[0][1]) * y[1][1];
        f = (-x[0][0] + x[1][0]) * (y[0][0] + y[0][1]);
        g = (x[0][1] - x[1][1]) * (y[1][0] + y[1][1]);

        int z00, z01, z10, z11;
        z00 = ((a + d) - e) + g;
        z01 = c + e;
        z10 = b + d;
        z11 = (a - b) + c + f;

        sum[0][0] = z00;
        sum[0][1] = z01;
        sum[1][0] = z10;
        sum[1][1] = z11;


        return sum;


    }

    private static int[][] matrixCalcOld(int[][] mt1, int[][] mt2, Integer limit) {
        int[][] sum = new int[limit][limit];

        for (int i = 0; i < limit; i++) {
            for (int j = 0; j < limit; j++) {
                for (int k = 0; k < limit; k++) {
                    sum[i][j] += mt1[i][k] * mt2[k][j];
                }
            }
        }

        return sum;
    }

    private static int[][] readMatrix(Integer limit, Scanner sc) {


        System.out.println("2d matrix with 2x2");


        int[][] mt = new int[limit][limit];

        System.out.println("Print elements in array: ");

        for (int i = 0; i < limit; i++) {
            for (int j = 0; j < limit; j++) {
                mt[i][j] = sc.nextInt();
            }
        }

        return mt;
    }

    private static int[] oddPosition(int[] value) {
        int[] out = new int[value.length / 2 + 1];
        int index = 0;
        for (int i = 0; i < value.length; i++) {
            if ((i & 1) == 0) {
                out[index] = value[i];
                index++;
            }
        }
        return out;
    }


    private static int[] reverse(int[] values) {
        int[] out = new int[values.length];
        int index = 0;
        for (int i = values.length - 1; i > 0; i--) {
            out[index] = values[i];
            index++;
        }
        return slice(out, 0, index);
    }

    private static int[] slice(int[] values, int start, int end) {
        int[] out = new int[end - start];
        for (int i = 0; i < values.length; i++) {
            if (i == end) break;
            out[i] = values[i];
        }
        return out;
    }

    private static int sum(int[] values) {
        int total = 0;
        for (int i = 0; i < values.length; i++)
            total += values[i];

        return total;
    }

    private static int[] set(int[] values) {
        int index = 0;
        int[] set = new int[values.length];
        for (int i = 0; i < values.length; i++) {
            if (!has(set, values[i])) {
                set[index] = values[i];
                index++;
            }
        }
        return set;
    }


    public int[] sort(int[] values) {

        for (int i = 0; i < values.length - 1; i++) {
            int min_index = i;
            for (int j = i + 1; j < values.length; j++) {
                if (values[j] < values[min_index]) {
                    min_index = j;
                }
            }
            int temp = values[i];
            values[i] = values[min_index];
            values[min_index] = temp;
        }

        return values;

    }

    private static boolean has(int[] numbers, int item) {
        for (int i = 1; i < numbers.length; i++) {
            if (item == numbers[i]) return true;
        }
        return false;
    }

    private static void linear(int[] numbers, int item) {
        for (int i = 1; i < numbers.length; i++) {

            if (numbers[i] == item) {
                System.out.println(numbers[i]);
            }
        }
    }

    public int sumCmd() {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter first Number: ");
        int num1 = sc.nextInt();

        System.out.print("Enter Second Number: ");
        int num2 = sc.nextInt();

        int sum = num1 + num2;
        System.out.println("sum" + " " + sum);

        return sum;

    }


    private static void printArr(int[] values) {
        for (int i = 0; i < values.length; i++) {
            System.out.printf(" %d,", values[i]);
        }
        System.out.println();
    }
}
