Object.defineProperty(exports, '__esModule', { value: true })

const {
    PrismaClientKnownRequestError,
    PrismaClientUnknownRequestError,
    PrismaClientRustPanicError,
    PrismaClientInitializationError,
    PrismaClientValidationError,
    getPrismaClient,
    sqltag,
    empty,
    join,
    raw,
    skip,
    Decimal,
    Debug,
    objectEnumValues,
    makeStrictEnum,
    Extensions,
    warnOnce,
    defineDmmfProperty,
    Public,
    getRuntime,
    createParam,
} = require('./runtime/edge.js')

const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
    client: '6.6.0',
    engine: 'f676762280b54cd07c770017ed3711ddde35f37a',
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
    DbNull: objectEnumValues.classes.DbNull,
    JsonNull: objectEnumValues.classes.JsonNull,
    AnyNull: objectEnumValues.classes.AnyNull,
}

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
})

exports.Prisma.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    firstname: 'firstname',
    lastname: 'lastname',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
}

exports.Prisma.PostScalarFieldEnum = {
    id: 'id',
    title: 'title',
    content: 'content',
    description: 'description',
    imageUrl: 'imageUrl',
    status: 'status',
    views: 'views',
    userId: 'userId',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
}

exports.Prisma.CommentScalarFieldEnum = {
    id: 'id',
    content: 'content',
    userId: 'userId',
    postId: 'postId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
}

exports.Prisma.CategoryScalarFieldEnum = {
    id: 'id',
    name: 'name',
}

exports.Prisma.LikeScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
}

exports.Prisma.TagScalarFieldEnum = {
    id: 'id',
    name: 'name',
}

exports.Prisma.PostTagScalarFieldEnum = {
    postId: 'postId',
    tagId: 'tagId',
}

exports.Prisma.SortOrder = {
    asc: 'asc',
    desc: 'desc',
}

exports.Prisma.UserOrderByRelevanceFieldEnum = {
    email: 'email',
    firstname: 'firstname',
    lastname: 'lastname',
    password: 'password',
}

exports.Prisma.NullsOrder = {
    first: 'first',
    last: 'last',
}

exports.Prisma.PostOrderByRelevanceFieldEnum = {
    title: 'title',
    content: 'content',
    description: 'description',
    imageUrl: 'imageUrl',
}

exports.Prisma.CommentOrderByRelevanceFieldEnum = {
    content: 'content',
}

exports.Prisma.CategoryOrderByRelevanceFieldEnum = {
    name: 'name',
}

exports.Prisma.TagOrderByRelevanceFieldEnum = {
    name: 'name',
}
exports.Role = exports.$Enums.Role = {
    ADMIN: 'ADMIN',
    AUTHOR: 'AUTHOR',
    READER: 'READER',
}

exports.PostStatus = exports.$Enums.PostStatus = {
    DRAFT: 'DRAFT',
    PUBLISHED: 'PUBLISHED',
}

exports.Prisma.ModelName = {
    User: 'User',
    Post: 'Post',
    Comment: 'Comment',
    Category: 'Category',
    Like: 'Like',
    Tag: 'Tag',
    PostTag: 'PostTag',
}
/**
 * Create the Client
 */
const config = {
    generator: {
        name: 'client',
        provider: {
            fromEnvVar: null,
            value: 'prisma-client-js',
        },
        output: {
            value: '/media/hasina/88F6EAA6F6EA93AA2/DataOldMachine/portFolios/NODEJS/APIs/express-api/generated/prisma',
            fromEnvVar: null,
        },
        config: {
            engineType: 'library',
        },
        binaryTargets: [
            {
                fromEnvVar: null,
                value: 'debian-openssl-1.1.x',
                native: true,
            },
        ],
        previewFeatures: [],
        sourceFilePath:
            '/media/hasina/88F6EAA6F6EA93AA2/DataOldMachine/portFolios/NODEJS/APIs/express-api/db/schema.prisma',
        isCustomOutput: true,
    },
    relativeEnvPaths: {
        rootEnvPath: null,
        schemaEnvPath: '../../.env',
    },
    relativePath: '../../db',
    clientVersion: '6.6.0',
    engineVersion: 'f676762280b54cd07c770017ed3711ddde35f37a',
    datasourceNames: ['db'],
    activeProvider: 'mysql',
    postinstall: false,
    inlineDatasources: {
        db: {
            url: {
                fromEnvVar: 'DATABASE_URL',
                value: null,
            },
        },
    },
    inlineSchema:
        'generator client {\n  provider = "prisma-client-js"\n  output   = "../generated/prisma"\n}\n\ndatasource db {\n  provider = "mysql"\n  url      = env("DATABASE_URL")\n}\n\nenum Role {\n  ADMIN\n  AUTHOR\n  READER\n}\n\nmodel User {\n  id        Int       @id @default(autoincrement())\n  email     String    @unique\n  firstname String\n  lastname  String\n  password  String\n  role      Role      @default(READER)\n  posts     Post[]\n  comments  Comment[]\n  likes     Like[]\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @updatedAt\n}\n\nenum PostStatus {\n  DRAFT\n  PUBLISHED\n}\n\nmodel Post {\n  id          Int        @id @default(autoincrement())\n  title       String\n  content     String\n  description String?\n  imageUrl    String?\n  status      PostStatus @default(DRAFT)\n  views       Int        @default(0)\n  userId      Int\n  categoryId  Int?\n  user        User       @relation(fields: [userId], references: [id])\n  comments    Comment[]\n  category    Category?  @relation(fields: [categoryId], references: [id])\n  likes       Like[]\n  postTags    PostTag[]\n  createdAt   DateTime   @default(now())\n  updatedAt   DateTime   @updatedAt\n\n  @@index([userId])\n}\n\nmodel Comment {\n  id        Int      @id @default(autoincrement())\n  content   String\n  userId    Int\n  postId    Int\n  user      User     @relation(fields: [userId], references: [id])\n  post      Post     @relation(fields: [postId], references: [id])\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([userId])\n  @@index([postId])\n}\n\nmodel Category {\n  id    Int    @id @default(autoincrement())\n  name  String @unique\n  posts Post[]\n}\n\nmodel Like {\n  id     Int  @id @default(autoincrement())\n  user   User @relation(fields: [userId], references: [id])\n  post   Post @relation(fields: [postId], references: [id])\n  userId Int\n  postId Int\n\n  @@unique([userId, postId])\n}\n\nmodel Tag {\n  id    Int       @id @default(autoincrement())\n  name  String    @unique\n  posts PostTag[]\n}\n\nmodel PostTag {\n  postId Int\n  tagId  Int\n  post   Post @relation(fields: [postId], references: [id])\n  tag    Tag  @relation(fields: [tagId], references: [id])\n\n  @@id([postId, tagId])\n}\n',
    inlineSchemaHash: 'ce42a38a13ded3c320028eff495cc301dd61edb494f7f4c50c561ead5d44d9d1',
    copyEngine: true,
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse(
    '{"models":{"User":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"firstname","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"lastname","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Role","nativeType":null,"default":"READER","isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","nativeType":null,"relationName":"PostToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"comments","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Comment","nativeType":null,"relationName":"CommentToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"likes","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Like","nativeType":null,"relationName":"LikeToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Post":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"imageUrl","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"PostStatus","nativeType":null,"default":"DRAFT","isGenerated":false,"isUpdatedAt":false},{"name":"views","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"categoryId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"PostToUser","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"comments","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Comment","nativeType":null,"relationName":"CommentToPost","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"category","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Category","nativeType":null,"relationName":"CategoryToPost","relationFromFields":["categoryId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"likes","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Like","nativeType":null,"relationName":"LikeToPost","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"postTags","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"PostTag","nativeType":null,"relationName":"PostToPostTag","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Comment":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"postId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"CommentToUser","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"post","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","nativeType":null,"relationName":"CommentToPost","relationFromFields":["postId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Category":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","nativeType":null,"relationName":"CategoryToPost","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Like":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"LikeToUser","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"post","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","nativeType":null,"relationName":"LikeToPost","relationFromFields":["postId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"postId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["userId","postId"]],"uniqueIndexes":[{"name":null,"fields":["userId","postId"]}],"isGenerated":false},"Tag":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"PostTag","nativeType":null,"relationName":"PostTagToTag","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"PostTag":{"dbName":null,"schema":null,"fields":[{"name":"postId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"tagId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"post","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","nativeType":null,"relationName":"PostToPostTag","relationFromFields":["postId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"tag","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Tag","nativeType":null,"relationName":"PostTagToTag","relationFromFields":["tagId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":{"name":null,"fields":["postId","tagId"]},"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{"Role":{"values":[{"name":"ADMIN","dbName":null},{"name":"AUTHOR","dbName":null},{"name":"READER","dbName":null}],"dbName":null},"PostStatus":{"values":[{"name":"DRAFT","dbName":null},{"name":"PUBLISHED","dbName":null}],"dbName":null}},"types":{}}'
)
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
    parsed: {
        DATABASE_URL:
            (typeof globalThis !== 'undefined' && globalThis['DATABASE_URL']) ||
            (typeof process !== 'undefined' && process.env && process.env.DATABASE_URL) ||
            undefined,
    },
})

if (
    (typeof globalThis !== 'undefined' && globalThis['DEBUG']) ||
    (typeof process !== 'undefined' && process.env && process.env.DEBUG) ||
    undefined
) {
    Debug.enable(
        (typeof globalThis !== 'undefined' && globalThis['DEBUG']) ||
            (typeof process !== 'undefined' && process.env && process.env.DEBUG) ||
            undefined
    )
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
