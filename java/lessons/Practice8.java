 //1. Declare a variable that contains your name. Then show your name on the console. For example: if your name is John, the console output should say ”John".

 public class MyName {
     public static void main (String [] args) {

         String name = "Andriy";

     System.out.println ("My name is " + name );
     }

 }


//2 – Modify the previous application to show a welcome message in the console, as follows: if your name is John, the console output should say "Welcome John."

public class WelcomeMyself {
    public static void main (String [] args) {

        String name = "Andriy";
        if (name == "Andriy");
    System.out.println ("Welcome " + name );
    }

}


//3. Declares two variables of numeric type. Assign a value to each variable. Then display the sum of the two variables on screen.
public class SumNumbers {
    public static void main (String [] args) {

        float firstNumber = 2.34f;
        float secondNumber = 2.35f;
        float sum = firstNumber + secondNumber;

    System.out.println ("Sum of the numbers is " + sum );
    }

}

/*4. Declare a numeric variable and assign a value to it. Then write the statements to
A- Increase the variable by 77.
B- Decrease it by 3.
C- Duplicate its value.
*/
public class MathActionsOnNumber {
    public static void main (String [] args) {

        int firstNumber = 100;
        int A;
        int B;
        int C;

        A = firstNumber + 77;
//    System.out.println ("The result of A " + A );
        B = A - 3;
//    System.out.println ("The result of B " + B );
        C = B * 2;
//    System.out.println ("The result of C " + C );


  System.out.println ("The result of A " + A + "\nThe result of B " + B + "\nThe result of C " + C);
    }

}



/*5.Declare four numeric variables a, b, c, and d, and assign values to them. Then do what is necessary so that
B takes the value of C.
C takes the value of A.
A takes the value of D.
D takes the value of B.
Display the values in console.
Hint: Is it enough to use 4 variables?*/
