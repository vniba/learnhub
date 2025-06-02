package com.javamosh;

public class TextBox extends UIControl {

    private String text = "";

    TextBox() {
        super(true);
    }


    @Override
    public void render() {
        System.out.println("render textbox");
    }

    @Override
    public String toString() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void clear() {
        text = "";
    }

}
