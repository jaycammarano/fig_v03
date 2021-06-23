import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistOrderByInput } from "../../../inputs/ArtistOrderByInput";
import { ArtistScalarWhereWithAggregatesInput } from "../../../inputs/ArtistScalarWhereWithAggregatesInput";
import { ArtistWhereInput } from "../../../inputs/ArtistWhereInput";
import { ArtistScalarFieldEnum } from "../../../../enums/ArtistScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByArtistArgs {
  @TypeGraphQL.Field(_type => ArtistWhereInput, {
    nullable: true
  })
  where?: ArtistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ArtistOrderByInput], {
    nullable: true
  })
  orderBy?: ArtistOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "image" | "createdAt">;

  @TypeGraphQL.Field(_type => ArtistScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ArtistScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
