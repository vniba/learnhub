package src.basics;


public class Overload {

    Overload(double a, double b) {
        System.out.println(sum(a, b));
    }

    Overload(int a, int b) {
        System.out.println(sum(a, b));
    }

//
//    public static void main(String[] args) {
//
//        var out = sum(1f, 2f);
//        System.out.println(out);
//    }

    private static int sum(int a, int b, int c) {
        return a + b + c;
    }

    private static int sum(int a, int b) {
        return a + b;
    }

    private static double sum(double a, double b) {
        return a + b;
    }

    private static float sum(float a, float b) {
        return a + b;

    }

}
