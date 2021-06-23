import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseCreateOrConnectWithoutArtistsInput } from "../inputs/ReleaseCreateOrConnectWithoutArtistsInput";
import { ReleaseCreateWithoutArtistsInput } from "../inputs/ReleaseCreateWithoutArtistsInput";
import { ReleaseScalarWhereInput } from "../inputs/ReleaseScalarWhereInput";
import { ReleaseUpdateManyWithWhereWithoutArtistsInput } from "../inputs/ReleaseUpdateManyWithWhereWithoutArtistsInput";
import { ReleaseUpdateWithWhereUniqueWithoutArtistsInput } from "../inputs/ReleaseUpdateWithWhereUniqueWithoutArtistsInput";
import { ReleaseUpsertWithWhereUniqueWithoutArtistsInput } from "../inputs/ReleaseUpsertWithWhereUniqueWithoutArtistsInput";
import { ReleaseWhereUniqueInput } from "../inputs/ReleaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseUpdateManyWithoutArtistsInput {
  @TypeGraphQL.Field(_type => [ReleaseCreateWithoutArtistsInput], {
    nullable: true
  })
  create?: ReleaseCreateWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseCreateOrConnectWithoutArtistsInput], {
    nullable: true
  })
  connectOrCreate?: ReleaseCreateOrConnectWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseUpsertWithWhereUniqueWithoutArtistsInput], {
    nullable: true
  })
  upsert?: ReleaseUpsertWithWhereUniqueWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseWhereUniqueInput], {
    nullable: true
  })
  connect?: ReleaseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseWhereUniqueInput], {
    nullable: true
  })
  set?: ReleaseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReleaseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseWhereUniqueInput], {
    nullable: true
  })
  delete?: ReleaseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseUpdateWithWhereUniqueWithoutArtistsInput], {
    nullable: true
  })
  update?: ReleaseUpdateWithWhereUniqueWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseUpdateManyWithWhereWithoutArtistsInput], {
    nullable: true
  })
  updateMany?: ReleaseUpdateManyWithWhereWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReleaseScalarWhereInput[] | undefined;
}
