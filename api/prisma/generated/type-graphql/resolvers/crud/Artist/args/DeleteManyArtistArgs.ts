import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistWhereInput } from "../../../inputs/ArtistWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyArtistArgs {
  @TypeGraphQL.Field(_type => ArtistWhereInput, {
    nullable: true
  })
  where?: ArtistWhereInput | undefined;
}
