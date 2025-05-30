package tasks;

public class Prime {

    public static void main(String[] args) {
        int n = 17;
        printOut(n, isPrimeNumberDo(n));
//        printPrimes(100, 1000);
        printPrimeNumbersDo(100, 1000);
    }

    private static void printPrimeNumbersDo(int start, int end) {
        do {
            boolean isPrime = isPrimeNumberDo(start);
            if (isPrime) printOut(start, true);
            start++;
        } while (start <= end);
    }

    private static boolean isPrimeNumberDo(int number) {
        int start = 2;
        int counter = 0;
        do {
            int rem = number % 2;
            if (rem == 0) {
                counter++;
                break;
            }

            start++;
        } while (start <= number / 2);

        return counter == 0;
    }

    private static void printOut(int num, boolean isPrime) {
        String msg = isPrime ? "is Prime" : "Not prime";
        System.out.printf("%d %s\n", num, msg);
    }


    private static boolean isPrimeNum(int num) {

        int start = 2;
        int counter = 0;
        int maxNum = num / 2;
        while (start <= maxNum) {
            if (num % start == 0) {
                counter++;
                break;
            }

            start++;
        }
        return counter == 0;
    }

    private static void printPrimes(int start, int end) {
        while (start < end) {
            boolean isPrime = isPrimeNum(start);
            if (isPrime) {
                printOut(start, true);
            }
            start++;
        }
    }
}