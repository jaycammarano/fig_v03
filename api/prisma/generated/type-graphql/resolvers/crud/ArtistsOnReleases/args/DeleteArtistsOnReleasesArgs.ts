import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistsOnReleasesWhereUniqueInput } from "../../../inputs/ArtistsOnReleasesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteArtistsOnReleasesArgs {
  @TypeGraphQL.Field(_type => ArtistsOnReleasesWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistsOnReleasesWhereUniqueInput;
}
