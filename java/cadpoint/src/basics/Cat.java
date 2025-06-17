package src.basics;

public class Cat extends Animal {
    Cat(String color) {
        this.setColor(color);
    }

    public void printColor() {
        System.out.println(this.getColor());
    }
}
