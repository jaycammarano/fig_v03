import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateOrConnectWithoutArtistsOnReleasesInput } from "../inputs/ArtistCreateOrConnectWithoutArtistsOnReleasesInput";
import { ArtistCreateWithoutArtistsOnReleasesInput } from "../inputs/ArtistCreateWithoutArtistsOnReleasesInput";
import { ArtistWhereUniqueInput } from "../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistCreateNestedOneWithoutArtistsOnReleasesInput {
  @TypeGraphQL.Field(_type => ArtistCreateWithoutArtistsOnReleasesInput, {
    nullable: true
  })
  create?: ArtistCreateWithoutArtistsOnReleasesInput | undefined;

  @TypeGraphQL.Field(_type => ArtistCreateOrConnectWithoutArtistsOnReleasesInput, {
    nullable: true
  })
  connectOrCreate?: ArtistCreateOrConnectWithoutArtistsOnReleasesInput | undefined;

  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: true
  })
  connect?: ArtistWhereUniqueInput | undefined;
}
