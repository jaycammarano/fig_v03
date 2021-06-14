import 'reflect-metadata'
import {ApolloServer} from "apollo-server-express"
import Express from "express"
import {
  buildSchema,

} from "type-graphql";
import {
    ArtistsOnReleasesRelationsResolver,
    ArtistsOnReleasesCrudResolver,
    ArtistRelationsResolver,
    ReleaseRelationsResolver,
    ArtistCrudResolver,
    ReleaseCrudResolver,
} from "../prisma/generated/type-graphql"
import path from "path";
import { PrismaClient } from '@prisma/client'

import { LastFMResolver } from './GraphQL/lastFm';

interface Context {
    prisma: PrismaClient
}

const main = async () => {
    const schema = await buildSchema({
        resolvers: [ArtistRelationsResolver, ReleaseCrudResolver, ArtistCrudResolver, ReleaseRelationsResolver, ArtistsOnReleasesRelationsResolver, ArtistsOnReleasesCrudResolver, LastFMResolver],
        emitSchemaFile: path.resolve(__dirname, "./GraphQL/generated-schema.graphql"),
        validate: false,
    })
    const prisma = new PrismaClient();

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