---
sidebar_position: 3
---

# Data Conversions

## Learning Outcomes

After reading this section, you will be able to:

- How to convert between binary and hexadecimal notation
- How to convert between binary and decimal notation

## Introduction

A C program at machine-level is an assembly language program. Assembly language uses hexadecimal representation for data. The hardware itself processes information in bits. When a program outputs data in hexadecimal or binary form, we may prefer to convert it into decimal form.

This chapter describes how to convert across binary, hexadecimal and decimal representations and shows what a trivially simple program looks like in binary and hexadecimal representations.

## Binary - Hexadecimal

The most convenient base for storing byte-wise information is hexadecimal (base 16). Two hexadecimal (base 16) digits can represent one byte of information. Each hexadecimal digit represents 4 bits of binary information.

For example, the hexadecimal value 0x5C is equivalent to the binary 010111002. The 0x prefix identifies the number as hexadecimal notation. The digits in the hexadecimal number system are {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}. The characters A through F denote decimal values 10 through 15 respectively.

### Binary to Hexadecimal

To convert a binary number to its hexadecimal equivalent, we:

1. group the bits into nibbles,
2. assign powers of 2 to the different bits in each nibble,
3. multiply each bit value by the corresponding power of 2,
4. add the products together for each nibble, and
5. concatenate the nibble results

Consider the 8-bit number **01011100<sub>2</sub>**:

<table border="0">
<tr><td>Nibble #</td>
    <td colspan="4" align="center">1</td>
    <td colspan="4" align="center">0</td> </tr>

<tr><td>Bit #</td>
    <td align="center">7</td>
    <td align="center">6</td>
    <td align="center">5</td>
    <td align="center">4</td>
    <td align="center">3</td>
    <td align="center">2</td>
    <td align="center">1</td>
    <td align="center">0</td> </tr>

<tr><td>Multiplier</td>
    <td align="center">8</td>
    <td align="center">4</td>
    <td align="center">2</td>
    <td align="center">1</td>
    <td align="center">8</td>
    <td align="center">4</td>
    <td align="center">2</td>
    <td align="center">1</td> </tr>

<tr><td>Contents</td>
    <td align="center">0</td>
    <td align="center">1</td>
    <td align="center">0</td>
    <td align="center">1</td>
    <td align="center">1</td>
    <td align="center">1</td>
    <td align="center">0</td>
    <td align="center">0</td> </tr>

<tr><td>Nibble Values</td>
    <td colspan="4" align="center">0*8 + 1*4 + 0*2 + 1*1 = 0x5</td>
    <td colspan="4" align="center">1*8 + 1*4 + 0*2 + 1*0 = 0xC</td> </tr>

<tr><td>Byte Value</td>
    <td colspan="8" align="center">0x5C</td> </tr>

</table>

### Hexadecimal to Binary

To convert a hexadecimal number into its binary equivalent, we work from the lowest order bit to the highest. We identify the lowest order bit as the first target bit, then:

- divide by 2,
- put the remainder into the target bit,
- change the target to the next higher order bit

... and repeat the above until there are no more bits.

Consider the hexadecimal number **0x5C**:

- Identify the first target bit as bit 0
- Divide the number (0x5C) into left and right hexadecimal digits
- Take the right digit (0xC), divide it by 2 and put the remainder (0) in bit 0
- Take the result (0x6), divide it by 2 and put the remainder (0) in bit 1
- Take the result (0x3), divide it by 2 and put the remainder (1) in bit 2
- Take the result (0x1), divide it by 2 and put the remainder (1) in bit 3
- Take the left hexadecimal digit (0x5), divide it by 2 and put the remainder (1) in bit 4
- Take the result (0x2), divide it by 2 and put the remainder (0) in bit 5
- Take the result (0x1), divide it by 2 and put the remainder (1) in bit 6
- Take the result (0x0), divide it by 2 and put the remainder (0) in bit 7

<table border="0">
<tr><td align="center">Bit#</td>
    <td align="center">7</td>
    <td align="center">6</td>
    <td align="center">5</td>
    <td align="center">4</td>
    <td align="center">3</td>
    <td align="center">2</td>
    <td align="center">1</td>
    <td align="center">0</td> </tr>

<tr><td align="center">Byte Value</td>
    <td colspan="8" align="center">0x5C</td> </tr>

<tr><td align="center">Nibble Values</td>
    <td colspan="4" align="center">0x5</td>
    <td colspan="4" align="center">0xC</td> </tr>

<tr><td align="center">Divide by 2</td>
    <td align="center">0</td>
    <td align="center">0</td>
    <td align="center">1</td>
    <td align="center">2</td>
    <td align="center">0</td>
    <td align="center">1</td>
    <td align="center">3</td>
    <td align="center">6</td> </tr>

<tr><td align="center">Bit Values</td>
    <td align="center">0</td>
    <td align="center">1</td>
    <td align="center">0</td>
    <td align="center">1</td>
    <td align="center">1</td>
    <td align="center">1</td>
    <td align="center">0</td>
    <td align="center">0</td> </tr>
</table>

## Decimal - Binary

To convert a non-negative integer into its binary equivalent, we start with the value and an empty container that consists of target bits. We take the integer value, identify the lowest order bit in the container as our target bit, and then:

- divide the value by 2,
- store the remainder in the target bit,
- take the result as the new integer value,
- identify the next higher-order bit our new target bit, and
- repeat this set of instructions until no value is left

Consider the value **92**:

- Identify the target bit as bit numbered 0
- Take **92**, divide it by 2 and put the remainder (**0**) in bit 0
- Take the result (**46**), divide it by 2 and store the remainder (**0**) in bit 1
- Take the result (**23**), divide it by 2 and store the remainder (**1**) in bit 2
- Take the result (**11**), divide it by 2 and store the remainder (**1**) in bit 3
- Take the result (**5**), divide it by 2 and store the remainder (**1**) in bit 4
- Take the result (**2**), divide it by 2 and store the remainder (**0**) in bit 5
- Take the result (**1**), divide it by 2 and store the remainder (**1**) in bit 6
- Take the result (**0**), divide it by 2 and store the remainder (**0**) in bit 7

<table border="0">
<tr><td align="center">Bit#</td>
    <td align="center">7</td>
    <td align="center">6</td>
    <td align="center">5</td>
    <td align="center">4</td>
    <td align="center">3</td>
    <td align="center">2</td>
    <td align="center">1</td>
    <td align="center">0</td> </tr>

<tr><td align="center">Value</td>
    <td align="center">0</td>
    <td align="center">1</td>
    <td align="center">2</td>
    <td align="center">5</td>
    <td align="center">11</td>
    <td align="center">23</td>
    <td align="center">46</td>
    <td align="center">92</td> </tr>

<tr><td align="center">Bit Values</td>
    <td align="center">0</td>
    <td align="center">1</td>
    <td align="center">0</td>
    <td align="center">1</td>
    <td align="center">1</td>
    <td align="center">1</td>
    <td align="center">0</td>
    <td align="center">0</td> </tr>
</table>

(Eight bits and right to left bit numbering are for brevity and illustrative purposes only.)

To convert a binary number into its decimal equivalent, we multiply the value in each bit by its corresponding power of 2 and add the products together.

Consider the 8-bit binary number **01011100<sub>2</sub>**:

<table border="0">
<tr><td align="center">Bit #</td>
    <td align="center">7</td>
    <td align="center">6</td>
    <td align="center">5</td>
    <td align="center">4</td>
    <td align="center">3</td>
    <td align="center">2</td>
    <td align="center">1</td>
    <td align="center">0</td> </tr>

<tr><td align="center">Power of 2</td>
    <td align="center">7</td>
    <td align="center">6</td>
    <td align="center">5</td>
    <td align="center">4</td>
    <td align="center">3</td>
    <td align="center">2</td>
    <td align="center">1</td>
    <td align="center">0</td> </tr>

<tr><td align="center">Bit Values</td>
    <td align="center">0</td>
    <td align="center">1</td>
    <td align="center">0</td>
    <td align="center">1</td>
    <td align="center">1</td>
    <td align="center">1</td>
    <td align="center">0</td>
    <td align="center">0</td> </tr>

<tr><td align="center">Multiplier</td>
    <td align="center">128</td>
    <td align="center">64</td>
    <td align="center">32</td>
    <td align="center">16</td>
    <td align="center">8</td>
    <td align="center">4</td>
    <td align="center">2</td>
    <td align="center">1</td> </tr>

<tr><td align="center">Byte Value</td>
    <td colspan="8" align="center">0*128 + 1*64 + 0*32 + 1*16 + 1*8 + 1*4 + 0*2 + 0*1 = 92</td></tr>

</table>

## Program Instructions (optional)

A program instruction consists of an operation and possibly some operands. Each instruction performs an operation on its operands or on values stored in operand addresses. The addresses are either register names or addresses in primary memory.

![](https://ict.senecacollege.ca//~ipc144/pages/images/instruction.png)

The set of instructions in binary on a Windows 7 machine for a program that displays the phrase "This is C" looks like:

```
10110100 00001001
10111010 00001001 00000001
11001101 00100001
11001101 00100000
01010100
01101000
01101001
01110011
00100000
01101001
01110011
00100000
01000011
00100100
```

The equivalent hexadecimal representation is:

```
B409
BA0901
CD21
CD20
54
68
69
73
20
69
73
20
43
24
```

The first instruction moves the value 09 into register AH. 09 identifies the instruction that displays characters starting at the offset stored in register DX. The second instruction moves the offset value 0109 into register DX. The third instruction executes the instructions stored in register AH: displays the characters starting at offset 0109. The fourth instruction stops execution. The fifth through thirteenth lines hold the characters to be displayed. The fourteenth line holds the terminator that identifies the end of the set of characters.

The assembly language version of these instructions provides a more readable program. Assembly language consists of symbols and values that are more readable than simple hexadecimal digits. The assembly language version looks like:

```
MOV AH,09
MOV DX,0109
INT 21
INT 20
DB 'T'
DB 'h'
DB 'i'
DB 's'
DB ' '
DB 'i'
DB 's'
DB ' '
DB 'C'
DB '$'
```

A Windows command line accepts assembly language instructions through the `a` input option on the `debug` program. Open a command prompt window and type the following:

```
debug
-a100
1456:0100 MOV AH,09   ;move code for displaying text into register AH
1456:0102 MOV DX,0109 ;move text address offset into register DX
1456:0105 INT 21      ;call the interrupt stored in register AH
1456:0107 INT 20      ;stop execution
1456:0109 DB 'T'      ;text
1456:010A DB 'h'      ;...
1456:010B DB 'i'      ;to
1456:010C DB 's'      ;...
1456:010D DB ' '      ;be
1456:010E DB 'i'      ;...
1456:010F DB 's'      ;displayed
1456:0110 DB ' '      ;...
1456:0111 DB 'C'
1456:0112 DB '$'      ;terminator character
1456:0113
-
```

`a` refers to the input option to the `debug` program. `100` identifies the offset in memory where the instructions start.

The first entry on each line is the memory address in segment:offset form. In `debug` applications, the segments share the same address (`0x14560`). The semi-colon refers to the end of a statement and the start of programmer comments.

To execute this program, we enter:

```
-g
This is C
Program terminated normally
-
```

To quit the debug program, we enter:

```
-q
```

The `debug` program uses an operating system program called an **_assembler_** to convert our assembly language instructions into binary information as shown in the figure below:

![](https://ict.senecacollege.ca//~ipc144/pages/images/assembler.png)

We call the binary result **_machine language_**.
