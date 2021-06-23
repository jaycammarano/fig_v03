import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistsOnReleasesWhereInput } from "../../../inputs/ArtistsOnReleasesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyArtistsOnReleasesArgs {
  @TypeGraphQL.Field(_type => ArtistsOnReleasesWhereInput, {
    nullable: true
  })
  where?: ArtistsOnReleasesWhereInput | undefined;
}
