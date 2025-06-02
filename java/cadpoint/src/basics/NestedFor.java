package src.basics;

public class NestedFor {

    public static void main(String[] args) {

        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.printf("i: %d | j: %d\n", i, j);
            }
        }
    }
}
