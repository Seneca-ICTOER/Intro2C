"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[672],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},74939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));n(8209);const i={id:"input-functions",title:"Input Functions",sidebar_position:4,description:"Describes how to invoke invoking standard library procedures to stream data from users"},o="Input Functions",l={unversionedId:"D-Modularity/input-functions",id:"D-Modularity/input-functions",title:"Input Functions",description:"Describes how to invoke invoking standard library procedures to stream data from users",source:"@site/docs/D-Modularity/input-functions.md",sourceDirName:"D-Modularity",slug:"/D-Modularity/input-functions",permalink:"/D-Modularity/input-functions",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/Intro2C/tree/main/docs/D-Modularity/input-functions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"input-functions",title:"Input Functions",sidebar_position:4,description:"Describes how to invoke invoking standard library procedures to stream data from users"},sidebar:"courseNotesSidebar",previous:{title:"Functions, Arrays and Structs",permalink:"/D-Modularity/functions-arrays-and-structs"},next:{title:"Output Functions",permalink:"/D-Modularity/output-functions"}},s={},p=[{value:"Learning Outcomes",id:"learning-outcomes",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Buffered Input",id:"buffered-input",level:2},{value:"Unformatted Input",id:"unformatted-input",level:2},{value:"Clearing the buffer",id:"clearing-the-buffer",level:3},{value:"Pausing Execution",id:"pausing-execution",level:3},{value:"Formatted Input",id:"formatted-input",level:2},{value:"Conversion Specifiers",id:"conversion-specifiers",level:3},{value:"Whitespace",id:"whitespace",level:3},{value:"Conversion Control",id:"conversion-control",level:3},{value:"Problems with %c (Optional)",id:"problems-with-c-optional",level:3},{value:"Plain Characters (Optional)",id:"plain-characters-optional",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Validation (Optional)",id:"validation-optional",level:2}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"input-functions"},"Input Functions"),(0,r.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,r.kt)("p",null,"After reading this section, you will be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Invoke standard library procedures to stream data from users")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Some programming languages leave input and output support to the libraries developed for the languages. For instance, the core C language does not include input and output specifications. These facilities are available in a set of functions, which are defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"stdio")," module. This module ships with the C compiler. Its name stands for standard input and output. Typically, standard input refers to the system keyboard and standard output refers to the system display. The system header file that contains the prototypes for the functions in this module is ",(0,r.kt)("inlineCode",{parentName:"p"},"<stdio.h>"),"."),(0,r.kt)("p",null,"This chapter describes some of the input facilities supported by the ",(0,r.kt)("inlineCode",{parentName:"p"},"stdio")," module, introduces buffered input, describes two library functions that accept formatted and unformatted buffered input and demonstrates how to validate user input."),(0,r.kt)("h2",{id:"buffered-input"},"Buffered Input"),(0,r.kt)("p",null,"A buffer is a small region of memory that holds data temporarily and provides intermediate storage between a device and a program. The system stores each keystroke in the input buffer, without passing it to the program. The user can edit their data before submitting it to the program. only by pressing the \\n key, the user signals the program to start extracting data from the buffer. The program then only retrieves the data that it needs and leaves the rest in the buffer for future retrievals. The figure below illustrates the buffered input process."),(0,r.kt)("div",{className:"mdImg"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Input buffer diagram",src:n(81344).Z,width:"644",height:"190"}))),(0,r.kt)("p",null,"Two functions accept buffered input from the keyboard (the standard input device):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getchar() - unformatted input"),(0,r.kt)("li",{parentName:"ul"},"scanf() - formatted input")),(0,r.kt)("h2",{id:"unformatted-input"},"Unformatted Input"),(0,r.kt)("p",null,"The function ",(0,r.kt)("inlineCode",{parentName:"p"},"getchar()")," retrieves the next unread character from the input buffer."),(0,r.kt)("div",{className:"mdImg"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"getchar() diagram",src:n(36221).Z,width:"644",height:"190"}))),(0,r.kt)("p",null,"The prototype for ",(0,r.kt)("inlineCode",{parentName:"p"},"getchar()")," is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int getchar(void);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getchar()")," returns either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the character code for the retrieved character"),(0,r.kt)("li",{parentName:"ul"},"EOF")),(0,r.kt)("p",null,"The character code is the code from the ",(0,r.kt)("a",{parentName:"p",href:"/Resources-Appendices/ascii-collating-sequence"},"collating sequence")," of the host computer. If the next character in the buffer waiting to be read is ",(0,r.kt)("inlineCode",{parentName:"p"},"'j'")," and the collating sequence is ASCII, then the value returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"getchar()")," is 106."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EOF")," is the symbolic name for end of data. It is assigned the value -1 in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<stdio.h>")," system header file. On Windows systems, the user enters the end of data character by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl-Z"),"; on UNIX systems, by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl-D"),"."),(0,r.kt)("h3",{id:"clearing-the-buffer"},"Clearing the buffer"),(0,r.kt)("p",null,"To synchronize user input with program execution the buffer should be empty. The following function clears the input buffer of all unread characters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// clear empties the input buffer\n//\nvoid clear(void)\n{\n    while (getchar() != '\\n')\n    {\n        ;  // empty statement intentional\n    }\n}\n")),(0,r.kt)("p",null,"The iteration continues until ",(0,r.kt)("inlineCode",{parentName:"p"},"getchar()")," returns the newline (",(0,r.kt)("inlineCode",{parentName:"p"},"'\\n'"),") character, at which point the buffer is empty and ",(0,r.kt)("inlineCode",{parentName:"p"},"clear()")," returns control to its caller."),(0,r.kt)("h3",{id:"pausing-execution"},"Pausing Execution"),(0,r.kt)("p",null,"To pause execution at a selected point in a program, consider the following function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// pause execution\n//\nvoid pause_(void)\n{\n    printf(\"Press enter to continue ...\");\n    while (getchar() != '\\n')\n    {\n        ;  // empty statement intentional\n    }\n}\n")),(0,r.kt)("p",null,"This function will not return control to the caller until the user has pressed ",(0,r.kt)("inlineCode",{parentName:"p"},"'\\n'"),"."),(0,r.kt)("h2",{id:"formatted-input"},"Formatted Input"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf()")," function retrieves the next set of unread characters from the input buffer and translates them according to the conversion(s) specified in the format string. ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf()")," extracts only as many characters as required to satisfy the specified conversion(s)."),(0,r.kt)("div",{className:"mdImg"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"scanf() diagram",src:n(58946).Z,width:"644",height:"190"}))),(0,r.kt)("p",null,"The prototype for scanf() is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int scanf(format, ... );\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"format"))," consists of one or more conversion specifiers enclosed in a pair of double quotes. The ellipsis (",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"...")),") refers to one or more addresses."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"scanf()")," extracts characters from the input buffer until ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf()")," has either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"interpreted and processed data to match all conversion specifiers in the format string"),(0,r.kt)("li",{parentName:"ul"},"found a character that fails to match the next conversion specified in the format string"),(0,r.kt)("li",{parentName:"ul"},"emptied the buffer completely")),(0,r.kt)("p",null,"In a mismatch between the conversion specifier and the next character in the buffer, ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf()")," ",(0,r.kt)("strong",{parentName:"p"},"leaves the offending character in the buffer")," and returns to the caller. In the case of an emptied buffer, ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf()")," waits until the user adds more data to the buffer."),(0,r.kt)("p",null,"Each conversion specifier describes how ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf()")," is to interpret the next set of characters in the buffer. Once ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf()")," has completed a conversion, it stores the result in the address passed to the corresponding parameter."),(0,r.kt)("p",null,"We provide as many conversion specifiers in the format string as there are address arguments in the call to ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf()"),"."),(0,r.kt)("h3",{id:"conversion-specifiers"},"Conversion Specifiers"),(0,r.kt)("p",null,"Each conversion specifier begins with a ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," symbol and ends with a conversion character. The conversion character describes the type to which ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf()")," is to convert the next set of text characters."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Specifier"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Input Text"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Convert to Type..."),(0,r.kt)("th",{parentName:"tr",align:"left"},"Most Common (","*",")"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"%c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"character"),(0,r.kt)("td",{parentName:"tr",align:"left"},"char"),(0,r.kt)("td",{parentName:"tr",align:"left"},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"%d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"decimal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"char, int, short, long, long long"),(0,r.kt)("td",{parentName:"tr",align:"left"},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"%o"),(0,r.kt)("td",{parentName:"tr",align:"left"},"octal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int, char, short, long, long long"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"%x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"hexadecimal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int, char, short, long, long long"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"%f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"floating-point"),(0,r.kt)("td",{parentName:"tr",align:"left"},"float, double, long double"),(0,r.kt)("td",{parentName:"tr",align:"left"},"*")))),(0,r.kt)("p",null,"The following program converts two input fields into data values of int type and float type respectively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'/* scanf conversion specifiers\n* scanf.c\n*/\n\n#include <stdio.h>\n\nint main(void)\n{\n    int items;\n    float price;\n\n    printf("Enter items, price : ");\n    scanf("%d%f", &items, &price);\n\n    return 0;\n}\n')),(0,r.kt)("p",null,"The above program produces the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Enter items, price : 4 39.99\n")),(0,r.kt)("h3",{id:"whitespace"},"Whitespace"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"scanf()")," treats the whitespace between text characters of the user's input as a separator between input values. There is no need to place a blank character between the conversion specifiers."),(0,r.kt)("h3",{id:"conversion-control"},"Conversion Control"),(0,r.kt)("p",null,"We may insert control characters between the ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"conversion character"),". The general form of a conversion specification is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"% * width size conversion_character\n")),(0,r.kt)("p",null,"The three control characters are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"*")," - suppresses storage of the converted data (discards it without storing it)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"width"))," - specifies the maximum number of characters to be interpreted"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"size"))," - specifies the size of the storage type")),(0,r.kt)("p",null,"For integer values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Size Specifier"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Convert to Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"-none-")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"hh")),(0,r.kt)("td",{parentName:"tr",align:"left"},"char")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"h")),(0,r.kt)("td",{parentName:"tr",align:"left"},"short")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"l")),(0,r.kt)("td",{parentName:"tr",align:"left"},"long")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"ll")),(0,r.kt)("td",{parentName:"tr",align:"left"},"long long")))),(0,r.kt)("p",null,"For floating-point values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Size Specifier"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Convert to Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"-none-")),(0,r.kt)("td",{parentName:"tr",align:"left"},"float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"l")),(0,r.kt)("td",{parentName:"tr",align:"left"},"double")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"L")),(0,r.kt)("td",{parentName:"tr",align:"left"},"long double")))),(0,r.kt)("p",null,"A conversion specifier that includes an ",(0,r.kt)("strong",{parentName:"p"},"*")," does not have a corresponding address in the argument list. This is an exception to the matching conversion-specifier/argument rule."),(0,r.kt)("h3",{id:"problems-with-c-optional"},"Problems with %c (Optional)"),(0,r.kt)("p",null,"Because ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf()")," only extracts the characters that it needs from the input buffer, problems arise with ",(0,r.kt)("inlineCode",{parentName:"p"},"%c")," conversions. If you encounter such difficulty, see the section with this title in the chapter entitled ",(0,r.kt)("a",{parentName:"p",href:"/F-Refinements/more-input-and-output"},"More Input and Output"),"."),(0,r.kt)("h3",{id:"plain-characters-optional"},"Plain Characters (Optional)"),(0,r.kt)("p",null,"Plain characters in the format string - those not preceded by the conversion symbol - serve a special purpose. Each such character requires exact duplication on input. If the user enters a plain character other than that specified in the format string, scanf() abandons further interpretation."),(0,r.kt)("p",null,"To input ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," as a plain character (and distinguish it from the symbol identifying a conversion specifier), we insert ",(0,r.kt)("inlineCode",{parentName:"p"},"%%")," into the format string."),(0,r.kt)("h3",{id:"return-value"},"Return Value"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"scanf()")," returns either the number of addresses successfully filled or ",(0,r.kt)("inlineCode",{parentName:"p"},"EOF"),". A return value of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"0 indicates that ",(0,r.kt)("inlineCode",{parentName:"li"},"scanf()")," did not fill any address"),(0,r.kt)("li",{parentName:"ul"},"1 indicates that ",(0,r.kt)("inlineCode",{parentName:"li"},"scanf()")," filled the first address successfully"),(0,r.kt)("li",{parentName:"ul"},"2 indicates that ",(0,r.kt)("inlineCode",{parentName:"li"},"scanf()")," filled the first and second addresses successfully"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EOF")," indicates that ",(0,r.kt)("inlineCode",{parentName:"li"},"scanf()")," did not fill any address ",(0,r.kt)("strong",{parentName:"li"},"AND")," encountered an end of data character")),(0,r.kt)("p",null,"The return code from ",(0,r.kt)("inlineCode",{parentName:"p"},"scanf()")," does not reflect success of ",(0,r.kt)("strong",{parentName:"p"},"%","*")," conversions or any successful reading of plain characters in the format string."),(0,r.kt)("h2",{id:"validation-optional"},"Validation (Optional)"),(0,r.kt)("p",null,"Since we can never predict that all users will never make mistakes in inputting data to our programs, input validation is an important part of our programming tasks."),(0,r.kt)("p",null,"To validate the input data that a program receives, we can perform many checks. We localize our validation in special functions that trap erroneous input and request corrections to that input. Erroneous input may include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"invalid characters"),(0,r.kt)("li",{parentName:"ul"},"trailing characters"),(0,r.kt)("li",{parentName:"ul"},"out-of-range input"),(0,r.kt)("li",{parentName:"ul"},"incorrect number of input fields")),(0,r.kt)("p",null,"The following program includes a special function (",(0,r.kt)("inlineCode",{parentName:"p"},"getInt()"),"), which provides robust validation for integer input. This function tests for no input, trailing characters and out-of-range input."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'/* Robust Input Validation\n*  getInt.c\n*/\n\n#include <stdio.h>\n#define MIN 3\n#define MAX 15\n\nint getInt(int min, int max);\nvoid clear(void);\n\nint main(void)\n{\n    int input;\n\n    input = getInt(MIN, MAX);\n    printf("\\nProgram accepted %d\\n", input);\n\n    return 0;\n}\n\n// getInt accepts an int between min and max\n// inclusive, returns the value of the int accepted\n//\nint getInt(int min, int max)\n{\n    int value, keeptrying = 1, rc;\n    char after;\n\n    do {\n        printf("Enter an integer in range [%d,%d] : ", min, max);\n        rc = scanf("%d%c", &value, &after);\n\n        if (rc == 0)\n        {\n            printf("**Bad char(s)!**\\n");\n            clear();\n        }\n        else if (after != \'\\n\')\n        {\n            printf("**Trail char(s)!**\\n");\n            clear();\n        }\n        else if (value < min || value > max)\n        {\n            printf("**Out of range!**\\n");\n        }\n        else\n        {\n            keeptrying = 0;\n        }\n    } while (keeptrying == 1);\n\n    return value;\n}\n\n// clear empties the input buffer\n//\nvoid clear(void)\n{\n    while (getchar() != \'\\n\')\n    {\n        ;  // empty statement intentional\n    }\n}\n')),(0,r.kt)("p",null,"The above program produces the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Enter an integer in range [3,15] : we34\n**Bad char(s)!**\nEnter an integer in range [3,15] : 34.4\n**Trail char(s)!**\nEnter an integer in range [3,15] : 345\n**Out of range!**\nEnter an integer in range [3,15] : 14\n\nProgram accepted 14\n")))}u.isMDXComponent=!0},81344:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},36221:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/getchar-4bbf6cb17875a6ee991afd2d338997b3.png"},58946:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scanf-2415be7515c897882039fd6ff30f2c4f.png"},8209:(e,t,n)=>{n(67294)}}]);