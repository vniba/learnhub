package src.basics;

class Main {

    public static void main(String[] args) {
//        Constr constr = new Constr("ok");
//        new Constr(2);

//        var o = new Overload(1, 2);

        var cat = new Cat("pink");
        var dog = new Dog("green");
        dog.printColor();
        cat.setColor(dog.getColor());

        cat.printColor();

        var hus = new Hus("yellow");
        hus.printColor();


//        oddEven();
//        oddEvenNeg();
    }


    private static void oddEven() {
        byte limit = 20;
        byte counter = 1;
        while (counter <= limit) {
            String which = (counter & 1) == 1 ? "Odd" : "even";
            System.out.printf("%d is %s\n", counter, which);
            counter++;
        }
    }


    private static void oddEvenNeg() {
        int counter = 20;
        while (counter > 0) {
            String which = counter % 2 == 0 ? "even" : "odd";
            System.out.printf("%d is %s\n", counter, which);
            counter--;
        }
    }
}