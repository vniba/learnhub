package com.numberguessgame;

public class Engine {


    private byte number;
    private byte remainingAttempts;


    public void Start() {
        printWelcomeMessage();
        printDifficultyOptions();

        this.number = (byte) (Math.random() * GameConstants.MAX + 1);

        DifficultyLevel level = readDifficulty();
        this.remainingAttempts = level.getAttempts();

        var difficultyLevel = level.getLabel();
        printSelectedDifficulty(difficultyLevel);

        byte guessedNum;
        String result;
        do {
            guessedNum = Console.readNumber("\nEnter your guess: ", GameConstants.MIN, GameConstants.MAX);
            result = evaluateGuess(guessedNum);
            Console.print(result);
        } while (guessedNum != number || remainingAttempts == 0);

        if (guessedNum != number) {
            Console.print("Sorry! The correct number was: " + number);
        }
    }

    private String evaluateGuess(byte guess) {
        remainingAttempts--;

        if (guess == number) {
            return "🎉 Congratulations! You guessed the number.";
        } else if (guess < number) {
            return "❌ Too low!";
        } else {
            return "❌ Too high!";
        }
    }

    private DifficultyLevel readDifficulty() {
        byte difficultyOpt = Console.readNumber("\nEnter your choice: ", GameConstants.DIFFICULTY_MIN, GameConstants.DIFFICULTY_MAX);
        return DifficultyLevel.fromChoice(difficultyOpt);
    }


    public void printSelectedDifficulty(String value) {
        var msg = String.format("Great! You have selected the %s difficulty level.", value);
        Console.print(msg);
    }

    private static void printWelcomeMessage() {
        String msg = String.format("""
                Welcome to the Number Guessing Game!
                I'm thinking of a number between %d and %d.
                """, GameConstants.MIN, GameConstants.MAX);
        Console.print(msg);
    }

    private static void printDifficultyOptions() {
        String msg = String.format("""
                
                Please select the difficulty level:
                1. %s (%d chances)
                2. %s (%d chances)
                3. %s (%d chances)
                """, DifficultyLevel.EASY.getLabel(), DifficultyLevel.EASY.getAttempts(), DifficultyLevel.MEDIUM.getLabel(), DifficultyLevel.MEDIUM.getAttempts(), DifficultyLevel.HARD.getLabel(), DifficultyLevel.HARD.getAttempts());
        Console.print(msg);
    }

}
