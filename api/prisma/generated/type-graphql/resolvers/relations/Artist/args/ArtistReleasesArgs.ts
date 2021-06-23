import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReleaseOrderByInput } from "../../../inputs/ReleaseOrderByInput";
import { ReleaseWhereInput } from "../../../inputs/ReleaseWhereInput";
import { ReleaseWhereUniqueInput } from "../../../inputs/ReleaseWhereUniqueInput";
import { ReleaseScalarFieldEnum } from "../../../../enums/ReleaseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ArtistReleasesArgs {
  @TypeGraphQL.Field(_type => ReleaseWhereInput, {
    nullable: true
  })
  where?: ReleaseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReleaseOrderByInput], {
    nullable: true
  })
  orderBy?: ReleaseOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ReleaseWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReleaseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ReleaseScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "releaseDate" | "type" | "image" | "url" | "createdAt"> | undefined;
}
