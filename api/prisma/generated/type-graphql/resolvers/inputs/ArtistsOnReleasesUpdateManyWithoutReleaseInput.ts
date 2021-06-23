import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistsOnReleasesCreateManyReleaseInputEnvelope } from "../inputs/ArtistsOnReleasesCreateManyReleaseInputEnvelope";
import { ArtistsOnReleasesCreateOrConnectWithoutReleaseInput } from "../inputs/ArtistsOnReleasesCreateOrConnectWithoutReleaseInput";
import { ArtistsOnReleasesCreateWithoutReleaseInput } from "../inputs/ArtistsOnReleasesCreateWithoutReleaseInput";
import { ArtistsOnReleasesScalarWhereInput } from "../inputs/ArtistsOnReleasesScalarWhereInput";
import { ArtistsOnReleasesUpdateManyWithWhereWithoutReleaseInput } from "../inputs/ArtistsOnReleasesUpdateManyWithWhereWithoutReleaseInput";
import { ArtistsOnReleasesUpdateWithWhereUniqueWithoutReleaseInput } from "../inputs/ArtistsOnReleasesUpdateWithWhereUniqueWithoutReleaseInput";
import { ArtistsOnReleasesUpsertWithWhereUniqueWithoutReleaseInput } from "../inputs/ArtistsOnReleasesUpsertWithWhereUniqueWithoutReleaseInput";
import { ArtistsOnReleasesWhereUniqueInput } from "../inputs/ArtistsOnReleasesWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesUpdateManyWithoutReleaseInput {
  @TypeGraphQL.Field(_type => [ArtistsOnReleasesCreateWithoutReleaseInput], {
    nullable: true
  })
  create?: ArtistsOnReleasesCreateWithoutReleaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesCreateOrConnectWithoutReleaseInput], {
    nullable: true
  })
  connectOrCreate?: ArtistsOnReleasesCreateOrConnectWithoutReleaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesUpsertWithWhereUniqueWithoutReleaseInput], {
    nullable: true
  })
  upsert?: ArtistsOnReleasesUpsertWithWhereUniqueWithoutReleaseInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesCreateManyReleaseInputEnvelope, {
    nullable: true
  })
  createMany?: ArtistsOnReleasesCreateManyReleaseInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesUpdateWithWhereUniqueWithoutReleaseInput], {
    nullable: true
  })
  update?: ArtistsOnReleasesUpdateWithWhereUniqueWithoutReleaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesUpdateManyWithWhereWithoutReleaseInput], {
    nullable: true
  })
  updateMany?: ArtistsOnReleasesUpdateManyWithWhereWithoutReleaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ArtistsOnReleasesScalarWhereInput[] | undefined;
}
