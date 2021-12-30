"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[490],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,A=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(A,l(l({ref:t},c),{},{components:n})):a.createElement(A,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5878:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"testing-and-debugging",title:"Testing & Debugging",sidebar_position:6,description:"Introduction to testing and debugging in C Language"},s="Testing & Debugging",u={unversionedId:"B-Computations/testing-and-debugging",id:"B-Computations/testing-and-debugging",isDocsHomePage:!1,title:"Testing & Debugging",description:"Introduction to testing and debugging in C Language",source:"@site/docs/B-Computations/testing-and-debugging.md",sourceDirName:"B-Computations",slug:"/B-Computations/testing-and-debugging",permalink:"/B-Computations/testing-and-debugging",editUrl:"https://github.com/Seneca-ICTOER/Intro2C/tree/main/docs/B-Computations/testing-and-debugging.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"testing-and-debugging",title:"Testing & Debugging",sidebar_position:6,description:"Introduction to testing and debugging in C Language"},sidebar:"courseNotesSidebar",previous:{title:"Style Guidelines",permalink:"/B-Computations/style-guidelines"},next:{title:"Arrays",permalink:"/C-Data-Structures/arrays"}},c=[{value:"Learning Outcomes",id:"learning-outcomes",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Errors",id:"errors",children:[{value:"Syntactic Errors",id:"syntactic-errors",children:[],level:3},{value:"Semantic Errors",id:"semantic-errors",children:[],level:3}],level:2},{value:"Testing Techniques",id:"testing-techniques",children:[{value:"Black Box Tests",id:"black-box-tests",children:[],level:3},{value:"Equivalence Classes",id:"equivalence-classes",children:[],level:3},{value:"White Box Testing",id:"white-box-testing",children:[],level:3},{value:"Flow Graphs",id:"flow-graphs",children:[],level:3},{value:"Test Criteria",id:"test-criteria",children:[],level:3}],level:2},{value:"Debugging Techniques",id:"debugging-techniques",children:[{value:"IDE Debugging",id:"ide-debugging",children:[{value:"Build and Execute",id:"build-and-execute",children:[],level:4},{value:"Tracing",id:"tracing",children:[],level:4}],level:3},{value:"Command-Line Debugging",id:"command-line-debugging",children:[{value:"Compile and Run",id:"compile-and-run",children:[],level:4},{value:"Debugging Commands",id:"debugging-commands",children:[],level:4},{value:"Crashes",id:"crashes",children:[],level:4},{value:"Help",id:"help",children:[],level:4}],level:3}],level:2},{value:"Walkthrough Table",id:"walkthrough-table",children:[{value:"Example",id:"example",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testing--debugging"},"Testing & Debugging"),(0,i.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,i.kt)("p",null,"After reading this section, you will be able to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Trace the execution of a complete program to validate its correctness")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Testing and debugging skills are integral skills that a software developer refines throughout their career. Testing ensures that a program executes successfully for a well-defined range of values. Such a program might still crash for values outside this range. Each program needs to be thoroughly tested before release to a user community and with each patch to that release. Compilers identify syntactic errors with respect to the rules of the programming language, but cannot readily identify semantic errors; that is, errors in the meaning or intent of the code. Walkthroughs and code analysis help identify these errors."),(0,i.kt)("p",null,"Much of the time and effort involved in ensuring that a program executes correctly for all practical cases is spent on testing and debugging. Testing ensures that all of the paths through the program envisaged by the designer produce correct results. Debugging locates those 'bugs' that produce incorrect results. Over the years, computer scientists have developed sophisticated tools for testing and debugging. These tools are available in various development environments. The traditional walkthrough technique simulates instruction-by-instruction stepping of the ",(0,i.kt)("a",{parentName:"p",href:"/A-Introduction/computers#central-processing-unit",title:"Central Processing Unit"},"CPU")," and its updating of program data in ",(0,i.kt)("a",{parentName:"p",href:"/A-Introduction/computers#primary-memory",title:"Primary Memory"},"primary memory"),"."),(0,i.kt)("p",null,"This chapter describes the kinds of errors that are common in source code, introduces testing and debugging techniques, and shows how to layout program variables in tabular form to facilitate comprehensive walks through the source code."),(0,i.kt)("h2",{id:"errors"},"Errors"),(0,i.kt)("p",null,"Programming errors are classified into either of two kinds:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"syntactic errors"),(0,i.kt)("li",{parentName:"ul"},"semantic errors")),(0,i.kt)("h3",{id:"syntactic-errors"},"Syntactic Errors"),(0,i.kt)("p",null,"Syntactic errors are errors that break the rules of the programming language. The most common syntactic errors in the C language are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"missing semi-colon"),(0,i.kt)("li",{parentName:"ul"},"unnecessary semi-colon terminator in a ","#","define directive"),(0,i.kt)("li",{parentName:"ul"},"undeclared variable name"),(0,i.kt)("li",{parentName:"ul"},"mismatched parentheses"),(0,i.kt)("li",{parentName:"ul"},"left-side of an assignment expression is not a defined memory location"),(0,i.kt)("li",{parentName:"ul"},"return statement is missing")),(0,i.kt)("p",null,"Techniques for identifying syntactic errors include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"reading code statements ","(","walkthroughs",")"),(0,i.kt)("li",{parentName:"ul"},"compiler error messages ","(","compiler output",")"),(0,i.kt)("li",{parentName:"ul"},"comparing error messages from different compilers - some are more cryptic than others")),(0,i.kt)("h3",{id:"semantic-errors"},"Semantic Errors"),(0,i.kt)("p",null,"Semantic errors are errors that fail to implement the intent and meaning of the program designer. The more common semantic errors are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"=")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"==")),(0,i.kt)("li",{parentName:"ul"},"iteration without a body ","(","for/while followed by a semi-colon",")"),(0,i.kt)("li",{parentName:"ul"},"uninitialized variable"),(0,i.kt)("li",{parentName:"ul"},"infinite iteration"),(0,i.kt)("li",{parentName:"ul"},"incorrect operator order in a compound expression"),(0,i.kt)("li",{parentName:"ul"},"dangling else"),(0,i.kt)("li",{parentName:"ul"},"off-by-one iteration"),(0,i.kt)("li",{parentName:"ul"},"integer division and truncation"),(0,i.kt)("li",{parentName:"ul"},"mismatched data types"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"&")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"&&"))),(0,i.kt)("p",null,"Techniques for identifying semantic errors include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"vocalization - use your sense of hearing to identify the error ","(","compound conditions",")"),(0,i.kt)("li",{parentName:"ul"},"intermediate output - ",(0,i.kt)("inlineCode",{parentName:"li"},"printf()")," statements at critical stages"),(0,i.kt)("li",{parentName:"ul"},"walkthrough table"),(0,i.kt)("li",{parentName:"ul"},"interactive debugging using",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Visual Studio IDE - integrated debugger for Windows OSs"),(0,i.kt)("li",{parentName:"ul"},"Eclipse IDE - integrated debugger for Linux OSs"),(0,i.kt)("li",{parentName:"ul"},"gdb - GNU debugger for gcc")))),(0,i.kt)("h2",{id:"testing-techniques"},"Testing Techniques"),(0,i.kt)("p",null,"The two categories of software testing techniques are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"black box"),(0,i.kt)("li",{parentName:"ul"},"white box")),(0,i.kt)("h3",{id:"black-box-tests"},"Black Box Tests"),(0,i.kt)("p",null,"The simplest type of test is a black box test. Black box tests are data-driven. We run the executable and treat it as a black box where all internal logic has been hidden from view. External factors alone determine the success or failure of our tests. We test against the specifications. Our tests are input-output driven."),(0,i.kt)("h3",{id:"equivalence-classes"},"Equivalence Classes"),(0,i.kt)("p",null,"The number of possibilities to be tested in a comprehensive black box test regime is typically too large. To reduce this number to a manageable set, we introduce equivalence classes."),(0,i.kt)("p",null,"We create equivalence classes using boundary values. An equivalence class is a set where testwise any member is as good as any other ","(","for example, i ","<","1, =1...25, ",">","25",")","."),(0,i.kt)("p",null,"Experts suggest that semantic errors frequently exist at and on boundaries. We test either side of the boundaries of the equivalence class as well as the boundary itself ","(","for example, i = 0, 1, 2, 17, 24, 25, 26",")","."),(0,i.kt)("p",null,"We use equivalence classes for both input and output."),(0,i.kt)("h3",{id:"white-box-testing"},"White Box Testing"),(0,i.kt)("p",null,"The complementary test to black box tests is a white box test. White box testing is logic-driven. We treat the program as a glass box with all internal logic visible. Each white box test is path-oriented."),(0,i.kt)("p",null,"In white box testing, we execute each possible path through the code at least once. The number of paths may be too large to test. To reduce this number and still cover all paths through the code at least once, we prepare flow graphs."),(0,i.kt)("h3",{id:"flow-graphs"},"Flow Graphs"),(0,i.kt)("p",null,"A flow graph models the sequences, selections and iterations in the source code. A flow graph consists of nodes and edges. Each node represents one or more sequence statements. Each edge represents the flow of control between two nodes."),(0,i.kt)("p",null,"Consider the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'// Testing - Flow Graph\n// flowGraph.c\n\n#include<stdio.h>\n\nint main(void)\n{\n  int total, value, count;\n\n  // Start Node 1 ---\n  total = 0;\n  count = 0;\n  // End   Node 1 ---\n\n  do {\n      // Start Node 2 ---\n      scanf("%d", &value);\n      // End   Node 2 ---\n\n      if (value < 0)\n      {\n          // Start Node 3 ---\n          total -= value;\n          count++;\n          // End   Node 3 ---\n      }\n      else if (value > 0)\n      {\n          // Start Node 4 ---\n          total += value;\n          count++;\n          // End   Node 4 ---\n      }\n\n  // Start Node 5 ---\n  } while (value != 0);\n  // End   Node 5 ---\n\n  if (count > 0)\n  {\n      // Start Node 6 ---\n      printf("The average value is %.2lf\\n",\n             (double)total/count);\n      // End   Node 6 ---\n  }\n\n  // Start Node 7 ---\n  return 0;\n}\n')),(0,i.kt)("p",null,"The flow graph illustrating the above code would look like:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The flow graph of the code above",src:n(9211).Z})),(0,i.kt)("h3",{id:"test-criteria"},"Test Criteria"),(0,i.kt)("p",null,"To complete a white box test, we apply the following criteria:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"statement coverage - every elementary statement is executed at least once"),(0,i.kt)("li",{parentName:"ul"},"edge coverage - every edge is traversed at least once"),(0,i.kt)("li",{parentName:"ul"},"condition coverage - all possible values of the constituents of each compound condition are exercised at least once"),(0,i.kt)("li",{parentName:"ul"},"path coverage - all paths from the initial node to the final node are traversed at least once."),(0,i.kt)("li",{parentName:"ul"},"iteration coverage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"skip the iteration entirely"),(0,i.kt)("li",{parentName:"ul"},"pass through the iteration once"),(0,i.kt)("li",{parentName:"ul"},"pass through the iteration less than the specified number of times"),(0,i.kt)("li",{parentName:"ul"},"pass through the iteration the specified number of times"),(0,i.kt)("li",{parentName:"ul"},"pass through the iteration once more than the specified number of times"))),(0,i.kt)("li",{parentName:"ul"},"compound condition coverage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"break each compound condition into simple conditions")))),(0,i.kt)("h2",{id:"debugging-techniques"},"Debugging Techniques"),(0,i.kt)("p",null,"The tools available for debugging in this course include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an integrated development environment ","(","IDE",")"),(0,i.kt)("li",{parentName:"ul"},"a command-line debugger")),(0,i.kt)("p",null,"Use the source code listed below in the following examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'// Debugging Example\n// debug.c\n\n#define _CRT_SECURE_NO_WARNINGS\n#include<stdio.h>\n\nint main(void)\n{\n  int total, value, count;\n\n  total = 0;\n  count = 0;\n  do {\n      printf("Enter a value (0 to stop) ");\n      scanf("%d", &value);\n\n      if (value < 0)\n      {\n          total -= value;\n          count++;\n      }\n      else if (value > 0)\n      {\n          total += value;\n          count++;\n      }\n  } while (value != 0);\n\n  if (count > 0)\n  {\n      printf("The average value is %.2lf\\n",\n             (double)total/count);\n  }\n  return 0;\n}\n')),(0,i.kt)("h3",{id:"ide-debugging"},"IDE Debugging"),(0,i.kt)("p",null,"Integrated Development Environments ","(","IDEs",")"," are elaborate programs that support text editing, coding, compiling, testing and debugging in a unified application. The IDE used in this course is Microsoft's Visual Studio."),(0,i.kt)("h4",{id:"build-and-execute"},"Build and Execute"),(0,i.kt)("p",null,"To build and execute a C program in Visual Studio 2013 ","(","or newer",")"," we:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start Visual Studio"),(0,i.kt)("li",{parentName:"ul"},"Select New Project"),(0,i.kt)("li",{parentName:"ul"},"Select Visual C++ -",">"," Win32 -",">"," Console Application"),(0,i.kt)("li",{parentName:"ul"},"Enter Debugging Example as the Project Name ","|"," Select OK"),(0,i.kt)("li",{parentName:"ul"},"Press Next"),(0,i.kt)("li",{parentName:"ul"},"Check Empty Project ","|"," Press Finish"),(0,i.kt)("li",{parentName:"ul"},"Select Project -",">"," Add New Item"),(0,i.kt)("li",{parentName:"ul"},"Select C++ File ","|"," Enter debug.c as File Name ","|"," Press Add"),(0,i.kt)("li",{parentName:"ul"},"Paste in a copy of debug.c ","(","see above",")"),(0,i.kt)("li",{parentName:"ul"},"Select Build ","|"," Build Solution"),(0,i.kt)("li",{parentName:"ul"},"Select Debug ","|"," Start without Debugging"),(0,i.kt)("li",{parentName:"ul"},"Enter 3 at the input prompt"),(0,i.kt)("li",{parentName:"ul"},"Enter 2 at the input prompt"),(0,i.kt)("li",{parentName:"ul"},"Enter 0 at the input prompt")),(0,i.kt)("p",null,"The input prompts and results of execution appear in a Visual Studio command prompt window."),(0,i.kt)("h4",{id:"tracing"},"Tracing"),(0,i.kt)("p",null,"To trace through execution of our program using the built-in debugger we:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Move the cursor to the left-most column of the total = 0; statement and left-click ","|"," This places a red dot in that column, which identifies a breakpoint"),(0,i.kt)("li",{parentName:"ul"},"Move the cursor to the left-most column of the closing brace for the do while iteration and left-click ","|"," This places a red dot in the column, which identifies another breakpoint"),(0,i.kt)("li",{parentName:"ul"},"Move the cursor to the left-most column of the return statement and left-click ","|"," This places a red dot in the column, which identifies another breakpoint"),(0,i.kt)("li",{parentName:"ul"},"Select Debug -",">"," Start Debugging ","|"," Execution should pause at the first breakpoint"),(0,i.kt)("li",{parentName:"ul"},"Observe the values under the Locals tab in the Window below the source code"),(0,i.kt)("li",{parentName:"ul"},"Press F10 until the input prompt appears and answer the prompt by entering 3"),(0,i.kt)("li",{parentName:"ul"},"Observe the values under the Locals tab in the window below the source code"),(0,i.kt)("li",{parentName:"ul"},"Press F5, note the position of the arrow identifying the next statement to be executed, and observe the value of total"),(0,i.kt)("li",{parentName:"ul"},"Press F5 and answer the prompt by entering a value of 2"),(0,i.kt)("li",{parentName:"ul"},"Press F5, note the position of the arrow identifying the next statement to be executed, and observe the value of total"),(0,i.kt)("li",{parentName:"ul"},"Press F5 and answer the prompt by entering a value of 0"),(0,i.kt)("li",{parentName:"ul"},"Press F5, note the position of the arrow identifying the next statement to be executed, and observe the value of total"),(0,i.kt)("li",{parentName:"ul"},"Press F5 and"),(0,i.kt)("li",{parentName:"ul"},"Select the command prompt window and observe the program output"),(0,i.kt)("li",{parentName:"ul"},"Select the source code window"),(0,i.kt)("li",{parentName:"ul"},"Press F5 again to exit")),(0,i.kt)("p",null,"The keystrokes for the various debugging options available in this IDE are listed next to the sub-menu items under the Debug menu."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"F5 continue executing until the next breakpoint"),(0,i.kt)("li",{parentName:"ul"},"F10 execute the next statement")),(0,i.kt)("h3",{id:"command-line-debugging"},"Command-Line Debugging"),(0,i.kt)("p",null,"The GNU debugger is a command-line debugging tool called gdb that ships with the gcc compiler for Linux platforms."),(0,i.kt)("h4",{id:"compile-and-run"},"Compile and Run"),(0,i.kt)("p",null,"To be able to use gdb, we compile our source code with the -g option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gcc -g myProgram.c\n")),(0,i.kt)("p",null,"To debug the executable ","(","a.out",")",", we enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gdb a.out\n")),(0,i.kt)("p",null,"The gdb prompt will appear:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"(gdb)\n")),(0,i.kt)("p",null,"When we start gdb, our program pauses. This is our first opportunity to set breakpoints. We enter the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"run"))," command only once you are ready to execute."),(0,i.kt)("h4",{id:"debugging-commands"},"Debugging Commands"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"gdb")," commands that we may enter at the prompt include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"list"))," - lists the 10 lines of source code in the vicinity of where execution has stopped. Each call advances the current line by 10"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"list m, n"))," - where m and n are line numbers - lists lines m through n inclusive of the source code. This call advances the current line to n+1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"break n"))," - where n is a line number - sets a breakpoint at line number n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"clear n"))," - where n is a line number - clears any breakpoint or trace at line number n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"delete"))," - clears all breakpoints"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"run"))," - starts the execution of your program from line 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"print varname"))," - where varname is a variable name - displays the value of varname"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"cont"))," - continues execution until either your program ends or encounters a breakpoint"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"step"))," - executes one line of your program"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"help"))," - displays the full set of commands available"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"quit"))," - quits")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"gdb")," is case-sensitive."),(0,i.kt)("h4",{id:"crashes"},"Crashes"),(0,i.kt)("p",null,"If our program crashes and produces a core dump, ",(0,i.kt)("inlineCode",{parentName:"p"},"gdb")," can help locate the crash point. We enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gdb a.out core\n")),(0,i.kt)("p",null,"and use the following commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"where")," - displays the procedure and line number at the time of the crash"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"up")," - moves up one procedure in the stack ","(","towards ",(0,i.kt)("inlineCode",{parentName:"li"},"main()"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"down")," - moves down one procedure in the stack ","(","away from ",(0,i.kt)("inlineCode",{parentName:"li"},"main()"),")")),(0,i.kt)("h4",{id:"help"},"Help"),(0,i.kt)("p",null,"For online help with a particular command while debugging, we enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"help commmand\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("em",{parentName:"p"},"command")," is the command in question."),(0,i.kt)("p",null,"For online help with the ",(0,i.kt)("inlineCode",{parentName:"p"},"gdb")," command while not debugging, we enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"man gdb\n")),(0,i.kt)("h2",{id:"walkthrough-table"},"Walkthrough Table"),(0,i.kt)("p",null,"Walkthroughs are an important technique for understanding the control flow and the memory changes of a source code snippet. A walkthrough emulates the ",(0,i.kt)("a",{parentName:"p",href:"/A-Introduction/computers#central-processing-unit",title:"Central Processing Unit"},"CPU")," stepping through the code. A walkthrough solution consists of two parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a record of every change in the value of every program variable"),(0,i.kt)("li",{parentName:"ul"},"a listing of the output, if any, produced by the program")),(0,i.kt)("p",null,"The record of changes lists all changes that have occurred in RAM during the execution of the program."),(0,i.kt)("p",null,"When the operating system loads a program into RAM, the program instructions occupy one part of memory while the program variables occupy another part. The operating system transfers control to the program's first instruction. The program executes one instruction at a time until it returns control to the operating system. Some instructions accept input from the user, some change the values stored in the program variables, and others send output to the user."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Memory occupation of Operating System, program instructions, variables in RAM",src:n(4150).Z})),(0,i.kt)("p",null,"To track each change in RAM, we construct a table of the program variables. We list their identifiers and their types across its top line and enter their values in the rows below. We insert mock addresses below the identifiers, picking convenient address values; the actual addresses do not matter here. In other words, our walkthrough table is a simplified representation of RAM throughout the program's lifetime."),(0,i.kt)("p",null,"Consider the program below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'// Walkthrough\n// walkthrough.c\n\n#include <stdio.h>\n#define ADULT_FARE 3.25\n\nint main(void)\n{\n  int riders;\n  double total;\n\n  printf("Number of riders : ");\n  scanf("%d", &riders);\n\n  total = riders * ADULT_FARE;\n  printf("Total fare is %.2lf\\n\\n", total);\n\n  printf("riders\' address %x\\n", &riders);\n  printf("total\'s address %x\\n", &total);\n\n  return 0;\n}\n')),(0,i.kt)("p",null,"The output of the program above displays the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Number of riders : 3\nTotal fare is 9.75\n\nriders' address 0xbf9cf5bc\ntotal's address 0xbf9cf5b0\n")),(0,i.kt)("p",null,"The instructions part of the table is optional and may be replaced by the line numbers corresponding to these instructions. The walkthrough table is shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Walkthrough table example",src:n(6366).Z})),(0,i.kt)("p",null,"A style that is sufficient for programs discussed in this set of notes is shown below. Note that the table header includes the type and the address of each variable."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Walkthrough table template",src:n(6524).Z})),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Consider the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'// by Evan Weaver\n\nint main(void)\n{\n    int a;\n    double b, c;\n\n    a = 6;\n    b = 0.7;\n\n    while (a < 10 && b < 3.0\n    {\n        if (a < 8)\n        {\n            a = a + 1;\n            b = b * 2;\n            c = a - b; // careful: mixed types\n        }\n        else\n        {\n            a = a - 2;\n            b = b + 0.8;\n        }\n\n        c = a - b;\n        printf("%.2lf-%d-%.2lf\\n", c, a, b);\n    }\n}\n')),(0,i.kt)("p",null,"We prepare the walkthrough table by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"inserting the name of the program ","(","done",")"),(0,i.kt)("li",{parentName:"ul"},"showing the type of each variable ","(","done",")"),(0,i.kt)("li",{parentName:"ul"},"showing each variable's identifier ","(","done",")"),(0,i.kt)("li",{parentName:"ul"},"showing a unique address for each variable ","(","done",")")),(0,i.kt)("p",null,"Complete the rest of this table as an exercise!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Walkthrough table to complete as an exercise",src:n(8338).Z})))}d.isMDXComponent=!0},9211:function(e,t){t.Z="data:image/gif;base64,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"},6524:function(e,t,n){t.Z=n.p+"assets/images/image34-b8bf0942477cf59e59625ef8331d322f.png"},8338:function(e,t,n){t.Z=n.p+"assets/images/image35-5827db2e30ddd672401f42ba2755d93e.png"},6366:function(e,t,n){t.Z=n.p+"assets/images/image36-3127a2d41d51f435d25c95e6c51b453a.png"},4150:function(e,t,n){t.Z=n.p+"assets/images/walkthrough-09708809c1a32e4de8d9b4ab6181ef50.png"}}]);