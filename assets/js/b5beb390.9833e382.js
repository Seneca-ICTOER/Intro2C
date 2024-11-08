"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(83117),i=(n(67294),n(3905));n(8209);const r={id:"style-guidelines",title:"Style Guidelines",sidebar_position:5,description:"Self-document programs using comments and descriptive identifiers"},o="Style Guidelines",l={unversionedId:"B-Computations/style-guidelines",id:"B-Computations/style-guidelines",title:"Style Guidelines",description:"Self-document programs using comments and descriptive identifiers",source:"@site/docs/B-Computations/style-guidelines.md",sourceDirName:"B-Computations",slug:"/B-Computations/style-guidelines",permalink:"/B-Computations/style-guidelines",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/Intro2C/tree/main/docs/B-Computations/style-guidelines.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"style-guidelines",title:"Style Guidelines",sidebar_position:5,description:"Self-document programs using comments and descriptive identifiers"},sidebar:"courseNotesSidebar",previous:{title:"Logic",permalink:"/B-Computations/logic"},next:{title:"Testing & Debugging",permalink:"/B-Computations/testing-and-debugging"}},s={},c=[{value:"Learning Outcomes",id:"learning-outcomes",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Identifiers",id:"identifiers",level:2},{value:"Layout",id:"layout",level:2},{value:"Indentation",id:"indentation",level:3},{value:"Line Length",id:"line-length",level:3},{value:"Braces",id:"braces",level:3},{value:"Spaces",id:"spaces",level:3},{value:"Comments",id:"comments",level:3},{value:"Magic Numbers",id:"magic-numbers",level:2},{value:"Unmodifiable Variables",id:"unmodifiable-variables",level:3},{value:"Macro Directive",id:"macro-directive",level:3},{value:"Miscellaneous",id:"miscellaneous",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"style-guidelines"},"Style Guidelines"),(0,i.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,i.kt)("p",null,"After reading this section, you will be able to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Self-document programs using comments and descriptive identifiers")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A well-written program is a pleasure to read. The coding style is consistent and clear throughout. The programmer looking for a bug sees a well-defined structure and finds it easy to focus on the portion of the code that is suspect. The programmer looking to upgrade the code sees how and where to incorporate changes. Although several programmers may have contributed to the code throughout its lifetime, the code itself appears to have been written by one programmer."),(0,i.kt)("p",null,"This chapter describes the coding style used throughout these notes and recommended for an introductory course in programming. The style is referred to as the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Indentation_style#Allman_style",title:"Allman Style"},"Allman coding style"),"."),(0,i.kt)("h2",{id:"identifiers"},"Identifiers"),(0,i.kt)("p",null,"All identifiers in a program should be self-descriptive. The reader should not have to search through the code for their meaning. It is better to embed the meaning in the name, rather than to explain it in a comment elsewhere in the code. By all means, avoid referring the reader to a document external to the code itself."),(0,i.kt)("p",null,"A program with short names is easier to read than one with long names. The human eye infers the meaning of a word from just a few letters that make up that word and the context within which the word is used. Reading long identifiers tires the eyes when searching through code. We follow the sophisticated conventions of our own languages and complying with them makes our programs all the more readable. Nouns describe objects, verbs describe actions."),(0,i.kt)("p",null,"Notations, such as Hungarian notation, that incorporate the type into the identifier will clutter source code unnecessarily. C compilers know the type of each identifier and readers do not need reminders in every place the identifier appears."),(0,i.kt)("p",null,"When selecting identifiers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"adopt self-descriptive names, adding comments only if clarification is necessary"),(0,i.kt)("li",{parentName:"ul"},"prefer nouns for variable identifiers"),(0,i.kt)("li",{parentName:"ul"},"keep variable identifiers short - ",(0,i.kt)("inlineCode",{parentName:"li"},"temp"),", rather than ",(0,i.kt)("inlineCode",{parentName:"li"},"temporary"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),", rather than ",(0,i.kt)("inlineCode",{parentName:"li"},"identification"),","),(0,i.kt)("li",{parentName:"ul"},"avoid cryptic identifiers - use just enough letters for the eye to infer the meaning from the context but no less (if you want to represent 'amount owed', ",(0,i.kt)("inlineCode",{parentName:"li"},"ao")," is cryptic, while ",(0,i.kt)("inlineCode",{parentName:"li"},"amtOwed")," is clear but concise)"),(0,i.kt)("li",{parentName:"ul"},"keep the identifiers of counters very short - use ",(0,i.kt)("inlineCode",{parentName:"li"},"i")," rather than ",(0,i.kt)("inlineCode",{parentName:"li"},"loop_counter"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," rather than ",(0,i.kt)("inlineCode",{parentName:"li"},"numberOfIterations"),". This is context dependant and should only be applied to iterators and counters otherwise, the name becomes meaningless or cryptic."),(0,i.kt)("li",{parentName:"ul"},"avoid decorating the identifier with Hungarian or similar notations (data type)"),(0,i.kt)("li",{parentName:"ul"},'use "camelNotation" (first letter of each word is capitalized with the exception of the first word)'),(0,i.kt)("li",{parentName:"ul"},"avoid underscore characters which are commonly used in system libraries to avoid conflicts")),(0,i.kt)("h2",{id:"layout"},"Layout"),(0,i.kt)("p",null,"Professionals in the field of human-computer interaction confirm that layout and arrangement affects comfort and accessibility. Poorly laid out code frustrates and promotes misreading's."),(0,i.kt)("p",null,"Typographers, artists, and photographers know that negative space surrounding an image is as important as the image itself. Space itself can visually separate, making it easier to find something and draw attention to a certain part of a page."),(0,i.kt)("p",null,"Layout tools at our disposal include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"indentation"),(0,i.kt)("li",{parentName:"ul"},"line length"),(0,i.kt)("li",{parentName:"ul"},"braces"),(0,i.kt)("li",{parentName:"ul"},"spaces"),(0,i.kt)("li",{parentName:"ul"},"comments")),(0,i.kt)("h3",{id:"indentation"},"Indentation"),(0,i.kt)("p",null,"Indentation helps define where a code block starts and ends, clearly showing the structure of our logic. The recommended indent in C programs is a tab of 4 or 8 characters."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'for (i = 0; i < n; i++)\n{\n    for (j = 0; j < n; j++)\n    {\n        for (k = 0; k < n; k++)\n        {\n            int ijk = i * j * k;\n            if (ijk != 0)\n            {\n                printf(" %4d", ijk);\n            }\n            else\n            {\n                printf("    ");\n            }\n        }\n        printf("\\n");\n    }\n    printf("\\n");\n}\nprintf("That\'s all folks!!!\\n");\n')),(0,i.kt)("p",null,"Using tabs for indentation rather than spaces enables other programmers to adjust the indentation without difficulty in their own text editors. Using 8 characters per tab position heavily indents code to the far right and identifies code that may be a hog of compute cycles and a likely candidate for refactoring."),(0,i.kt)("p",null,"To minimize the effects of indentation with switch constructs, we align the subordinate case labels with the switch keyword:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"switch(c)\n{\ncase 'A' :\ncase 'a' :\n        cost = 1.50;\n        break;\ncase 'B' :\ncase 'b' :\n        cost = 1.10;\n        break;\ncase 'C' :\ncase 'c' :\n        cost = 0.75;\n        break;\ndefault:\n        c = '?';\n        cost = 0.0;\n}\n")),(0,i.kt)("h3",{id:"line-length"},"Line Length"),(0,i.kt)("p",null,"The practical limit on line length is 80 columns, including indentation. Many windows default to an 80-column width and break longer lines into chunks that are then difficult to read. Lines longer than 80 columns either truncate or wrap in hard copy printouts, which confuses readers."),(0,i.kt)("p",null,"String literals pose a special problem. We break them into a set of sub-string literals separated only by whitespace. C compilers discard the whitespace and concatenate the sub-string literals into a single string literal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'printf("%d substrings"\n       " display as a"\n       " single string"\n       "\\n", 3);\n')),(0,i.kt)("p",null,"Produces the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"3 substrings display as a single string\n")),(0,i.kt)("h3",{id:"braces"},"Braces"),(0,i.kt)("p",null,"The style of bracing used in these notes is that proposed by Eric Allman. We put the opening brace on its own line indented to the preceding statement and the closing brace on its own line in alignment with the opening brace."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'if (i == 7)\n{\n    cost = 1.75;\n    printf("Congrats!\\n");\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'if (i == 7)\n{\n    cost = 1.75;\n    printf("Congrats!\\n");\n}\nelse\n{\n    cost = 2.75;\n    printf("Good luck next time!\\n");\n}\n')),(0,i.kt)("p",null,"The opening and closing braces for a ",(0,i.kt)("inlineCode",{parentName:"p"},"do/while")," construct is an exception:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'do {\n    printf("Guess i : ");\n    scanf("%d", &i);\n    if (i == 7)\n    {\n        cost = 1.75;\n        printf("Congrats!\\n");\n    }\n    else\n    {\n        cost = 2.75;\n        printf("Good luck next time!\\n");\n    }\n} while (i != 7);\n')),(0,i.kt)("p",null,"Although braces are unnecessary with single statements, it is more clear to read and maintain when they are provided:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'if (i == 7)\n{\n    printf("Congrats!\\n");\n}\nelse\n{\n    printf("Good luck next time!\\n");\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'if (i == 7)\n{\n    printf("Congrats!\\n");\n    done = 1;\n}\nelse\n{\n    printf("Good luck next time!\\n");\n}\n')),(0,i.kt)("h3",{id:"spaces"},"Spaces"),(0,i.kt)("p",null,"We add a single space after commas, semi-colons, most keywords and around most operators, except between parentheses and identifiers or constants, after unary operators and call identifiers."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'int i; // space after keyword\n\nscanf("%d", &i); // no space after unary operator\n\ni = i * i; // single spaces around binary operators\n\nif (i == 7) // no spaces between identifiers or constants and parentheses\n{\n    printf("Congrats!\\n");\n}\n\nfor (i = 0; i < 10; i++) // single space after ;\n{\n    printf("%d ", i);   // no space after call identifier\n}\n')),(0,i.kt)("p",null,"We avoid trailing spaces at the end of a line."),(0,i.kt)("p",null,"We add blank lines to distinguish the end of one construct from the start of another whenever either construct contains some complexity. However, we avoid superfluous blank lines."),(0,i.kt)("h3",{id:"comments"},"Comments"),(0,i.kt)("p",null,"We use comments to describe what is done, rather than how it is done. Comments introduce or summarize what follows. We keep them brief and avoid decoration or cuteness."),(0,i.kt)("p",null,"If it is important to comment data, we do so at the variable's declaration. Where units matter, we identify them. Where we comment variable declarations, we declare each variable on a separate line and use inline comments."),(0,i.kt)("p",null,"We preface every source file with a header comment that includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the title of the program"),(0,i.kt)("li",{parentName:"ul"},"the source file name"),(0,i.kt)("li",{parentName:"ul"},"the name of the author","(","s",")")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"}," /* Payroll Deductions\n  * payroll.c\n  * Jane Doe\n  */\n")),(0,i.kt)("p",null,"Such header comments are helpful in locating the e-copy corresponding to a hard copy that we have in hand."),(0,i.kt)("p",null,"We align comments with the code they describe, indenting both identically, showing no preference for either comment or code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'// display even integers below 11\n//\nfor (j = 0; j < 11; j += 2)\n{\n    printf(" %d", j);\n}\n')),(0,i.kt)("p",null,"Such comments summarize the code that follows and help the reader avoid studying that code in detail if it is not the target code for which they are searching."),(0,i.kt)("h2",{id:"magic-numbers"},"Magic Numbers"),(0,i.kt)("p",null,"We refer to values that appear out of nowhere in program code as magic numbers. These may be mathematical constants, standard rates or default values. We avoid magic numbers by identifying them with symbolic names and using those names throughout the code. We set their value in either of two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"using an unmodifiable variable"),(0,i.kt)("li",{parentName:"ul"},"using a macro directive")),(0,i.kt)("h3",{id:"unmodifiable-variables"},"Unmodifiable Variables"),(0,i.kt)("p",null,"An ",(0,i.kt)("strong",{parentName:"p"},"unmodifiable")," variable takes the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"}," const type SYMBOL = value;\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'const double PI = 3.14159;\n\nint main(void)\n{\n    double radius, area;\n\n    printf("Enter radius : ");\n    scanf("%lf", &radius);\n\n    area = PI * radius * radius;\n    printf("The area of your circle is : %lf\\n", area);\n\n    return 0;\n}\n')),(0,i.kt)("h3",{id:"macro-directive"},"Macro Directive"),(0,i.kt)("p",null,"A macro is ",(0,i.kt)("strong",{parentName:"p"},"NOT")," a variable but is used for substitution at compile-time. A macro directive takes the form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"#define SYMBOL value\n")),(0,i.kt)("p",null,"We terminate this directive with an end of line character immediately following value."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"define")," directive instructs the C compiler to ",(0,i.kt)("strong",{parentName:"p"},"substitute")," every occurrence of SYMBOL with value throughout the code."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Notice the absence of a semi-colon at the end of the directive. The substitution is a straightforward ",(0,i.kt)("strong",{parentName:"p"},"search")," and ",(0,i.kt)("strong",{parentName:"p"},"replace"),". The value itself may include whitespace.")),(0,i.kt)("p",null,"For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#define PI 3.14159\n\nint main(void)\n{\n        double radius, area;\n\n        printf("Enter radius : ");\n        scanf("%lf", &radius);\n\n        area = PI * radius * radius;\n        // At compile-time, the above statement becomes:\n        // area = 3.14159 * radius * radius\n\n        printf("The area of your circle is : %lf\\n", area);\n\n        return 0;\n}\n')),(0,i.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,i.kt)("p",null,"Other guidelines for enhancing and maintainability readability include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"we avoid global variables ","(","see Global Scope sub-section in the chapter on ",(0,i.kt)("a",{parentName:"li",href:"/D-Modularity/functions-arrays-and-structs"},"Information Hiding"),")"),(0,i.kt)("li",{parentName:"ul"},"we avoid variable identifiers that end in numbers"),(0,i.kt)("li",{parentName:"ul"},"we avoid using the character encodings for a particular environment ","(","for example, ASCII or EBCDIC",")",". Instead, we use escape sequences, which are universal. For example, to initialize c to the linefeed character ","(","10 in ASCII and 37 in EBCDIC",")",", use:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"// prefer\n//\nchar c = '\\n';\n\n// avoid\n//\nchar c = 10; // ASCII\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"we initialize iteration variables in the context of the iteration:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"// prefer\n//\nfor (i = 0; i < 10; i++)\n\n// avoid\n//\ni = 0;\nfor (; i < 10; i++)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"we add special comments where code has been fine-tuned for efficient execution"),(0,i.kt)("li",{parentName:"ul"},"we avoid iterations with empty bodies"),(0,i.kt)("li",{parentName:"ul"},"we limit the initialization and iteration clauses in for statements to the iteration variables"),(0,i.kt)("li",{parentName:"ul"},"we avoid assignment expressions nested inside logical expressions"),(0,i.kt)("li",{parentName:"ul"},"we add an extra pair of parentheses where an assignment expression is also used as a condition"),(0,i.kt)("li",{parentName:"ul"},"we remove unreferenced variable declarations from our source code"),(0,i.kt)("li",{parentName:"ul"},"we remove all commented code and debugging statements from our release and production code")))}u.isMDXComponent=!0},8209:(e,t,n)=>{n(67294)}}]);