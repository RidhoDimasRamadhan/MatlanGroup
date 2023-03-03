 
// let EPSILON = 0.005;
 
// // An example function whose solution is determined using
// // Bisection Method. The function is x^3 - x^2  + 2
// function func(x)
// {
//     return x**3 - 7*x + 1;
// }

// // Prints root of func(x) with error of EPSILON
// function bisection(a, b)
// {
//     if (func(a) * func(b) >= 0)
//     {
//         document.write("You have not assumed"
//                     + " right a and b");
//         return;
//     }

//     let c = a;
//     while ((b-a) >= EPSILON)
//     {
//         // Find middle point
//         c = (a+b)/2;

//         // Check if middle point is root
//         if (func(c) == 0.0)
//             break;

//         // Decide the side to repeat the steps
//         else if (func(c)*func(a) < 0)
//             b = c;
//         else
//             a = c;
//     }
//             //prints value of c upto 4 decimal places
//     document.write("The value of " +
//                   "root is : "+ c.toFixed(4));
// }


// // Driver program

//     // Initial values assumed
//     let a =2.5, b = 2.6;
//     bisection(a, b);
