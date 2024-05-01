1. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
    3

2. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^ 
    150

3. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
    0

4. ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^
    Did not return anything, this is because all of the console.log are commented out so there will be no output in the console

5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
    ERROR: Line 12 i is not defined. This is because we declared i using let, variables declared using let cannot be accessed outside of the block they are defined in.

6. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
    ERROR: Line 13 discountedPrice is not defined. This is because we are trying to access discountedPrice outside of it's block

7. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
    150

8. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
    Did not return anything, same answer as in question 4.

9. ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^
    ERROR: Line 11 i is not defined. Same as in question 5.

10. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
    Error: Line 12 length is not defined. This is because there is no variable length that is defined above. If we want the length of the array we should use discounted.length

11. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
    Did not return anything, same answer as in question 4.

12. Given the above Object, write the notation for: 
    A. Accessing the value of the name property in the student object
    B. Accessing the value of the Grad Year property in the student object
    C. Calling the function for the greeting property in the student object
    D. Accessing the name property of the object in the Favorite Teacher property in student
    E. Access index zero in the array of the courseLoad property of the student object

    A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. studentCourseLoad[0]

For each of the following questions, note down the output as well as a brief explanation why that output was given
13. Arithmetic

    A. '3' + 2
        '32'
        
        3 is a string so the + operator would concatenate the 3 and 2 togehter.

    B. '3' - 2
        1

        When the - is used it will try to convert the string into a number so that it can actually do the arithmetic

    C. 3 + null
        3

        The null is converted to 0 so it turns into 3 + 0


    D. '3' + null
        '3null'

        Same as in A, the 3 is treated as a string so it concatenates the two operands together

    E. true + 3
        4

        The true is changed to a 1 when used as a number so it becomes 1 + 3

    F. false + null
        0

        Both false and null are changed to 0 so it becomes 0 + 0

    G. '3' + undefined
        '3undefined'

        Similar to A, the 3 is treated as a string so the operands concatenate

    H. '3' - undefined
        NaN

        Undefined is changed to Nan when the programmer tries to use it as a number, so 3 - NaN ends up as NaN

14. Comparison 
    
    A. '2' > 1
        True

        The 2 gets converted from a string to a number and 2 is greater than 1 so it outputs true
    
    B. '2' < '12'
        False

        When you are trying to compare strings, JS will compare them alphabetically character by character ('2' and '1') and since 2 comes after 1 in Unicode, 2 would be greater
    
    C. 2 == '2'
        True

        When comparing string and number we will convert the string into a number. 2 == 2
    
    D. 2 === '2'
        False

        === will not change the type. It will evaluate the number two and the string two which are different
    
    E. true == 2
        False

        True is converted to a 1, and 1 is not == 2
    
    F. true === Boolean(2)
        True

        === will compare the types. Boolean(2) is a boolean and true is also a boolean so they are the same.

15. Explain the difference between the == and === operators.
    == performs type coercion while === does not. So using === if the types are different it will equate to false.

16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.

    for (let x in statistics) {
        if (x.startsWith('r') || statistics[x] % 2 !== 0) {
            console.log(statistics[x]);
            }
    }

17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result.

    [2,4,6], I used console.long to see the result but, when we use modifyArray, the for-loop iterates all the elements of the array, then using callback, we apply the elements to doSomething which multiply the number by 2. Then we push it into the array. So the numbers are just multiplied by 2.

18. The above program only prints out the time once when executed. Modify this code such that the program prints out the current time every second. 

    function printTime() {
        let d = new Date();
        let time = d.toLocaleTimeString();
        console.log(time);
    }


    printTime();

    setInterval(printTime, 1000);

19. What is the output of the above code?
    1, 4, 3, 2