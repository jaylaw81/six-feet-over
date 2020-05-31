# Contributor Guide for Six Feet Over <!-- omit in toc -->

This document is a set of guidelines for contributing to Six Feet Over's website.

If this is your first experience contributing to an open source project, we've compiled this document to help you find the best ways you might contribute to our organization, but please take a minute to check out [a great beginner's guide to contributing](https://opensource.guide/how-to-contribute/).

## Table of Contents <!-- omit in toc -->

- [Welcomed Contributions](#Welcomed-Contributions)
- [How to Contribute](#How-to-Contribute)
  - [Open Development](#Open-Development)
  - [Contribution Prerequisites](#Contribution-Prerequisites)
  - [Branch Organization](#Branch-Organization)
  - [Where to Find Issues](#Where-to-Find-Issues)
  - [Proposing a Change](#Proposing-a-Change)
  - [Sending a Pull Request](#Sending-a-Pull-Request)
- [Style Guide](#Style-Guide)
- [Code of Conduct](#Code-of-Conduct)
- [License](#License)
- [What Next?](#What-Next)
- [Attribution](#Attribution)

## Welcomed Contributions

Beyond contributions to our website, there are several ways you can directly contribute to Six Feet Over.

- Fix editorial inconsistencies or inaccuracies;
- Contribute stories, posts, or organizational updates via the admin dashboard;
- Revise language to be more approachable and friendly;

Interested in making a contribution? Read on!

## How to Contribute

Six Feet Over is still working on making contributing to this project as easy and transparent as possible. Hopefully this document makes the process for contributing clear and answers some questions that you may have.

### Open Development

All work on Six Feet Over happens directly on GitHub.

### Contribution Prerequisites

To contribute, you must:

- Have Node installed at v8.0.0+ and NPM at v6.14.0+.
- Be comfortable installing a compiler if needed. (Some of our dependencies may require a compilation step. On OS X, the Xcode Command Line Tools will cover this. On Ubuntu, apt-get install build-essential will install the required packages. Similar commands should work on other Linux distros. Windows will require some additional steps, see the node-gyp installation instructions for details.)
- Be familiar with Git.
- After cloning, run `npm i` to fetch its dependencies.

### Branch Organization

Submit any significant feature changes to the `development` branch, while any less significant changes such as typos or language updates can be submitted to the `hotfix` branch.

### Where to Find Issues

We are using GitHub Issues for our public bugs. We keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn’t already exist.

### Proposing a Change

If you intend to make any non-trivial changes to the implementation, we recommend filing an issue. This lets us reach an agreement on your proposal before you put significant effort into it.

If you’re only fixing a bug, it’s fine to submit a pull request right away but we still recommend to file an issue detailing what you’re fixing. This is helpful in case we don’t accept that specific fix but want to keep track of the issue.

### Sending a Pull Request

The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation. Significant changes may require greater planning, which could cause some delay. We’ll do our best to provide updates and feedback throughout the process.

Before submitting a pull request, please make sure the following is done:

1. Fork the repository and create your branch from master.
1. Run yarn in the repository root.
1. Format your code with Prettier.
1. Lint your code with ESLint.

Working on your first Pull Request? You can learn how from [How to Submit A Contribution to an Open Source Project on GitHub](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

## Style Guide

We use an automatic code formatter called Prettier. Run `npm run format` after making any changes to the code.

Then, ESLint will catch most issues that may exist in your code. We recommend simply using VSCode with the ESLint extension enabled.

That said, there are still some styles that the linter cannot pick up. If you are unsure, looking at [Airbnb’s Style Guide](https://github.com/airbnb/javascript) will guide you in the right direction.

## Code of Conduct

Six Feet Over has adopted the Contributor Covenant as its Code of Conduct, and we expect project participants to adhere to it. Please read the full text in [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## License

By contributing to Six Feet Over, you agree that your contributions will be licensed under its GNU General Public License. Please read the full text in [LICENSE.md](./LICENSE.md).

## What Next?

Read the next section to learn how the codebase is organized.

---

## Attribution

This Contributor Guide is adapted from the [ReactJS How to Contribute](https://reactjs.org/docs/how-to-contribute.html) page, available at the linked page above.
