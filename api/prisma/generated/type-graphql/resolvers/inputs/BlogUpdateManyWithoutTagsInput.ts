import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateOrConnectWithoutTagsInput } from "../inputs/BlogCreateOrConnectWithoutTagsInput";
import { BlogCreateWithoutTagsInput } from "../inputs/BlogCreateWithoutTagsInput";
import { BlogScalarWhereInput } from "../inputs/BlogScalarWhereInput";
import { BlogUpdateManyWithWhereWithoutTagsInput } from "../inputs/BlogUpdateManyWithWhereWithoutTagsInput";
import { BlogUpdateWithWhereUniqueWithoutTagsInput } from "../inputs/BlogUpdateWithWhereUniqueWithoutTagsInput";
import { BlogUpsertWithWhereUniqueWithoutTagsInput } from "../inputs/BlogUpsertWithWhereUniqueWithoutTagsInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BlogUpdateManyWithoutTagsInput {
  @TypeGraphQL.Field(_type => [BlogCreateWithoutTagsInput], {
    nullable: true
  })
  create?: BlogCreateWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogCreateOrConnectWithoutTagsInput], {
    nullable: true
  })
  connectOrCreate?: BlogCreateOrConnectWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogUpsertWithWhereUniqueWithoutTagsInput], {
    nullable: true
  })
  upsert?: BlogUpsertWithWhereUniqueWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereUniqueInput], {
    nullable: true
  })
  connect?: BlogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereUniqueInput], {
    nullable: true
  })
  set?: BlogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BlogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereUniqueInput], {
    nullable: true
  })
  delete?: BlogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogUpdateWithWhereUniqueWithoutTagsInput], {
    nullable: true
  })
  update?: BlogUpdateWithWhereUniqueWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogUpdateManyWithWhereWithoutTagsInput], {
    nullable: true
  })
  updateMany?: BlogUpdateManyWithWhereWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BlogScalarWhereInput[] | undefined;
}
