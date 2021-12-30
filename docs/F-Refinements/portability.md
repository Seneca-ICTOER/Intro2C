---
id: portability
title: Portability
sidebar_position: 7
description: Introduction to some coding guidelines and describes utilities available for analyzing the degree of portability
---

# Portability

## Learning Outcomes

After reading this section, you will be able to:

- Explain procedural programming using nontechnical terminology to inform a business person

## Introduction

Mature languages attract international standards. These standards promote uniformity across host platforms. Committees of compiler writers, academics, application developers and representatives from various national organizations review, discuss, negotiate and reach consensus on which elements should be included in the standard definition. Elements that are excluded are called extensions. Compiler writers include their _extensions_ in their own implementations of the agreed standard.

A standard definition enables developers to write programs with the expectation that they will compile and run on a wide variety of platforms that support the standard. By avoiding the use of extensions, we increase the portability of our software. We call standard-compliant software _highly_ portable.

This chapter reviews the C standards that have been defined throughout the language's history, introduces some coding guidelines, and describes utilities available for analyzing the degree of portability.

## The C Standards

Dennis Ritchie created the C language between 1969 and 1973, while working at AT&T Bell Labs. Brian Kernighan and Dennis Ritchie published their original description of the language in the classic book entitled "The C Programming Language" in 1978. They published a second edition in 1988.

Since then, the C language has undergone three 'standard' definitions: one in 1989, one in 1999 and the latest in 2011.

![Evolution of the C standard over the years](/img/standards.png)

### C89

In 1982, the American National Standards Institute formed committee X3J11 to propose the first standard for C. An international group converted this standard with minor modifications into the ISO/IEC 9899:1990 standard, which ANSI subsequently adopted. This was called Standard C to distinguish it from Kernighan and Ritchie C (K & R C, in short).

Standard C introduced:

- Function prototypes
- A standard library
- Whitespace before `#`
- New keywords

In 1995, ANSI introduced some amendments to Standard C, called C95, which included new conversion specifiers for `printf()` and `scanf()`, and more library functions.

### C99

ISO/IEC approved the second international standard in 1999: ISO/IEC 9899:1999 (C99).

C99 introduced:

- `long long` data type
- `_Bool` data type
- `_Complex` data type
- Complex arithmetic
- Variable-length arrays
- `//` C++ style comments
- Better support for floating-point types, including math functions for all types

### C11

ISO/IEC approved the third international standard in 2011: ISO/IEC 9899:2011 (C11).

C11 introduced:

- Multi-threading support
- Improved Unicode support
- Bounds-checking interfaces
- A create and open mode **("x")** for `fopen()`
- Removal of `gets()`
- Optional support for complex arithmetic
- Optional support for variable-length arrays

The optional support applies to features that had been mandatory under the C99 standard.

## Structured Programs

Software engineers have advocated certain paradigms for developing software. The _Structured Programming_ paradigm achieves clarity by distinguishing high-level coding techniques from low-level assembly language coding techniques. The principles of this paradigm apply to coding in many languages, including C. They may be summarized as follows:

- A structured program consists solely of three constructs: sequences, selections, and iterations
- Each structured construct exhibits a single entry point and a single exit point
- Statements that jump outside a construct are not allowed with certain exceptions (`switch case` constructs in the C language)

The following style points highlight structured properties of program code:

- Indent and align code to reveal the structure of the logic
- Indent the code consistently within a structured construct
- Separate constructs by blank lines to improve clarity

## Static Analysis (Optional)

Static analysis of a program can reveal code that might not be portable. Tools for static analysis flag suspicious code. Some popular tools for C language programs include:

- `lint` - the original analyzer written by Stephen Johnson in 1979
- Parasoft `C/C++test` - plugins for Visual Studio and Eclipse IDEs
- `Splint` - a modern open source version of `Lint`

### Lint Checking

Consider the following program:

```c
// Lint Checking
// lint.c

#include <stdio.h>

int main(void)
{
    char c;
    c = getchar();

    if (c == EOF)
    {
        printf("End of data\n");
    }
    else
    {
        printf("You entered %c\n", c);
    }

    return 0;
}
```

Under normal settings, the `gcc` and `cl` compilers will not issue any warning or error messages. If this program compiles under either of these compilers and the user enters the "_end of data_" key-combination, the output will be:

```text
End of data
```

If this program compiles under an **AIX** compiler and the user enters "_end of data_" key-combination, the output will be:

```text
You entered ÿ
```

**AIX** compilers store `char` with a range of 0 to 255, while `gcc` and `cl` store `char` with a range -127 to 127. To resolve the ambiguity, we declare `c` as `int`.

```c
// Lint Checking
// lint.c

#include <stdio.h>

int main(void)
{
    int c;  // store character as an int
    c = getchar();

    if (c == EOF)
    {
        printf("End of data\n");
    }
    else
    {
        printf("You entered %c\n", c);
    }

    return 0;
}
```

To identify this portability issue on an **AIX** platform, we can pass the source code through the Lint code checker:

```text
lint lint.c
```

Example message from `Lint`:

```text
"lint.c", line 13: warning: comparison of unsigned with negative constant
```

To identify this portability issue on a `cl` platform, we change the compiler warning level options to `/W4` (warning level 4) and `/WX` (treat all warnings as errors).

:::note
You can set these attributes in the Visual Studio project properties
:::

```text
cl lint.c /W4 /WX
```

Example message from `Lint`:

```text
lint.c(11) : error C2220: warning treated as error - no object file generated
lint.c(11) : warning C4244: '=' : conversion from 'int' to 'char', possible loss of data
```

### Documentation

You can find documentation on lint code checkers at

- [`Lint`](http://www.unix.com/man-page/FreeBSD/1/lint/ 'Linux and UNIX Man Pages')
- [`LCLint/Splint`](http://lclint.cs.virginia.edu/ 'Official page for the Splint tool')

## Guidelines (Optional)

Many organizations establish their own guidelines for maintaining consistency and continuity throughout the life cycle of the applications written by several developers. Guidelines differ from standards in the scope of their applicability: they are less prescriptive than standards.

Examples of institutional guidelines include:

- [GCC Coding Conventions](http://gcc.gnu.org/codingconventions.html#CandCxx) - guidelines for C code in the GNU project
- [Debian](http://en.wikipedia.org/wiki/Debian_Free_Software_Guidelines) - guidelines for inclusion in the Debian project
- [Carnegie Mellon University](http://users.ece.cmu.edu/~eno/coding/CCodingStandard.html) - Electrical and Computer Engineering
- [MISRA C 2012](https://www.misra.org.uk/product/misra-c2012-third-edition-first-revision/) - guideline for use of the C language in critical systems

Examples of common features in these guidelines include:

- `#include`s should follow the header comments
- `#define`s should follow the `#include`s
- `#define` constants should be in all **CAPS**
- Avoid names that differ in case only
- Avoid names that look like each other
- Constants should be of the same data type as the variables that the constants initialize
- Avoid declarations that shadow declarations at a higher level
- Avoid assuming the [ASCII collating sequence](/Resources-Appendices/ascii-collating-sequence)
- Split compound conditions into one simple condition per line
- Avoid defaulting a test condition to non-zero
- Compare to **FALSE** rather than **TRUE**
- Comment each fall through in a `switch case:`
- Attach unary operators to their operand without spaces
- Compare a pointer to `NULL` instead of to **0**
- Avoid assumptions about parameter passing and the order of their evaluation
- Avoid possible side effects such as `a[i] = b[i++];`
