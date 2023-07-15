"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[220],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},A=Object.keys(e);for(r=0;r<A.length;r++)t=A[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(r=0;r<A.length;r++)t=A[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,A=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||A;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var A=t.length,i=new Array(A);i[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<A;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>A,metadata:()=>l,toc:()=>s});var r=t(83117),a=(t(67294),t(3905));t(8209);const A={id:"records-and-files",title:"Records and Files",sidebar_position:2,description:"Stream data using standard library functions to access persistent text"},i="Records and Files",l={unversionedId:"E-Secondary-Storage/records-and-files",id:"E-Secondary-Storage/records-and-files",title:"Records and Files",description:"Stream data using standard library functions to access persistent text",source:"@site/docs/E-Secondary-Storage/records-and-files.md",sourceDirName:"E-Secondary-Storage",slug:"/E-Secondary-Storage/records-and-files",permalink:"/E-Secondary-Storage/records-and-files",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/Intro2C/tree/main/docs/E-Secondary-Storage/records-and-files.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"records-and-files",title:"Records and Files",sidebar_position:2,description:"Stream data using standard library functions to access persistent text"},sidebar:"courseNotesSidebar",previous:{title:"Text Files",permalink:"/E-Secondary-Storage/text-files"},next:{title:"Character Strings",permalink:"/F-Refinements/character-strings"}},o={},s=[{value:"Learning Outcomes",id:"learning-outcomes",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Records",id:"records",level:2},{value:"Fields",id:"fields",level:2},{value:"Tables",id:"tables",level:2}],c={toc:s};function d(e){let{components:n,...A}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,A,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"records-and-files"},"Records and Files"),(0,a.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,a.kt)("p",null,"After reading this section, you will be able to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Stream data using standard library functions to access persistent text")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Persistent data hierarchies typically consist of databases composed of files, which consist of records, which consist of fields, which consist of bytes, which are stored in bits. In files that hold a tabular structure, each record contains the same number of fields."),(0,a.kt)("p",null,"This chapter describes how to identify records and fields in a text file and how to retrieve tabular data."),(0,a.kt)("h2",{id:"records"},"Records"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"record")," occupies a single line in a text file and holds all of the data associated with one chunk of information. The record is a sequence of characters that ends with a record delimiter. The typical record delimiter is the newline character (",(0,a.kt)("inlineCode",{parentName:"p"},"\\n"),")."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Each record ends with a record delimiter.",src:t(33463).Z,width:"491",height:"122"})),(0,a.kt)("p",null,"Consider a text file named ",(0,a.kt)("inlineCode",{parentName:"p"},"produce.txt")," containing information about items of produce in a grocery store. Each record consists of the ",(0,a.kt)("strong",{parentName:"p"},"SKU")," for a product and its ",(0,a.kt)("strong",{parentName:"p"},"unit price"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"4664 1.49\n4419 1.29\n4011 0.59\n")),(0,a.kt)("p",null,"To determine the number of records in this file, we count the number of newline (",(0,a.kt)("inlineCode",{parentName:"p"},"'\\n'"),") characters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// Number of Records\n// records.c\n\n#include <stdio.h>\n\nint main(void)\n{\n    FILE *fp = NULL;\n    int c, nrecs;\n\n    fp = fopen("produce.txt", "r");\n\n    if (fp != NULL)\n    {\n        nrecs = 0;\n        do {\n            c = fgetc(fp);\n\n            if (c != EOF)\n            {\n                if ((char)c == \'\\n\')\n                nrecs++;\n            }\n        } while (feof(fp) == 0);\n\n        printf("%d records on file\\n", nrecs);\n        fclose(fp);\n    }\n\n    return 0;\n}\n')),(0,a.kt)("p",null,"The above program produces the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"3 records on file\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Since this program determines the number of records in the file by counting the newline characters, to report the correct number of records, the last record in the file must end with a newline character. If the last record does not end with a newline character, the count will be off by one.")),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"field")," holds one element of information within a single record. We separate adjacent fields within a record by a ",(0,a.kt)("strong",{parentName:"p"},"field delimiter"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Multiple fields are separated by a field delimiter.",src:t(88501).Z,width:"586",height:"108"})),(0,a.kt)("p",null,"Consider the file named ",(0,a.kt)("inlineCode",{parentName:"p"},"produce.txt")," (see above). Each record contains two fields: the first field holds the ",(0,a.kt)("strong",{parentName:"p"},"SKU")," and the second field holds the ",(0,a.kt)("strong",{parentName:"p"},"unit price"),". The field delimiter is a blank character."),(0,a.kt)("p",null,"The following program reads the fields of each record in the file and displays their contents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// Record and Fields\n// recordFields.c\n\n#include <stdio.h>\n\nint main(void)\n{\n    FILE *fp = NULL;\n    int sku;\n    double price;\n\n    fp = fopen("produce.txt", "r");\n\n    if (fp != NULL)\n    {\n        printf(" Produce Items\\n"\n        " =============\\n\\n"\n        "SKU       Price\\n"\n        "---------------\\n");\n\n        while (fscanf(fp,"%d%lf\\n", &sku, &price) == 2)\n        {\n            printf("%4d %10.2lf\\n", sku, price);\n        }\n\n        fclose(fp);\n    }\n\n    return 0;\n}\n')),(0,a.kt)("p",null,"The above program produces the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," Produce Items\n =============\n\nSKU       Price\n---------------\n4664       1.49\n4419       1.29\n4011       0.59\n")),(0,a.kt)("h2",{id:"tables"},"Tables"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"table")," is a set of records in which each record contains the same number of fields."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Table contains many records that holds the same number of fields.",src:t(60531).Z,width:"529",height:"133"})),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"If one of the fields in a record is a character field, the blank character might not be suitable as a field delimiter and we select a special character for that purpose.")),(0,a.kt)("p",null,"Consider the file named ",(0,a.kt)("inlineCode",{parentName:"p"},"sale.txt")," (its contents are listed below). Each record in this file contains three fields:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SKU")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"price status")," (a single character where a blank character represents the regular price and ",(0,a.kt)("inlineCode",{parentName:"li"},"*")," represents a sale)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"unit price"))),(0,a.kt)("p",null,"The field delimiter is the semi-colon character (",(0,a.kt)("inlineCode",{parentName:"p"},";"),"):"),(0,a.kt)("p",null,"The following program reads each record from the file and displays the fields in a tabular format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// Tabular Data\n// table.c\n\n#include <stdio.h>\n\nint main(void)\n{\n    FILE *fp = NULL;\n    int sku;\n    char status;\n    double price;\n\n    fp = fopen("sale.txt","r");\n\n    if (fp != NULL)\n    {\n        printf(" Produce Items\\n"\n        " =============\\n\\n"\n        "SKU  Sale  Price\\n"\n        "----------------\\n");\n\n        while (fscanf(fp, "%d;%c;%lf", &sku, &status, &price) == 3)\n        {\n            printf("%4d %c %8.2lf\\n", sku, status, price);\n        }\n\n        fclose(fp);\n    }\n\n    return 0;\n}\n')),(0,a.kt)("p",null,"The above program produces the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," Produce Items\n =============\n\nSKU  Sale  Price\n----------------\n4664 *      1.49\n4419 *      1.29\n4011        0.59\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We have included the field delimiters within ",(0,a.kt)("inlineCode",{parentName:"p"},"fscanf()"),"'s format string and these delimiter characters are discarded and not assigned to any variables.\n::::")))}d.isMDXComponent=!0},88501:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkoAAABsCAIAAAFtLDpaAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAinUlEQVR42u1dfYgkx3WvljexZLCNwblgLcbh6F7wehD+wwgx44NDC77r2X8WZA4Ollv8zzRIJ3qIWC6GFRgkMMcimJEtQ88/YY8D4SWG/Wen7wwrBHIPQjghhMma7AwCJ1wMcsAQgyQ78lXqo6unurq6p+f76/3g9mZ6qqtefbx679XHe2sYY7S8WJtn4gzDuPbgAfnw4Nq1JaxebvgI2Y6PPDtRvS984alPPvl0fiiVmYX03sPr1/nTzJdotZJ1o9UjdcPYM0pnOPhbhAqoe1ZHW64Z/nz94TfY2Pgt/0pbCN130K6cl5IGobaPCvz3Uv2jwL2kycdwPPwyLQ6hLkKktLfeCd7+AN18Nkbc48ePx8N7ONgKH5hbbnpqVqtdr0+ehajuvG6afHAvD9GSat147/307Bb58NLzR0NWL3vmfJCDpceS5qXnK9rnyS4ldcadGh0CHXfHRrZ4WGli0volwyg0caNs8HrN+9SS7NKoPzxT8zBgHzzxda6rN7pMXg7BANWLUC8Z5wc4JkZ8B9kem+i7B+eW7WHB5SWMA/ldJjmc+usNN8CK2KU5d5FrJqbHUh0HvdnacPx42bSUZqVVRk2sFW1D9N6mFfvavWibLOcDQp2TmhepG0+8faPYe2gYHm7yz1XLcUOREFZ4ADReJ3KJ5Nam80czkuYDVy/e8Ew0uYGkHWCJ9YOEVCSJ4g+xnN6T9QwhcmOCNtlFvBT+qjfgZLO2xBbDXM8r1x8+1NoKhAUaZZXnl2rOJKoJYz8bdeuEc3qzmhjXa0SLSXv5ibW1x599Ni5S/vqv1/78588GEt9pVgKh3pM7zXRVthf85iU1dzELO8KCDLV7ovUXqq/uVIho8GQTgafxHSd6bhh3Mb4jpyGEkrKITXBIC/JKhhOQv8KM+K7xBkIX49VU1rRqexooHW5qsqhijKw72jSmKCjgf4UNcfPsOYSeUxK/9c7eSPYBQpX0EVIZp3GQ2Qla++DtrfdJZ76Eo7pRS5DaB1FWvkOE6ul2ULXoQy5miXFQYQJjrueSRGea6kC1PaJaEG5zuU1go4WxDIYejcuvN0PdslfYEg+79RLRQrvSMkmUUlb/tfZBBpjyjeUPRErh9Ol9LT0XIvKtetc87yTXzzQ14goB/xup15wIpkBgW3mdKBPITbUqysZmkSjuzaggPgfS/K16lLKIGmTuGKxu0VRD29XULxgqn8I5ylZEGY4WNlTF33TdjIU2nS4iHroeduUlk1W0A2D1BKBBtGEjtK9r/dI7laZHeIuvyfBZiE8+bALyUfeCq/2yMUPeKtb2A92kCz03JUTyipvVYia0xZxMJIydNNWypBxTroXpRXd8tqRf29yoE6K2rbXxIisuXfJSsw3595G9i9BHCF2KLx98I246/FYo+o5sOknlUvvQMO4j9Ei2p+R8uMXYsyBiGcRqoSS4bLxhnz23yT6/sfX+h/g/chrTczJbth3jJ6HJ2j1DZtSXhYGy5hoFH0Hk8/7FIzaqLg1OZDtZdKW566H7g+htTmSHc9Nfm+wVal09evuDdfTDe6+wHbT5lXM4phpVhPb1pmQX6nXbvvZ5xPUeT2lXBrLhba+SsS7AMq+k5iNVypRpCHW2N5UFD2Uh4KXnEfqHo75y7sWzW5ncSZnZdwzbw3zVQPnbqRVPUcFlqzXka62Do3UEqqMTpbxTczouX1MgiffQUaG6t4MDG+TciNjMwZ3WZjFtsiVWodZ+jEwX0oXtMt0q5k9a1cMCatmgoYysceB+3GkisW/EE8t/+U9uPDe+vmXbqpHHDUdm5nmgW4I9B4CeA4y/5+olww0wX0z0hOXPdSdu6pGfdk4M24uZOPwnrlwJ6WtH653R8Y7kCiiVzBfdYOPQYdN6L2dxUiQywhy2XcpJKhnlQNr1iVKKNWAu+xkBbPeVk0eqVkU15aBBTIcUR0ZKdUZSuUGK4w0S0c7rwmtK9A6iBPKU1KCpdVDVCjo1ZG44RpmtBfcaoWSUgn773SP1HD+wIa2K2pEE5gYD/clWLdPzDk0idWe0XtBbSgifSA0tcqMruuGjKGfbS+j6vcyD+J5W2NauKXrF7hXHFpk45aRqboIAjvB1YdywJSiPW4TiBIst14XXlOgdrGJebw/XxShObdQIrQFN5FR7DgBCDgDdNn/g57SktRt1EUg5XJkU5ZGMj7ZQezI+8QS6baqQVCckNnTiEnTjMNLFuArjWFWp5/SnUKHbZonChsm0oQb/3IZJcubgM2Squiup07004eKWPLXqj2tnnRedAownnsAjX6+aEJ588vMZV+7Cs6xSJ0xVJcnYYA130MPNTyJC72O8K8lk/eZnYic2ZoMbxl2EPuxt26bvxCqbn+FObKqCkHcnllcqOqmrHKR6651jhNb559tb97KYaaaG01pab5FOqjR32SLIe7a9O3jOfKIusLWJ3jYs27Z2BhHpTrv2WrDxSxTf+cw+t5bK3KxS0oOPmupmH+mzR1HPLZ4BQBiL71xbm5dHKcBWG27g5i5sXGLs/l7vUfeMZDL4TZ9epQQ0u/DndHdtAe02z45/sO9Edc4nijljSSs3jNX4elL+PhMrWB6Kf4gyzNNnybMqvFLREZVkgs18rMbP+0cY8aj1EN1WGe7NB9fGUHyeGwlTIwbFby1I1xS06DOX8pVoIqEtdjqhWy9Z5wd456R0sc/PHJTZAQUymslP/NQCO8fQdIxym65Y8vZplozyEcaWdNABDIBR0F8KRvY1P0JCFHvHtwPXd6otq14iHUDUNIKOS58pKj296U5XvX16c8x3uM6BF+KSx5yjrxQkfVZiPdMk7MIvLhNuq+8X2F4B70uqPdRLdVTgzKSd6bv05EIjdhcOWn9oZEtBvulDd3z43k2432PTA1mu/pgJjntUiFQ6M2FvQLcNLQWPZlg6dNtCAroNug0A3QaAboNuAyxSt+lOpclIXEYPV3oT+y+xUxLy17TDF+Gxxi6qHoYHF6UTmCKfcNeCns6gt+c3CmnUhiVG1elTr4T3jeykkhecuei2yFdXdHW1d+gzXIZRuvmkdyuBNVa71uHnJuQjFV4zuSapnkblT0nPHSv+wwT4HdzoK1+AUNaso4Oz/PPOScPmvWXnXNqOndBlhZaKtSN6+kPuUdP1kW9HKQX90S1A+aTsNLqtc94yQ0ve4ws2g0I+N5EHyQPLQYpvCUKSvB1TSmEOmYC0S00pKGpJ0p7+sHUph26EUbtNnpR488kHdVHySqO9E44/zlVYPZwb5dtr/fgJ4ui+c+/sszgsrMyQqLcdI9+b1iToEWDnPMhtooR7PDFWAv5fLKnSZWKqUPbCvDl2tWlPItNgIGcuS6ySwGFyAAAsN8ByQnHWo2DokAvAbwDAxJhWWp2R/AcaKNxT9h3fZkswBjfgZHtAfkgP+VRbxVqHqLvclSB90ao7nY1GuVxkl0tbLE/ui8SwqqhIr7PKZdXrJ9Vq3vNtwG+AJRGb0QfMfN6zc7mcD0tSMumh7xBmQ9QXjOVsKFaVjYX7TdSth0s6pltBVU8wW1TW+cYA1jjwG2AZEJ1/a4aXA6nAiUSZlEx6aBOJ1WYsV6HetHKUslNhojVRFuiTgKXmLmmrLxIu0sqfLVarsZYzo89m6DWjlw970eWhpsJlbpN95T63RGHJsvLyW3KbavKi38m0mH+7ssSgxKU9GbIX1Gk1zsGPXkRffUEdULe3yKT+++FWtld8PXwt3SSVr4i2Hb/ADFAHhVefwifd+l2r+mGtdgVt74ZbLP790sX3WtVf5rxmlc8+1hDDiy7WXgvcS/zmqYaYCP79urU7lk0g33EsrxdsTy5aJoYzM0KXUSIwS73kuMF4OEdLjCg61lNaYgjZp+cfbnuetmF+ekY57Y1f/PGVF/739ta/ka+E08hf9uEeiNlx8ptWFEhG58u8tzruHSqRyWjumZq7Aend6oQJ9++T8c2M3VedDS+VmB7BnjtFYlB49Z0P/btKcvfgyqDhPAYV2kpPaYkpGXcDfGfD6WO57KFfIfRM6cfMixz6PfDMlPiN2ZoOMxM9fsfedO+g+l2DixRruoTbu53aIzbKr3BjV0sMFzt85NU63qSGeIIY1ly7kUiRxVG5gWj0h0ket0j2lJaYICUcmgKuT/LAujfn27X7AvNb3N9IQRignvLE5CJF0+W7GdOv6p8l9qaXkxi5aK5EJYlJI0+xiwYiRrm5nyza60Xl8JLvZptgWcRoOV1HjLan0mw/bVQNYafdS+/DIT0TkRd/9OLfaG1Coqbmu0nYNZwOP/yc8zRymi5etxJTsOZhuJvXJy8/18LJDM5z4ceV+ZlvxuXAYSnpmRAxhNm0NuHQGcZD5u2U6pY4rtkt1dnRTcZF5xZL1q07HZfwhn/SQPtepAjJD5UMUTwgHnN4sU2P67MAuxKn+WHRjPtOdD4nYT8AMAOMzyZUt9fyb4hZm8WLfg/TMqSXBXQInzMGPBnRfgMAxijiRrAJTSzMX35QS3EWIm3OmeLGCVstk/fT4oFt1IfxDCOH/UE8h6C3ZWdLfyPdHgO/AWYMYnFlmIX9fKAt73oJADAJPJ5XD8zAbwAA8BsAAAB+AwCA3wAAAPAbAAD8BgAAv+WCiDlOEbmXkNw8IO4rAlWa9OSb7xjlhvAbUWqgFo9hQRLUahW0nXmwWBy94SA5WR6WLqTQQzQJvxSRf4uYNwt6+q5Z0R58i/svDU/HSdl25CdamqPosghlkYpyO97glY+ODuYm1ZTbJEkqeR3Fb3AOgh49Ue3kopUxoHX7kays3FB8XCWrwx2KJB2NsBOQF41q6Ggk/mI40kaPbj838q1bNw43ZGYLh3Wndrot7tIShqGb7x4bHKRVWzw8U4dftiXNlVkCO7qWmULnl0LrzQJzX705Ecu2yWcQPc2+U7rYx/n6MqfjDQETNfZQ34OxiRbQk9qt15FLvd+U6iN2e89/b7zodrkUHdCNnLlyzzzc7UdmZSk2Cqg7iKMR2jYboaORRDu05NPChNl4jLBF5jfTJXzET23H3TygbTJThfLN9Tqkzbl8C2+vmG6AWAI6AWde7Qm2T+tdN0sA6vxSaL1ZpMnnXNn6epoF/zSMahHjo6Q4UpDT8UZcOHT7ZJtoAX3zmq6b2gK8CIsXpPspVnrAZsw9dBS4saKJ3IzIDkRNseT2I62ylpiGOIcM6WgkyPJQUhrlbsHM+U0erFjjUiLmK4I5gojiXWJNgkyWjkWyjnta5rkl/VKgtJv8QplUmC2uX9niBpCUra2nWSkFSxfdtKSiYRxvmHK2/UlNtImaM8sh3gJhEfyv9iflM8k/0PWjXBet249kZaXRoRk8nhRgTeNohOdsh5lqR0I0R8B6CQCw1Osl4M8cAAD5BgAAvwEAAOA3wKLg+sOHaT8xB5sY+A0AmCMoxwaSiIVhnYVTIOA3wPJyX+I8Df+hd55G2s5VHspnX5DkFKjAwphiFhCHHYiipbTL5RZC+yRx+pkV4DfASnDdHjrCmDnGQh5nrMONgB0fMi62e0645IeO2O+OnHBFoPt/zAkXxi5hP8TO/XBXXKSMUqys1kA6MPAbYAnY7aRVbXCX3jyKe/f0eIcdi7B3KpG/LeVhgx4Cirxo7iRz1TvhSpQF+iRgxUAYqOlFlhU9v7Z949BHNtEzL9qRPqk8rMROnPhDlwX8Blg5htu/KBnUvKqEJ8FMd/+UPqGmWoT4Q086uZrP+rIbZYPYb2pZwG+AZeYtL+EcMvd50fSznXmcTIr06Wcygd8AgDnC2tCBFyYBYxZXJNLwuc898Ze/TNVZ4hNra48/+2xeRsZffe6z//tL2q9Dd1NGQJK5GoqTatUph8xEcxbCc87iic5X5Nfv37v1z+//8ZUXvhj74YP3311/buhsIb6pBkrUzCSiOJqib+7KUTPJrzvjuzfbl5gohGeSmHrJQUfe9uld63wbe4XxDMRYsNU+xMhxVXlESHt8kVZzEBPvqWTR/n3j9a+l5XBpHT39s39HL8S5a/3L5DlgnPym7TM5ZK48CypR/OjuYfOKPzGKdSFzU4kJw/a6d5BxF42J37TclSSmF9w4Wo9277D7kN+rOm13ksQkeypJTNhir38tI7tNwnIv/oF8eHvr3tfu3Sq877efs6+uf3MT+Gai/Mb7cg/9AONLZEb0URhLscTi9KJ4lFr6xL8/abqdXtH3Mf52GjHRLF6s/WCaxKDu2eHGHXaUwbnY3o3Jk/J7E1ZTEz2VQgwR/jjwiITMyOurLzxzzj5cJTLthWd+9wGRb8A1U+A3/19b1ffEtnrYZy10ZVZ0s8MB0Wbjt7OI8e+XLr4ny+QpENM9/fWOS5U0e+dKLMiYvctC+8bU7zEj0VN6YrpnRNPOkd26/4s/Pg2MMm1+s79NOk/ZVi+i9xDanQndFSl2Lg9RrSWG6FFkah/S19sIxJjb3xFHGR5FKhyRwEGYbJIyItFTWmKQuZWzVagJB5i6PlnYv7hrlGlI+Cg2dxDGZb88fbo9KSS8nU4Mi2HvNOjHy5MTKUliyGjeP6XNRU0mAUEhmrA+megpHTH5cfPsOYT4ksk6j5AIGDO/jRISnmtNY3TqN0pI+EmM7PhqXrLogjjxcCd5vmHs9GiJSfaUlhhdDhPHW+/spf10e+se3DcdPzJ2PFecGGQYWfRMfad0/IFIfefd/0Ej7un1nGH6joO8ofedkg6wtQ8dXdh7BXnSRPxWmXIvYlyZnxE+X8Q8XvaWsTYvff5fxranZ3uNUt2z3aE9qMc5rfcwcXuV3Wq16kn36dytOl0wY17ltcXNWL4BVhemu/mfe+Pa0yNcUTkIlMumJ9KRQCIJI2fpGB8c08vZZql3zbTnQT3+MHF7VaB9YSnu03mluPt05QIrL272+iRgxTGePb1u3To/YBERYhdA25LgOm4hbrRWEI0iwO+PtnQKXexh+o1S/Q1UAeUCqzYx8Btg+hjHnp7pNpFR72JXvQDaipLcKEacUIz4pkj5QrWEYw+HvVGa5wIr8BtgBhjLnp7t4bJhuPELoJ4UFcQNNBFCRNiQmP0Wf2gPeqM0DA+S4wIr8BtgBhhlTy8ZGWb0CCEoPbaM17tv6mrCg7DPtpBr2uKA3wCA2QD4DTBVZOzprcR9UxgBgGkC7psCAADgNwAA+A0AAAC/AQDAbwAAAPgNAAB+AwCA3wAAAPAbAAD8BgAAgN8AAOA3AAD4DQAAzDW/dQ2nw52djhjDTeulTIbie8xgfpHSkzPPSr1oNU7d8qQAMb5hnCTv8PqOYXnYzE9Dj+auYeyRz9pG6EdqPNs4qcwFjZdsnL6kKi2QzIGQ2sF4uHA943JNp1ZWNFTomSejQ/N0+rBJFkO+NSuoi5CZcCo2nJeyJNo5WlEuK5wPGDE0cLPVS1u62M9To4gNktkmaDb5aMbNSr2LMoNOhaQmXK/pSBWOYmvF1vhIDcuqjcXtnXBNpxTN64IqzPE0mRvKDV5Txyg1UKuJsaWrbIQAdwzHJ+8mqkNbr102CsxLD+7UDKvKCyEt0Kb+f0LnWKkO6qzNiy6yzcXnt3KDOyYdg5cyLVr9eFJxS8aH1eFGwALEGBfbkVsYLyCcWc1bLzlbPkQzaCYDK5/ri4TrNS2pgmHIYHUHJJW3QAqpXVL6gXakD6rehK7p1KLD2rEkZHZjsZOcepfUq4W5S7mUykbzF2ocOo2y2qECZHLxSNmn2xi7pI4iAHeTcKOZIEbroG6x+S3q17F4KdMJhf7KquKWjHb16fGOS8u0dyoXw1Ytni3KoHkAjTrhei2DVMwGJhmsfWM1JltAS2rJ2Atw4Dtj4LbQNZ1SdHfzxrZQ2bqnhQ2Wwt4596NnOfqluNloqdVRkOamLstBneluOAbh18XmN+bniFkI4/BSplNbsCGCraUh6ZbM3L4hAsS0h57N5Wwd1otamgczXxOu1/SkEjnQcXmyDXMwUnkLaEkNMu3kARC5pjPVoo/rXZdPD+Z2+5QpcP7JpmVz/5P9+8V3akfeuVXt62cuZzvIc8TJDl4G+61TQ6V6N3Dt0b2U6ee7bAuONbHqlsx0908pMbVUY6W33pMn2zSaiWoTGTC1DkZ7huxMSstwqus1Lammu3NoGGVmB8mrFLlbIEfzxlqAFyEK0vyUnAe5a7p40fYR1XhC+y0gAsVg9pstnDqm9UurajChT99jPrD6+plTyGmUjX2VmKVanzSxiLBtukEgPozupUyjPKDYmkF8xc8W0WrU/BVilHUI8ntxMzZ6lOGrUGgnniBdldFBpS+pSddrWlKpxzUhn1wp276k6tpEzTnZApyjBF/1OlcpPemaDqU7lpPrENGprWyS1ER12F/ZL51wU8dzxuntIMTC+Y69wPw2PXiTcTgTuBOwpO3JRLSZTLZ5W8D20BJgFpsBCPa7AQDgNwBgSfltxf0BAgAAAADUSQAAAAAAQLwBAADATPHkU0/96dNPh3vxk48/hgYE8QYAAADzCCLbrj14MMSLD69fHyMZ7CKa5nml2UTlMmri/vc5jZRk9Je2dJkvO4++KaOC0kvMSeSIF2JBvAEAAMBioJgiWeb09IM9+KlZ+RXfIfK8OeNznyDeAAAAYFaIWTzM9QgKxWDsi2IIVsI3QquwmG4y6lPmKEgiLPSIEsrn8FvoIIV/LUTOUrQGX3pxkn8VEG8AAACwkGhVrbijpIoiCXwnJmVMN+igkmU5G1j2LdiTWNxeaiKj3NYKt9SUeQpKoNIMhJOGG8Vqq9AM07Kv1RPfs+1UCZ5dXOXAnZBDIRBvAAAAMHkMYaOk+aMYO6ZW0HSLA/EGAAAAcwDb69SIVVNCQgxqVu54GqMkr+3pFyczUuYpaBxoc1/K0yoOxBsAAABMX3KlndOI/aJYNZIjO1vvyU5215dtI8VT5ihIIkxJnfpVrsvA9QLxBgAAAAAAiDcAAAAArKx4YzFcvOWupGE4Q1/tXO7GgZaBxhmuZX56dmuIF29v3Zuyk9vhiwNnvKtmvfmOk3L33vPstmP8BDWzr6lnpvHvG+VHtc6d1P3G7lnJ+t0B3rXnrx1HbpnMxslqmY/qpVerIkpQsfZa4F5ausYZcth063et6ofs4+WscbWKwyZOQ/tGJ9gaqHlub/nfv2dfRb954+dfeuXv1/uk/uD92z/8A0kPEy5gfsUbm0HTOKHgTU5jpYz6Hvt0ZX7bcvotQ+X9caHpRfEDyYRuGOvNOdQApt04dNJv117D+JJQAhyj8DL2CjBslFai4rU48Julb/1dgQq1b9rIf/fR+lX6+dHbW2fox1voh2c85mPpx7duPss+Pfv10re+TNL/E8y4gLkWbzm0SKY1o1BtZFMw0lkVTHW9Es7FoQC7rM/b3sV4l6VZxEaO6dd5Gidvy5hbAd6SH3TOibGyvqCNM9ZhE5MN3fo/VluXa0cFGDZx3ejXNzpe89Aptwcm7uab3+QfNr/7lZ/9/NFVYcD993996ZWzWzepsPvNG7fuvR1KuPWbb64jAGDexVvr2DKOEwspMUurx4d8CqZ31F91NtRkPVbkAoxeqn+0wG3Zt2VyNs5wLcOns8rLGBcWsnEmOWxM9we141ere2fbAy7BLeuwocLy+DsdfIdeiBqR/me/9f37vxIGHHr6618Mn69/6WmYXwELJt6KAy/TJ42M5cQQLTOOxuE7TEW6ELe7VI0zzmFzyT26cWwdH/pbnr3qw0ZsSX4oiVUqYivN4fy7f/Hq7lduUwMOplPAoou3vrB3O7W7lnUXCWWTrZkk9vZ5MuNu+LzvWspyIE/j5G8ZsUgldpiWvWUGaZz4iYmP6nu0oTwbhg2xZe/Id2yHO1qiM+CegfkUsMDizfa89NOyvd0OhX/oW56aRk3Gd9f6MfncHtbN2TI5GydvyyyIWTyTYRMv9JIbeC4Mm4FpyG3AvckUh9htgfWbQ10eGC+eeurJTz/903AvfvzxJyAhwHoDAACAeQSRbUNf0RsfFSKGTBzT8LqoxcpEQKXXug3DWe4hTmr44Nq1IV58YtkbB1oGGme4lnnp+aMhXnwJH02VUJ/2wruP0KD3865O4pinGv+GyjzjfDBpMN+Yuwioa48fPwYVLw3QONAy0DiLPN/uINQY4n7e9JERXzT+TbKnkuFKwy+qR/6VjYAKi5MAAGBp5Rv591X2afb38xplo6Gac1gsyqUG/LTqe9UWSSnmcmHukBlfCVfaqbWtsrOTiBG6whFQQbwBAIAVwMzv58mLk8wCCcOhaRGFkOnOa3suQgRUEG8AAGAVME/386gNtuMYlnHMTJSsgJ/uUe3YKpc25aVKurDnBs1zo2ygaCXRolZeYGvKWtkIqCDeAADAShlw07+fpzU9YgFG0wN+Kj9J32IZyF/UIx4rGwEVxBsAAFgZA25e7+cBJgEQbwAAAAAA8QYAAACLg6HDmU77ih4AxBsAAAAAACDeAAAAAADiDQAAAAAAEG8AAAAAAIB4AwAAAAAAxBsAAAAAACDeAAAAAAAA8QYAAAAAEG8AAAAAAIB4AwAAAAAAxBsAAAAAACDeAAAAAAAA8QYAAAAAEG/zABaLtqU+HX9Q2PygYWLbI5Yf1kpXjTAibgIscj39EUkh7NPoS03Tl3hK2flBdgkzJjU2JHKOhJFJzaQ2s1UlcnMRO0NSxzrGl5zZtd1UaebhHLl3cnZoyuu+4yBvkHf1DV4ZjAAQb+OF2vy0V4zzhe2Tbn2PholPJz+VoQeISzsUJ3N+rQzw1pRJZfxYaGJs9x4YRiHXUJhBq4azI8bmYMTOZAAo46AIzD74iCKNZwykFwzRodErvkM6qumNUAEWAZt2eGlzdirEyou3XJMeCkdV7IvyTVLGGBdXJB1KfGGfpYGbTKhn/cFUz+KmNeTUwxW3jCon5qocxCMR3Z2VMK5ZMlJLU6gdnFQlIj1CnXPS5IXJk2oO1aqxyYtpNcXakT2XpEZj+PhGBzcPCZ8As/drLl2HNytGea++TQZ3Lg4VHWrF1nPEXBJSIpQ63u2pBl96y6jVjMHaJDXcWAHZNq/irVE2GqqGF+nvpO9iI4fMgB1Usixngw4abieJXhXTDen73ihmzzu1tlV2dsInlQPxBtWQYglxE+lZPzHzpk5Rh2yWyxhPraplVLM02owqx5PlJX5o9CU1i9rmSKTy2Sc2FCZHqpRy2FY13aPasVVlc585f6QK0RbQ6RCYfVh+ocKicd4hWeXhUNVwDdOb2zeK1VahGaZlX6snvmfbWeyQPR561VTHJc399fq+vQLm29wvTrJJrX3RRbaZbXOzkT1trTKv9VbI1JaG2G3ILVwnvj4zALW+M0JLF+minzctUseCUMAd+m6flbapkyoGb0sSq1TEzmBXZiGYPb0hT49bRJLY6GT2HDpIia3zDnkBxNusQXWyHcewjGMxBVBtjKgpJSSmBMkUZ/NJb2U5svLdoHlulI3eBq9FFb/A1hRHMzdKspWvX6/IPZjs/VrRGk1byqryUMRPuMtSqD0YmFSx5CJ2s6ZGqtSwg7Rq/GgCXZ4kxI9HYIyVVGXwzuhoyeIwe+ayKbMf7VwcOjJ6sj/nnJAhkWFxcurQCg2+TZSaSP45/pP0LZaH/EXd7I3loJY8GY7O8WN6lWMZDEx8snjCtIcbgW5KzklqFrWDkpqtQ0yU1LTGz2zVeLnxvFOonRWpWTSkN+zwSx2aDBeJ2TXdlFp8BodGn+OpzYyv0SuZxKfPCdrlgqGOAoB4A2jnaKJOWka1WJv/80r+4fGN/WAh2nWBSF3xhl2snlpe9C4ouXC0BDBWG81bEEoDe2EaNbAXaQisbsMuVk8ttaI9kx17EG8AAAAAAIB4AwAAAAAgA/8PNPgvCgxF9IsAAAAASUVORK5CYII="},33463:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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"},60531:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tables-e8ea532580072d6bab9f5bd3878f4880.png"},8209:(e,n,t)=>{t(67294)}}]);