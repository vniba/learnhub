package com.javamosh;

class Employee {
    private int baseSalary;
    private int hourlyRate;

    public static int numOfEmployees;

    public Employee(int baseSalary, int hourlyRate) {
        this.setBaseSalary(baseSalary);
        this.setHourlyRate(hourlyRate);
        numOfEmployees++;
    }

    public static void pNumEm() {
        System.out.println(numOfEmployees);
    }

    public Employee(int baseSalary) {
        this(baseSalary, 1);
    }

    public int calculateWage(int extraHours) {
        return baseSalary + (getHourlyRate() * extraHours);
    }

    public int calculateWage() {
        return this.calculateWage(0);
    }

    private final void setBaseSalary(int baseSalary) {
        if (baseSalary <= 0) {
            throw new IllegalArgumentException("salary cannot be less than 0");
        }
        this.baseSalary = baseSalary;
    }

    private final int getBaseSalary() {
        return baseSalary;
    }

    private int getHourlyRate() {
        return hourlyRate;
    }

    private void setHourlyRate(int hourlyRate) {
        if (hourlyRate <= 0) {
            throw new IllegalArgumentException("hourly rate must be greater than 0");
        }
        this.hourlyRate = hourlyRate;
    }

}