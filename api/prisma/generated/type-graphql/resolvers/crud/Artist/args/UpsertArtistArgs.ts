import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistCreateInput } from "../../../inputs/ArtistCreateInput";
import { ArtistUpdateInput } from "../../../inputs/ArtistUpdateInput";
import { ArtistWhereUniqueInput } from "../../../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertArtistArgs {
  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistCreateInput, {
    nullable: false
  })
  create!: ArtistCreateInput;

  @TypeGraphQL.Field(_type => ArtistUpdateInput, {
    nullable: false
  })
  update!: ArtistUpdateInput;
}
