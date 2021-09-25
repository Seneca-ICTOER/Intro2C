---
sidebar_position: 6
---
# Algorithms

## Learning Outcomes

After reading this section, you will be able to:

* Design procedures using selection and iteration constructs to solve a programming task
* Design data collections using arrays to manage information efficiently

## Introduction

The central aspect of solving a programming task is the design of an appropriate algorithm.  An algorithm is the set of rules that define the sequence of operations required to complete the task.  Examples of tasks that require algorithms include finding the elements in a list satisfying a specified condition, sorting the elements of a list in a specified order and mixing the elements of a list.  The design of an algorithm typically involves selections and iterations; in some cases, nested selections and nested iterations.  Often, there is more than one algorithm that solves the programming task.  Different algorithms exhibit different efficiencies. 

This chapter introduces the implementations of a few more common algorithms.  We implement them in function form for use as black boxes in other applications. 

## Searching

Search algorithms finds the index of one or more array elements that satisfy a specified condition or set of conditions.  These algorithms work with key-value pairs.  Each key is unique while the values are not necessarily unique. 

### Two Algorithms

**Unsorted Key Array**

Given an unsorted key array, we start our search at the first element and progress through the array element by element until we find a match.  This algorithm involves an iteration and a selection:

```c
// Find Unit Price
// find.c

#include <stdio.h>

// find returns the index of the first element in skuData[skuCount]
// that contains the value 'findSKU'; -1 if not found
//
int find(int skuData[], int skuCount, int findSKU)
{
        int i, skuIndex = -1;

        for (i = 0; skuIndex < 0 && i < skuCount; i++)
        {
                if (findSKU == skuData[i])
                {
                        skuIndex = i; // save the index
                }
        }

        return skuIndex;
}

int main(void)
{
        int i, searchSKU;
        int sku[]      = { 2156, 4633, 3122, 5611};
        double price[] = {12.34, 7.89, 6.56, 9.32};
        const int itemCount    = 4;

        printf("SKU   : ");
        scanf("%d", &searchSKU);

        i = find(sku, itemCount, searchSKU);

        if (i >= 0 && i < itemCount)
                printf("Price : $%0.2lf\n", price[i]); 
        else
                printf("%d not in system\n", searchSKU);

        return 0;
}
```

The above program produces the following output:

```
SKU   : 4633
Price : $7.89 
```
 
> **Note**<br/>
> The value returned by find() (variable `i`) is validated to ensure that it is within the bounds of the key array (that is, we check that it is not -1 and not more than the number of items in the array). 

**Sorted Key Array (Optional)**

Given a sorted key array, we start our search in the middle of the array and at each step discard the half that doesn't contain the search key.  Although this algorithm is slightly more complicated than the unsorted one, it is significantly faster, which is important with a large number of elements. 

```c
// Find Unit Price - Sorted Keys Ascending Order
// find_ascend.c

#include <stdio.h>

// find_ascend returns the index of the first element
// in ascending order skuData[n] that contains the value 'findSKU' 
// returns -1 if not found
//
int find_ascend(int skuData[], int skuCount, int findSKU)
{
    int i, low = 0, high = skuCount - 1, skuIndex = -1;
    do {
        i = (low + high) / 2;
        if (skuData[i] < findSKU)
            low = i + 1;
        else if (skuData[i] > findSKU)
            high = i - 1;
        else
            skuIndex = i;
    } while (low <= high && skuIndex == -1);

    return skuIndex;
}

int main(void)
{
    int i, searchSKU;
    int sku[] =      { 2156,  3122, 4633, 5611 };
    double price[] = { 12.34, 6.56, 7.89, 9.32 };
    const int itemCount = 4;

    printf("SKU   : ");
    scanf("%d", &searchSKU);

    i = find_ascend(sku, itemCount, searchSKU);

    if (i >= 0 && i < itemCount)
        printf("Price : $%0.2lf\n", price[i]);
    else
        printf("%d not in system\n", searchSKU);

    return 0;
}
```

```
SKU   : 4633
Price : $7.89 
```

> **Note**<br/>
> The above example using a divide and conquor approach is refered to as a ***binary search***.

## Masking

Masking algorithms distinguish certain array elements from all other elements.  The masking array is a *parallel array* with respect to the other arrays in the set.  The elements of the masking array are *flags* that identify inclusion or exclusion. 

Consider the following program, which calculates the total purchase price for a set of products.  The user enters the sku for each product purchased and the quantity.  Some products attract HST (Harmonized Sales Tax), while others do not.  We store the skus, unit prices and tax status in three parallel arrays.  The tax status array is the masking array.  The user enters 0 to terminate input.

```c
// Total Purchase Price
// masking.c

#include <stdio.h>

#define HST 0.13

int find(int skuData[], int skuCount, int findSKU)
{
    int i, skuIndex = -1;
    for (i = 0; skuIndex < 0 && i < skuCount; i++)
    {
        if (findSKU == skuData[i])
        {
            skuIndex = i;
        }
    }

    return skuIndex;
}

int main(void)
{
    int i, searchSKU, quantity;
    int sku[] =      { 2156,  3122, 4633, 5611 };
    double price[] = { 12.34, 6.56, 7.89, 9.32 };
    int tax[] =      {   1,    0,    0,    1 };
    const int itemCount = 4;
    double sum = 0.0;

    do {
        printf("SKU     : ");
        scanf("%d", &searchSKU);

        if (searchSKU != 0)
        {
            i = find(sku, itemCount, searchSKU);

            if (i >= 0 && i < itemCount)
            {
                printf("Quantity: ");
                scanf("%d", &quantity);

                if (tax[i] == 1)
                    sum += quantity * price[i] * (1.0 + HST);
                else
                    sum += quantity * price[i];
            }
            else 
            {
                printf("%d not in system\n", searchSKU);
            }
        }
    } while (searchSKU != 0);

    printf("Total is $%0.2lf\n", sum);

    return 0;
}
```

The below output is a sample execution of the above program:

```
SKU     : 2156
Quantity: 3
SKU     : 3121
3121 not in system
SKU     : 3122
Quantity: 2
SKU     : 5611
Quantity: 1
SKU     : 0
Total is $65.48
```

## Sorting

Sorting algorithms rearrange the elements of an array according to a pre-defined rule.  Typically, this rule is ascending or descending order.  The sorting criterion may be numeric or based upon a collating sequence such as ASCII or EBCDIC.

The two simplest algorithms are:

* selection sort
* bubble sort

### Selection Sort

A selection sort selects a reference element and steps through the rest of the elements looking for any one with a value that does not meet the test condition.  If found, the algorithm swaps that element with the reference element. 

The following program sorts the array in ascending order.  Starting with the first element in the array, it picks the first unsorted element as the reference element, swaps it with the smallest element in the unsorted part of the array, and iterates until it reaches the last element in the array.

```c
// Selection Sort
// selectionSort.c

#include <stdio.h>

// selectSort sorts the elements of data[itemCount] in ascending order
//
void selectSort(int data[], int itemCount)
{
    int i, j, minIdx;
    int temp;

    for (i = 0; i < itemCount; i++) 
    {
        minIdx = i;

        for (j = i + 1; j < itemCount; j++)
        {
            if (data[j] < data[minIdx])
            {
                minIdx = j;
            }
        }

        if (minIdx != i)
        {
            temp = data[i];
            data[i] = data[minIdx];
            data[minIdx] = temp;
        }
    }
}

int main(void)
{
    int i;
    int sku[] = { 2156, 4633, 3122, 5611 };
    const int skuCount = 4;

    selectSort(sku, skuCount);

    for (i = 0; i < skuCount; i++)
        printf("%6d\n", sku[i]);

    return 0;
}
```

The above program produces the following output:

```
  2156
  3122
  4633
  5611 
```

### Bubble Sort

A bubble sort moves through the array element by element swapping elements if the next one does not satisfy the sort condition.  The algorithm repeats this process for each unsorted subset of the array starting with the first element.  The algorithm moves elements to their terminal positions just like bubbles rising through a liquid - hence the name bubble sort.

```c
// Bubble Sort
// bubbleSort.c

#include <stdio.h>

// bubbleSort sorts the elements of a[skuCount] in ascending order 
//
void bubbleSort(int data[], int itemCount)
{
    int i, j;
    int temp;

    for (i = itemCount - 1; i > 0; i--)
    {
        for (j = 0; j < i; j++) 
        {
            if (data[j] > data[j + 1])
            {
                temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
}

int main(void)
{
    int i;
    int sku[] = { 2156, 4633, 3122, 5611 };
    const int skuCount = 4;

    bubbleSort(sku, skuCount);

    for (i = 0; i < skuCount; i++)
        printf("%6d\n", sku[i]);

    return 0;
}
```
The above program produces the following output:

```
  2156
  3122
  4633
  5611 
```

### Sorting Strings (Optional)

The following program accepts a list of names, sorts them in alphabetic order and displays the sorted list:

```c
// Sort a List of Names
// sortNames.c

#include <stdio.h>
#include <string.h>

#define MAX_NAMES 10      // maximum number of names in the list
#define MAX_NAME_LEN 30   // maximum number of characters in a name
#define FMT_NAME_LEN "30" // used in the format string of scanf()

void bubble(char names[][MAX_NAME_LEN + 1], int size);

int main(void)
{
    char name[MAX_NAMES][MAX_NAME_LEN + 1];
    int i, nameCount, keepgoing;

    // Input the list of names
    printf("Enter names (^ to stop)\n");
    i = 0;
    do {
        printf("Name-%d: ", i + 1);
        scanf(" %"FMT_NAME_LEN"[^\n]", name[i]);
    
        keepgoing = strcmp(name[i], "^") != 0;
        i++;
    } while (keepgoing == 1 && i < MAX_NAMES);

    if (keepgoing == 1)
        nameCount = MAX_NAMES;
    else
        nameCount = i - 1;

    // sort the names
    bubble(name, nameCount);

    // display thesorted list
    for (i = 0; i < nameCount; i++)
        printf("%s\n", name[i]);

    return 0;
}

// bubbleSort sorts the elements of names[size] in ascending order 
//
void bubble(char names[][MAX_NAME_LEN + 1], int size)
{
    int i, j;
    char temp[MAX_NAME_LEN + 1];

    for (i = size - 1; i > 0; i--) 
    {
        for (j = 0; j < i; j++) 
        {
            if (strcmp(names[j], names[j + 1]) > 0)
            {
                strcpy(temp, names[j]);
                strcpy(names[j], names[j + 1]);
                strcpy(names[j + 1], temp);
            }
        }
    }
}
```
The below output is a sample execution of the above program:

```
Enter names (^ to stop)
Name-1: Timmothy
Name-2: Helen
Name-3: Demetri
Name-4: Zamphire
Name-5: Ariana
Name-6: ^
Ariana
Demetri
Helen
Timmothy
Zamphire
```

> **Note**<br/>
> NOtice the concatenation of string literals in the format string of the call to `scanf()`.  This lets us set the maximum number of input characters alongside the maximum number of characters in the array of strings at the head of the program code.  The C compiler converts a concatenation of string literals into a single literal removing the intermediate pairs of double quotes; that is, to the compiler `"a""b""c"` is the same as `"abc"`.

## Mixing (Optional)

Mixing algorithms have applications in games of chance.  Examples include shuffling the cards in a deck or tumbling numbered balls into a lottery chute.  The algorithm depends on the extent to which we seek to generate a truly fair result. 

Consider the following program, which tumbles 10 balls into a lottery chute.  To simulate mixing, the algorithm picks the index of a reference element, randomly picks the index of another element further along in the array and swap the values stored in the two elements.  This algorithm is attributed to Donald Knuth, a pioneer of computer science.

```c
// Mix Lottery Balls
// mix.c

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define BALL_COUNT 10

// mix mixes the elements in data[arraySize] randomly 
//
void shuffle(int data[], int arraySize)
{
    int i, remainingItems, j, temp;

    remainingItems = arraySize;

    for (i = 0; i < arraySize; i++) 
    {
        j = i + rand() % remainingItems;

        temp = data[i];
        data[i] = data[j];
        data[j] = temp;

        remainingItems--;
    }
}

int main(void)
{
    int i;
    int ball[BALL_COUNT];

    for (i = 0; i < BALL_COUNT; i++)
        ball[i] = i + 1;
    
    srand(time(NULL));
    shuffle(ball, BALL_COUNT);
    
    for (i = 0; i < BALL_COUNT; i++)
        printf("%2d\n", ball[i]);

    return 0;
}
```

The below output is a sample execution of the above program:

```
 2
 7
 3
 8
 6
 9
 5
10
 1
 4
```
