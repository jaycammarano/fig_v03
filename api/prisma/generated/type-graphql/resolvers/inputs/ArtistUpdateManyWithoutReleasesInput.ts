import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateOrConnectWithoutReleasesInput } from "../inputs/ArtistCreateOrConnectWithoutReleasesInput";
import { ArtistCreateWithoutReleasesInput } from "../inputs/ArtistCreateWithoutReleasesInput";
import { ArtistScalarWhereInput } from "../inputs/ArtistScalarWhereInput";
import { ArtistUpdateManyWithWhereWithoutReleasesInput } from "../inputs/ArtistUpdateManyWithWhereWithoutReleasesInput";
import { ArtistUpdateWithWhereUniqueWithoutReleasesInput } from "../inputs/ArtistUpdateWithWhereUniqueWithoutReleasesInput";
import { ArtistUpsertWithWhereUniqueWithoutReleasesInput } from "../inputs/ArtistUpsertWithWhereUniqueWithoutReleasesInput";
import { ArtistWhereUniqueInput } from "../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistUpdateManyWithoutReleasesInput {
  @TypeGraphQL.Field(_type => [ArtistCreateWithoutReleasesInput], {
    nullable: true
  })
  create?: ArtistCreateWithoutReleasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistCreateOrConnectWithoutReleasesInput], {
    nullable: true
  })
  connectOrCreate?: ArtistCreateOrConnectWithoutReleasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistUpsertWithWhereUniqueWithoutReleasesInput], {
    nullable: true
  })
  upsert?: ArtistUpsertWithWhereUniqueWithoutReleasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistWhereUniqueInput], {
    nullable: true
  })
  connect?: ArtistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistWhereUniqueInput], {
    nullable: true
  })
  set?: ArtistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ArtistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistWhereUniqueInput], {
    nullable: true
  })
  delete?: ArtistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistUpdateWithWhereUniqueWithoutReleasesInput], {
    nullable: true
  })
  update?: ArtistUpdateWithWhereUniqueWithoutReleasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistUpdateManyWithWhereWithoutReleasesInput], {
    nullable: true
  })
  updateMany?: ArtistUpdateManyWithWhereWithoutReleasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ArtistScalarWhereInput[] | undefined;
}
