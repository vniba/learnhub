package com.javamosh;

public final class CheckBox extends UIControl {

    public CheckBox(boolean isEnabled) {
        super(isEnabled);
    }

    @Override
    public void render() {
        System.out.println("render checkbox");
    }
}