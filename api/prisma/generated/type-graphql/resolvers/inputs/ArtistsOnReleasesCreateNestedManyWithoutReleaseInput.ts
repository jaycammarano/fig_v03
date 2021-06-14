import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistsOnReleasesCreateManyReleaseInputEnvelope } from "../inputs/ArtistsOnReleasesCreateManyReleaseInputEnvelope";
import { ArtistsOnReleasesCreateOrConnectWithoutReleaseInput } from "../inputs/ArtistsOnReleasesCreateOrConnectWithoutReleaseInput";
import { ArtistsOnReleasesCreateWithoutReleaseInput } from "../inputs/ArtistsOnReleasesCreateWithoutReleaseInput";
import { ArtistsOnReleasesWhereUniqueInput } from "../inputs/ArtistsOnReleasesWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesCreateNestedManyWithoutReleaseInput {
  @TypeGraphQL.Field(_type => [ArtistsOnReleasesCreateWithoutReleaseInput], {
    nullable: true
  })
  create?: ArtistsOnReleasesCreateWithoutReleaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesCreateOrConnectWithoutReleaseInput], {
    nullable: true
  })
  connectOrCreate?: ArtistsOnReleasesCreateOrConnectWithoutReleaseInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesCreateManyReleaseInputEnvelope, {
    nullable: true
  })
  createMany?: ArtistsOnReleasesCreateManyReleaseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesWhereUniqueInput], {
    nullable: true
  })
  connect?: ArtistsOnReleasesWhereUniqueInput[] | undefined;
}
