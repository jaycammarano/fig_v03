import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateArtistsOnReleasesArgs } from "./args/AggregateArtistsOnReleasesArgs";
import { CreateArtistsOnReleasesArgs } from "./args/CreateArtistsOnReleasesArgs";
import { CreateManyArtistsOnReleasesArgs } from "./args/CreateManyArtistsOnReleasesArgs";
import { DeleteArtistsOnReleasesArgs } from "./args/DeleteArtistsOnReleasesArgs";
import { DeleteManyArtistsOnReleasesArgs } from "./args/DeleteManyArtistsOnReleasesArgs";
import { FindFirstArtistsOnReleasesArgs } from "./args/FindFirstArtistsOnReleasesArgs";
import { FindManyArtistsOnReleasesArgs } from "./args/FindManyArtistsOnReleasesArgs";
import { FindUniqueArtistsOnReleasesArgs } from "./args/FindUniqueArtistsOnReleasesArgs";
import { GroupByArtistsOnReleasesArgs } from "./args/GroupByArtistsOnReleasesArgs";
import { UpdateArtistsOnReleasesArgs } from "./args/UpdateArtistsOnReleasesArgs";
import { UpdateManyArtistsOnReleasesArgs } from "./args/UpdateManyArtistsOnReleasesArgs";
import { UpsertArtistsOnReleasesArgs } from "./args/UpsertArtistsOnReleasesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ArtistsOnReleases } from "../../../models/ArtistsOnReleases";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateArtistsOnReleases } from "../../outputs/AggregateArtistsOnReleases";
import { ArtistsOnReleasesGroupBy } from "../../outputs/ArtistsOnReleasesGroupBy";

@TypeGraphQL.Resolver(_of => ArtistsOnReleases)
export class ArtistsOnReleasesCrudResolver {
  @TypeGraphQL.Query(_returns => ArtistsOnReleases, {
    nullable: true
  })
  async findUniqueArtistsOnReleases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueArtistsOnReleasesArgs): Promise<ArtistsOnReleases | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistsOnReleases.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ArtistsOnReleases, {
    nullable: true
  })
  async findFirstArtistsOnReleases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstArtistsOnReleasesArgs): Promise<ArtistsOnReleases | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistsOnReleases.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ArtistsOnReleases], {
    nullable: false
  })
  async findManyArtistsOnReleases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyArtistsOnReleasesArgs): Promise<ArtistsOnReleases[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistsOnReleases.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ArtistsOnReleases, {
    nullable: false
  })
  async createArtistsOnReleases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateArtistsOnReleasesArgs): Promise<ArtistsOnReleases> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistsOnReleases.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyArtistsOnReleases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyArtistsOnReleasesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistsOnReleases.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ArtistsOnReleases, {
    nullable: true
  })
  async deleteArtistsOnReleases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteArtistsOnReleasesArgs): Promise<ArtistsOnReleases | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistsOnReleases.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ArtistsOnReleases, {
    nullable: true
  })
  async updateArtistsOnReleases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateArtistsOnReleasesArgs): Promise<ArtistsOnReleases | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistsOnReleases.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyArtistsOnReleases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyArtistsOnReleasesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistsOnReleases.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyArtistsOnReleases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyArtistsOnReleasesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistsOnReleases.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ArtistsOnReleases, {
    nullable: false
  })
  async upsertArtistsOnReleases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertArtistsOnReleasesArgs): Promise<ArtistsOnReleases> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistsOnReleases.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateArtistsOnReleases, {
    nullable: false
  })
  async aggregateArtistsOnReleases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateArtistsOnReleasesArgs): Promise<AggregateArtistsOnReleases> {
    return getPrismaFromContext(ctx).artistsOnReleases.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ArtistsOnReleasesGroupBy], {
    nullable: false
  })
  async groupByArtistsOnReleases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByArtistsOnReleasesArgs): Promise<ArtistsOnReleasesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistsOnReleases.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
