import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistsOnReleasesCreateManyReleaseInput } from "../inputs/ArtistsOnReleasesCreateManyReleaseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesCreateManyReleaseInputEnvelope {
  @TypeGraphQL.Field(_type => [ArtistsOnReleasesCreateManyReleaseInput], {
    nullable: false
  })
  data!: ArtistsOnReleasesCreateManyReleaseInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
