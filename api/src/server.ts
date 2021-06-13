import 'reflect-metadata'
import {ApolloServer} from "apollo-server-express"
import Express from "express"
import { buildSchema } from "type-graphql"
import { PrismaClient } from '@prisma/client'
import { resolvers } from "@generated/type-graphql";
import { Context } from 'apollo-server-core'

const main = async () => {
    const prisma = new PrismaClient()
    const schema = await buildSchema({
        resolvers,
        validate: false,
    })
    const apolloSever = new ApolloServer({
        schema,
        playground: true,
        context: (): Context => ({ prisma })})
    const app = Express()

    apolloSever.applyMiddleware({app})
    app.listen(4000, () => {
        console.log('server started on http://localhost:4000/graphql')
    })
}

main()