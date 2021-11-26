---
sidebar_position: 1
---

# Functions

## Learning Outcomes

After reading this section, you will be able to:

- Design procedures using selection and iteration constructs to solve a programming task
- Connect procedures using pass-by-value semantics to build a complete program
- Trace the execution of a complete program to validate its correctness

## Introduction

Procedural programming involves separating source code into self-contained components that can be accessed multiple times from different locations in a complete program. This approach enables separate coding of each component and assembly of various components into a complete program. We call this approach to programming solutions modular design.

This chapter introduces the principles of modular design, describes the syntax for defining a module in the C language, shows how to pass data from one module to another, suggests a walkthrough table structure for programs composed of several modules and includes an example that validates user input.

## Modular Design

Modular design identifies the components of a programming project that can be developed separately. Each module consists of a set of logical constructs that are related to one another. A module may refer to other modules. A trivial example is the program described in the chapter on [compilers](../A-Introduction/compilers.md):

```c
/* My first program
   hello.c          */

#include <stdio.h>           // information about the printf identifier

int main(void)               // program startup
{
    printf("This is C"); // output

    return 0;            // return to operating system
}
```

The module named `hello.c` starts executing at statement `int main(void)`, outputs a string literal and returns control to the operating system.

- `main()` transfers control to a module named `printf()`
- `printf()` executes the detailed instructions for outputting the string literal
- `printf()` returns control to `main()`

### Design Principles

We can sub-divide a programming project in different ways. We select our modules so that each one focuses on a narrower aspect of the project. Our objective is to define a set of modules that simplifies the complexity of the original problem.

<div className="mdImg">

![modules](https://ict.senecacollege.ca//~ipc144/pages/images/modules.png)

</div>

Some general guidelines for defining a module include:

1. the module is easy to upgrade
2. the module contains a readable amount of code
3. the module may be used as part of the solution to some other problem

For a structured design, we stipulate that:

1. each module has one entry point and one exit point
2. each module is highly cohesive
3. each module exhibits low coupling

### Cohesion

_Cohesion_ describes the focus: a highly cohesive module performs a single task and only that task.

In creating a cohesive module, we ask whether our tasks belong to that module: a reason to include a task is its relation to the other tasks within the module. A reason to exclude a task is its independence from other tasks within the module.

For example, the following tasks are related:

- receives a date and the number of days to add
- converts the date into a format for adding days
- adds the number of days received
- converts the result to a new date
- returns the new date

The following tasks are unrelated:

- calculates Federal tax on bi-weekly payroll
- calculates the value of π
- outputs an integer in hexadecimal format

We allocate unrelated tasks to separate modules in the program design.

### Coupling

_Coupling_ describes the degree of interrelatedness of a module with other modules. The less information that passes between the module and the other modules the better the design. We prefer designs in which each module completely control its own computations and avoids transferring control data to any other module.

Consider a module that receives a flag from another module and performs a calculation based on that flag. Such a module is highly coupled: another module controls its execution. To improve our design, we transfer data to the module and let it create its own flags before completing its task.

## Functions

The C language is a procedural programming language. It supports modular design through function syntax. Functions transfer control between one another. When a function transfers control to another function, we say that it **_calls_** the other function. Once the other function completes its task and transfers control to the caller function, we say that that other function **_returns_** control to its **_caller_**.

<div className="mdImg">

![function](https://ict.senecacollege.ca//~ipc144/pages/images/function.png)

</div>
In the example from the introductory chapter on [compilers](../A-Introduction/compilers.md) listed above:

1. the `main()` function calls the `printf()` function
2. the `printf()` function outputs the string
3. the `printf()` function returns control to its caller **`main()`**

### Definition

A function consists of a header and a body. The body is the code block that contains the detailed instructions to be performed by the function. The header immediately precedes the body and includes the following **_in order_**:

1. the type of the function's return value
2. the function's identifier
3. a parentheses-enclosed list of parameters that receive data from the caller

```c
 type identifier(type parameter, ..., type parameter)
 {

    // function instructions

    return x; // x denotes the value returned by this function
 }
```

`type` specifies the type of the return value or the function's parameter, while the `identifier` specifies the name of the function, and `parameter` is a variable that holds data received from the caller function.

For example:

```c
/* Raise an integer to an integer
 * power.c
 */

#include <stdio.h>

int power(int base, int exponent)
{
    int i, result;

    result = 1;
    for (i = 0; i < exponent; i++)
        result = result * base;

    return result;
}

int main(void)
{
    int base, exp, answer;

    printf("Enter base : ");
    scanf("%d", &base);
    printf("Enter exponent : ");
    scanf("%d", &exp);

    answer = power(base, exp);

    printf("%d^%d = %d\n", base, exp, answer);
}
```

Outputs the following:

```c
Enter base : 3
Enter exponent : 4
3^4 = 81
```

The first function returns a value of `int` type, while `power` identifies the function, and `base` and `exponent` are the function's parameters; both are of `int` type.

### Special Cases

**void Functions**

A function that does not have to return any value has no return type. We declare its return type as `void` and exclude any expression from the return statement.  
For example:

```c
void countDown(int n)
{
    while (n > 0)
    {
        printf("%d ", n);
        n--;
    }

    return; // optional
}
```

:::note

In such cases, the return statement is **optional** and is usually not included.

:::
**No Parameters**

A function that does not have to receive any data does not require parameters. We insert the keyword `void` between the parentheses. For example:

```c
void alphabet(void)
{
    char letter = 'A';

    do {
            printf("%d ", letter);
            letter++;
    } while (letter != 'Z');
}
```

:::note

The iteration changes `letter` to the next character in the alphabet, assuming the collating sequence arranged them contiguously.

:::
**main**

The `main()` function is a function itself. It is the function to which the operating system transfers control after loading the program into RAM.

`main()` returns a value of `int` type to the operating system once it has completed execution. A value of 0 indicates success to the operating system.

### Function Calls

A function call transfers control from the caller to function being called. Once the function being called has executed its instructions, it returns control to the caller. Execution continues at the point immediately following the call statement. A function call takes the form:

```c
identifier(argument, ..., argument)
```

`identifer` specifies the function being called, while `argument` specifies a value being passed to the function being called.

<div className="mdImg">

![calling-functions](https://ict.senecacollege.ca//~ipc144/pages/images/calling.png)

</div>
An argument may be a constant, a variable, or an expression (with certain exceptions).  The number of arguments in a function call should match the number of parameters in the function header.

### Pass By Value

The C language passes data from a caller to a function by value. That is, it passes a copy of the value and not the value itself. The value passed is stored as the inital value is the parameters that corresponds to the argument in the function call.

Each parameter is a variable with its own memory location. We refer to the mechanism of allocating separate memory locations for parameters and using the arguments in the function call to initialize these parameters as **_pass by value_**. Pass by value facilitates modular design by localizing consequences. The function being called may change the value of any of its parameters many times, but the values of the corresponding arguments in the caller remain unchanged. In other words, a function cannot change the value of an argument in the call to the function. This language feature ensures the variables in the caller are relatively secure.

### Mixing Types

If the type of an argument does not match the type of the corresponding parameter, the compiler coerces (narrows or promotes) the value of the argument into a value of the type of the corresponding parameter. Consider the `power` function listed above and the following call to it:

```c
int answer;
answer = power(2.5, 4);
```

The compiler converts the first argument into a value of type `int`

```c
int answer;
answer = power((int)2.5, 4);
```

The C compiler evaluates the cast (coercion) of 2.5 before passing the value of type `int` to `power` and initializing the parameter to the cast result (2).

## Walkthroughs

The structure of a walkthrough table for a modular program is a simple extension of the structure of the walkthrough table shown in the chapter entitled [Testing and Debugging](../B-Computations/testing-and-debugging.md). The table for a modular program groups the variables under their parent functions.

<table border="0">
<thead>
<tr><td align="center" colSpan="3">int</td>
<td align="center" colSpan="3">type</td></tr>
<tr><td align="center" colSpan="3">main(void)</td>
<td align="center" colSpan="3">--function identifier here--</td></tr>
</thead>
<tbody>
<tr><td align="center">type</td>
<td align="center">...</td>
<td align="center">type</td>
<td align="center">type</td>
<td align="center">...</td>
<td align="center">type</td></tr>
<tr><td align="center">variable z</td>
<td align="center">...</td>
<td align="center">variable a</td>
<td align="center">variable z</td>
    <td align="center">...</td>
    <td align="center">variable a</td></tr>
<tr><td align="center">&amp;z</td>
    <td align="center">...</td>
    <td align="center">&amp;a</td>
    <td align="center">&amp;z</td>
    <td align="center">...</td>
    <td align="center">&amp;a</td></tr>
<tr><td colSpan="6"></td></tr>
<tr><td align="center">initial value</td>
    <td align="center">...</td>
    <td align="center">initial value</td>
    <td align="center">initial value</td>
    <td align="center">...</td>
    <td align="center">initial value</td></tr>
<tr><td align="center">next value</td>
    <td align="center">...</td>
    <td align="center">next value</td>
    <td align="center">next value</td>
    <td align="center">...</td>
    <td align="center">next value</td></tr>
<tr><td align="center">next value</td>
    <td align="center">...</td>
    <td align="center">next value</td>
    <td align="center">next value</td>
    <td align="center">...</td>
    <td align="center">next value</td></tr>
<tr><td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">next value</td>
    <td align="center">...</td>
    <td align="center">next value</td></tr>
<tr><td align="center">initial value</td>
    <td align="center">...</td>
    <td align="center">initial value</td>
    <td align="center">initial value</td>
    <td align="center">...</td>
    <td align="center">initial value</td></tr>
<tr><td align="center">next value</td>
    <td align="center">...</td>
    <td align="center">next value</td>
    <td align="center">next value</td>
    <td align="center">...</td>
    <td align="center">next value</td></tr>
<tr><td align="center">next value</td>
    <td align="center">...</td>
    <td align="center">next value</td>
    <td align="center">next value</td>
    <td align="center">...</td>
    <td align="center">next value</td></tr>
<tr><td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">next value</td>
    <td align="center">...</td>
    <td align="center">next value</td></tr>
<tr><td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">next value</td>
    <td align="center">...</td>
    <td align="center">next value</td></tr>
</tbody>
</table>

<hr/>

**Output:**

_(record output here line by line)_

**Example**

The completed walkthrough table for the power.c program listed above is shown below:

- **& represents the address.**

<table border="0">
<thead>
<tr><td align="center" colSpan="3">int</td>
    <td align="center" colSpan="4">int</td></tr>
<tr><td align="center" colSpan="3">main(void)</td>
    <td align="center" colSpan="4">power(int base, int exponent)</td></tr>
</thead>
<tbody>
<tr><td align="center">int</td>
    <td align="center">int</td>
    <td align="center">int</td>
    <td align="center">int</td>
    <td align="center">int</td>
    <td align="center">int</td>
    <td align="center">int</td></tr>
<tr><td align="center">base</td>
    <td align="center">exp</td>
    <td align="center">answer</td>
    <td align="center">base</td>
    <td align="center">exponent</td>
    <td align="center">result</td>
    <td align="center">i</td></tr>
<tr><td align="center">&amp;100</td>
    <td align="center">&amp;104</td>
    <td align="center">&amp;108</td>
    <td align="center">&amp;10C</td>
    <td align="center">&amp;110</td>
    <td align="center">&amp;114</td>
    <td align="center">&amp;118</td></tr>
<tr><td align="center">3</td>
    <td align="center"></td>
    <td align="center"></td>
    <td align="center"></td>
    <td align="center"></td>
    <td align="center"></td>
    <td align="center"></td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center"></td>
    <td align="center"></td>
    <td align="center"></td>
    <td align="center"></td>
    <td align="center"></td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center"></td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center"></td>
    <td align="center"></td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center"></td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">1</td>
    <td align="center"></td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center"></td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">1</td>
    <td align="center">0</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center"></td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">3</td>
    <td align="center">0</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center"></td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">3</td>
    <td align="center">1</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center"></td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">9</td>
    <td align="center">1</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center"></td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">9</td>
    <td align="center">2</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center"></td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">27</td>
    <td align="center">2</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center"></td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">27</td>
    <td align="center">3</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center"></td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">81</td>
    <td align="center">3</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center"></td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">81</td>
    <td align="center">4</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center">81</td>
    <td align="center"></td>
    <td align="center"></td>
    <td align="center"></td>
    <td align="center"></td></tr>
</tbody>
</table>

:::note

Each parameter occupies a memory location that is distinct from any other location in the caller. For example, the parameter `base` in `power()` occupies a different memory location than the variable `base` in `main()`.

:::

## Validation (optional)

Ensuring that programming assumptions are not breached by the user is part of good program design. Our function to raise an integer base to the power of an exponent is based on the assumption that the exponent is non-negative. Accordingly, we need to validate the user input to ensure that our assumption holds.

Let us introduce a function named `getNonNegInt()` that only accepts non negative integer values from the user:

```c
/* Raise an Integer to the Power of an Integer
 * power.c
 */

#include <stdio.h>

// getNonNegInt returns a non-negative integer
//
// getNonNegInt assumes that the user enters only
// integer values and no trailing characters
//
int getNonNegInt(void)
{
    int value;

    do {
            printf(" Non-negative : ");
            scanf("%d", &value);
            if (value < 0)
                    printf(" * Negative! *\n");
    } while(value <= 0);

    return value;
}

// power returns the value of base raised to
//  the power of exponent (base^exponent)
//
//  power assumes that base and exponent are
//  integer values and exponent is non-negative
//
int power(int base, int exponent)
{
    int result, i;

    result = 1;
    for (i = 0; i < exponent; i++)
            result = result * base;

    return result;
}

int main(void)
{
    int base, exp, answer;

    printf("Enter base : ");
    scanf("%d", &base);

    printf("Enter exponent\n");
    exp = getNonNegInt();
    answer = power(base, exp);

    printf("%d^%d is %d\n", base, exp, answer);

    return 0;
}
```

#### Code Output

```c
Non-negative : -2
* Negative! * //error message from do-while
Non-negative : 4

Enter base : 3
Enter exponent //exponent becomes "4"

3^4 is 81
```

## Walkthrough

The table below lists the values of the local variables in this source file at different stages of execution:

<table border="0">
<thead>
<tr>
<td align="center" colSpan="3">int</td>
<td align="center" colSpan="4">int</td>
<td align="center">int</td></tr>
<tr><td align="center" colSpan="3">main(void)</td>
<td align="center" colSpan="4">power(int base, int exponent)</td>
<td align="center">getNonNegInt(void)</td></tr>
</thead>
<tbody>
<tr><td align="center">int</td>
    <td align="center">int</td>
    <td align="center">int</td>
    <td align="center">int</td>
    <td align="center">int</td>
    <td align="center">int</td>
    <td align="center">int</td>
    <td align="center">int</td></tr>
<tr><td align="center">base</td>
    <td align="center">exp</td>
    <td align="center">answer</td>
    <td align="center">base</td>
    <td align="center">exponent</td>
    <td align="center">result</td>
    <td align="center">i</td>
    <td align="center">value</td></tr>
<tr><td align="center">?</td>
    <td align="center">?</td>
    <td align="center">?</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td></tr>
<tr><td align="center">3</td>
    <td align="center">?</td>
    <td align="center">?</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td></tr>
<tr><td align="center">3</td>
    <td align="center">?</td>
    <td align="center">?</td>
    <td align="center"></td>
    <td align="center"></td>
    <td align="center"></td>
    <td align="center"></td>
    <td align="center">-2</td></tr>
<tr><td align="center">3</td>
    <td align="center">?</td>
    <td align="center">?</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">4</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center">?</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center">?</td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">?</td>
    <td align="center">?</td>
    <td align="center">&nbsp;</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center">?</td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">1</td>
    <td align="center">?</td>
    <td align="center">&nbsp;</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center">?</td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">1</td>
    <td align="center">0</td>
    <td align="center">&nbsp;</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center">?</td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">3</td>
    <td align="center">0</td>
    <td align="center">&nbsp;</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center">?</td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">3</td>
    <td align="center">1</td>
    <td align="center">&nbsp;</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center">?</td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">9</td>
    <td align="center">1</td>
    <td align="center">&nbsp;</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center">?</td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">9</td>
    <td align="center">2</td>
    <td align="center">&nbsp;</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center">?</td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">27</td>
    <td align="center">2</td>
    <td align="center">&nbsp;</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center">?</td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">27</td>
    <td align="center">3</td>
    <td align="center">&nbsp;</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center">?</td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">81</td>
    <td align="center">3</td>
    <td align="center">&nbsp;</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center">?</td>
    <td align="center">3</td>
    <td align="center">4</td>
    <td align="center">81</td>
    <td align="center">4</td>
    <td align="center">&nbsp;</td></tr>
<tr><td align="center">3</td>
    <td align="center">4</td>
    <td align="center">81</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td>
    <td align="center">&nbsp;</td></tr>
</tbody>
</table>

The shaded areas show the stages in their lifetimes at which the variables are visible. The unshaded areas identify the stages at which the variables are out of scope of the function that has control. The values marked ? are undefined.
