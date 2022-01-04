import java.util.ArrayList;
import java.util.Arrays;

public class Exe1 {
    public static int maxNumber(int[] arr){
        /*
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            if(arr[i] > max){
                max = arr[i];
            }
        }
        return max;
         */
        return Arrays.stream(arr).max().getAsInt();
    }

    public static int minNumber(int[] arr){
        int r = Arrays.stream(arr).min().getAsInt();
        return r;
}

    public static int sumElements(int[] arr){
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    public static void Even(int[] arr){
        System.out.println("Print even only even numbers in array");
        for (int i = 0; i < arr.length; i++) {
            if(arr[i] % 2 == 0){
                System.out.println(arr[i]);
            }
        }
    }

    public static void Odd(int[] arr){
        System.out.println("Print odd only odd numbers in array");
        for (int i = 0; i < arr.length; i++) {
            if(arr[i] % 2 != 0){
                System.out.println(arr[i]);
            }
        }
    }

    public static void biggerThanTen(int[] arr){
    }

    public static void main(String[] args) {
        int[] arr = {3,1,9,10,11,12};
        System.out.println("Max number in array: " + maxNumber(arr));
        System.out.println("Min number in array: " + minNumber(arr));
        System.out.println("Sum on element in array: " +sumElements(arr));
        // print even number in array
        Even(arr);
        // print odd number in array
        Odd(arr);
        biggerThanTen(arr);
    }
}
