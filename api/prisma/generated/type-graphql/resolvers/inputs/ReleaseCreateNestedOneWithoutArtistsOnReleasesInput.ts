import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseCreateOrConnectWithoutArtistsOnReleasesInput } from "../inputs/ReleaseCreateOrConnectWithoutArtistsOnReleasesInput";
import { ReleaseCreateWithoutArtistsOnReleasesInput } from "../inputs/ReleaseCreateWithoutArtistsOnReleasesInput";
import { ReleaseWhereUniqueInput } from "../inputs/ReleaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseCreateNestedOneWithoutArtistsOnReleasesInput {
  @TypeGraphQL.Field(_type => ReleaseCreateWithoutArtistsOnReleasesInput, {
    nullable: true
  })
  create?: ReleaseCreateWithoutArtistsOnReleasesInput | undefined;

  @TypeGraphQL.Field(_type => ReleaseCreateOrConnectWithoutArtistsOnReleasesInput, {
    nullable: true
  })
  connectOrCreate?: ReleaseCreateOrConnectWithoutArtistsOnReleasesInput | undefined;

  @TypeGraphQL.Field(_type => ReleaseWhereUniqueInput, {
    nullable: true
  })
  connect?: ReleaseWhereUniqueInput | undefined;
}
