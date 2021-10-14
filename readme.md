# the project

This is the code base of the DoGiBo prototype.  
[What is a **DoGiBo**?](https://www.fprager.de/posts/dogibo)

[Live version](https://dogibo-alpha.vercel.app/) of the prototype.

Stay tuned to the official release in the near future:


# setup instructions

The project uses `prisma` as GraphQL client to access a PostgreSQL database.  
[What is prisma?](https://www.prisma.io/docs/concepts/overview/what-is-prisma)  
[How to setup with existing PostgreSQL](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgres)

To use your postgresql db:
- add a new `.env` file within `prisma/`
- add a variable to store the access to your database
```
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/newDogiboDB?schema=public"
```

- run `yarn db:migrate` to create the database
- install deps with `yarn install`
> The typed prisma client will be generated in a postinstall script.

