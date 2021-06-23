import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistsOnReleasesCreateInput } from "../../../inputs/ArtistsOnReleasesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateArtistsOnReleasesArgs {
  @TypeGraphQL.Field(_type => ArtistsOnReleasesCreateInput, {
    nullable: false
  })
  data!: ArtistsOnReleasesCreateInput;
}
