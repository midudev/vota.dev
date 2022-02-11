vota.dev
========

<div align="left">

![](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)
![](https://img.shields.io/badge/Maintained%3F-Yes-brightgreen.svg)

</div>

# Welcome to [vota.dev](https://vota.dev)!

This is a web platform oriented to help worldwide development community. The mainly goal is to give to developement community  a tool where they can find out the state of JS stacks, tools, platforms, libraries and much more and help them to find out which to learn next or use in actual projects.

By survey method we collect data and process it to make the metrics and reports to the community.

Table of Contents
=================

- [Installation and Deployment](#installation-and-deployment)
  - [Development](#development)
  - [GitHub - Set-Up an OAuth Application](#github---set-up-an-oauth-application)
  - [Using Railway](#using-railway)
- [Community and Contributions](#community-and-contributions)
- [Talk with us or Report an Issue](#talk-with-us-or-report-an-issue)

Installation and Documentation
==============================

## Development

1. Install the project with `npm install`
2. Initialize the `@prisma/client` with `npm prisma generate` or `npx prisma generate`
3. Set-up your environment variables following the `.env.example` file. NOTE: The environment file must be named like: `.env`
    - You can get the `GITHUB_ID` and `GITHUB_SECRET` following [GitHub - Set-Up an OAuth Application](#github-set-up-an-oauth-application)
    - You can set in `SECRET` whatever you want or a strong character string like a base64, sha1, etc...
    - You need to uncomment `NEXTAUTH_URL` to remove the warning alert in localhost.
    - You can get the `DATABASE_URL` following [Using Railway](#using-railway)
4. Migrate the prisma generated database to the PostgreSQL on Railway with `npm run migrate:dev`
5. You can now start developing for vota.dev

## GitHub - Set-Up an OAuth Application

1. Login to [Login - GitHub](http://github.com/login)
2. Enter your applications in developer settings [Apps - GitHub](https://github.com/settings/apps)
3. Inside `OAuth Apps` click on `New OAuth App` and fill the fields.
    - You can set the 'Homepage URL' to `http://vota.dev` and the 'Callback URL' to `http://localhost:3000/api/auth/`
4. You can retrieve the Client ID and the Client Secret there

## Using Railway

1. Login to [Login - Railway](https://railway.app/login)
2. Accept the ToS [ToS - Railway](https://railway.app/legal/terms)
3. Create a new project with PostgreSQL [Create - Railway](https://railway.app/new)
4. Claim the project
5. On 'Environment', click on 'PostgreSQL' then click on 'Connect'
6. You can retrieve the Postgres Connection URL there

Community and Contributions
===========================

[vota.dev](https://vota.dev) is a **community-driven open source project**. We are committed to a fully transparent development process and **highly appreciate any contributions**. Whether you are helping us fixing bugs, proposing new feature, improving our documentation or spreading the word - **we would love ❤️&nbsp; to have you as part of the vota.dev community**.

Talk with us or Report an Issue
===============================

We are really happy to welcome you in the [@midudev](https://twitter.com/midudev) community [Discord channel](https://discord.gg/midudev) 📫&nbsp; or reporting a bug / issue via [Github Issues](https://github.com/midudev/vota.dev/issues) or answer your questions via [GitHub Discussions](https://github.com/midudev/vota.dev/discussions)!