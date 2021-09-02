# Operator Precedence

|Operators|Associativity|
|:---|:---|
|`()`&nbsp;&nbsp; `[]`<br/>`++`(postfix) &nbsp;`--`(postfix)|left to right  **HIGH**<br/>right to left|
|`++`(prefix) &nbsp;&nbsp;&nbsp;`--`(prefix)<br/>`!`&nbsp;&nbsp; `+`(unary) &nbsp;`-`(unary) &nbsp;`*`&nbsp;&nbsp; `&`|left to right<br/>right to left|
|`*`&nbsp;&nbsp; `/`&nbsp;&nbsp; `%`|left to right **MEDIUM**|
|`+`(binary) `-`(binary)|left to right|
|`<`&nbsp;&nbsp; `<=`&nbsp;&nbsp; `>`&nbsp;&nbsp; `>=`|left to right|
|`==`&nbsp;&nbsp; `!=`|left to right|
|`&&`|left to right|
|<code>&#124;&#124;</code> | left to right |
|`=`&nbsp;&nbsp;`+=`&nbsp;&nbsp;`-=`&nbsp;&nbsp;`*=`&nbsp;&nbsp; `/=`&nbsp;&nbsp; `%=`|right to left|
|`?:`|right to left **LOW**|
|`,`|left to right|

Unary `+`, `-` and `*` have higher precedence than the binary forms. The operator `()` refers to function call.

**Precedence** determines the order in which operands are bound to operators. Operators on the same line have the same precedence; rows are in order of decreasing precedence.  C does *not* specify the order in which the operands of an operator are evaluated. Similarly, the order in which function arguments are evaluated is not specified. Examples:

```c
// Example-1:
x = f() + g();                         

// Example-2:
a[i] = i++;

// Example-3:
printf("%d %d\n",++n,power(2,n));      

// Example-4:
z = x / ++x;
```

Programs should not depend upon the order of evaluation of expressions, except as guaranteed by ANSI C for the following operators:

```
 1.  a, b           comma operator (not the comma between arguments) 
 2.  a && b         logical and
 3.  a || b         logical or
 4.  a ? b : c      conditional 
```

All of these guarantee that expression `a` will be computed before expression `b` (or `c`).

In addition, when a function-call takes place all arguments are evaluated before control transfers to the function.

```
5.  a(b)           function call 
```

ANSI C++ guarantees that each full expression will be evaluted before going on.

```
6.  each full expression 
```
