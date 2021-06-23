import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistWhereUniqueInput } from "../../../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteArtistArgs {
  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistWhereUniqueInput;
}
