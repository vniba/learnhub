package basics;

public class Prime {

    public static void main(String[] args) {
        int n = 17;
        printOut(n, isPrimeNum(n));
        printPrimes(100, 1000);
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