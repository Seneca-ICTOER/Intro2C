#!/usr/bin/env bash

npx mr-pdf --initialDocURLs="http://localhost:3000" --contentSelector="article" --paginationSelector=".pagination-nav__item--next > a" --excludeSelectors=".margin-vert--xl a,.theme-edit-this-page,.tocCollapsible_1PrD theme-doc-toc-mobile tocMobile_3Hoh,.tocCollapsibleButton_2O1e" --coverImage="https://download.logo.wine/logo/Seneca_College/Seneca_College-Logo.wine.png" --coverTitle="IPC144" --outputPDFFilename "Seneca-IPC144.pdf"
