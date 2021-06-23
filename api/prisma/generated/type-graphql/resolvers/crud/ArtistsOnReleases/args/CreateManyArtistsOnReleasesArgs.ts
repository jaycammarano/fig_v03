import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistsOnReleasesCreateManyInput } from "../../../inputs/ArtistsOnReleasesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyArtistsOnReleasesArgs {
  @TypeGraphQL.Field(_type => [ArtistsOnReleasesCreateManyInput], {
    nullable: false
  })
  data!: ArtistsOnReleasesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
