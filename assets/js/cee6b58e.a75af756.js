"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[697],{3905:function(t,n,e){e.d(n,{Zo:function(){return s},kt:function(){return c}});var l=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function d(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,l,a=function(t,n){if(null==t)return{};var e,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var o=l.createContext({}),u=function(t){var n=l.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):d(d({},n),t)),e},s=function(t){var n=u(t.components);return l.createElement(o.Provider,{value:n},t.children)},k={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},p=l.forwardRef((function(t,n){var e=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=u(e),c=a,m=p["".concat(o,".").concat(c)]||p[c]||k[c]||r;return e?l.createElement(m,d(d({ref:n},s),{},{components:e})):l.createElement(m,d({ref:n},s))}));function c(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var r=e.length,d=new Array(r);d[0]=p;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,d[1]=i;for(var u=2;u<r;u++)d[u]=e[u];return l.createElement.apply(null,d)}return l.createElement.apply(null,e)}p.displayName="MDXCreateElement"},958:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var l=e(7462),a=e(3366),r=(e(7294),e(3905)),d=["components"],i={id:"pointers",title:"Pointers",sidebar_position:2,description:"A variable that holds an address is called a pointer"},o="Pointers",u={unversionedId:"D-Modularity/pointers",id:"D-Modularity/pointers",isDocsHomePage:!1,title:"Pointers",description:"A variable that holds an address is called a pointer",source:"@site/docs/D-Modularity/pointers.md",sourceDirName:"D-Modularity",slug:"/D-Modularity/pointers",permalink:"/D-Modularity/pointers",editUrl:"https://github.com/Seneca-ICTOER/Intro2C/tree/main/docs/D-Modularity/pointers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"pointers",title:"Pointers",sidebar_position:2,description:"A variable that holds an address is called a pointer"},sidebar:"courseNotesSidebar",previous:{title:"Functions",permalink:"/D-Modularity/functions"},next:{title:"Functions, Arrays and Structs",permalink:"/D-Modularity/functions-arrays-and-structs"}},s=[{value:"Learning Outcomes",id:"learning-outcomes",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Addresses",id:"addresses",children:[{value:"Pointer",id:"pointer",children:[],level:3},{value:"Pointer Types",id:"pointer-types",children:[],level:3},{value:"NULL Address",id:"null-address",children:[],level:3}],level:2},{value:"Parameters",id:"parameters",children:[{value:"Pass-by-Value",id:"pass-by-value",children:[{value:"Walkthrough Table",id:"walkthrough-table",children:[],level:4}],level:3},{value:"Pass-by-Address",id:"pass-by-address",children:[{value:"Walkthrough Table",id:"walkthrough-table-1",children:[],level:4}],level:3}],level:2},{value:"Multiple Return Values",id:"multiple-return-values",children:[],level:2}],k={toc:s};function p(t){var n=t.components,i=(0,a.Z)(t,d);return(0,r.kt)("wrapper",(0,l.Z)({},k,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pointers"},"Pointers"),(0,r.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,r.kt)("p",null,"After reading this section, you will be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Design procedures using selection and iteration constructs to solve a programming task"),(0,r.kt)("li",{parentName:"ul"},"Connect procedures using pass-by-address semantics to build a complete program"),(0,r.kt)("li",{parentName:"ul"},"Trace the execution of a complete program to validate its correctness")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Programming languages set different rules for passing data from one module to another. The C programming language was designed from the outset to safeguard data in each module from corruption by another module. The language's ",(0,r.kt)("a",{parentName:"p",href:"/D-Modularity/functions#pass-by-value",title:"How data is passed to functions"},"pass-by-value mechanism")," prevents one function from making any direct change to any variable outside that ",(0,r.kt)("a",{parentName:"p",href:"/D-Modularity/functions",title:"Functions"},"function"),". A function's parameters receive copies of its caller's arguments so that any changes that the function makes to the parameter values only affect those copies. The calling function's arguments remain unaltered."),(0,r.kt)("p",null,"Cases arise that require changing the value of an external variable from within a function. The C language enables this through the ",(0,r.kt)("a",{parentName:"p",href:"/A-Introduction/information#addresses",title:"Memory addresses"},"variable's address"),"."),(0,r.kt)("p",null,"This chapter describes how to receive the address of a variable in a function parameter, how to change the value stored in that address from within the function and how to walkthrough code that accesses addresses."),(0,r.kt)("h2",{id:"addresses"},"Addresses"),(0,r.kt)("p",null,"Every program variable occupies a unique address in memory throughout its lifetime. The 'address of' operator (",(0,r.kt)("inlineCode",{parentName:"p"},"&"),") applied to a variable's identifier evaluates to the address of that variable in memory."),(0,r.kt)("p",null,"The following program fills the address of ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," (written as ",(0,r.kt)("inlineCode",{parentName:"p"},"&x"),") with user supplied input. The program then displays the value stored and its address in memory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'/* Working with Addresses\n * addresses.c\n */\n\n#include <stdio.h>\n\nint main(void)\n{\n    int x;\n\n    printf("Enter x : ");\n    scanf("%d", &x);\n    printf("Value stored in x   :%d\\n", x);\n    printf("Address of x        :%x\\n", &x);\n\n    return 0;\n}\n')),(0,r.kt)("p",null,"The above program produces the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Enter x : 45\nValue stored in x   :45\nAddress of x        :12f9a0\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"%x")," is the ",(0,r.kt)("a",{parentName:"p",href:"/F-Refinements/more-input-and-output#conversion-specifiers",title:"Formatted output with printf"},"conversion specifier")," for integer output in hexadecimal format."),(0,r.kt)("h3",{id:"pointer"},"Pointer"),(0,r.kt)("p",null,"A variable that holds an address is called a pointer. To store a variable's address, we define a pointer of the variable's type and assign the variable's address to that pointer. A pointer definition takes the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"type *identifier;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"type *")," is the type of the pointer, and ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," is the name of the pointer."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," operator stands for 'data at address' or simply 'data at' and is called the ",(0,r.kt)("em",{parentName:"p"},"dereferencing")," or ",(0,r.kt)("em",{parentName:"p"},"indirection")," operator. This operator applied to a pointer's identifier evaluates to the value in the address that that pointer holds."),(0,r.kt)("p",null,"The following program stores the address of variable ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," in pointer ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," and displays the value in that address using the pointer ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'/* Working with Pointers\n * pointers.c\n */\n\n#include <stdio.h>\n\nint main(void)\n{\n    int x;\n    int *p = &x; // store address of x in p\n\n    printf("Enter x : ");\n    scanf("%d", &x);\n    printf("Value stored in x : %d\\n", *p);\n    printf("Address of x      : %x\\n", p);\n\n    return 0;\n}\n')),(0,r.kt)("p",null,"The above program produces the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Enter x : 45\nValue stored in x : 45\nAddress of x      : 3cf760\n")),(0,r.kt)("h3",{id:"pointer-types"},"Pointer Types"),(0,r.kt)("p",null,"The C language supports a pointer type for every primitive or derived type:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Pointer Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char *"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"short")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"short *"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int *"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long *"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long long")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long long *"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float *"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"double")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"double *"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long double")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long double *"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"struct Product")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"struct Product *"))))),(0,r.kt)("p",null,"C compilers typically store addresses in 4 bytes of memory."),(0,r.kt)("h3",{id:"null-address"},"NULL Address"),(0,r.kt)("p",null,"Each pointer type has a special value called its null value. The constant ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," is an implementation defined constant that contains this null value (typically, 0). This constant is defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<stdio.h>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<stddef.h>")," header files."),(0,r.kt)("p",null,"It is good style to initialize the value of a pointer to ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," before the address is known. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int *p = NULL;\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"A function can receive in its parameters not only data values but also addresses of program variables."),(0,r.kt)("h3",{id:"pass-by-value"},"Pass-by-Value"),(0,r.kt)("p",null,"Consider a function named ",(0,r.kt)("inlineCode",{parentName:"p"},"internal_swap()")," that swaps the values stored in two memory locations. We call this function from ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," and note that the swap remains completely within the function itself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'/* Internal swap\n *  internal_swap.c\n */\n\n#include <stdio.h>\n\nvoid internal_swap (int a, int b)\n{\n    int c;\n\n    printf("a is %d, b is %d\\n", a, b);\n\n    c = a;\n    a = b;\n    b = c;\n\n    printf("a is %d, b is %d\\n", a, b);\n}\n\nint main(void)\n{\n    int a, b;\n\n    printf("a is ");\n    scanf("%d", &a);\n    printf("b is ");\n    scanf("%d", &b);\n\n    internal_swap(a, b);\n\n    printf("After internal_swap:\\n"\n            "a is %d\\n"\n            "b is %d\\n", a, b);\n\n    return 0;\n}\n')),(0,r.kt)("p",null,"The above program produces the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"a is 5\nb is 6\na is 5, b is 6\na is 6, b is 5\nAfter internal_swap:\na is 5\nb is 6\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Although ",(0,r.kt)("inlineCode",{parentName:"p"},"internal_swap()")," does exchange the values in variables ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),", the pass-by-value mechanism preserves the original values in ",(0,r.kt)("inlineCode",{parentName:"p"},"main().")))),(0,r.kt)("h4",{id:"walkthrough-table"},"Walkthrough Table"),(0,r.kt)("p",null,"The walkthrough table shows how the changes remain completely within ",(0,r.kt)("inlineCode",{parentName:"p"},"internal_swap()")," function scope:"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{colSpan:"3"},(0,r.kt)("code",null,"void")),(0,r.kt)("td",{colSpan:"2"},(0,r.kt)("code",null,"int"))),(0,r.kt)("tr",null,(0,r.kt)("td",{colSpan:"3"},(0,r.kt)("code",null,"local_swap(int a, int b)")),(0,r.kt)("td",{colSpan:"2"},(0,r.kt)("code",null,"main(void)"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"int")),(0,r.kt)("td",null,(0,r.kt)("code",null,"int")),(0,r.kt)("td",null,(0,r.kt)("code",null,"int")),(0,r.kt)("td",null,(0,r.kt)("code",null,"int")),(0,r.kt)("td",null,(0,r.kt)("code",null,"int"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"a")),(0,r.kt)("td",null,(0,r.kt)("code",null,"b")),(0,r.kt)("td",null,(0,r.kt)("code",null,"c")),(0,r.kt)("td",null,(0,r.kt)("code",null,"a")),(0,r.kt)("td",null,(0,r.kt)("code",null,"b"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF78")),(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF7C")),(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF6C")),(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF88")),(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF84"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6")),(0,r.kt)("td",null,"?"),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"6")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"6")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"6")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6"))))),(0,r.kt)("p",null,"The hexadecimal values below the variable identifiers are their addresses in memory."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The addresses of ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"internal_swap()")," are different from those in ",(0,r.kt)("inlineCode",{parentName:"p"},"main()"),"."))),(0,r.kt)("p",null,"The program ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"copies"))," the argument values (",(0,r.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),") as initial values into parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),". The swapping only affects ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"internal_swap()")," function."),(0,r.kt)("h3",{id:"pass-by-address"},"Pass-by-Address"),(0,r.kt)("p",null,"To change the original values, we pass the addresses of their variables instead of their values. We use these addresses to access the original values and change them from within the function."),(0,r.kt)("p",null,"Consider the following program:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'/* Swapping values using a function\n *  swap.c\n */\n\n#include <stdio.h>\n\nvoid swap(int *p, int *q)\n{\n    int c;\n\n    c = *p;\n    *p = *q;\n    *q = c;\n}\n\nint main(void)\n{\n    int a, b;\n\n    printf("a is ");\n    scanf("%d", &a);\n    printf("b is ");\n    scanf("%d", &b);\n\n    swap(&a, &b);\n\n    printf("After swap:\\n"\n            "a is %d\\n"\n            "b is %d\\n", a, b);\n\n    return 0;\n}\n')),(0,r.kt)("p",null,"The above program produces the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"a is 5\nb is 6\nAfter swap:\na is 6\nb is 5\n")),(0,r.kt)("h4",{id:"walkthrough-table-1"},"Walkthrough Table"),(0,r.kt)("p",null,"The walkthrough table shows how the changes carry over to ",(0,r.kt)("inlineCode",{parentName:"p"},"main()"),":"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{colSpan:"3"},(0,r.kt)("code",null,"void")),(0,r.kt)("td",{colSpan:"2"},(0,r.kt)("code",null,"int"))),(0,r.kt)("tr",null,(0,r.kt)("td",{colSpan:"3"},(0,r.kt)("code",null,"swap(int *p, int *q)")),(0,r.kt)("td",{colSpan:"2"},(0,r.kt)("code",null,"main(void)"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"int *")),(0,r.kt)("td",null,(0,r.kt)("code",null,"int *")),(0,r.kt)("td",null,(0,r.kt)("code",null,"int")),(0,r.kt)("td",null,(0,r.kt)("code",null,"int")),(0,r.kt)("td",null,(0,r.kt)("code",null,"int"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"p")),(0,r.kt)("td",null,(0,r.kt)("code",null,"q")),(0,r.kt)("td",null,(0,r.kt)("code",null,"c")),(0,r.kt)("td",null,(0,r.kt)("code",null,"a")),(0,r.kt)("td",null,(0,r.kt)("code",null,"b"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF78")),(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF7C")),(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF6C")),(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF88")),(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF84"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF88")),(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF84")),(0,r.kt)("td",null,"?"),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF88")),(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF84")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF88")),(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF84")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF88")),(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF84")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF88")),(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF84")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5"))))),(0,r.kt)("p",null,"Some programmers prefer symbolic notation instead of address values. For example, they use the symbol ",(0,r.kt)("inlineCode",{parentName:"p"},"main::a")," to refer to the local variable ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," in the function ",(0,r.kt)("inlineCode",{parentName:"p"},"main()"),". A walkthrough table using symbolic notation looks something like this:"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{colSpan:"3"},(0,r.kt)("code",null,"void")),(0,r.kt)("td",{colSpan:"2"},(0,r.kt)("code",null,"int"))),(0,r.kt)("tr",null,(0,r.kt)("td",{colSpan:"3"},(0,r.kt)("code",null,"swap(int *p, int *q)")),(0,r.kt)("td",{colSpan:"2"},(0,r.kt)("code",null,"main(void)"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"int *")),(0,r.kt)("td",null,(0,r.kt)("code",null,"int *")),(0,r.kt)("td",null,(0,r.kt)("code",null,"int")),(0,r.kt)("td",null,(0,r.kt)("code",null,"int")),(0,r.kt)("td",null,(0,r.kt)("code",null,"int"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"p")),(0,r.kt)("td",null,(0,r.kt)("code",null,"q")),(0,r.kt)("td",null,(0,r.kt)("code",null,"c")),(0,r.kt)("td",null,(0,r.kt)("code",null,"a")),(0,r.kt)("td",null,(0,r.kt)("code",null,"b"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF78")),(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF7C")),(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF6C")),(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF88")),(0,r.kt)("td",null,(0,r.kt)("code",null,"0x0012FF84"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,"\xa0"),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"main::a")),(0,r.kt)("td",null,(0,r.kt)("code",null,"main::b")),(0,r.kt)("td",null,"?"),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"main::a")),(0,r.kt)("td",null,(0,r.kt)("code",null,"main::b")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"main::a")),(0,r.kt)("td",null,(0,r.kt)("code",null,"main::b")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"main::a")),(0,r.kt)("td",null,(0,r.kt)("code",null,"main::b")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"main::a")),(0,r.kt)("td",null,(0,r.kt)("code",null,"main::b")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5")),(0,r.kt)("td",null,(0,r.kt)("code",null,"6")),(0,r.kt)("td",null,(0,r.kt)("code",null,"5"))))),(0,r.kt)("h2",{id:"multiple-return-values"},"Multiple Return Values"),(0,r.kt)("p",null,"C function syntax only allows for the ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," of a single value. If program design requires a function that returns more than one value, we do so through ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"parameter pointers"))," that hold the addresses of the variables that receive the multiple return values."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Function passing several memory addresses to another function",src:e(3371).Z})),(0,r.kt)("p",null,"The following program converts day of year to month and day of month by calling function ",(0,r.kt)("inlineCode",{parentName:"p"},"day_to_dm()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'/* Day of Year to Day of Month and Month\n * day_to_dm.c\n */\n\n#include <stdio.h>\n\n// day_to_dm return day and month of given day in year\n// assumes not leap year\n//\nvoid day_to_dm(int day, int *d, int *m)\n{\n    if (day < 32)\n    {\n        *m = 1;\n        *d = day;\n    }\n    else if (day < 60)\n    {\n        *m = 2;\n        *d = day - 31;\n    }\n    else if (day < 91)\n    {\n        *m = 3;\n        *d = day - 59;\n    }\n    else if (day < 121)\n    {\n        *m = 4;\n        *d = day - 90;\n    }\n    else if (day < 152)\n    {\n        *m = 5;\n        *d = day - 120;\n    }\n    else if (day < 182)\n    {\n        *m = 6;\n        *d = day - 151;\n    }\n    else if (day < 223)\n    {\n        *m = 7;\n        *d = day - 181;\n    }\n    else if (day < 254)\n    {\n        *m = 8;\n        *d = day - 222;\n    }\n    else if (day < 284)\n    {\n        *m = 9;\n        *d = day - 253;\n    }\n    else if (day < 305)\n    {\n        *m = 10;\n        *d = day - 283;\n    }\n    else if (day < 335)\n    {\n        *m = 11;\n        *d = day - 304;\n    }\n    else if (day < 366)\n    {\n        *m = 12;\n        *d = day - 334;\n    }\n}\n\nint main(void)\n{\n    int day, d, m;\n\n    printf("Day of Year : ");\n    scanf("%d", &day);\n\n    day_to_dm(day, &d, &m);\n\n    printf("Day/Month is %d/%d\\n", d, m);\n\n    return 0;\n}\n')),(0,r.kt)("p",null,"The above program produces the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Day of Year : 357\nDay/Month is 23/12\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,r.kt)("strong",{parentName:"h5"},"Design consideration:"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A function that returns values through the parameters can reserve its single ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," value for reporting an error code produced by the function."))))}p.isMDXComponent=!0},3371:function(t,n,e){n.Z=e.p+"assets/images/multiple-b18904b0d3824d17eea24fe466a90d68.png"}}]);