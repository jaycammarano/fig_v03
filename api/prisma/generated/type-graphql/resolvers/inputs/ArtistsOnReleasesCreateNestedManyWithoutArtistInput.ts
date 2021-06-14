import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistsOnReleasesCreateManyArtistInputEnvelope } from "../inputs/ArtistsOnReleasesCreateManyArtistInputEnvelope";
import { ArtistsOnReleasesCreateOrConnectWithoutArtistInput } from "../inputs/ArtistsOnReleasesCreateOrConnectWithoutArtistInput";
import { ArtistsOnReleasesCreateWithoutArtistInput } from "../inputs/ArtistsOnReleasesCreateWithoutArtistInput";
import { ArtistsOnReleasesWhereUniqueInput } from "../inputs/ArtistsOnReleasesWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesCreateNestedManyWithoutArtistInput {
  @TypeGraphQL.Field(_type => [ArtistsOnReleasesCreateWithoutArtistInput], {
    nullable: true
  })
  create?: ArtistsOnReleasesCreateWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesCreateOrConnectWithoutArtistInput], {
    nullable: true
  })
  connectOrCreate?: ArtistsOnReleasesCreateOrConnectWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesCreateManyArtistInputEnvelope, {
    nullable: true
  })
  createMany?: ArtistsOnReleasesCreateManyArtistInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesWhereUniqueInput], {
    nullable: true
  })
  connect?: ArtistsOnReleasesWhereUniqueInput[] | undefined;
}
