package src.basics;

public class Dog extends Animal {

    Dog(String color) {
        this.setColor(color);
    }

    public void printColor() {
        System.out.println(this.getColor());
    }


}
