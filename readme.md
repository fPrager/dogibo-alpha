# How to setup prisma and existing PostgreSQL

1. write the schema.sql file
2. setting up the database with the following command:

  ` psql -h 185.26.156.85 -p 47800 -d c4s -U twb -f schema.sql`

3. setup prisma schema file with

  `npx prisma init`

4. update prisma file on db scheme

  `npx prisma introspect`

5. generate prisma client

  `npx prisma generate`

details here: https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project-typescript-postgres