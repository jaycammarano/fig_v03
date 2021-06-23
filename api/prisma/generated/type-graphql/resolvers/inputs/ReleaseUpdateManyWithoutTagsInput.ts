import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseCreateOrConnectWithoutTagsInput } from "../inputs/ReleaseCreateOrConnectWithoutTagsInput";
import { ReleaseCreateWithoutTagsInput } from "../inputs/ReleaseCreateWithoutTagsInput";
import { ReleaseScalarWhereInput } from "../inputs/ReleaseScalarWhereInput";
import { ReleaseUpdateManyWithWhereWithoutTagsInput } from "../inputs/ReleaseUpdateManyWithWhereWithoutTagsInput";
import { ReleaseUpdateWithWhereUniqueWithoutTagsInput } from "../inputs/ReleaseUpdateWithWhereUniqueWithoutTagsInput";
import { ReleaseUpsertWithWhereUniqueWithoutTagsInput } from "../inputs/ReleaseUpsertWithWhereUniqueWithoutTagsInput";
import { ReleaseWhereUniqueInput } from "../inputs/ReleaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseUpdateManyWithoutTagsInput {
  @TypeGraphQL.Field(_type => [ReleaseCreateWithoutTagsInput], {
    nullable: true
  })
  create?: ReleaseCreateWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseCreateOrConnectWithoutTagsInput], {
    nullable: true
  })
  connectOrCreate?: ReleaseCreateOrConnectWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseUpsertWithWhereUniqueWithoutTagsInput], {
    nullable: true
  })
  upsert?: ReleaseUpsertWithWhereUniqueWithoutTagsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ReleaseUpdateWithWhereUniqueWithoutTagsInput], {
    nullable: true
  })
  update?: ReleaseUpdateWithWhereUniqueWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseUpdateManyWithWhereWithoutTagsInput], {
    nullable: true
  })
  updateMany?: ReleaseUpdateManyWithWhereWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReleaseScalarWhereInput[] | undefined;
}
