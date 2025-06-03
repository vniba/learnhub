package src.tasks;

public class BinarySearch {
    public static void main(String[] args) {
        int[] numbers = {2, 4, 6, 8, 10};
        int key = 10;
        int index = binarySearch(numbers, key);
        System.out.println(index);
    }

    private static int binarySearch(int[] numbers, int key) {
        int low = 0;
        int high = numbers.length - 1;
        int mid = 0;

        while (low <= high) {
            mid = (high + low) / 2;
            int val = numbers[mid];

            if (val == key) break;

            if (val > key) high = mid - 1;
            if (val < key) low = mid + 1;

            if (low > high) mid = -1;
        }
        return mid;
    }
}
