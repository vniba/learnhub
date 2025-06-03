package com.numberguessgame;

public enum DifficultyLevel {

    EASY("Easy", (byte) 10),
    MEDIUM("Medium", (byte) 5),
    HARD("Hard", (byte) 3);


    private final String label;
    private final byte attempts;


    DifficultyLevel(String label, byte attempts) {
        this.label = label;
        this.attempts = attempts;
    }

    public byte getAttempts() {
        return attempts;
    }

    public String getLabel() {
        return label;
    }

    public static DifficultyLevel fromChoice(byte choice) {
        return switch (choice) {
            case 1 -> {
                yield EASY;
            }
            case 2 -> {
                yield MEDIUM;
            }
            case 3 -> {
                yield HARD;
            }
            default -> throw new IllegalStateException("Unexpected value: " + choice);
        };
    }

}
