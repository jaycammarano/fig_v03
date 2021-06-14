import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistsOnReleasesCreateManyArtistInput } from "../inputs/ArtistsOnReleasesCreateManyArtistInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesCreateManyArtistInputEnvelope {
  @TypeGraphQL.Field(_type => [ArtistsOnReleasesCreateManyArtistInput], {
    nullable: false
  })
  data!: ArtistsOnReleasesCreateManyArtistInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
