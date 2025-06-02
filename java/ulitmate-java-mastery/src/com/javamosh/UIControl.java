package com.javamosh;

public abstract class UIControl {

    private boolean isEnabled = true;

    UIControl(boolean isEnabled) {
        this.isEnabled = isEnabled;
    }

    public abstract void render();

    public final void enable() {
        isEnabled = true;
    }

    public void disable() {
        isEnabled = false;
    }


    public boolean isEnabled() {
        return isEnabled;
    }
}
