"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[207],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(t),m=a,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||i;return t?r.createElement(d,s(s({ref:n},p),{},{components:t})):r.createElement(d,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=h;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},762:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),s=["components"],o={id:"string-library",title:"String Library",sidebar_position:2,description:"String library is a standard library to process character strings"},l="String Library",c={unversionedId:"F-Refinements/string-library",id:"F-Refinements/string-library",isDocsHomePage:!1,title:"String Library",description:"String library is a standard library to process character strings",source:"@site/docs/F-Refinements/string-library.md",sourceDirName:"F-Refinements",slug:"/F-Refinements/string-library",permalink:"/F-Refinements/string-library",editUrl:"https://github.com/Seneca-ICTOER/Intro2C/tree/main/docs/F-Refinements/string-library.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"string-library",title:"String Library",sidebar_position:2,description:"String library is a standard library to process character strings"},sidebar:"courseNotesSidebar",previous:{title:"Character Strings",permalink:"/F-Refinements/character-strings"},next:{title:"More Input and Output",permalink:"/F-Refinements/more-input-and-output"}},p=[{value:"Learning Outcomes",id:"learning-outcomes",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"String Functions",id:"string-functions",children:[{value:"String Length",id:"string-length",children:[],level:3},{value:"String Copy",id:"string-copy",children:[],level:3},{value:"String Compare",id:"string-compare",children:[],level:3},{value:"String Concatenate",id:"string-concatenate",children:[],level:3}],level:2}],u={toc:p};function h(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"string-library"},"String Library"),(0,i.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,i.kt)("p",null,"After reading this section, you will be able to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Implement algorithms using standard library procedures to incorporate existing technology"),(0,i.kt)("li",{parentName:"ul"},"Stream data using standard library functions to interact with users")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The standard library that ships with ",(0,i.kt)("a",{parentName:"p",href:"/A-Introduction/compilers#the-c-compiler",title:"C compiler"},"C compilers")," and processes ",(0,i.kt)("a",{parentName:"p",href:"/F-Refinements/character-strings",title:"Character Strings"},"character strings")," is called the string library. The functions in this library perform fundamental operations on character strings, which include copying one string to another, adding one string to another and comparing one string to another."),(0,i.kt)("p",null,"This chapter describes four library functions that operate on character strings: determining the length, copying one to another, comparing one to another and concatenating one to another."),(0,i.kt)("h2",{id:"string-functions"},"String Functions"),(0,i.kt)("p",null,"The functions of the string library include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"strlen()")," - returns the number of characters in a character string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"strcpy()")," - copies one character string to another"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"strcmp()")," - compares one character string to another"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"strcat()")," - concatenates one character string to another")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"These are four of the most common string functions, but there are many available in the string library."))),(0,i.kt)("p",null,"The header file that contains the prototypes for these library functions is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"#include <string.h>\n")),(0,i.kt)("h3",{id:"string-length"},"String Length"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"strlen()")," function returns the number of characters in the character string excluding the ",(0,i.kt)("a",{parentName:"p",href:"/F-Refinements/character-strings#definition-review",title:"Null Terminator"},(0,i.kt)("strong",{parentName:"a"},"null terminator byte")),". That is, ",(0,i.kt)("inlineCode",{parentName:"p"},"strlen()")," returns the index of the ",(0,i.kt)("strong",{parentName:"p"},"null terminator byte"),"."),(0,i.kt)("p",null,"The following program finds the length of the input string and reverses its contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'// Reverse a string\n// reverse_string.c\n\n#include <stdio.h>\n#include <string.h>\n\nint main(void)\n{\n    int i, len;\n    char str[31], rev[31];\n\n    printf("Enter a string   : ");\n    scanf("%30[^\\n]%*c", str);\n\n    printf("In reverse order : ");\n    len = strlen(str);\n\n    for (i = len - 1; i >= 0; i--)\n    rev[len - 1 - i] = str[i];\n\n    rev[len] = \'\\0\';\n    puts(rev);\n\n    return 0;\n}\n')),(0,i.kt)("p",null,"The above program produces the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Enter a string   : strlen\nIn reverse order : nelrts\n")),(0,i.kt)("h3",{id:"string-copy"},"String Copy"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"strcpy()")," function receives two addresses and copies the string at the second address into the memory locations starting at the first address. ",(0,i.kt)("inlineCode",{parentName:"p"},"strcpy()")," returns the address of the destination string."),(0,i.kt)("p",null,"We are responsible for ensuring that there is sufficient room in the destination string to hold all of the characters in the source string ",(0,i.kt)("strong",{parentName:"p"},"including the null terminator byte"),"."),(0,i.kt)("p",null,"The following program copies the input string only if it contains 20 characters or less:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'// Copy a string\n// copy_string.c\n\n#include <stdio.h>\n#include <string.h>\n\nint main(void)\n{\n    char str[31], copy[21] = "?";\n    int i, len;\n\n    printf("Source : ");\n    scanf("%30[^\\n]%*c", str);\n\n    len = strlen(str);\n\n    if (len < 21)\n    {\n        strcpy(copy, str);\n        printf("Copy : %s\\n", copy);\n    }\n    else\n    {\n        printf("* No room *\\n");\n        printf("Copy : %s\\n", copy);\n    }\n\n    return 0;\n}\n')),(0,i.kt)("p",null,"Sample run-through #1 of the above program:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Source : strcpy\nCopy   : strcpy\n")),(0,i.kt)("p",null,"Sample run-through #2 of the above program:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Source : this string is too long\n* No room *\nCopy   : ?\n")),(0,i.kt)("h3",{id:"string-compare"},"String Compare"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"strcmp()")," function receives two addresses and compares the string at the first address to the string at the second address."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"strcmp()")," returns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"0")," if they are identical"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"a negative value")," if the first non-matching character in the first string is, under the host computer's collating sequence, ",(0,i.kt)("strong",{parentName:"li"},"lower")," than the character with the same index in the second string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"a positive value")," if the first non-matching character in the first string is, under the host computer's collating sequence, ",(0,i.kt)("strong",{parentName:"li"},"higher")," than the character with the same index in the second string")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'// Compare Two Strings\n// compare_string.c\n\n#include <stdio.h>\n#include <string.h>\n\nint main(void)\n{\n    char str1[31], str2[31];\n    int i, len;\n\n    printf("Enter first string  : ");\n    scanf("%30[^\\n]%*c", str1);\n\n    printf("Enter second string : ");\n    scanf("%30[^\\n]%*c", str2);\n\n    if (strcmp(str1, str2) < 0)\n        printf("%s precedes %s\\n", str1, str2);\n    else if(strcmp(str1, str2) > 0)\n        printf("%s follows %s\\n", str1, str2);\n    else\n        printf("%s matches %s\\n", str1, str2);\n\n    return 0;\n}\n')),(0,i.kt)("p",null,"Sample run-through #1 of the above program:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Enter first string  : elephant\nEnter second string : elephants\nelephant precedes elephants\n")),(0,i.kt)("p",null,"Sample run-through #2 of the above program:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Enter first string  : elephant\nEnter second string : elephant\nelephant matches elephant\n")),(0,i.kt)("p",null,"Sample run-through #3 of the above program:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Enter first string  : elephants\nEnter second string : elephant\nelephants follows elephant\n")),(0,i.kt)("h3",{id:"string-concatenate"},"String Concatenate"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"strcat()")," function receives two addresses and concatenates the string at the second address to the string at the first address. ",(0,i.kt)("inlineCode",{parentName:"p"},"strcat()")," returns the address of the concatenated string."),(0,i.kt)("p",null,"We are responsible for ensuring that the destination string has enough room to hold the concatenated result ",(0,i.kt)("strong",{parentName:"p"},"along with the null terminator byte"),"."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'// Concatenate two strings\n// concatenate.c\n\n#include <stdio.h>\n#include <string.h>\n\nint main(void)\n{\n    int i, len;\n    char surname[31], fullName[62];\n\n    printf("Given name  : ");\n    scanf("%30[^\\n]%*c", fullName);\n    printf("Surname     : ");\n    scanf("%30[^\\n]%*c", surname);\n    strcat(fullName, " ");\n    strcat(fullName, surname);\n    printf("Full name is %s\\n", fullName);\n\n    return 0;\n}\n')),(0,i.kt)("p",null,"Sample run-through of the above program:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Given name  : Jane\nSurname     : Doe\nFull name is Jane Doe\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We have allocated 62 characters to accommodate 30+30 characters plus the blank space separator and the null terminator byte."))))}h.isMDXComponent=!0}}]);