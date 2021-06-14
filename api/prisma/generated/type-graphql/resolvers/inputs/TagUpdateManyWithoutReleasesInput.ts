import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutReleasesInput } from "../inputs/TagCreateOrConnectWithoutReleasesInput";
import { TagCreateWithoutReleasesInput } from "../inputs/TagCreateWithoutReleasesInput";
import { TagScalarWhereInput } from "../inputs/TagScalarWhereInput";
import { TagUpdateManyWithWhereWithoutReleasesInput } from "../inputs/TagUpdateManyWithWhereWithoutReleasesInput";
import { TagUpdateWithWhereUniqueWithoutReleasesInput } from "../inputs/TagUpdateWithWhereUniqueWithoutReleasesInput";
import { TagUpsertWithWhereUniqueWithoutReleasesInput } from "../inputs/TagUpsertWithWhereUniqueWithoutReleasesInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TagUpdateManyWithoutReleasesInput {
  @TypeGraphQL.Field(_type => [TagCreateWithoutReleasesInput], {
    nullable: true
  })
  create?: TagCreateWithoutReleasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagCreateOrConnectWithoutReleasesInput], {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutReleasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagUpsertWithWhereUniqueWithoutReleasesInput], {
    nullable: true
  })
  upsert?: TagUpsertWithWhereUniqueWithoutReleasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  connect?: TagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  set?: TagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  delete?: TagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagUpdateWithWhereUniqueWithoutReleasesInput], {
    nullable: true
  })
  update?: TagUpdateWithWhereUniqueWithoutReleasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagUpdateManyWithWhereWithoutReleasesInput], {
    nullable: true
  })
  updateMany?: TagUpdateManyWithWhereWithoutReleasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TagScalarWhereInput[] | undefined;
}
