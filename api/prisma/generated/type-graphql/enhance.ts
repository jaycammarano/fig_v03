import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  Artist: crudResolvers.ArtistCrudResolver,
  Release: crudResolvers.ReleaseCrudResolver,
  Tag: crudResolvers.TagCrudResolver,
  ArtistsOnReleases: crudResolvers.ArtistsOnReleasesCrudResolver,
  Blog: crudResolvers.BlogCrudResolver
};
const relationResolversMap = {
  Artist: relationResolvers.ArtistRelationsResolver,
  Release: relationResolvers.ReleaseRelationsResolver,
  Tag: relationResolvers.TagRelationsResolver,
  ArtistsOnReleases: relationResolvers.ArtistsOnReleasesRelationsResolver,
  Blog: relationResolvers.BlogRelationsResolver
};
const actionResolversMap = {
  Artist: {
    artist: actionResolvers.FindUniqueArtistResolver,
    findFirstArtist: actionResolvers.FindFirstArtistResolver,
    artists: actionResolvers.FindManyArtistResolver,
    createArtist: actionResolvers.CreateArtistResolver,
    createManyArtist: actionResolvers.CreateManyArtistResolver,
    deleteArtist: actionResolvers.DeleteArtistResolver,
    updateArtist: actionResolvers.UpdateArtistResolver,
    deleteManyArtist: actionResolvers.DeleteManyArtistResolver,
    updateManyArtist: actionResolvers.UpdateManyArtistResolver,
    upsertArtist: actionResolvers.UpsertArtistResolver,
    aggregateArtist: actionResolvers.AggregateArtistResolver,
    groupByArtist: actionResolvers.GroupByArtistResolver
  },
  Release: {
    release: actionResolvers.FindUniqueReleaseResolver,
    findFirstRelease: actionResolvers.FindFirstReleaseResolver,
    releases: actionResolvers.FindManyReleaseResolver,
    createRelease: actionResolvers.CreateReleaseResolver,
    createManyRelease: actionResolvers.CreateManyReleaseResolver,
    deleteRelease: actionResolvers.DeleteReleaseResolver,
    updateRelease: actionResolvers.UpdateReleaseResolver,
    deleteManyRelease: actionResolvers.DeleteManyReleaseResolver,
    updateManyRelease: actionResolvers.UpdateManyReleaseResolver,
    upsertRelease: actionResolvers.UpsertReleaseResolver,
    aggregateRelease: actionResolvers.AggregateReleaseResolver,
    groupByRelease: actionResolvers.GroupByReleaseResolver
  },
  Tag: {
    tag: actionResolvers.FindUniqueTagResolver,
    findFirstTag: actionResolvers.FindFirstTagResolver,
    tags: actionResolvers.FindManyTagResolver,
    createTag: actionResolvers.CreateTagResolver,
    createManyTag: actionResolvers.CreateManyTagResolver,
    deleteTag: actionResolvers.DeleteTagResolver,
    updateTag: actionResolvers.UpdateTagResolver,
    deleteManyTag: actionResolvers.DeleteManyTagResolver,
    updateManyTag: actionResolvers.UpdateManyTagResolver,
    upsertTag: actionResolvers.UpsertTagResolver,
    aggregateTag: actionResolvers.AggregateTagResolver,
    groupByTag: actionResolvers.GroupByTagResolver
  },
  ArtistsOnReleases: {
    findUniqueArtistsOnReleases: actionResolvers.FindUniqueArtistsOnReleasesResolver,
    findFirstArtistsOnReleases: actionResolvers.FindFirstArtistsOnReleasesResolver,
    findManyArtistsOnReleases: actionResolvers.FindManyArtistsOnReleasesResolver,
    createArtistsOnReleases: actionResolvers.CreateArtistsOnReleasesResolver,
    createManyArtistsOnReleases: actionResolvers.CreateManyArtistsOnReleasesResolver,
    deleteArtistsOnReleases: actionResolvers.DeleteArtistsOnReleasesResolver,
    updateArtistsOnReleases: actionResolvers.UpdateArtistsOnReleasesResolver,
    deleteManyArtistsOnReleases: actionResolvers.DeleteManyArtistsOnReleasesResolver,
    updateManyArtistsOnReleases: actionResolvers.UpdateManyArtistsOnReleasesResolver,
    upsertArtistsOnReleases: actionResolvers.UpsertArtistsOnReleasesResolver,
    aggregateArtistsOnReleases: actionResolvers.AggregateArtistsOnReleasesResolver,
    groupByArtistsOnReleases: actionResolvers.GroupByArtistsOnReleasesResolver
  },
  Blog: {
    blog: actionResolvers.FindUniqueBlogResolver,
    findFirstBlog: actionResolvers.FindFirstBlogResolver,
    blogs: actionResolvers.FindManyBlogResolver,
    createBlog: actionResolvers.CreateBlogResolver,
    createManyBlog: actionResolvers.CreateManyBlogResolver,
    deleteBlog: actionResolvers.DeleteBlogResolver,
    updateBlog: actionResolvers.UpdateBlogResolver,
    deleteManyBlog: actionResolvers.DeleteManyBlogResolver,
    updateManyBlog: actionResolvers.UpdateManyBlogResolver,
    upsertBlog: actionResolvers.UpsertBlogResolver,
    aggregateBlog: actionResolvers.AggregateBlogResolver,
    groupByBlog: actionResolvers.GroupByBlogResolver
  }
};
const resolversInfo = {
  Artist: ["artist", "findFirstArtist", "artists", "createArtist", "createManyArtist", "deleteArtist", "updateArtist", "deleteManyArtist", "updateManyArtist", "upsertArtist", "aggregateArtist", "groupByArtist"],
  Release: ["release", "findFirstRelease", "releases", "createRelease", "createManyRelease", "deleteRelease", "updateRelease", "deleteManyRelease", "updateManyRelease", "upsertRelease", "aggregateRelease", "groupByRelease"],
  Tag: ["tag", "findFirstTag", "tags", "createTag", "createManyTag", "deleteTag", "updateTag", "deleteManyTag", "updateManyTag", "upsertTag", "aggregateTag", "groupByTag"],
  ArtistsOnReleases: ["findUniqueArtistsOnReleases", "findFirstArtistsOnReleases", "findManyArtistsOnReleases", "createArtistsOnReleases", "createManyArtistsOnReleases", "deleteArtistsOnReleases", "updateArtistsOnReleases", "deleteManyArtistsOnReleases", "updateManyArtistsOnReleases", "upsertArtistsOnReleases", "aggregateArtistsOnReleases", "groupByArtistsOnReleases"],
  Blog: ["blog", "findFirstBlog", "blogs", "createBlog", "createManyBlog", "deleteBlog", "updateBlog", "deleteManyBlog", "updateManyBlog", "upsertBlog", "aggregateBlog", "groupByBlog"]
};
const relationResolversInfo = {
  Artist: ["releases", "artistsOnReleases"],
  Release: ["artists", "tags", "artistsOnReleases"],
  Tag: ["releases", "blogs"],
  ArtistsOnReleases: ["artist", "release"],
  Blog: ["tags"]
};
const modelsInfo = {
  Artist: ["id", "name", "image", "createdAt"],
  Release: ["id", "name", "releaseDate", "type", "image", "url", "createdAt"],
  Tag: ["id", "name"],
  ArtistsOnReleases: ["artistId", "releaseId", "role", "createdAt"],
  Blog: ["id", "title", "content", "createdAt", "createdBy"]
};
const inputsInfo = {
  ArtistWhereInput: ["AND", "OR", "NOT", "id", "name", "releases", "image", "artistsOnReleases", "createdAt"],
  ArtistOrderByInput: ["id", "name", "image", "createdAt"],
  ArtistWhereUniqueInput: ["id"],
  ArtistScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "image", "createdAt"],
  ReleaseWhereInput: ["AND", "OR", "NOT", "id", "name", "releaseDate", "type", "artists", "tags", "image", "url", "createdAt", "artistsOnReleases"],
  ReleaseOrderByInput: ["id", "name", "releaseDate", "type", "image", "url", "createdAt"],
  ReleaseWhereUniqueInput: ["id", "url"],
  ReleaseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "releaseDate", "type", "image", "url", "createdAt"],
  TagWhereInput: ["AND", "OR", "NOT", "id", "name", "releases", "blogs"],
  TagOrderByInput: ["id", "name"],
  TagWhereUniqueInput: ["id", "name"],
  TagScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  ArtistsOnReleasesWhereInput: ["AND", "OR", "NOT", "artist", "release", "artistId", "releaseId", "role", "createdAt"],
  ArtistsOnReleasesOrderByInput: ["artistId", "releaseId", "role", "createdAt"],
  ArtistsOnReleasesWhereUniqueInput: ["artistId_releaseId"],
  ArtistsOnReleasesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "artistId", "releaseId", "role", "createdAt"],
  BlogWhereInput: ["AND", "OR", "NOT", "id", "title", "content", "tags", "createdAt", "createdBy"],
  BlogOrderByInput: ["id", "title", "content", "createdAt", "createdBy"],
  BlogWhereUniqueInput: ["id"],
  BlogScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "content", "createdAt", "createdBy"],
  ArtistCreateInput: ["name", "image", "createdAt", "releases", "artistsOnReleases"],
  ArtistUpdateInput: ["name", "image", "createdAt", "releases", "artistsOnReleases"],
  ArtistCreateManyInput: ["id", "name", "image", "createdAt"],
  ArtistUpdateManyMutationInput: ["name", "image", "createdAt"],
  ReleaseCreateInput: ["name", "releaseDate", "type", "image", "url", "createdAt", "artists", "tags", "artistsOnReleases"],
  ReleaseUpdateInput: ["name", "releaseDate", "type", "image", "url", "createdAt", "artists", "tags", "artistsOnReleases"],
  ReleaseCreateManyInput: ["id", "name", "releaseDate", "type", "image", "url", "createdAt"],
  ReleaseUpdateManyMutationInput: ["name", "releaseDate", "type", "image", "url", "createdAt"],
  TagCreateInput: ["name", "releases", "blogs"],
  TagUpdateInput: ["name", "releases", "blogs"],
  TagCreateManyInput: ["id", "name"],
  TagUpdateManyMutationInput: ["name"],
  ArtistsOnReleasesCreateInput: ["role", "createdAt", "artist", "release"],
  ArtistsOnReleasesUpdateInput: ["role", "createdAt", "artist", "release"],
  ArtistsOnReleasesCreateManyInput: ["artistId", "releaseId", "role", "createdAt"],
  ArtistsOnReleasesUpdateManyMutationInput: ["role", "createdAt"],
  BlogCreateInput: ["title", "content", "createdAt", "createdBy", "tags"],
  BlogUpdateInput: ["title", "content", "createdAt", "createdBy", "tags"],
  BlogCreateManyInput: ["id", "title", "content", "createdAt", "createdBy"],
  BlogUpdateManyMutationInput: ["title", "content", "createdAt", "createdBy"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  ReleaseListRelationFilter: ["every", "some", "none"],
  ArtistsOnReleasesListRelationFilter: ["every", "some", "none"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumReleaseTypeFilter: ["equals", "in", "notIn", "not"],
  ArtistListRelationFilter: ["every", "some", "none"],
  TagListRelationFilter: ["every", "some", "none"],
  EnumReleaseTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BlogListRelationFilter: ["every", "some", "none"],
  ArtistRelationFilter: ["is", "isNot"],
  ReleaseRelationFilter: ["is", "isNot"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  ArtistsOnReleasesArtistIdReleaseIdCompoundUniqueInput: ["artistId", "releaseId"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ReleaseCreateNestedManyWithoutArtistsInput: ["create", "connectOrCreate", "connect"],
  ArtistsOnReleasesCreateNestedManyWithoutArtistInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  ReleaseUpdateManyWithoutArtistsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ArtistsOnReleasesUpdateManyWithoutArtistInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ArtistCreateNestedManyWithoutReleasesInput: ["create", "connectOrCreate", "connect"],
  TagCreateNestedManyWithoutReleasesInput: ["create", "connectOrCreate", "connect"],
  ArtistsOnReleasesCreateNestedManyWithoutReleaseInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumReleaseTypeFieldUpdateOperationsInput: ["set"],
  ArtistUpdateManyWithoutReleasesInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  TagUpdateManyWithoutReleasesInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ArtistsOnReleasesUpdateManyWithoutReleaseInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ReleaseCreateNestedManyWithoutTagsInput: ["create", "connectOrCreate", "connect"],
  BlogCreateNestedManyWithoutTagsInput: ["create", "connectOrCreate", "connect"],
  ReleaseUpdateManyWithoutTagsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  BlogUpdateManyWithoutTagsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ArtistCreateNestedOneWithoutArtistsOnReleasesInput: ["create", "connectOrCreate", "connect"],
  ReleaseCreateNestedOneWithoutArtistsOnReleasesInput: ["create", "connectOrCreate", "connect"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  ArtistUpdateOneWithoutArtistsOnReleasesInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  ReleaseUpdateOneWithoutArtistsOnReleasesInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  TagCreateNestedManyWithoutBlogsInput: ["create", "connectOrCreate", "connect"],
  TagUpdateManyWithoutBlogsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumReleaseTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumReleaseTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ReleaseCreateWithoutArtistsInput: ["name", "releaseDate", "type", "image", "url", "createdAt", "tags", "artistsOnReleases"],
  ReleaseCreateOrConnectWithoutArtistsInput: ["where", "create"],
  ArtistsOnReleasesCreateWithoutArtistInput: ["role", "createdAt", "release"],
  ArtistsOnReleasesCreateOrConnectWithoutArtistInput: ["where", "create"],
  ArtistsOnReleasesCreateManyArtistInputEnvelope: ["data", "skipDuplicates"],
  ReleaseUpsertWithWhereUniqueWithoutArtistsInput: ["where", "update", "create"],
  ReleaseUpdateWithWhereUniqueWithoutArtistsInput: ["where", "data"],
  ReleaseUpdateManyWithWhereWithoutArtistsInput: ["where", "data"],
  ReleaseScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "releaseDate", "type", "image", "url", "createdAt"],
  ArtistsOnReleasesUpsertWithWhereUniqueWithoutArtistInput: ["where", "update", "create"],
  ArtistsOnReleasesUpdateWithWhereUniqueWithoutArtistInput: ["where", "data"],
  ArtistsOnReleasesUpdateManyWithWhereWithoutArtistInput: ["where", "data"],
  ArtistsOnReleasesScalarWhereInput: ["AND", "OR", "NOT", "artistId", "releaseId", "role", "createdAt"],
  ArtistCreateWithoutReleasesInput: ["name", "image", "createdAt", "artistsOnReleases"],
  ArtistCreateOrConnectWithoutReleasesInput: ["where", "create"],
  TagCreateWithoutReleasesInput: ["name", "blogs"],
  TagCreateOrConnectWithoutReleasesInput: ["where", "create"],
  ArtistsOnReleasesCreateWithoutReleaseInput: ["role", "createdAt", "artist"],
  ArtistsOnReleasesCreateOrConnectWithoutReleaseInput: ["where", "create"],
  ArtistsOnReleasesCreateManyReleaseInputEnvelope: ["data", "skipDuplicates"],
  ArtistUpsertWithWhereUniqueWithoutReleasesInput: ["where", "update", "create"],
  ArtistUpdateWithWhereUniqueWithoutReleasesInput: ["where", "data"],
  ArtistUpdateManyWithWhereWithoutReleasesInput: ["where", "data"],
  ArtistScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "image", "createdAt"],
  TagUpsertWithWhereUniqueWithoutReleasesInput: ["where", "update", "create"],
  TagUpdateWithWhereUniqueWithoutReleasesInput: ["where", "data"],
  TagUpdateManyWithWhereWithoutReleasesInput: ["where", "data"],
  TagScalarWhereInput: ["AND", "OR", "NOT", "id", "name"],
  ArtistsOnReleasesUpsertWithWhereUniqueWithoutReleaseInput: ["where", "update", "create"],
  ArtistsOnReleasesUpdateWithWhereUniqueWithoutReleaseInput: ["where", "data"],
  ArtistsOnReleasesUpdateManyWithWhereWithoutReleaseInput: ["where", "data"],
  ReleaseCreateWithoutTagsInput: ["name", "releaseDate", "type", "image", "url", "createdAt", "artists", "artistsOnReleases"],
  ReleaseCreateOrConnectWithoutTagsInput: ["where", "create"],
  BlogCreateWithoutTagsInput: ["title", "content", "createdAt", "createdBy"],
  BlogCreateOrConnectWithoutTagsInput: ["where", "create"],
  ReleaseUpsertWithWhereUniqueWithoutTagsInput: ["where", "update", "create"],
  ReleaseUpdateWithWhereUniqueWithoutTagsInput: ["where", "data"],
  ReleaseUpdateManyWithWhereWithoutTagsInput: ["where", "data"],
  BlogUpsertWithWhereUniqueWithoutTagsInput: ["where", "update", "create"],
  BlogUpdateWithWhereUniqueWithoutTagsInput: ["where", "data"],
  BlogUpdateManyWithWhereWithoutTagsInput: ["where", "data"],
  BlogScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "content", "createdAt", "createdBy"],
  ArtistCreateWithoutArtistsOnReleasesInput: ["name", "image", "createdAt", "releases"],
  ArtistCreateOrConnectWithoutArtistsOnReleasesInput: ["where", "create"],
  ReleaseCreateWithoutArtistsOnReleasesInput: ["name", "releaseDate", "type", "image", "url", "createdAt", "artists", "tags"],
  ReleaseCreateOrConnectWithoutArtistsOnReleasesInput: ["where", "create"],
  ArtistUpsertWithoutArtistsOnReleasesInput: ["update", "create"],
  ArtistUpdateWithoutArtistsOnReleasesInput: ["name", "image", "createdAt", "releases"],
  ReleaseUpsertWithoutArtistsOnReleasesInput: ["update", "create"],
  ReleaseUpdateWithoutArtistsOnReleasesInput: ["name", "releaseDate", "type", "image", "url", "createdAt", "artists", "tags"],
  TagCreateWithoutBlogsInput: ["name", "releases"],
  TagCreateOrConnectWithoutBlogsInput: ["where", "create"],
  TagUpsertWithWhereUniqueWithoutBlogsInput: ["where", "update", "create"],
  TagUpdateWithWhereUniqueWithoutBlogsInput: ["where", "data"],
  TagUpdateManyWithWhereWithoutBlogsInput: ["where", "data"],
  ArtistsOnReleasesCreateManyArtistInput: ["releaseId", "role", "createdAt"],
  ReleaseUpdateWithoutArtistsInput: ["name", "releaseDate", "type", "image", "url", "createdAt", "tags", "artistsOnReleases"],
  ArtistsOnReleasesUpdateWithoutArtistInput: ["role", "createdAt", "release"],
  ArtistsOnReleasesCreateManyReleaseInput: ["artistId", "role", "createdAt"],
  ArtistUpdateWithoutReleasesInput: ["name", "image", "createdAt", "artistsOnReleases"],
  TagUpdateWithoutReleasesInput: ["name", "blogs"],
  ArtistsOnReleasesUpdateWithoutReleaseInput: ["role", "createdAt", "artist"],
  ReleaseUpdateWithoutTagsInput: ["name", "releaseDate", "type", "image", "url", "createdAt", "artists", "artistsOnReleases"],
  BlogUpdateWithoutTagsInput: ["title", "content", "createdAt", "createdBy"],
  TagUpdateWithoutBlogsInput: ["name", "releases"]
};
const outputsInfo = {
  AggregateArtist: ["_count", "_avg", "_sum", "_min", "_max"],
  ArtistGroupBy: ["id", "name", "image", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateRelease: ["_count", "_avg", "_sum", "_min", "_max"],
  ReleaseGroupBy: ["id", "name", "releaseDate", "type", "image", "url", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTag: ["_count", "_avg", "_sum", "_min", "_max"],
  TagGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateArtistsOnReleases: ["_count", "_avg", "_sum", "_min", "_max"],
  ArtistsOnReleasesGroupBy: ["artistId", "releaseId", "role", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateBlog: ["_count", "_avg", "_sum", "_min", "_max"],
  BlogGroupBy: ["id", "title", "content", "createdAt", "createdBy", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  ArtistCountAggregate: ["id", "name", "image", "createdAt", "_all"],
  ArtistAvgAggregate: ["id"],
  ArtistSumAggregate: ["id"],
  ArtistMinAggregate: ["id", "name", "image", "createdAt"],
  ArtistMaxAggregate: ["id", "name", "image", "createdAt"],
  ReleaseCountAggregate: ["id", "name", "releaseDate", "type", "image", "url", "createdAt", "_all"],
  ReleaseAvgAggregate: ["id"],
  ReleaseSumAggregate: ["id"],
  ReleaseMinAggregate: ["id", "name", "releaseDate", "type", "image", "url", "createdAt"],
  ReleaseMaxAggregate: ["id", "name", "releaseDate", "type", "image", "url", "createdAt"],
  TagCountAggregate: ["id", "name", "_all"],
  TagAvgAggregate: ["id"],
  TagSumAggregate: ["id"],
  TagMinAggregate: ["id", "name"],
  TagMaxAggregate: ["id", "name"],
  ArtistsOnReleasesCountAggregate: ["artistId", "releaseId", "role", "createdAt", "_all"],
  ArtistsOnReleasesAvgAggregate: ["artistId", "releaseId"],
  ArtistsOnReleasesSumAggregate: ["artistId", "releaseId"],
  ArtistsOnReleasesMinAggregate: ["artistId", "releaseId", "role", "createdAt"],
  ArtistsOnReleasesMaxAggregate: ["artistId", "releaseId", "role", "createdAt"],
  BlogCountAggregate: ["id", "title", "content", "createdAt", "createdBy", "_all"],
  BlogAvgAggregate: ["id"],
  BlogSumAggregate: ["id"],
  BlogMinAggregate: ["id", "title", "content", "createdAt", "createdBy"],
  BlogMaxAggregate: ["id", "title", "content", "createdAt", "createdBy"]
};
const argsInfo = {
  FindUniqueArtistArgs: ["where"],
  FindFirstArtistArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyArtistArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateArtistArgs: ["data"],
  CreateManyArtistArgs: ["data", "skipDuplicates"],
  DeleteArtistArgs: ["where"],
  UpdateArtistArgs: ["data", "where"],
  DeleteManyArtistArgs: ["where"],
  UpdateManyArtistArgs: ["data", "where"],
  UpsertArtistArgs: ["where", "create", "update"],
  AggregateArtistArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByArtistArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueReleaseArgs: ["where"],
  FindFirstReleaseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyReleaseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateReleaseArgs: ["data"],
  CreateManyReleaseArgs: ["data", "skipDuplicates"],
  DeleteReleaseArgs: ["where"],
  UpdateReleaseArgs: ["data", "where"],
  DeleteManyReleaseArgs: ["where"],
  UpdateManyReleaseArgs: ["data", "where"],
  UpsertReleaseArgs: ["where", "create", "update"],
  AggregateReleaseArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByReleaseArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTagArgs: ["where"],
  FindFirstTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTagArgs: ["data"],
  CreateManyTagArgs: ["data", "skipDuplicates"],
  DeleteTagArgs: ["where"],
  UpdateTagArgs: ["data", "where"],
  DeleteManyTagArgs: ["where"],
  UpdateManyTagArgs: ["data", "where"],
  UpsertTagArgs: ["where", "create", "update"],
  AggregateTagArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTagArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueArtistsOnReleasesArgs: ["where"],
  FindFirstArtistsOnReleasesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyArtistsOnReleasesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateArtistsOnReleasesArgs: ["data"],
  CreateManyArtistsOnReleasesArgs: ["data", "skipDuplicates"],
  DeleteArtistsOnReleasesArgs: ["where"],
  UpdateArtistsOnReleasesArgs: ["data", "where"],
  DeleteManyArtistsOnReleasesArgs: ["where"],
  UpdateManyArtistsOnReleasesArgs: ["data", "where"],
  UpsertArtistsOnReleasesArgs: ["where", "create", "update"],
  AggregateArtistsOnReleasesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByArtistsOnReleasesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueBlogArgs: ["where"],
  FindFirstBlogArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyBlogArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateBlogArgs: ["data"],
  CreateManyBlogArgs: ["data", "skipDuplicates"],
  DeleteBlogArgs: ["where"],
  UpdateBlogArgs: ["data", "where"],
  DeleteManyBlogArgs: ["where"],
  UpdateManyBlogArgs: ["data", "where"],
  UpsertBlogArgs: ["where", "create", "update"],
  AggregateBlogArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByBlogArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







