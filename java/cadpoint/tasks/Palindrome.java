package tasks;

// 121 -> 121
public class Palindrome {

    public static void main(String[] args) {

        int num = 121;
        boolean isPal = isPalindromeNumberFor(num);
        printOut(num, isPal);
//        printPalindromeNumbersDo(100, 1000);
        //printPalindromes(100,1000);
        printPalindromeNumberFor(100, 1000);
    }

    private static boolean isPalindromeNumberFor(int number) {
        int sum = 0;
        for (int i = number; i > 0; i /= 10) {
            int rem = i % 10;
            sum = (sum * 10) + rem;
        }
        return number == sum;
    }

    private static void printPalindromeNumberFor(int start, int limit) {
        for (int i = start; i <= limit; i++) {
            boolean isPal = isPalindromeNumberFor(i);
            if (isPal) printOut(i, true);
        }
    }

    private static boolean isPalindromeNumberDo(int number) {
        int val = number;
        int sum = 0;
        do {
            int rem = val % 10;
            sum = (sum * 10) + rem;

            val = val / 10;
//            System.out.printf("%s  %d\n",sum,rem);
        } while (val > 0);

        return number == sum;
    }

    private static void printPalindromeNumbersDo(int start, int end) {
        do {
            boolean isPal = isPalindromeNumberDo(start);
            if (isPal) printOut(start, true);
            start++;
        } while (start < end);
    }

    private static void printPalindromes(int start, int end) {

        int counter = start;
        while (counter < end) {

            boolean isPal = isPalindromeNum(counter);

            if (isPal) printOut(counter, isPal);

            counter++;
        }
        ;
    }


    private static boolean isPalindromeNum(int num) {

        int counter = num;

        int rev = 0;

        while (counter > 0) {
            int rem = counter % 10;
            rev = (rev * 10) + rem;
            counter = counter / 10;

            //System.out.printf("%s  %d\n",rev,rem);
        }

        return num == rev;
    }

    private static void printOut(int num, boolean is) {

        String msg = is ? "is Palindrome" : "Not palindrome";
        System.out.printf("%d %s\n", num, msg);
    }


}