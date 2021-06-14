import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistCreateInput } from "../../../inputs/ArtistCreateInput";

@TypeGraphQL.ArgsType()
export class CreateArtistArgs {
  @TypeGraphQL.Field(_type => ArtistCreateInput, {
    nullable: false
  })
  data!: ArtistCreateInput;
}
