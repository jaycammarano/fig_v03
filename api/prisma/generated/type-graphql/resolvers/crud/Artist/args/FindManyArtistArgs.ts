import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistOrderByInput } from "../../../inputs/ArtistOrderByInput";
import { ArtistWhereInput } from "../../../inputs/ArtistWhereInput";
import { ArtistWhereUniqueInput } from "../../../inputs/ArtistWhereUniqueInput";
import { ArtistScalarFieldEnum } from "../../../../enums/ArtistScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyArtistArgs {
  @TypeGraphQL.Field(_type => ArtistWhereInput, {
    nullable: true
  })
  where?: ArtistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ArtistOrderByInput], {
    nullable: true
  })
  orderBy?: ArtistOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: true
  })
  cursor?: ArtistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ArtistScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "image" | "createdAt"> | undefined;
}
