package src.tasks;

// 1 1 2 3 5
public class Fibonacci {

    public static void main(String[] args) {

//        printFibDo(0, 5);
        printFibFor(0, 5);
    }

    private static void printFibFor(int start, int limit) {
        int a = start;
        int b = a + 1;
        int c = a + b;
        for (int i = a; i <= limit; i++) {
            printOut(a);
            c = a + b;
            a = b;
            b = c;
        }
    }

    private static void printFibDo(int start, int limit) {
        int a = start;
        int b = a + 1;
        int c = a + b;

        do {
            System.out.println(a);
            c = a + b;
            a = b;
            b = c;
            limit--;
        } while (limit > 0);
    }


    private static void printFib(int start, int limit) {

        int a = start;
        int b = a + 1;
        int c = a + b;

        while (limit > 0) {
            System.out.println(a);
            c = a + b;
            a = b;
            b = c;


            limit--;
        }
    }

    private static void printOut(int num) {
        System.out.println(num);
    }
}