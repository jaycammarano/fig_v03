import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistsOnReleasesWhereUniqueInput } from "../../../inputs/ArtistsOnReleasesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueArtistsOnReleasesArgs {
  @TypeGraphQL.Field(_type => ArtistsOnReleasesWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistsOnReleasesWhereUniqueInput;
}
