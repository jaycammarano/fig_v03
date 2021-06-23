import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistCreateManyInput } from "../../../inputs/ArtistCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyArtistArgs {
  @TypeGraphQL.Field(_type => [ArtistCreateManyInput], {
    nullable: false
  })
  data!: ArtistCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
