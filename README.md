# Mable Data Dashboard

Mable Data Dashboard is Mable's web frontend, built with [Next.js](https://nextjs.org/)

## Prerequisites

To run `mable-data-dashboard`, you need

- A working copy of `node` (>=10.13). To install different versions of node, use [nvm](https://github.com/nvm-sh/nvm) on `bash/zsh` or [fish-nvm](https://github.com/jorgebucaran/fish-nvm) on `fish`

### Installing Dependencies

Please use `npm` and **NOT** `yarn`.

```
$ npm i
```

## Starting dev server

Sets `APP_ENV=development` and `NODE_ENV=development`.

```
$ npm run dev
```

> _⚠️ Do `npm run build` before running `npm run dev` for the first time, as required css files are generated on build._

## Contributing

- Clone
- Create a `<type>-` prefixed branch where `<type>` is a type from the below list
- Make a pull request
- Squash and merge to `master`

We follow the conventional commit message spec. It's recommended that you read more about it below or on [conventionalcommits.org](https://www.conventionalcommits.org/).

Basically, the commit messages should be of the following form:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types include and are limited to:
| Type | Version Bump | Description and used for |
| :----: | :---: |-----------------------|
| feat | minor | New features |
| fix | patch | Fixing bugs |
| revert | patch | Reverting commits |
| perf | patch | Performance improvements |
| refactor | patch | Refactoring code without changing functionality |
| build | patch | Build-system changes (deps, webpack, etc.) |
| chore | patch | General chores like version bump, merges, etc |
| ci | patch | CI/CD related changes |
| docs | none | Documentation |
| test | none | Adding/improving tests |
| style | none | Code-style, formatting, white-space, etc |

- !: A commit that appends a `!` after the type/scope, introduces a breaking API change. A BREAKING CHANGE can be part of commits of any type and introduces a major version bump.
- A scope of `norelease` with any commit message type will not bump a release version.

Before commits are made, pre-commit hooks run `eslint` & `commitlint` & `prettier` to ensure code consistency.
