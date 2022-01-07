# vota.dev

Welcome to vota.dev!

This is a work in progress!

-   [Development](#development)
-   [GitHub - Set-Up an OAuth Application](#github-set-up-an-oauth-application)
-   [Using Railway](#using-railway)

## Development

1. Install the project with `npm install`
2. Initialize the `@prisme/client` with `npm prisma generate`
3. Set-up your environment variables following the `.env.example` file. NOTE: The environment file must be named like: `.env`
    - You can get the `GITHUB_ID` and `GITHUB_SECRET` following [GitHub - Set-Up an OAuth Application](#github-set-up-an-oauth-application)
    - You can get the `DATABASE_URL` following [Using Railway](#using-railway)
4. Migrate the prisma generated database to the PostgreSQL on Railway with `npx prisma migrate dev`
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
