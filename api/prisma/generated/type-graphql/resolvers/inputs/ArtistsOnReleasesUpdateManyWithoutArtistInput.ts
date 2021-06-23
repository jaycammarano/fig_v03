import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistsOnReleasesCreateManyArtistInputEnvelope } from "../inputs/ArtistsOnReleasesCreateManyArtistInputEnvelope";
import { ArtistsOnReleasesCreateOrConnectWithoutArtistInput } from "../inputs/ArtistsOnReleasesCreateOrConnectWithoutArtistInput";
import { ArtistsOnReleasesCreateWithoutArtistInput } from "../inputs/ArtistsOnReleasesCreateWithoutArtistInput";
import { ArtistsOnReleasesScalarWhereInput } from "../inputs/ArtistsOnReleasesScalarWhereInput";
import { ArtistsOnReleasesUpdateManyWithWhereWithoutArtistInput } from "../inputs/ArtistsOnReleasesUpdateManyWithWhereWithoutArtistInput";
import { ArtistsOnReleasesUpdateWithWhereUniqueWithoutArtistInput } from "../inputs/ArtistsOnReleasesUpdateWithWhereUniqueWithoutArtistInput";
import { ArtistsOnReleasesUpsertWithWhereUniqueWithoutArtistInput } from "../inputs/ArtistsOnReleasesUpsertWithWhereUniqueWithoutArtistInput";
import { ArtistsOnReleasesWhereUniqueInput } from "../inputs/ArtistsOnReleasesWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesUpdateManyWithoutArtistInput {
  @TypeGraphQL.Field(_type => [ArtistsOnReleasesCreateWithoutArtistInput], {
    nullable: true
  })
  create?: ArtistsOnReleasesCreateWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesCreateOrConnectWithoutArtistInput], {
    nullable: true
  })
  connectOrCreate?: ArtistsOnReleasesCreateOrConnectWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesUpsertWithWhereUniqueWithoutArtistInput], {
    nullable: true
  })
  upsert?: ArtistsOnReleasesUpsertWithWhereUniqueWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesCreateManyArtistInputEnvelope, {
    nullable: true
  })
  createMany?: ArtistsOnReleasesCreateManyArtistInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesWhereUniqueInput], {
    nullable: true
  })
  connect?: ArtistsOnReleasesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesWhereUniqueInput], {
    nullable: true
  })
  set?: ArtistsOnReleasesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ArtistsOnReleasesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesWhereUniqueInput], {
    nullable: true
  })
  delete?: ArtistsOnReleasesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesUpdateWithWhereUniqueWithoutArtistInput], {
    nullable: true
  })
  update?: ArtistsOnReleasesUpdateWithWhereUniqueWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesUpdateManyWithWhereWithoutArtistInput], {
    nullable: true
  })
  updateMany?: ArtistsOnReleasesUpdateManyWithWhereWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ArtistsOnReleasesScalarWhereInput[] | undefined;
}
