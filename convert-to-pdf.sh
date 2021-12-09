#!/usr/bin/env bash

npx mr-pdf --initialDocURLs="http://localhost:3000" --contentSelector="article" --paginationSelector=".pagination-nav__item--next > a" --excludeSelectors=".margin-vert--xl a,.theme-edit-this-page,.tocCollapsible_1PrD theme-doc-toc-mobile tocMobile_3Hoh,.tocCollapsibleButton_2O1e,.clean-btn" --coverImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4MZq4LgLVTna9KUjCeRitC47xZo6nIOpaTFPndnu6sJp0yXmNKwtytiJfjki77VMntnc&usqp=CAU" --coverTitle="IPC144 Notes" --cssStyle=".table {display: inline;}" --outputPDFFilename "Seneca-IPC144.pdf" --pdfFormat="A4"
