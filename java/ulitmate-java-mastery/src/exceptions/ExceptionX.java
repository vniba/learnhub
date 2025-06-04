package exceptions;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class ExceptionX {
    public static void show() {

        FileReader reader = null;
        try {
            reader = new FileReader("cat.txt");
            var val = reader.read();
            new SimpleDateFormat().parse("");
//        sayBi(null);
            System.out.println("file is opened");
        } catch (FileNotFoundException | ParseException ex) {
            System.out.println(ex.getMessage());
        } catch (IOException e) {
            System.out.println(e.getMessage());
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e) {
                    System.out.println(e.getMessage());
                }
            }
        }
    }

    public static void sayBi(String name) {
        System.out.println(name.toUpperCase());
    }
}
