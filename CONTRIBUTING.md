# Contributing

Thanks for your interest in helping us maintain our course notes! We are happy to consider contributions from faculty and students to help make these notes easier to use and improve their correctness.

## Requirements

These notes are built using [Docusaurus](https://docusaurus.io/), a modern static website generator. To use it, you'll need to have the following installed:

- an [LTS version of node.js](https://nodejs.org/en/), which can be checked by running `node -v`. Currently that's node.js 14.x, but confirm with the official site.

- The [yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable) package manager, version >= 1.5 (which can be checked by running `yarn --version`).

- [Visual Studio Code](https://code.visualstudio.com/). This is not strictly necessary, but we encourage it since we use various extensions to make working on the site easier.

## Installation

To install the dependencies, use:

```console
yarn install
```

## Local Development

To develop the site, use:

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Workflows

If you want to make a change, please use the following GitHub workflow:

1. fork this repo on GitHub
1. clone your forked repo to your local machine, `git clone https://github.com/{your username}/IPC144`
1. create a new branch off of the `main` branch, `git checkout -b {new branch name} main`
1. make your changes and save
1. check to see which files have changed, `git status`
1. stage these changed files in git, `git add file1 file2 ...`
1. commit your changes, `git commit -m "Made the following changes..."`
1. push your commits and branch to your fork, `git push origin {new branch name}`
1. [create a Pull Request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) on GitHub
1. add a description about what you changed and anything the maintainers need to know

## Releases

### Build

To create a production build, use:

```console
yarn build
```

This command generates static content in the `build/` directory and can be served using any static contents hosting service, for example: GitHub Pages.

### Deployment

To build and deploy to GitHub Pages, use:

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Search

To build index for search

```text
1. you would need to sign up an account on https://www.algolia.com/users/sign_in
2. create a project for the purpose of creating index
3. add an INDEX_NAME called "docusaurus" for instance on same website
4. You add API_key and give rights for ACLs search, addObject, deleteObject, editSearch for the key
5. SITE_URL is the deployed site, but siteindex needs to match it in order crawl it
6. If u look at the pull request ff0a9a5 i have a sample .env file with the variables set.I also have a an example of what values needed as secret in scrape.sh
```

Important reference websites for next steps

```text
https://docsearch.algolia.com/docs/integrations
https://docusaurus.io/docs/search#using-algolia-docsearch
https://docusaurus.io/docs/deployment
https://docsearch.algolia.com/docs/api
https://github.com/marketplace/actions/algolia-docsearch-action
```
