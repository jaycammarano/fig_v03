import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistUpdateManyMutationInput } from "../../../inputs/ArtistUpdateManyMutationInput";
import { ArtistWhereInput } from "../../../inputs/ArtistWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyArtistArgs {
  @TypeGraphQL.Field(_type => ArtistUpdateManyMutationInput, {
    nullable: false
  })
  data!: ArtistUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ArtistWhereInput, {
    nullable: true
  })
  where?: ArtistWhereInput | undefined;
}
