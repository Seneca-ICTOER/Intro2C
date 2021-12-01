"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[285],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),k=i,g=p["".concat(d,".").concat(k)]||p[k]||u[k]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2446:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={sidebar_position:3},d="Data Conversions",s={unversionedId:"Resources-Appendices/data-conversions",id:"Resources-Appendices/data-conversions",isDocsHomePage:!1,title:"Data Conversions",description:"Learning Outcomes",source:"@site/docs/Resources-Appendices/data-conversions.md",sourceDirName:"Resources-Appendices",slug:"/Resources-Appendices/data-conversions",permalink:"/Resources-Appendices/data-conversions",editUrl:"https://github.com/Seneca-ICTOER/IPC144/tree/main/docs/Resources-Appendices/data-conversions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"courseNotesSidebar",previous:{title:"EBCDIC Collating Sequence",permalink:"/Resources-Appendices/ebcdic-collating-sequence"},next:{title:"Operators",permalink:"/resources-appendices/operators"}},c=[{value:"Learning Outcomes",id:"learning-outcomes",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Binary - Hexadecimal",id:"binary---hexadecimal",children:[{value:"Binary to Hexadecimal",id:"binary-to-hexadecimal",children:[],level:3},{value:"Hexadecimal to Binary",id:"hexadecimal-to-binary",children:[],level:3}],level:2},{value:"Decimal - Binary",id:"decimal---binary",children:[],level:2},{value:"Program Instructions (optional)",id:"program-instructions-optional",children:[],level:2}],u={toc:c};function p(e){var t=e.components,o=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-conversions"},"Data Conversions"),(0,a.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,a.kt)("p",null,"After reading this section, you will be able to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to convert between binary and hexadecimal notation"),(0,a.kt)("li",{parentName:"ul"},"How to convert between binary and decimal notation")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"A C program at machine-level is an assembly language program. Assembly language uses hexadecimal representation for data. The hardware itself processes information in bits. When a program outputs data in hexadecimal or binary form, we may prefer to convert it into decimal form."),(0,a.kt)("p",null,"This chapter describes how to convert across binary, hexadecimal and decimal representations and shows what a trivially simple program looks like in binary and hexadecimal representations."),(0,a.kt)("h2",{id:"binary---hexadecimal"},"Binary - Hexadecimal"),(0,a.kt)("p",null,"The most convenient base for storing byte-wise information is hexadecimal (base 16). Two hexadecimal (base 16) digits can represent one byte of information. Each hexadecimal digit represents 4 bits of binary information."),(0,a.kt)("p",null,"For example, the hexadecimal value 0x5C is equivalent to the binary 010111002. The 0x prefix identifies the number as hexadecimal notation. The digits in the hexadecimal number system are {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}. The characters A through F denote decimal values 10 through 15 respectively."),(0,a.kt)("h3",{id:"binary-to-hexadecimal"},"Binary to Hexadecimal"),(0,a.kt)("p",null,"To convert a binary number to its hexadecimal equivalent, we:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"group the bits into nibbles,"),(0,a.kt)("li",{parentName:"ol"},"assign powers of 2 to the different bits in each nibble,"),(0,a.kt)("li",{parentName:"ol"},"multiply each bit value by the corresponding power of 2,"),(0,a.kt)("li",{parentName:"ol"},"add the products together for each nibble, and"),(0,a.kt)("li",{parentName:"ol"},"concatenate the nibble results")),(0,a.kt)("p",null,"Consider the 8-bit number ",(0,a.kt)("strong",{parentName:"p"},"01011100",(0,a.kt)("sub",null,"2")),":"),(0,a.kt)("table",{border:"0"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Nibble #"),(0,a.kt)("td",{colSpan:"4",align:"center"},"1"),(0,a.kt)("td",{colSpan:"4",align:"center"},"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Bit #"),(0,a.kt)("td",{align:"center"},"7"),(0,a.kt)("td",{align:"center"},"6"),(0,a.kt)("td",{align:"center"},"5"),(0,a.kt)("td",{align:"center"},"4"),(0,a.kt)("td",{align:"center"},"3"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Multiplier"),(0,a.kt)("td",{align:"center"},"8"),(0,a.kt)("td",{align:"center"},"4"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"8"),(0,a.kt)("td",{align:"center"},"4"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contents"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Nibble Values"),(0,a.kt)("td",{colSpan:"4",align:"center"},"0*8 + 1*4 + 0*2 + 1*1 = 0x5"),(0,a.kt)("td",{colSpan:"4",align:"center"},"1*8 + 1*4 + 0*2 + 1*0 = 0xC")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Byte Value"),(0,a.kt)("td",{colSpan:"8",align:"center"},"0x5C")))),(0,a.kt)("h3",{id:"hexadecimal-to-binary"},"Hexadecimal to Binary"),(0,a.kt)("p",null,"To convert a hexadecimal number into its binary equivalent, we work from the lowest order bit to the highest. We identify the lowest order bit as the first target bit, then:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"divide by 2,"),(0,a.kt)("li",{parentName:"ul"},"put the remainder into the target bit,"),(0,a.kt)("li",{parentName:"ul"},"change the target to the next higher order bit")),(0,a.kt)("p",null,"... and repeat the above until there are no more bits."),(0,a.kt)("p",null,"Consider the hexadecimal number ",(0,a.kt)("strong",{parentName:"p"},"0x5C"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Identify the first target bit as bit 0"),(0,a.kt)("li",{parentName:"ul"},"Divide the number (0x5C) into left and right hexadecimal digits"),(0,a.kt)("li",{parentName:"ul"},"Take the right digit (0xC), divide it by 2 and put the remainder (0) in bit 0"),(0,a.kt)("li",{parentName:"ul"},"Take the result (0x6), divide it by 2 and put the remainder (0) in bit 1"),(0,a.kt)("li",{parentName:"ul"},"Take the result (0x3), divide it by 2 and put the remainder (1) in bit 2"),(0,a.kt)("li",{parentName:"ul"},"Take the result (0x1), divide it by 2 and put the remainder (1) in bit 3"),(0,a.kt)("li",{parentName:"ul"},"Take the left hexadecimal digit (0x5), divide it by 2 and put the remainder (1) in bit 4"),(0,a.kt)("li",{parentName:"ul"},"Take the result (0x2), divide it by 2 and put the remainder (0) in bit 5"),(0,a.kt)("li",{parentName:"ul"},"Take the result (0x1), divide it by 2 and put the remainder (1) in bit 6"),(0,a.kt)("li",{parentName:"ul"},"Take the result (0x0), divide it by 2 and put the remainder (0) in bit 7")),(0,a.kt)("table",{border:"0"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Bit#"),(0,a.kt)("td",{align:"center"},"7"),(0,a.kt)("td",{align:"center"},"6"),(0,a.kt)("td",{align:"center"},"5"),(0,a.kt)("td",{align:"center"},"4"),(0,a.kt)("td",{align:"center"},"3"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Byte Value"),(0,a.kt)("td",{colSpan:"8",align:"center"},"0x5C")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Nibble Values"),(0,a.kt)("td",{colSpan:"4",align:"center"},"0x5"),(0,a.kt)("td",{colSpan:"4",align:"center"},"0xC")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Divide by 2"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"3"),(0,a.kt)("td",{align:"center"},"6")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Bit Values"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"0")))),(0,a.kt)("h2",{id:"decimal---binary"},"Decimal - Binary"),(0,a.kt)("p",null,"To convert a non-negative integer into its binary equivalent, we start with the value and an empty container that consists of target bits. We take the integer value, identify the lowest order bit in the container as our target bit, and then:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"divide the value by 2,"),(0,a.kt)("li",{parentName:"ul"},"store the remainder in the target bit,"),(0,a.kt)("li",{parentName:"ul"},"take the result as the new integer value,"),(0,a.kt)("li",{parentName:"ul"},"identify the next higher-order bit our new target bit, and"),(0,a.kt)("li",{parentName:"ul"},"repeat this set of instructions until no value is left")),(0,a.kt)("p",null,"Consider the value ",(0,a.kt)("strong",{parentName:"p"},"92"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Identify the target bit as bit numbered 0"),(0,a.kt)("li",{parentName:"ul"},"Take ",(0,a.kt)("strong",{parentName:"li"},"92"),", divide it by 2 and put the remainder (",(0,a.kt)("strong",{parentName:"li"},"0"),") in bit 0"),(0,a.kt)("li",{parentName:"ul"},"Take the result (",(0,a.kt)("strong",{parentName:"li"},"46"),"), divide it by 2 and store the remainder (",(0,a.kt)("strong",{parentName:"li"},"0"),") in bit 1"),(0,a.kt)("li",{parentName:"ul"},"Take the result (",(0,a.kt)("strong",{parentName:"li"},"23"),"), divide it by 2 and store the remainder (",(0,a.kt)("strong",{parentName:"li"},"1"),") in bit 2"),(0,a.kt)("li",{parentName:"ul"},"Take the result (",(0,a.kt)("strong",{parentName:"li"},"11"),"), divide it by 2 and store the remainder (",(0,a.kt)("strong",{parentName:"li"},"1"),") in bit 3"),(0,a.kt)("li",{parentName:"ul"},"Take the result (",(0,a.kt)("strong",{parentName:"li"},"5"),"), divide it by 2 and store the remainder (",(0,a.kt)("strong",{parentName:"li"},"1"),") in bit 4"),(0,a.kt)("li",{parentName:"ul"},"Take the result (",(0,a.kt)("strong",{parentName:"li"},"2"),"), divide it by 2 and store the remainder (",(0,a.kt)("strong",{parentName:"li"},"0"),") in bit 5"),(0,a.kt)("li",{parentName:"ul"},"Take the result (",(0,a.kt)("strong",{parentName:"li"},"1"),"), divide it by 2 and store the remainder (",(0,a.kt)("strong",{parentName:"li"},"1"),") in bit 6"),(0,a.kt)("li",{parentName:"ul"},"Take the result (",(0,a.kt)("strong",{parentName:"li"},"0"),"), divide it by 2 and store the remainder (",(0,a.kt)("strong",{parentName:"li"},"0"),") in bit 7")),(0,a.kt)("table",{border:"0"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Bit#"),(0,a.kt)("td",{align:"center"},"7"),(0,a.kt)("td",{align:"center"},"6"),(0,a.kt)("td",{align:"center"},"5"),(0,a.kt)("td",{align:"center"},"4"),(0,a.kt)("td",{align:"center"},"3"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Value"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"5"),(0,a.kt)("td",{align:"center"},"11"),(0,a.kt)("td",{align:"center"},"23"),(0,a.kt)("td",{align:"center"},"46"),(0,a.kt)("td",{align:"center"},"92")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Bit Values"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"0")))),(0,a.kt)("p",null,"(Eight bits and right to left bit numbering are for brevity and illustrative purposes only.)"),(0,a.kt)("p",null,"To convert a binary number into its decimal equivalent, we multiply the value in each bit by its corresponding power of 2 and add the products together."),(0,a.kt)("p",null,"Consider the 8-bit binary number ",(0,a.kt)("strong",{parentName:"p"},"01011100",(0,a.kt)("sub",null,"2")),":"),(0,a.kt)("table",{border:"0"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Bit #"),(0,a.kt)("td",{align:"center"},"7"),(0,a.kt)("td",{align:"center"},"6"),(0,a.kt)("td",{align:"center"},"5"),(0,a.kt)("td",{align:"center"},"4"),(0,a.kt)("td",{align:"center"},"3"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Power of 2"),(0,a.kt)("td",{align:"center"},"7"),(0,a.kt)("td",{align:"center"},"6"),(0,a.kt)("td",{align:"center"},"5"),(0,a.kt)("td",{align:"center"},"4"),(0,a.kt)("td",{align:"center"},"3"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Bit Values"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"1"),(0,a.kt)("td",{align:"center"},"0"),(0,a.kt)("td",{align:"center"},"0")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Multiplier"),(0,a.kt)("td",{align:"center"},"128"),(0,a.kt)("td",{align:"center"},"64"),(0,a.kt)("td",{align:"center"},"32"),(0,a.kt)("td",{align:"center"},"16"),(0,a.kt)("td",{align:"center"},"8"),(0,a.kt)("td",{align:"center"},"4"),(0,a.kt)("td",{align:"center"},"2"),(0,a.kt)("td",{align:"center"},"1")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Byte Value"),(0,a.kt)("td",{colSpan:"8",align:"center"},"0*128 + 1*64 + 0*32 + 1*16 + 1*8 + 1*4 + 0*2 + 0*1 = 92")))),(0,a.kt)("h2",{id:"program-instructions-optional"},"Program Instructions (optional)"),(0,a.kt)("p",null,"A program instruction consists of an operation and possibly some operands. Each instruction performs an operation on its operands or on values stored in operand addresses. The addresses are either register names or addresses in primary memory."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"instruction",src:n(6752).Z})),(0,a.kt)("p",null,'The set of instructions in binary on a Windows 7 machine for a program that displays the phrase "This is C" looks like:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"10110100 00001001\n10111010 00001001 00000001\n11001101 00100001\n11001101 00100000\n01010100\n01101000\n01101001\n01110011\n00100000\n01101001\n01110011\n00100000\n01000011\n00100100\n")),(0,a.kt)("p",null,"The equivalent hexadecimal representation is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"B409\nBA0901\nCD21\nCD20\n54\n68\n69\n73\n20\n69\n73\n20\n43\n24\n")),(0,a.kt)("p",null,"The first instruction moves the value 09 into register AH. 09 identifies the instruction that displays characters starting at the offset stored in register DX. The second instruction moves the offset value 0109 into register DX. The third instruction executes the instructions stored in register AH: displays the characters starting at offset 0109. The fourth instruction stops execution. The fifth through thirteenth lines hold the characters to be displayed. The fourteenth line holds the terminator that identifies the end of the set of characters."),(0,a.kt)("p",null,"The assembly language version of these instructions provides a more readable program. Assembly language consists of symbols and values that are more readable than simple hexadecimal digits. The assembly language version looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MOV AH,09\nMOV DX,0109\nINT 21\nINT 20\nDB 'T'\nDB 'h'\nDB 'i'\nDB 's'\nDB ' '\nDB 'i'\nDB 's'\nDB ' '\nDB 'C'\nDB '$'\n")),(0,a.kt)("p",null,"A Windows command line accepts assembly language instructions through the ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," input option on the ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," program. Open a command prompt window and type the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"debug\n-a100\n1456:0100 MOV AH,09   ;move code for displaying text into register AH\n1456:0102 MOV DX,0109 ;move text address offset into register DX\n1456:0105 INT 21      ;call the interrupt stored in register AH\n1456:0107 INT 20      ;stop execution\n1456:0109 DB 'T'      ;text\n1456:010A DB 'h'      ;...\n1456:010B DB 'i'      ;to\n1456:010C DB 's'      ;...\n1456:010D DB ' '      ;be\n1456:010E DB 'i'      ;...\n1456:010F DB 's'      ;displayed\n1456:0110 DB ' '      ;...\n1456:0111 DB 'C'\n1456:0112 DB '$'      ;terminator character\n1456:0113\n-\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"a")," refers to the input option to the ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," program. ",(0,a.kt)("inlineCode",{parentName:"p"},"100")," identifies the offset in memory where the instructions start."),(0,a.kt)("p",null,"The first entry on each line is the memory address in segment:offset form. In ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," applications, the segments share the same address (",(0,a.kt)("inlineCode",{parentName:"p"},"0x14560"),"). The semi-colon refers to the end of a statement and the start of programmer comments."),(0,a.kt)("p",null,"To execute this program, we enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-g\nThis is C\nProgram terminated normally\n-\n")),(0,a.kt)("p",null,"To quit the debug program, we enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-q\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," program uses an operating system program called an ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"assembler"))," to convert our assembly language instructions into binary information as shown in the figure below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"assembler",src:n(9781).Z})),(0,a.kt)("p",null,"We call the binary result ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"machine language")),"."))}p.isMDXComponent=!0},9781:function(e,t,n){t.Z=n.p+"assets/images/assembler-273240c8881d4d36b768093adab672f6.png"},6752:function(e,t){t.Z="data:image/png;base64,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"}}]);