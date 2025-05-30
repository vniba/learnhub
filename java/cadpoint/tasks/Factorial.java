package tasks;

public class Factorial {

    //    4 -> 1 * 2 * 3 * 4 = 24
    public static void main(String[] args) {

        System.out.println(FactorialDo(4));
    }

    private static int FactorialDo(int num) {
        int total = 1;
        do {
            total *= num;
            num--;
        } while (num > 0);
        return total;
    }

    private static int Fac(int num) {

        int total = 1;
        while (num > 0) {

            total *= num;
            num--;

        }
        return total;

    }


}