import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistUpdateInput } from "../../../inputs/ArtistUpdateInput";
import { ArtistWhereUniqueInput } from "../../../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateArtistArgs {
  @TypeGraphQL.Field(_type => ArtistUpdateInput, {
    nullable: false
  })
  data!: ArtistUpdateInput;

  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistWhereUniqueInput;
}
