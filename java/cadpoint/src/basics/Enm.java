package src.basics;
enum Tree {OAK, MANGO};

public class Enm {
    public static void main(String[] args) {
        enum is {A, B}
        ;

        System.out.print(is.A);

        for (is i : is.values()) {
            System.out.println(i);
        }

        System.out.println(is.B.name());

        System.out.println(is.valueOf("A").ordinal());

        enum Custom {J}
        ;
        System.out.println(Custom.valueOf("J").ordinal());
    }
}