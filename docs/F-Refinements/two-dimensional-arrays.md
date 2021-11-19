---
id: two-dimensional-arrays
title: Two-Dimensional Arrays
sidebar_position: 5
slug: /refinements/two-dimensional-arrays
description: This chapter describes the use of two-dimensional arrays
---
# Two-Dimensional Arrays

## Learning Outcomes

After reading this section, you will be able to:

* Connect procedures using `pass-by-value` and `pass-by-address` semantics to build a complete program
* Design data collections using arrays and structures to manage information efficiently

## Introduction

A simple data structure for organizing tabular data is the two-dimensional array. The C language supports multi-dimensional arrays. The C compiler treats a two-dimensional array as an array of arrays. An obvious application of this data structure is an array of character strings. 

This chapter introduces two-dimensional arrays, describing their `syntax` and their `organization` in memory. This chapter includes sample code snippets related to arrays of character strings. 

## Two-Dimensional Syntax

A table is a useful analogy for describing a two-dimensional array. An entry in a table is identified by its row and column positions. Consider the row and column indices in the figure below. `The first index` refers to the `row` and `the second index` refers to the `column`.

![5x5_2DArrayExample](https://ict.senecacollege.ca//~ipc144/pages/images/2d%20array.png)

To **identify an element** of a two-dimensional array we use `two pairs of brackets`. The index within the `left pair` identifies the `row`, while the index within the `right pair` identifies the `column`: 

```c
array[ row ][ column ]
```

Indexing is **0-based** for both `rows` and `columns`.

### Definition

The definition of a two-dimensional array takes the form:

```c
type identifier[ r ][ c ] = init;
```

* `r` is the number of **rows** in the array 
* `c` is the number of **columns** in the array 
    - `r` and `c` are integer constants or constant integer expressions
* `init` is a braces-enclosed, comma-separated list of initial values.  

The `total number of elements` in the array is determined by multiplying the row size by the column size: `r * c`. The assigment operator (`=`) together with `init` are optional.

If we add an initialization list, we may optionally omit the value of `r`.  If `r * c` exceeds the number of initial values, the compiler initializes the remaining elements to `0`. If we omit the initialization list, we must specify `r`. We must always specify `c`. 

**For example:**

```c
int a[4][5] = {11, 12, 13, 14, 15,
               21, 22, 23, 24, 25,
               31, 32, 33, 34, 35,
               41, 42, 43, 44, 45}; 
```

To improve clarity, we may enclose each subset of initial values for each row in additional braces: 

```c
int a[4][5] = {{11, 12, 13, 14, 15},
               {21, 22, 23, 24, 25},
               {31, 32, 33, 34, 35},
               {41, 42, 43, 44, 45}}; 
```

## Order

The C language stores the elements of a two-dimensional array in `row-major` order: the first row, **column-element by column-element**, then the second row, column-element by column-element, then the third row, etc.. 

For example, the elements of the array:

```c
int a[4][5];
```

are stored as follows:

```
a[0][0] a[0][1] a[0][2] a[0][3] a[0][4]
a[1][0] a[1][1] a[1][2] a[1][3] a[1][4]
a[2][0] a[2][1] a[2][2] a[2][3] a[2][4]
a[3][0] a[3][1] a[3][2] a[3][3] a[3][4] 
```

> **⚠ WARNING:**
> Some programming languages store two-dimensional arrays in column-major order!

### Passing to a Function

We pass a two-dimensional array to a function in the same way that we pass a one-dimensional array. We specify the name of the array as an argument in the function call. The corresponding function parameter receives the value of this argument as the address of the array. The parameter declaration identifies the array as two-dimensional by two pairs of brackets. The parameter declaration includes the array's column dimension.(the column dimension must be included)

**For Example:**

```c
// Two-Dimensional Arrays
// pass2DArray.c

#include <stdio.h>

#define NCOLS 3

void display(int data[][NCOLS], int rows, int cols);

int main(void)
{
    int a[2][NCOLS] = {{11, 12, 13}, {21, 22, 23}};

    display(a, 2, 3);
}

void display(int data[][NCOLS], int rows, int cols)
{
    int i, j;

    for (i = 0; i < rows; i++) 
    {
        for (j = 0; j < cols; j++){
            printf("%d ", data[i][j]);
        }
        printf("\n");
    }
}
```

The above program produces the following output:

```
11 12 13
21 22 23
```

The compiler needs the column dimension (`NCOLS`) to determine the start of each `row` within the array. As with one-dimensional arrays the first dimension does not need to be included. 

### Passing a Specific Row of an Array

A two-dimensional C array is an array of one-dimensional arrays:

```
a[0][0] a[0][1] a[0][2] a[0][3] a[0][4] first row
a[1][0] a[1][1] a[1][2] a[1][3] a[1][4] second row
a[2][0] a[2][1] a[2][2] a[2][3] a[2][4] third row
a[3][0] a[3][1] a[3][2] a[3][3] a[3][4] fourth row 
```

A reference to an entire row of a two-dimensional array takes the form of the name of the array followed by the row number within brackets:

```c
array[ row ]
```

To pass a specific row to a function, we identify the row as part of the argument in the function call. 

**For example:**

```c
// Two-Dimensional Arrays
// passRow.c

#include <stdio.h>

#define NCOLS 3

void displayRow(int data[], int cols);

int main(void)
{
    int a[2][NCOLS] = {{11, 12, 13}, {21, 22, 23}};

    displayRow (a[0], NCOLS); // pass first row
    displayRow (a[1], NCOLS); // pass second row
}

void displayRow(int data[], int cols)
{
    int i;

    for (i = 0; i < cols; i++){
        printf("%d ", data[i]);
    }
    printf("\n");
}
```

The above program produces the following output:

```
11 12 13
21 22 23
```

`a[0]` points to the **first row** of `array a` and holds the address of the **first element** of that row.

`a[1]` points to the **second row** of `array a` and holds the address of the **first element** of that row. 


## Arrays of Character Strings

An array of C-strings is a two-dimensional array. The `row` index refers to `a particular character string`, while the `column` index refers to `a particular character within a character string`. 

### Definition

The definition of an array of character strings takes the form:

```c
char identifier[NO_OF_STRINGS][MAX_NO_OF_BYTES_PER_STRING];
```

To declare an array of `5` **names** with each name holding up to `30` **characters**, we write:

```c
char name[5][31];
```

>**📓 Note:**
>The number of names (`[5]`) precedes the maximum number of characters in a name (`[31]`).

**Initialization**

Initialization of an array of character strings takes the form:

```c
char identifier[NO_OF_STRINGS][MAX_NO_OF_BYTES_PER_STRING] = {
                    initializer_1, initializer_2, ... };
```

**For Example:**

```c
char name[5][31] = {"Harry", "Jean", "Jessica", "Irene", "Jim"}; 
```

### A String within an Array of Strings

To refer to a string within an array of strings, we follow the array identifier with `a single pair of brackets`. The index within the pair of brackets identifies the string within the array. 

The address of a string in an array of strings takes the form:

```c
identifer[index]
```

**For Example:**

```c
name[1]
```

The above example references the second string in `name`.

**Address of a Character**

To refer to a character within a string, we follow the array identifier with `two pairs of brackets`, the first containing the index that identifies the string and the second containing the index that identifies the character within that string.

**For Example:**

```c
name[1][2]
```

The above example references the third character within the second string of `name`.

```c
&name[1][2]
```

The above example references the address of the third character within the second string of `name`.

### Input and Output

* **Input**

To accept input for a list of 5 names, we write:

```c
int i;
char name[5][31];

for (i = 0; i < 5; i++){
    scanf(" %[^\n]", name[i]); 
}
```

> **💁 Reminder:**
> The space in the format string skips leading whitespace before accepting the string.

* **Output**

To display the third string in name, we write:

```c
char name[5][31] = {"Harry", "Jean", "Jessica", "Irene", "Jim"}; 

printf("%s", name[2]);
```

### Functions

* **Arguments**

To pass a list of names to a function, we write:

```c
char names[5][31] = {"name1", "name2", "name3", "name4", "name5"};

display(names, 5);
```

* **Parameters**

To receive the address of this array of strings in a function parameter, we write:

```c
void display(char names[][31], int count) 
{
    int i;

    for(i = 0; i < count; i++){
        printf("%s\n", names[i]);
    }
}
```
