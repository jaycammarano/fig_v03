import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutBlogsInput } from "../inputs/TagCreateOrConnectWithoutBlogsInput";
import { TagCreateWithoutBlogsInput } from "../inputs/TagCreateWithoutBlogsInput";
import { TagScalarWhereInput } from "../inputs/TagScalarWhereInput";
import { TagUpdateManyWithWhereWithoutBlogsInput } from "../inputs/TagUpdateManyWithWhereWithoutBlogsInput";
import { TagUpdateWithWhereUniqueWithoutBlogsInput } from "../inputs/TagUpdateWithWhereUniqueWithoutBlogsInput";
import { TagUpsertWithWhereUniqueWithoutBlogsInput } from "../inputs/TagUpsertWithWhereUniqueWithoutBlogsInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TagUpdateManyWithoutBlogsInput {
  @TypeGraphQL.Field(_type => [TagCreateWithoutBlogsInput], {
    nullable: true
  })
  create?: TagCreateWithoutBlogsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagCreateOrConnectWithoutBlogsInput], {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutBlogsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagUpsertWithWhereUniqueWithoutBlogsInput], {
    nullable: true
  })
  upsert?: TagUpsertWithWhereUniqueWithoutBlogsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [TagUpdateWithWhereUniqueWithoutBlogsInput], {
    nullable: true
  })
  update?: TagUpdateWithWhereUniqueWithoutBlogsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagUpdateManyWithWhereWithoutBlogsInput], {
    nullable: true
  })
  updateMany?: TagUpdateManyWithWhereWithoutBlogsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TagScalarWhereInput[] | undefined;
}
