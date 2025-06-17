package src.basics;

import java.io.BufferedReader;
import java.io.FileReader;

public class Reader {
    public static void main(String[] args) throws Exception {
        file();
//        BufferedReader buffered = new BufferedReader(new InputStreamReader(System.in));
//
//        System.out.print("enter your name: ");
//        String value = buffered.readLine();
//        System.out.println(value);
//
//        buffered.close();
    }

    private static void file() throws Exception {
        FileReader fileReader = new FileReader(".gitignore");
        BufferedReader bufferedReader = new BufferedReader(fileReader);


        while (fileReader.ready()) {
            var val = bufferedReader.readLine();
            System.out.println(val);
        }

        fileReader.close();
        bufferedReader.close();

    }
}