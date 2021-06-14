import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateOrConnectWithoutReleasesInput } from "../inputs/ArtistCreateOrConnectWithoutReleasesInput";
import { ArtistCreateWithoutReleasesInput } from "../inputs/ArtistCreateWithoutReleasesInput";
import { ArtistWhereUniqueInput } from "../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistCreateNestedManyWithoutReleasesInput {
  @TypeGraphQL.Field(_type => [ArtistCreateWithoutReleasesInput], {
    nullable: true
  })
  create?: ArtistCreateWithoutReleasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistCreateOrConnectWithoutReleasesInput], {
    nullable: true
  })
  connectOrCreate?: ArtistCreateOrConnectWithoutReleasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistWhereUniqueInput], {
    nullable: true
  })
  connect?: ArtistWhereUniqueInput[] | undefined;
}
