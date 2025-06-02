package tasks;

public class MultipTable {

    public static void main(String[] args) {


        PrintMultTable(2, 5);
//        printMultiplicationTableDo(2, 5);
        printMultiplicationTableFor(2, 5);
    }

    private static void printMultiplicationTableFor(int num, int limit) {
        for (int start = 1; start <= limit; start++) {
            int sum = start * num;
            printOut(start, num, sum);
        }
    }

    private static void printMultiplicationTableDo(int num, int limit) {
        int start = 1;

        do {
            int sum = start * num;
            System.out.printf("%d * %d = %d\n", start, num, sum);
            start++;
        } while (start <= limit);
    }


    private static void PrintMultTable(int num, int limit) {

        int counter = 1;

        while (counter <= limit) {

            int sum = num * counter;
            System.out.printf("%d * %d = %d\n", counter, num, sum);

            counter++;
        }
    }

    private static void printOut(int start, int num, int sum) {
        System.out.printf("%d * %d = %d\n", start, num, sum);
    }
}