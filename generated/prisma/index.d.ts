/**
 * Client
 **/

import * as runtime from './runtime/library.js'
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 *
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Comment
 *
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Category
 *
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Like
 *
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model Tag
 *
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model PostTag
 *
 */
export type PostTag = $Result.DefaultSelection<Prisma.$PostTagPayload>

/**
 * Enums
 */
export namespace $Enums {
    export const Role: {
        ADMIN: 'ADMIN'
        AUTHOR: 'AUTHOR'
        READER: 'READER'
    }

    export type Role = (typeof Role)[keyof typeof Role]

    export const PostStatus: {
        DRAFT: 'DRAFT'
        PUBLISHED: 'PUBLISHED'
    }

    export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus]
}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PostStatus = $Enums.PostStatus

export const PostStatus: typeof $Enums.PostStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
    ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
    U = 'log' extends keyof ClientOptions
        ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
            ? Prisma.GetEvents<ClientOptions['log']>
            : never
        : never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
     * ##  Prisma Client ʲˢ
     *
     * Type-safe database client for TypeScript & Node.js
     * @example
     * ```
     * const prisma = new PrismaClient()
     * // Fetch zero or more Users
     * const users = await prisma.user.findMany()
     * ```
     *
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
     */

    constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>)
    $on<V extends U>(
        eventType: V,
        callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void
    ): PrismaClient

    /**
     * Connect with the database
     */
    $connect(): $Utils.JsPromise<void>

    /**
     * Disconnect from the database
     */
    $disconnect(): $Utils.JsPromise<void>

    /**
     * Add a middleware
     * @deprecated since 4.16.0. For new code, prefer client extensions instead.
     * @see https://pris.ly/d/extensions
     */
    $use(cb: Prisma.Middleware): void

    /**
     * Executes a prepared raw query and returns the number of affected rows.
     * @example
     * ```
     * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>

    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>

    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>

    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>

    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(
        arg: [...P],
        options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
    ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

    $transaction<R>(
        fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
        options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel }
    ): $Utils.JsPromise<R>

    $extends: $Extensions.ExtendsHook<
        'extends',
        Prisma.TypeMapCb<ClientOptions>,
        ExtArgs,
        $Utils.Call<
            Prisma.TypeMapCb<ClientOptions>,
            {
                extArgs: ExtArgs
            }
        >
    >

    /**
     * `prisma.user`: Exposes CRUD operations for the **User** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Users
     * const users = await prisma.user.findMany()
     * ```
     */
    get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>

    /**
     * `prisma.post`: Exposes CRUD operations for the **Post** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Posts
     * const posts = await prisma.post.findMany()
     * ```
     */
    get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>

    /**
     * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Comments
     * const comments = await prisma.comment.findMany()
     * ```
     */
    get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>

    /**
     * `prisma.category`: Exposes CRUD operations for the **Category** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Categories
     * const categories = await prisma.category.findMany()
     * ```
     */
    get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>

    /**
     * `prisma.like`: Exposes CRUD operations for the **Like** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Likes
     * const likes = await prisma.like.findMany()
     * ```
     */
    get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>

    /**
     * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Tags
     * const tags = await prisma.tag.findMany()
     * ```
     */
    get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>

    /**
     * `prisma.postTag`: Exposes CRUD operations for the **PostTag** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more PostTags
     * const postTags = await prisma.postTag.findMany()
     * ```
     */
    get postTag(): Prisma.PostTagDelegate<ExtArgs, ClientOptions>
}

export namespace Prisma {
    export import DMMF = runtime.DMMF

    export type PrismaPromise<T> = $Public.PrismaPromise<T>

    /**
     * Validator
     */
    export import validator = runtime.Public.validator

    /**
     * Prisma Errors
     */
    export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
    export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
    export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
    export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
    export import PrismaClientValidationError = runtime.PrismaClientValidationError

    /**
     * Re-export of sql-template-tag
     */
    export import sql = runtime.sqltag
    export import empty = runtime.empty
    export import join = runtime.join
    export import raw = runtime.raw
    export import Sql = runtime.Sql

    /**
     * Decimal.js
     */
    export import Decimal = runtime.Decimal

    export type DecimalJsLike = runtime.DecimalJsLike

    /**
     * Metrics
     */
    export type Metrics = runtime.Metrics
    export type Metric<T> = runtime.Metric<T>
    export type MetricHistogram = runtime.MetricHistogram
    export type MetricHistogramBucket = runtime.MetricHistogramBucket

    /**
     * Extensions
     */
    export import Extension = $Extensions.UserArgs
    export import getExtensionContext = runtime.Extensions.getExtensionContext
    export import Args = $Public.Args
    export import Payload = $Public.Payload
    export import Result = $Public.Result
    export import Exact = $Public.Exact

    /**
     * Prisma Client JS version: 6.6.0
     * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
     */
    export type PrismaVersion = {
        client: string
    }

    export const prismaVersion: PrismaVersion

    /**
     * Utility Types
     */

    export import JsonObject = runtime.JsonObject
    export import JsonArray = runtime.JsonArray
    export import JsonValue = runtime.JsonValue
    export import InputJsonObject = runtime.InputJsonObject
    export import InputJsonArray = runtime.InputJsonArray
    export import InputJsonValue = runtime.InputJsonValue

    /**
     * Types of the values used to represent different kinds of `null` values when working with JSON fields.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    namespace NullTypes {
        /**
         * Type of `Prisma.DbNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class DbNull {
            private DbNull: never
            private constructor()
        }

        /**
         * Type of `Prisma.JsonNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class JsonNull {
            private JsonNull: never
            private constructor()
        }

        /**
         * Type of `Prisma.AnyNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class AnyNull {
            private AnyNull: never
            private constructor()
        }
    }

    /**
     * Helper for filtering JSON entries that have `null` on the database (empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const DbNull: NullTypes.DbNull

    /**
     * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const JsonNull: NullTypes.JsonNull

    /**
     * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const AnyNull: NullTypes.AnyNull

    type SelectAndInclude = {
        select: any
        include: any
    }

    type SelectAndOmit = {
        select: any
        omit: any
    }

    /**
     * Get the type of the value, that the Promise holds.
     */
    export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T

    /**
     * Get the return type of a function which returns a Promise.
     */
    export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

    /**
     * From T, pick a set of properties whose keys are in the union K
     */
    type Prisma__Pick<T, K extends keyof T> = {
        [P in K]: T[P]
    }

    export type Enumerable<T> = T | Array<T>

    export type RequiredKeys<T> = {
        [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
    }[keyof T]

    export type TruthyKeys<T> = keyof {
        [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
    }

    export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

    /**
     * Subset
     * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
     */
    export type Subset<T, U> = {
        [key in keyof T]: key extends keyof U ? T[key] : never
    }

    /**
     * SelectSubset
     * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
     * Additionally, it validates, if both select and include are present. If the case, it errors.
     */
    export type SelectSubset<T, U> = {
        [key in keyof T]: key extends keyof U ? T[key] : never
    } & (T extends SelectAndInclude
        ? 'Please either choose `select` or `include`.'
        : T extends SelectAndOmit
          ? 'Please either choose `select` or `omit`.'
          : {})

    /**
     * Subset + Intersection
     * @desc From `T` pick properties that exist in `U` and intersect `K`
     */
    export type SubsetIntersection<T, U, K> = {
        [key in keyof T]: key extends keyof U ? T[key] : never
    } & K

    type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

    /**
     * XOR is needed to have a real mutually exclusive union type
     * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
     */
    type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T

    /**
     * Is T a Record?
     */
    type IsObject<T extends any> =
        T extends Array<any>
            ? False
            : T extends Date
              ? False
              : T extends Uint8Array
                ? False
                : T extends BigInt
                  ? False
                  : T extends object
                    ? True
                    : False

    /**
     * If it's T[], return T
     */
    export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

    /**
     * From ts-toolbelt
     */

    type __Either<O extends object, K extends Key> = Omit<O, K> &
        {
            // Merge all but K
            [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
        }[K]

    type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

    type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

    type _Either<O extends object, K extends Key, strict extends Boolean> = {
        1: EitherStrict<O, K>
        0: EitherLoose<O, K>
    }[strict]

    type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
        ? _Either<O, K, strict>
        : never

    export type Union = any

    type PatchUndefined<O extends object, O1 extends object> = {
        [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
    } & {}

    /** Helper Types for "Merge" **/
    export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
        ? I
        : never

    export type Overwrite<O extends object, O1 extends object> = {
        [K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
    } & {}

    type _Merge<U extends object> = IntersectOf<
        Overwrite<
            U,
            {
                [K in keyof U]-?: At<U, K>
            }
        >
    >

    type Key = string | number | symbol
    type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never
    type AtStrict<O extends object, K extends Key> = O[K & keyof O]
    type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never
    export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
        1: AtStrict<O, K>
        0: AtLoose<O, K>
    }[strict]

    export type ComputeRaw<A extends any> = A extends Function
        ? A
        : {
              [K in keyof A]: A[K]
          } & {}

    export type OptionalFlat<O> = {
        [K in keyof O]?: O[K]
    } & {}

    type _Record<K extends keyof any, T> = {
        [P in K]: T
    }

    // cause typescript not to expand types and preserve names
    type NoExpand<T> = T extends unknown ? T : never

    // this type assumes the passed object is entirely optional
    type AtLeast<O extends object, K extends string> = NoExpand<
        O extends unknown
            ?
                  | (K extends keyof O ? { [P in K]: O[P] } & O : O)
                  | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
            : never
    >

    type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never

    export type Strict<U extends object> = ComputeRaw<_Strict<U>>
    /** End Helper Types for "Merge" **/

    export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

    /**
  A [[Boolean]]
  */
    export type Boolean = True | False

    // /**
    // 1
    // */
    export type True = 1

    /**
  0
  */
    export type False = 0

    export type Not<B extends Boolean> = {
        0: 1
        1: 0
    }[B]

    export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
        ? 0 // anything `never` is false
        : A1 extends A2
          ? 1
          : 0

    export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>

    export type Or<B1 extends Boolean, B2 extends Boolean> = {
        0: {
            0: 0
            1: 1
        }
        1: {
            0: 1
            1: 1
        }
    }[B1][B2]

    export type Keys<U extends Union> = U extends unknown ? keyof U : never

    type Cast<A, B> = A extends B ? A : B

    export const type: unique symbol

    /**
     * Used by group by
     */

    export type GetScalarType<T, O> = O extends object
        ? {
              [P in keyof T]: P extends keyof O ? O[P] : never
          }
        : never

    type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T

    type GetHavingFields<T> = {
        [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
            ? // infer is only needed to not hit TS limit
              // based on the brilliant idea of Pierre-Antoine Mills
              // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
              T[K] extends infer TK
                ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
                : never
            : {} extends FieldPaths<T[K]>
              ? never
              : K
    }[keyof T]

    /**
     * Convert tuple to union
     */
    type _TupleToUnion<T> = T extends (infer E)[] ? E : never
    type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
    type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

    /**
     * Like `Pick`, but additionally can also accept an array of keys
     */
    type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

    /**
     * Exclude all keys with underscores
     */
    type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

    export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

    type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

    export const ModelName: {
        User: 'User'
        Post: 'Post'
        Comment: 'Comment'
        Category: 'Category'
        Like: 'Like'
        Tag: 'Tag'
        PostTag: 'PostTag'
    }

    export type ModelName = (typeof ModelName)[keyof typeof ModelName]

    export type Datasources = {
        db?: Datasource
    }

    interface TypeMapCb<ClientOptions = {}>
        extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
        returns: Prisma.TypeMap<
            this['params']['extArgs'],
            ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
        >
    }

    export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
        globalOmitOptions: {
            omit: GlobalOmitOptions
        }
        meta: {
            modelProps: 'user' | 'post' | 'comment' | 'category' | 'like' | 'tag' | 'postTag'
            txIsolationLevel: Prisma.TransactionIsolationLevel
        }
        model: {
            User: {
                payload: Prisma.$UserPayload<ExtArgs>
                fields: Prisma.UserFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.UserFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>
                    }
                    findFirst: {
                        args: Prisma.UserFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>
                    }
                    findMany: {
                        args: Prisma.UserFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
                    }
                    create: {
                        args: Prisma.UserCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>
                    }
                    createMany: {
                        args: Prisma.UserCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    delete: {
                        args: Prisma.UserDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>
                    }
                    update: {
                        args: Prisma.UserUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>
                    }
                    deleteMany: {
                        args: Prisma.UserDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.UserUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.UserUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>
                    }
                    aggregate: {
                        args: Prisma.UserAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateUser>
                    }
                    groupBy: {
                        args: Prisma.UserGroupByArgs<ExtArgs>
                        result: $Utils.Optional<UserGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.UserCountArgs<ExtArgs>
                        result: $Utils.Optional<UserCountAggregateOutputType> | number
                    }
                }
            }
            Post: {
                payload: Prisma.$PostPayload<ExtArgs>
                fields: Prisma.PostFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.PostFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostPayload>
                    }
                    findFirst: {
                        args: Prisma.PostFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostPayload>
                    }
                    findMany: {
                        args: Prisma.PostFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
                    }
                    create: {
                        args: Prisma.PostCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostPayload>
                    }
                    createMany: {
                        args: Prisma.PostCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    delete: {
                        args: Prisma.PostDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostPayload>
                    }
                    update: {
                        args: Prisma.PostUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostPayload>
                    }
                    deleteMany: {
                        args: Prisma.PostDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.PostUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.PostUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostPayload>
                    }
                    aggregate: {
                        args: Prisma.PostAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregatePost>
                    }
                    groupBy: {
                        args: Prisma.PostGroupByArgs<ExtArgs>
                        result: $Utils.Optional<PostGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.PostCountArgs<ExtArgs>
                        result: $Utils.Optional<PostCountAggregateOutputType> | number
                    }
                }
            }
            Comment: {
                payload: Prisma.$CommentPayload<ExtArgs>
                fields: Prisma.CommentFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.CommentFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CommentPayload>
                    }
                    findFirst: {
                        args: Prisma.CommentFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CommentPayload>
                    }
                    findMany: {
                        args: Prisma.CommentFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
                    }
                    create: {
                        args: Prisma.CommentCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CommentPayload>
                    }
                    createMany: {
                        args: Prisma.CommentCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    delete: {
                        args: Prisma.CommentDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CommentPayload>
                    }
                    update: {
                        args: Prisma.CommentUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CommentPayload>
                    }
                    deleteMany: {
                        args: Prisma.CommentDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.CommentUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.CommentUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CommentPayload>
                    }
                    aggregate: {
                        args: Prisma.CommentAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateComment>
                    }
                    groupBy: {
                        args: Prisma.CommentGroupByArgs<ExtArgs>
                        result: $Utils.Optional<CommentGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.CommentCountArgs<ExtArgs>
                        result: $Utils.Optional<CommentCountAggregateOutputType> | number
                    }
                }
            }
            Category: {
                payload: Prisma.$CategoryPayload<ExtArgs>
                fields: Prisma.CategoryFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.CategoryFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
                    }
                    findFirst: {
                        args: Prisma.CategoryFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
                    }
                    findMany: {
                        args: Prisma.CategoryFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
                    }
                    create: {
                        args: Prisma.CategoryCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
                    }
                    createMany: {
                        args: Prisma.CategoryCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    delete: {
                        args: Prisma.CategoryDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
                    }
                    update: {
                        args: Prisma.CategoryUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
                    }
                    deleteMany: {
                        args: Prisma.CategoryDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.CategoryUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.CategoryUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
                    }
                    aggregate: {
                        args: Prisma.CategoryAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateCategory>
                    }
                    groupBy: {
                        args: Prisma.CategoryGroupByArgs<ExtArgs>
                        result: $Utils.Optional<CategoryGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.CategoryCountArgs<ExtArgs>
                        result: $Utils.Optional<CategoryCountAggregateOutputType> | number
                    }
                }
            }
            Like: {
                payload: Prisma.$LikePayload<ExtArgs>
                fields: Prisma.LikeFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.LikeFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$LikePayload>
                    }
                    findFirst: {
                        args: Prisma.LikeFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$LikePayload>
                    }
                    findMany: {
                        args: Prisma.LikeFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
                    }
                    create: {
                        args: Prisma.LikeCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$LikePayload>
                    }
                    createMany: {
                        args: Prisma.LikeCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    delete: {
                        args: Prisma.LikeDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$LikePayload>
                    }
                    update: {
                        args: Prisma.LikeUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$LikePayload>
                    }
                    deleteMany: {
                        args: Prisma.LikeDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.LikeUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.LikeUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$LikePayload>
                    }
                    aggregate: {
                        args: Prisma.LikeAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateLike>
                    }
                    groupBy: {
                        args: Prisma.LikeGroupByArgs<ExtArgs>
                        result: $Utils.Optional<LikeGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.LikeCountArgs<ExtArgs>
                        result: $Utils.Optional<LikeCountAggregateOutputType> | number
                    }
                }
            }
            Tag: {
                payload: Prisma.$TagPayload<ExtArgs>
                fields: Prisma.TagFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.TagFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TagPayload>
                    }
                    findFirst: {
                        args: Prisma.TagFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TagPayload>
                    }
                    findMany: {
                        args: Prisma.TagFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
                    }
                    create: {
                        args: Prisma.TagCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TagPayload>
                    }
                    createMany: {
                        args: Prisma.TagCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    delete: {
                        args: Prisma.TagDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TagPayload>
                    }
                    update: {
                        args: Prisma.TagUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TagPayload>
                    }
                    deleteMany: {
                        args: Prisma.TagDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.TagUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.TagUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$TagPayload>
                    }
                    aggregate: {
                        args: Prisma.TagAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregateTag>
                    }
                    groupBy: {
                        args: Prisma.TagGroupByArgs<ExtArgs>
                        result: $Utils.Optional<TagGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.TagCountArgs<ExtArgs>
                        result: $Utils.Optional<TagCountAggregateOutputType> | number
                    }
                }
            }
            PostTag: {
                payload: Prisma.$PostTagPayload<ExtArgs>
                fields: Prisma.PostTagFieldRefs
                operations: {
                    findUnique: {
                        args: Prisma.PostTagFindUniqueArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostTagPayload> | null
                    }
                    findUniqueOrThrow: {
                        args: Prisma.PostTagFindUniqueOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
                    }
                    findFirst: {
                        args: Prisma.PostTagFindFirstArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostTagPayload> | null
                    }
                    findFirstOrThrow: {
                        args: Prisma.PostTagFindFirstOrThrowArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
                    }
                    findMany: {
                        args: Prisma.PostTagFindManyArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostTagPayload>[]
                    }
                    create: {
                        args: Prisma.PostTagCreateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
                    }
                    createMany: {
                        args: Prisma.PostTagCreateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    delete: {
                        args: Prisma.PostTagDeleteArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
                    }
                    update: {
                        args: Prisma.PostTagUpdateArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
                    }
                    deleteMany: {
                        args: Prisma.PostTagDeleteManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    updateMany: {
                        args: Prisma.PostTagUpdateManyArgs<ExtArgs>
                        result: BatchPayload
                    }
                    upsert: {
                        args: Prisma.PostTagUpsertArgs<ExtArgs>
                        result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
                    }
                    aggregate: {
                        args: Prisma.PostTagAggregateArgs<ExtArgs>
                        result: $Utils.Optional<AggregatePostTag>
                    }
                    groupBy: {
                        args: Prisma.PostTagGroupByArgs<ExtArgs>
                        result: $Utils.Optional<PostTagGroupByOutputType>[]
                    }
                    count: {
                        args: Prisma.PostTagCountArgs<ExtArgs>
                        result: $Utils.Optional<PostTagCountAggregateOutputType> | number
                    }
                }
            }
        }
    } & {
        other: {
            payload: any
            operations: {
                $executeRaw: {
                    args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
                    result: any
                }
                $executeRawUnsafe: {
                    args: [query: string, ...values: any[]]
                    result: any
                }
                $queryRaw: {
                    args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
                    result: any
                }
                $queryRawUnsafe: {
                    args: [query: string, ...values: any[]]
                    result: any
                }
            }
        }
    }
    export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
    export type DefaultPrismaClient = PrismaClient
    export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
    export interface PrismaClientOptions {
        /**
         * Overwrites the datasource url from your schema.prisma file
         */
        datasources?: Datasources
        /**
         * Overwrites the datasource url from your schema.prisma file
         */
        datasourceUrl?: string
        /**
         * @default "colorless"
         */
        errorFormat?: ErrorFormat
        /**
         * @example
         * ```
         * // Defaults to stdout
         * log: ['query', 'info', 'warn', 'error']
         *
         * // Emit as events
         * log: [
         *   { emit: 'stdout', level: 'query' },
         *   { emit: 'stdout', level: 'info' },
         *   { emit: 'stdout', level: 'warn' }
         *   { emit: 'stdout', level: 'error' }
         * ]
         * ```
         * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
         */
        log?: (LogLevel | LogDefinition)[]
        /**
         * The default values for transactionOptions
         * maxWait ?= 2000
         * timeout ?= 5000
         */
        transactionOptions?: {
            maxWait?: number
            timeout?: number
            isolationLevel?: Prisma.TransactionIsolationLevel
        }
        /**
         * Global configuration for omitting model fields by default.
         *
         * @example
         * ```
         * const prisma = new PrismaClient({
         *   omit: {
         *     user: {
         *       password: true
         *     }
         *   }
         * })
         * ```
         */
        omit?: Prisma.GlobalOmitConfig
    }
    export type GlobalOmitConfig = {
        user?: UserOmit
        post?: PostOmit
        comment?: CommentOmit
        category?: CategoryOmit
        like?: LikeOmit
        tag?: TagOmit
        postTag?: PostTagOmit
    }

    /* Types for Logging */
    export type LogLevel = 'info' | 'query' | 'warn' | 'error'
    export type LogDefinition = {
        level: LogLevel
        emit: 'stdout' | 'event'
    }

    export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
        ? T['emit'] extends 'event'
            ? T['level']
            : never
        : never
    export type GetEvents<T extends any> =
        T extends Array<LogLevel | LogDefinition>
            ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
            : never

    export type QueryEvent = {
        timestamp: Date
        query: string
        params: string
        duration: number
        target: string
    }

    export type LogEvent = {
        timestamp: Date
        message: string
        target: string
    }
    /* End Types for Logging */

    export type PrismaAction =
        | 'findUnique'
        | 'findUniqueOrThrow'
        | 'findMany'
        | 'findFirst'
        | 'findFirstOrThrow'
        | 'create'
        | 'createMany'
        | 'createManyAndReturn'
        | 'update'
        | 'updateMany'
        | 'updateManyAndReturn'
        | 'upsert'
        | 'delete'
        | 'deleteMany'
        | 'executeRaw'
        | 'queryRaw'
        | 'aggregate'
        | 'count'
        | 'runCommandRaw'
        | 'findRaw'
        | 'groupBy'

    /**
     * These options are being passed into the middleware as "params"
     */
    export type MiddlewareParams = {
        model?: ModelName
        action: PrismaAction
        args: any
        dataPath: string[]
        runInTransaction: boolean
    }

    /**
     * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
     */
    export type Middleware<T = any> = (
        params: MiddlewareParams,
        next: (params: MiddlewareParams) => $Utils.JsPromise<T>
    ) => $Utils.JsPromise<T>

    // tested in getLogLevel.test.ts
    export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined

    /**
     * `PrismaClient` proxy available in interactive transactions.
     */
    export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

    export type Datasource = {
        url?: string
    }

    /**
     * Count Types
     */

    /**
     * Count Type UserCountOutputType
     */

    export type UserCountOutputType = {
        posts: number
        comments: number
        likes: number
    }

    export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        posts?: boolean | UserCountOutputTypeCountPostsArgs
        comments?: boolean | UserCountOutputTypeCountCommentsArgs
        likes?: boolean | UserCountOutputTypeCountLikesArgs
    }

    // Custom InputTypes
    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the UserCountOutputType
         */
        select?: UserCountOutputTypeSelect<ExtArgs> | null
    }

    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            where?: PostWhereInput
        }

    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeCountCommentsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: CommentWhereInput
    }

    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            where?: LikeWhereInput
        }

    /**
     * Count Type PostCountOutputType
     */

    export type PostCountOutputType = {
        comments: number
        likes: number
        postTags: number
    }

    export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        comments?: boolean | PostCountOutputTypeCountCommentsArgs
        likes?: boolean | PostCountOutputTypeCountLikesArgs
        postTags?: boolean | PostCountOutputTypeCountPostTagsArgs
    }

    // Custom InputTypes
    /**
     * PostCountOutputType without action
     */
    export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the PostCountOutputType
         */
        select?: PostCountOutputTypeSelect<ExtArgs> | null
    }

    /**
     * PostCountOutputType without action
     */
    export type PostCountOutputTypeCountCommentsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: CommentWhereInput
    }

    /**
     * PostCountOutputType without action
     */
    export type PostCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            where?: LikeWhereInput
        }

    /**
     * PostCountOutputType without action
     */
    export type PostCountOutputTypeCountPostTagsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: PostTagWhereInput
    }

    /**
     * Count Type CategoryCountOutputType
     */

    export type CategoryCountOutputType = {
        posts: number
    }

    export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        posts?: boolean | CategoryCountOutputTypeCountPostsArgs
    }

    // Custom InputTypes
    /**
     * CategoryCountOutputType without action
     */
    export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            /**
             * Select specific fields to fetch from the CategoryCountOutputType
             */
            select?: CategoryCountOutputTypeSelect<ExtArgs> | null
        }

    /**
     * CategoryCountOutputType without action
     */
    export type CategoryCountOutputTypeCountPostsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: PostWhereInput
    }

    /**
     * Count Type TagCountOutputType
     */

    export type TagCountOutputType = {
        posts: number
    }

    export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        posts?: boolean | TagCountOutputTypeCountPostsArgs
    }

    // Custom InputTypes
    /**
     * TagCountOutputType without action
     */
    export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the TagCountOutputType
         */
        select?: TagCountOutputTypeSelect<ExtArgs> | null
    }

    /**
     * TagCountOutputType without action
     */
    export type TagCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: PostTagWhereInput
    }

    /**
     * Models
     */

    /**
     * Model User
     */

    export type AggregateUser = {
        _count: UserCountAggregateOutputType | null
        _avg: UserAvgAggregateOutputType | null
        _sum: UserSumAggregateOutputType | null
        _min: UserMinAggregateOutputType | null
        _max: UserMaxAggregateOutputType | null
    }

    export type UserAvgAggregateOutputType = {
        id: number | null
    }

    export type UserSumAggregateOutputType = {
        id: number | null
    }

    export type UserMinAggregateOutputType = {
        id: number | null
        email: string | null
        firstname: string | null
        lastname: string | null
        password: string | null
        role: $Enums.Role | null
        createdAt: Date | null
        updatedAt: Date | null
    }

    export type UserMaxAggregateOutputType = {
        id: number | null
        email: string | null
        firstname: string | null
        lastname: string | null
        password: string | null
        role: $Enums.Role | null
        createdAt: Date | null
        updatedAt: Date | null
    }

    export type UserCountAggregateOutputType = {
        id: number
        email: number
        firstname: number
        lastname: number
        password: number
        role: number
        createdAt: number
        updatedAt: number
        _all: number
    }

    export type UserAvgAggregateInputType = {
        id?: true
    }

    export type UserSumAggregateInputType = {
        id?: true
    }

    export type UserMinAggregateInputType = {
        id?: true
        email?: true
        firstname?: true
        lastname?: true
        password?: true
        role?: true
        createdAt?: true
        updatedAt?: true
    }

    export type UserMaxAggregateInputType = {
        id?: true
        email?: true
        firstname?: true
        lastname?: true
        password?: true
        role?: true
        createdAt?: true
        updatedAt?: true
    }

    export type UserCountAggregateInputType = {
        id?: true
        email?: true
        firstname?: true
        lastname?: true
        password?: true
        role?: true
        createdAt?: true
        updatedAt?: true
        _all?: true
    }

    export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which User to aggregate.
         */
        where?: UserWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: UserWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Users
         **/
        _count?: true | UserCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: UserAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: UserSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: UserMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: UserMaxAggregateInputType
    }

    export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateUser[P]>
            : GetScalarType<T[P], AggregateUser[P]>
    }

    export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: UserWhereInput
        orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
        by: UserScalarFieldEnum[] | UserScalarFieldEnum
        having?: UserScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: UserCountAggregateInputType | true
        _avg?: UserAvgAggregateInputType
        _sum?: UserSumAggregateInputType
        _min?: UserMinAggregateInputType
        _max?: UserMaxAggregateInputType
    }

    export type UserGroupByOutputType = {
        id: number
        email: string
        firstname: string
        lastname: string
        password: string
        role: $Enums.Role
        createdAt: Date
        updatedAt: Date
        _count: UserCountAggregateOutputType | null
        _avg: UserAvgAggregateOutputType | null
        _sum: UserSumAggregateOutputType | null
        _min: UserMinAggregateOutputType | null
        _max: UserMaxAggregateOutputType | null
    }

    type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<UserGroupByOutputType, T['by']> & {
                [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], UserGroupByOutputType[P]>
                    : GetScalarType<T[P], UserGroupByOutputType[P]>
            }
        >
    >

    export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
        {
            id?: boolean
            email?: boolean
            firstname?: boolean
            lastname?: boolean
            password?: boolean
            role?: boolean
            createdAt?: boolean
            updatedAt?: boolean
            posts?: boolean | User$postsArgs<ExtArgs>
            comments?: boolean | User$commentsArgs<ExtArgs>
            likes?: boolean | User$likesArgs<ExtArgs>
            _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
        },
        ExtArgs['result']['user']
    >

    export type UserSelectScalar = {
        id?: boolean
        email?: boolean
        firstname?: boolean
        lastname?: boolean
        password?: boolean
        role?: boolean
        createdAt?: boolean
        updatedAt?: boolean
    }

    export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
        'id' | 'email' | 'firstname' | 'lastname' | 'password' | 'role' | 'createdAt' | 'updatedAt',
        ExtArgs['result']['user']
    >
    export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        posts?: boolean | User$postsArgs<ExtArgs>
        comments?: boolean | User$commentsArgs<ExtArgs>
        likes?: boolean | User$likesArgs<ExtArgs>
        _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
    }

    export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: 'User'
        objects: {
            posts: Prisma.$PostPayload<ExtArgs>[]
            comments: Prisma.$CommentPayload<ExtArgs>[]
            likes: Prisma.$LikePayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<
            {
                id: number
                email: string
                firstname: string
                lastname: string
                password: string
                role: $Enums.Role
                createdAt: Date
                updatedAt: Date
            },
            ExtArgs['result']['user']
        >
        composites: {}
    }

    type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<
        Prisma.$UserPayload,
        S
    >

    type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
        UserFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: UserCountAggregateInputType | true
    }

    export interface UserDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User']; meta: { name: 'User' } }
        /**
         * Find zero or one User that matches the filter.
         * @param {UserFindUniqueArgs} args - Arguments to find a User
         * @example
         * // Get one User
         * const user = await prisma.user.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends UserFindUniqueArgs>(
            args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one User that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
         * @example
         * // Get one User
         * const user = await prisma.user.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
            args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first User that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserFindFirstArgs} args - Arguments to find a User
         * @example
         * // Get one User
         * const user = await prisma.user.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends UserFindFirstArgs>(
            args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first User that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
         * @example
         * // Get one User
         * const user = await prisma.user.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
            args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Users that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Users
         * const users = await prisma.user.findMany()
         *
         * // Get first 10 Users
         * const users = await prisma.user.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
         *
         */
        findMany<T extends UserFindManyArgs>(
            args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

        /**
         * Create a User.
         * @param {UserCreateArgs} args - Arguments to create a User.
         * @example
         * // Create one User
         * const User = await prisma.user.create({
         *   data: {
         *     // ... data to create a User
         *   }
         * })
         *
         */
        create<T extends UserCreateArgs>(
            args: SelectSubset<T, UserCreateArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Users.
         * @param {UserCreateManyArgs} args - Arguments to create many Users.
         * @example
         * // Create many Users
         * const user = await prisma.user.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends UserCreateManyArgs>(
            args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Delete a User.
         * @param {UserDeleteArgs} args - Arguments to delete one User.
         * @example
         * // Delete one User
         * const User = await prisma.user.delete({
         *   where: {
         *     // ... filter to delete one User
         *   }
         * })
         *
         */
        delete<T extends UserDeleteArgs>(
            args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one User.
         * @param {UserUpdateArgs} args - Arguments to update one User.
         * @example
         * // Update one User
         * const user = await prisma.user.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends UserUpdateArgs>(
            args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Users.
         * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
         * @example
         * // Delete a few Users
         * const { count } = await prisma.user.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends UserDeleteManyArgs>(
            args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Users.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Users
         * const user = await prisma.user.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends UserUpdateManyArgs>(
            args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create or update one User.
         * @param {UserUpsertArgs} args - Arguments to update or create a User.
         * @example
         * // Update or create a User
         * const user = await prisma.user.upsert({
         *   create: {
         *     // ... data to create a User
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the User we want to update
         *   }
         * })
         */
        upsert<T extends UserUpsertArgs>(
            args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Users.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserCountArgs} args - Arguments to filter Users to count.
         * @example
         * // Count the number of Users
         * const count = await prisma.user.count({
         *   where: {
         *     // ... the filter for the Users we want to count
         *   }
         * })
         **/
        count<T extends UserCountArgs>(
            args?: Subset<T, UserCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], UserCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a User.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends UserAggregateArgs>(
            args: Subset<T, UserAggregateArgs>
        ): Prisma.PrismaPromise<GetUserAggregateType<T>>

        /**
         * Group by User.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends UserGroupByArgs,
            HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: UserGroupByArgs['orderBy'] }
                : { orderBy?: UserGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
                    }[HavingFields]
                  : 'take' extends Keys<T>
                    ? 'orderBy' extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : 'skip' extends Keys<T>
                      ? 'orderBy' extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the User model
         */
        readonly fields: UserFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for User.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__UserClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        posts<T extends User$postsArgs<ExtArgs> = {}>(
            args?: Subset<T, User$postsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
        >
        comments<T extends User$commentsArgs<ExtArgs> = {}>(
            args?: Subset<T, User$commentsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
        >
        likes<T extends User$likesArgs<ExtArgs> = {}>(
            args?: Subset<T, User$likesArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }

    /**
     * Fields of the User model
     */
    interface UserFieldRefs {
        readonly id: FieldRef<'User', 'Int'>
        readonly email: FieldRef<'User', 'String'>
        readonly firstname: FieldRef<'User', 'String'>
        readonly lastname: FieldRef<'User', 'String'>
        readonly password: FieldRef<'User', 'String'>
        readonly role: FieldRef<'User', 'Role'>
        readonly createdAt: FieldRef<'User', 'DateTime'>
        readonly updatedAt: FieldRef<'User', 'DateTime'>
    }

    // Custom InputTypes
    /**
     * User findUnique
     */
    export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * Filter, which User to fetch.
         */
        where: UserWhereUniqueInput
    }

    /**
     * User findUniqueOrThrow
     */
    export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * Filter, which User to fetch.
         */
        where: UserWhereUniqueInput
    }

    /**
     * User findFirst
     */
    export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * Filter, which User to fetch.
         */
        where?: UserWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Users.
         */
        cursor?: UserWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Users.
         */
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    }

    /**
     * User findFirstOrThrow
     */
    export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * Filter, which User to fetch.
         */
        where?: UserWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Users.
         */
        cursor?: UserWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Users.
         */
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    }

    /**
     * User findMany
     */
    export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * Filter, which Users to fetch.
         */
        where?: UserWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Users.
         */
        cursor?: UserWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    }

    /**
     * User create
     */
    export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * The data needed to create a User.
         */
        data: XOR<UserCreateInput, UserUncheckedCreateInput>
    }

    /**
     * User createMany
     */
    export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Users.
         */
        data: UserCreateManyInput | UserCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * User update
     */
    export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * The data needed to update a User.
         */
        data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
        /**
         * Choose, which User to update.
         */
        where: UserWhereUniqueInput
    }

    /**
     * User updateMany
     */
    export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Users.
         */
        data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
        /**
         * Filter which Users to update
         */
        where?: UserWhereInput
        /**
         * Limit how many Users to update.
         */
        limit?: number
    }

    /**
     * User upsert
     */
    export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * The filter to search for the User to update in case it exists.
         */
        where: UserWhereUniqueInput
        /**
         * In case the User found by the `where` argument doesn't exist, create a new User with this data.
         */
        create: XOR<UserCreateInput, UserUncheckedCreateInput>
        /**
         * In case the User was found with the provided `where` argument, update it with this data.
         */
        update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    }

    /**
     * User delete
     */
    export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
        /**
         * Filter which User to delete.
         */
        where: UserWhereUniqueInput
    }

    /**
     * User deleteMany
     */
    export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Users to delete
         */
        where?: UserWhereInput
        /**
         * Limit how many Users to delete.
         */
        limit?: number
    }

    /**
     * User.posts
     */
    export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Post
         */
        select?: PostSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Post
         */
        omit?: PostOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostInclude<ExtArgs> | null
        where?: PostWhereInput
        orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
        cursor?: PostWhereUniqueInput
        take?: number
        skip?: number
        distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
    }

    /**
     * User.comments
     */
    export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Comment
         */
        select?: CommentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Comment
         */
        omit?: CommentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CommentInclude<ExtArgs> | null
        where?: CommentWhereInput
        orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
        cursor?: CommentWhereUniqueInput
        take?: number
        skip?: number
        distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
    }

    /**
     * User.likes
     */
    export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Like
         */
        select?: LikeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Like
         */
        omit?: LikeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LikeInclude<ExtArgs> | null
        where?: LikeWhereInput
        orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
        cursor?: LikeWhereUniqueInput
        take?: number
        skip?: number
        distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
    }

    /**
     * User without action
     */
    export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null
    }

    /**
     * Model Post
     */

    export type AggregatePost = {
        _count: PostCountAggregateOutputType | null
        _avg: PostAvgAggregateOutputType | null
        _sum: PostSumAggregateOutputType | null
        _min: PostMinAggregateOutputType | null
        _max: PostMaxAggregateOutputType | null
    }

    export type PostAvgAggregateOutputType = {
        id: number | null
        views: number | null
        userId: number | null
        categoryId: number | null
    }

    export type PostSumAggregateOutputType = {
        id: number | null
        views: number | null
        userId: number | null
        categoryId: number | null
    }

    export type PostMinAggregateOutputType = {
        id: number | null
        title: string | null
        content: string | null
        description: string | null
        imageUrl: string | null
        status: $Enums.PostStatus | null
        views: number | null
        userId: number | null
        categoryId: number | null
        createdAt: Date | null
        updatedAt: Date | null
    }

    export type PostMaxAggregateOutputType = {
        id: number | null
        title: string | null
        content: string | null
        description: string | null
        imageUrl: string | null
        status: $Enums.PostStatus | null
        views: number | null
        userId: number | null
        categoryId: number | null
        createdAt: Date | null
        updatedAt: Date | null
    }

    export type PostCountAggregateOutputType = {
        id: number
        title: number
        content: number
        description: number
        imageUrl: number
        status: number
        views: number
        userId: number
        categoryId: number
        createdAt: number
        updatedAt: number
        _all: number
    }

    export type PostAvgAggregateInputType = {
        id?: true
        views?: true
        userId?: true
        categoryId?: true
    }

    export type PostSumAggregateInputType = {
        id?: true
        views?: true
        userId?: true
        categoryId?: true
    }

    export type PostMinAggregateInputType = {
        id?: true
        title?: true
        content?: true
        description?: true
        imageUrl?: true
        status?: true
        views?: true
        userId?: true
        categoryId?: true
        createdAt?: true
        updatedAt?: true
    }

    export type PostMaxAggregateInputType = {
        id?: true
        title?: true
        content?: true
        description?: true
        imageUrl?: true
        status?: true
        views?: true
        userId?: true
        categoryId?: true
        createdAt?: true
        updatedAt?: true
    }

    export type PostCountAggregateInputType = {
        id?: true
        title?: true
        content?: true
        description?: true
        imageUrl?: true
        status?: true
        views?: true
        userId?: true
        categoryId?: true
        createdAt?: true
        updatedAt?: true
        _all?: true
    }

    export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Post to aggregate.
         */
        where?: PostWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Posts to fetch.
         */
        orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: PostWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Posts from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Posts.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Posts
         **/
        _count?: true | PostCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: PostAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: PostSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: PostMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: PostMaxAggregateInputType
    }

    export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregatePost[P]>
            : GetScalarType<T[P], AggregatePost[P]>
    }

    export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: PostWhereInput
        orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
        by: PostScalarFieldEnum[] | PostScalarFieldEnum
        having?: PostScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: PostCountAggregateInputType | true
        _avg?: PostAvgAggregateInputType
        _sum?: PostSumAggregateInputType
        _min?: PostMinAggregateInputType
        _max?: PostMaxAggregateInputType
    }

    export type PostGroupByOutputType = {
        id: number
        title: string
        content: string
        description: string | null
        imageUrl: string | null
        status: $Enums.PostStatus
        views: number
        userId: number
        categoryId: number | null
        createdAt: Date
        updatedAt: Date
        _count: PostCountAggregateOutputType | null
        _avg: PostAvgAggregateOutputType | null
        _sum: PostSumAggregateOutputType | null
        _min: PostMinAggregateOutputType | null
        _max: PostMaxAggregateOutputType | null
    }

    type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<PostGroupByOutputType, T['by']> & {
                [P in keyof T & keyof PostGroupByOutputType]: P extends '_count'
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], PostGroupByOutputType[P]>
                    : GetScalarType<T[P], PostGroupByOutputType[P]>
            }
        >
    >

    export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
        {
            id?: boolean
            title?: boolean
            content?: boolean
            description?: boolean
            imageUrl?: boolean
            status?: boolean
            views?: boolean
            userId?: boolean
            categoryId?: boolean
            createdAt?: boolean
            updatedAt?: boolean
            user?: boolean | UserDefaultArgs<ExtArgs>
            comments?: boolean | Post$commentsArgs<ExtArgs>
            category?: boolean | Post$categoryArgs<ExtArgs>
            likes?: boolean | Post$likesArgs<ExtArgs>
            postTags?: boolean | Post$postTagsArgs<ExtArgs>
            _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
        },
        ExtArgs['result']['post']
    >

    export type PostSelectScalar = {
        id?: boolean
        title?: boolean
        content?: boolean
        description?: boolean
        imageUrl?: boolean
        status?: boolean
        views?: boolean
        userId?: boolean
        categoryId?: boolean
        createdAt?: boolean
        updatedAt?: boolean
    }

    export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
        | 'id'
        | 'title'
        | 'content'
        | 'description'
        | 'imageUrl'
        | 'status'
        | 'views'
        | 'userId'
        | 'categoryId'
        | 'createdAt'
        | 'updatedAt',
        ExtArgs['result']['post']
    >
    export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        user?: boolean | UserDefaultArgs<ExtArgs>
        comments?: boolean | Post$commentsArgs<ExtArgs>
        category?: boolean | Post$categoryArgs<ExtArgs>
        likes?: boolean | Post$likesArgs<ExtArgs>
        postTags?: boolean | Post$postTagsArgs<ExtArgs>
        _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
    }

    export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: 'Post'
        objects: {
            user: Prisma.$UserPayload<ExtArgs>
            comments: Prisma.$CommentPayload<ExtArgs>[]
            category: Prisma.$CategoryPayload<ExtArgs> | null
            likes: Prisma.$LikePayload<ExtArgs>[]
            postTags: Prisma.$PostTagPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<
            {
                id: number
                title: string
                content: string
                description: string | null
                imageUrl: string | null
                status: $Enums.PostStatus
                views: number
                userId: number
                categoryId: number | null
                createdAt: Date
                updatedAt: Date
            },
            ExtArgs['result']['post']
        >
        composites: {}
    }

    type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<
        Prisma.$PostPayload,
        S
    >

    type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
        PostFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: PostCountAggregateInputType | true
    }

    export interface PostDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post']; meta: { name: 'Post' } }
        /**
         * Find zero or one Post that matches the filter.
         * @param {PostFindUniqueArgs} args - Arguments to find a Post
         * @example
         * // Get one Post
         * const post = await prisma.post.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends PostFindUniqueArgs>(
            args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
        ): Prisma__PostClient<
            $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one Post that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
         * @example
         * // Get one Post
         * const post = await prisma.post.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(
            args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__PostClient<
            $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Post that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PostFindFirstArgs} args - Arguments to find a Post
         * @example
         * // Get one Post
         * const post = await prisma.post.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends PostFindFirstArgs>(
            args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
        ): Prisma__PostClient<
            $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Post that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
         * @example
         * // Get one Post
         * const post = await prisma.post.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(
            args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__PostClient<
            $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Posts that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Posts
         * const posts = await prisma.post.findMany()
         *
         * // Get first 10 Posts
         * const posts = await prisma.post.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
         *
         */
        findMany<T extends PostFindManyArgs>(
            args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

        /**
         * Create a Post.
         * @param {PostCreateArgs} args - Arguments to create a Post.
         * @example
         * // Create one Post
         * const Post = await prisma.post.create({
         *   data: {
         *     // ... data to create a Post
         *   }
         * })
         *
         */
        create<T extends PostCreateArgs>(
            args: SelectSubset<T, PostCreateArgs<ExtArgs>>
        ): Prisma__PostClient<
            $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Posts.
         * @param {PostCreateManyArgs} args - Arguments to create many Posts.
         * @example
         * // Create many Posts
         * const post = await prisma.post.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends PostCreateManyArgs>(
            args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Delete a Post.
         * @param {PostDeleteArgs} args - Arguments to delete one Post.
         * @example
         * // Delete one Post
         * const Post = await prisma.post.delete({
         *   where: {
         *     // ... filter to delete one Post
         *   }
         * })
         *
         */
        delete<T extends PostDeleteArgs>(
            args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
        ): Prisma__PostClient<
            $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one Post.
         * @param {PostUpdateArgs} args - Arguments to update one Post.
         * @example
         * // Update one Post
         * const post = await prisma.post.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends PostUpdateArgs>(
            args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
        ): Prisma__PostClient<
            $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Posts.
         * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
         * @example
         * // Delete a few Posts
         * const { count } = await prisma.post.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends PostDeleteManyArgs>(
            args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Posts.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Posts
         * const post = await prisma.post.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends PostUpdateManyArgs>(
            args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create or update one Post.
         * @param {PostUpsertArgs} args - Arguments to update or create a Post.
         * @example
         * // Update or create a Post
         * const post = await prisma.post.upsert({
         *   create: {
         *     // ... data to create a Post
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Post we want to update
         *   }
         * })
         */
        upsert<T extends PostUpsertArgs>(
            args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
        ): Prisma__PostClient<
            $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Posts.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PostCountArgs} args - Arguments to filter Posts to count.
         * @example
         * // Count the number of Posts
         * const count = await prisma.post.count({
         *   where: {
         *     // ... the filter for the Posts we want to count
         *   }
         * })
         **/
        count<T extends PostCountArgs>(
            args?: Subset<T, PostCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], PostCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Post.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends PostAggregateArgs>(
            args: Subset<T, PostAggregateArgs>
        ): Prisma.PrismaPromise<GetPostAggregateType<T>>

        /**
         * Group by Post.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PostGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends PostGroupByArgs,
            HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: PostGroupByArgs['orderBy'] }
                : { orderBy?: PostGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
                    }[HavingFields]
                  : 'take' extends Keys<T>
                    ? 'orderBy' extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : 'skip' extends Keys<T>
                      ? 'orderBy' extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the Post model
         */
        readonly fields: PostFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for Post.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__PostClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        user<T extends UserDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, UserDefaultArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >
        comments<T extends Post$commentsArgs<ExtArgs> = {}>(
            args?: Subset<T, Post$commentsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
        >
        category<T extends Post$categoryArgs<ExtArgs> = {}>(
            args?: Subset<T, Post$categoryArgs<ExtArgs>>
        ): Prisma__CategoryClient<
            $Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >
        likes<T extends Post$likesArgs<ExtArgs> = {}>(
            args?: Subset<T, Post$likesArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
        >
        postTags<T extends Post$postTagsArgs<ExtArgs> = {}>(
            args?: Subset<T, Post$postTagsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }

    /**
     * Fields of the Post model
     */
    interface PostFieldRefs {
        readonly id: FieldRef<'Post', 'Int'>
        readonly title: FieldRef<'Post', 'String'>
        readonly content: FieldRef<'Post', 'String'>
        readonly description: FieldRef<'Post', 'String'>
        readonly imageUrl: FieldRef<'Post', 'String'>
        readonly status: FieldRef<'Post', 'PostStatus'>
        readonly views: FieldRef<'Post', 'Int'>
        readonly userId: FieldRef<'Post', 'Int'>
        readonly categoryId: FieldRef<'Post', 'Int'>
        readonly createdAt: FieldRef<'Post', 'DateTime'>
        readonly updatedAt: FieldRef<'Post', 'DateTime'>
    }

    // Custom InputTypes
    /**
     * Post findUnique
     */
    export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Post
         */
        select?: PostSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Post
         */
        omit?: PostOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostInclude<ExtArgs> | null
        /**
         * Filter, which Post to fetch.
         */
        where: PostWhereUniqueInput
    }

    /**
     * Post findUniqueOrThrow
     */
    export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Post
         */
        select?: PostSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Post
         */
        omit?: PostOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostInclude<ExtArgs> | null
        /**
         * Filter, which Post to fetch.
         */
        where: PostWhereUniqueInput
    }

    /**
     * Post findFirst
     */
    export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Post
         */
        select?: PostSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Post
         */
        omit?: PostOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostInclude<ExtArgs> | null
        /**
         * Filter, which Post to fetch.
         */
        where?: PostWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Posts to fetch.
         */
        orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Posts.
         */
        cursor?: PostWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Posts from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Posts.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Posts.
         */
        distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
    }

    /**
     * Post findFirstOrThrow
     */
    export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Post
         */
        select?: PostSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Post
         */
        omit?: PostOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostInclude<ExtArgs> | null
        /**
         * Filter, which Post to fetch.
         */
        where?: PostWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Posts to fetch.
         */
        orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Posts.
         */
        cursor?: PostWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Posts from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Posts.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Posts.
         */
        distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
    }

    /**
     * Post findMany
     */
    export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Post
         */
        select?: PostSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Post
         */
        omit?: PostOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostInclude<ExtArgs> | null
        /**
         * Filter, which Posts to fetch.
         */
        where?: PostWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Posts to fetch.
         */
        orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Posts.
         */
        cursor?: PostWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Posts from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Posts.
         */
        skip?: number
        distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
    }

    /**
     * Post create
     */
    export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Post
         */
        select?: PostSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Post
         */
        omit?: PostOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostInclude<ExtArgs> | null
        /**
         * The data needed to create a Post.
         */
        data: XOR<PostCreateInput, PostUncheckedCreateInput>
    }

    /**
     * Post createMany
     */
    export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Posts.
         */
        data: PostCreateManyInput | PostCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Post update
     */
    export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Post
         */
        select?: PostSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Post
         */
        omit?: PostOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostInclude<ExtArgs> | null
        /**
         * The data needed to update a Post.
         */
        data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
        /**
         * Choose, which Post to update.
         */
        where: PostWhereUniqueInput
    }

    /**
     * Post updateMany
     */
    export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Posts.
         */
        data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
        /**
         * Filter which Posts to update
         */
        where?: PostWhereInput
        /**
         * Limit how many Posts to update.
         */
        limit?: number
    }

    /**
     * Post upsert
     */
    export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Post
         */
        select?: PostSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Post
         */
        omit?: PostOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostInclude<ExtArgs> | null
        /**
         * The filter to search for the Post to update in case it exists.
         */
        where: PostWhereUniqueInput
        /**
         * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
         */
        create: XOR<PostCreateInput, PostUncheckedCreateInput>
        /**
         * In case the Post was found with the provided `where` argument, update it with this data.
         */
        update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    }

    /**
     * Post delete
     */
    export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Post
         */
        select?: PostSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Post
         */
        omit?: PostOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostInclude<ExtArgs> | null
        /**
         * Filter which Post to delete.
         */
        where: PostWhereUniqueInput
    }

    /**
     * Post deleteMany
     */
    export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Posts to delete
         */
        where?: PostWhereInput
        /**
         * Limit how many Posts to delete.
         */
        limit?: number
    }

    /**
     * Post.comments
     */
    export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Comment
         */
        select?: CommentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Comment
         */
        omit?: CommentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CommentInclude<ExtArgs> | null
        where?: CommentWhereInput
        orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
        cursor?: CommentWhereUniqueInput
        take?: number
        skip?: number
        distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
    }

    /**
     * Post.category
     */
    export type Post$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Category
         */
        select?: CategorySelect<ExtArgs> | null
        /**
         * Omit specific fields from the Category
         */
        omit?: CategoryOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CategoryInclude<ExtArgs> | null
        where?: CategoryWhereInput
    }

    /**
     * Post.likes
     */
    export type Post$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Like
         */
        select?: LikeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Like
         */
        omit?: LikeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LikeInclude<ExtArgs> | null
        where?: LikeWhereInput
        orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
        cursor?: LikeWhereUniqueInput
        take?: number
        skip?: number
        distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
    }

    /**
     * Post.postTags
     */
    export type Post$postTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the PostTag
         */
        select?: PostTagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the PostTag
         */
        omit?: PostTagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostTagInclude<ExtArgs> | null
        where?: PostTagWhereInput
        orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
        cursor?: PostTagWhereUniqueInput
        take?: number
        skip?: number
        distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
    }

    /**
     * Post without action
     */
    export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Post
         */
        select?: PostSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Post
         */
        omit?: PostOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostInclude<ExtArgs> | null
    }

    /**
     * Model Comment
     */

    export type AggregateComment = {
        _count: CommentCountAggregateOutputType | null
        _avg: CommentAvgAggregateOutputType | null
        _sum: CommentSumAggregateOutputType | null
        _min: CommentMinAggregateOutputType | null
        _max: CommentMaxAggregateOutputType | null
    }

    export type CommentAvgAggregateOutputType = {
        id: number | null
        userId: number | null
        postId: number | null
    }

    export type CommentSumAggregateOutputType = {
        id: number | null
        userId: number | null
        postId: number | null
    }

    export type CommentMinAggregateOutputType = {
        id: number | null
        content: string | null
        userId: number | null
        postId: number | null
        createdAt: Date | null
        updatedAt: Date | null
    }

    export type CommentMaxAggregateOutputType = {
        id: number | null
        content: string | null
        userId: number | null
        postId: number | null
        createdAt: Date | null
        updatedAt: Date | null
    }

    export type CommentCountAggregateOutputType = {
        id: number
        content: number
        userId: number
        postId: number
        createdAt: number
        updatedAt: number
        _all: number
    }

    export type CommentAvgAggregateInputType = {
        id?: true
        userId?: true
        postId?: true
    }

    export type CommentSumAggregateInputType = {
        id?: true
        userId?: true
        postId?: true
    }

    export type CommentMinAggregateInputType = {
        id?: true
        content?: true
        userId?: true
        postId?: true
        createdAt?: true
        updatedAt?: true
    }

    export type CommentMaxAggregateInputType = {
        id?: true
        content?: true
        userId?: true
        postId?: true
        createdAt?: true
        updatedAt?: true
    }

    export type CommentCountAggregateInputType = {
        id?: true
        content?: true
        userId?: true
        postId?: true
        createdAt?: true
        updatedAt?: true
        _all?: true
    }

    export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Comment to aggregate.
         */
        where?: CommentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Comments to fetch.
         */
        orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: CommentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Comments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Comments.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Comments
         **/
        _count?: true | CommentCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: CommentAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: CommentSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: CommentMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: CommentMaxAggregateInputType
    }

    export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateComment[P]>
            : GetScalarType<T[P], AggregateComment[P]>
    }

    export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: CommentWhereInput
        orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
        by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
        having?: CommentScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: CommentCountAggregateInputType | true
        _avg?: CommentAvgAggregateInputType
        _sum?: CommentSumAggregateInputType
        _min?: CommentMinAggregateInputType
        _max?: CommentMaxAggregateInputType
    }

    export type CommentGroupByOutputType = {
        id: number
        content: string
        userId: number
        postId: number
        createdAt: Date
        updatedAt: Date
        _count: CommentCountAggregateOutputType | null
        _avg: CommentAvgAggregateOutputType | null
        _sum: CommentSumAggregateOutputType | null
        _min: CommentMinAggregateOutputType | null
        _max: CommentMaxAggregateOutputType | null
    }

    type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<CommentGroupByOutputType, T['by']> & {
                [P in keyof T & keyof CommentGroupByOutputType]: P extends '_count'
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], CommentGroupByOutputType[P]>
                    : GetScalarType<T[P], CommentGroupByOutputType[P]>
            }
        >
    >

    export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                id?: boolean
                content?: boolean
                userId?: boolean
                postId?: boolean
                createdAt?: boolean
                updatedAt?: boolean
                user?: boolean | UserDefaultArgs<ExtArgs>
                post?: boolean | PostDefaultArgs<ExtArgs>
            },
            ExtArgs['result']['comment']
        >

    export type CommentSelectScalar = {
        id?: boolean
        content?: boolean
        userId?: boolean
        postId?: boolean
        createdAt?: boolean
        updatedAt?: boolean
    }

    export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
        'id' | 'content' | 'userId' | 'postId' | 'createdAt' | 'updatedAt',
        ExtArgs['result']['comment']
    >
    export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        user?: boolean | UserDefaultArgs<ExtArgs>
        post?: boolean | PostDefaultArgs<ExtArgs>
    }

    export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: 'Comment'
        objects: {
            user: Prisma.$UserPayload<ExtArgs>
            post: Prisma.$PostPayload<ExtArgs>
        }
        scalars: $Extensions.GetPayloadResult<
            {
                id: number
                content: string
                userId: number
                postId: number
                createdAt: Date
                updatedAt: Date
            },
            ExtArgs['result']['comment']
        >
        composites: {}
    }

    type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<
        Prisma.$CommentPayload,
        S
    >

    type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
        CommentFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: CommentCountAggregateInputType | true
    }

    export interface CommentDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment']; meta: { name: 'Comment' } }
        /**
         * Find zero or one Comment that matches the filter.
         * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
         * @example
         * // Get one Comment
         * const comment = await prisma.comment.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends CommentFindUniqueArgs>(
            args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>
        ): Prisma__CommentClient<
            $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
         * @example
         * // Get one Comment
         * const comment = await prisma.comment.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(
            args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__CommentClient<
            $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Comment that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CommentFindFirstArgs} args - Arguments to find a Comment
         * @example
         * // Get one Comment
         * const comment = await prisma.comment.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends CommentFindFirstArgs>(
            args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>
        ): Prisma__CommentClient<
            $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Comment that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
         * @example
         * // Get one Comment
         * const comment = await prisma.comment.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(
            args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__CommentClient<
            $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Comments that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Comments
         * const comments = await prisma.comment.findMany()
         *
         * // Get first 10 Comments
         * const comments = await prisma.comment.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
         *
         */
        findMany<T extends CommentFindManyArgs>(
            args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

        /**
         * Create a Comment.
         * @param {CommentCreateArgs} args - Arguments to create a Comment.
         * @example
         * // Create one Comment
         * const Comment = await prisma.comment.create({
         *   data: {
         *     // ... data to create a Comment
         *   }
         * })
         *
         */
        create<T extends CommentCreateArgs>(
            args: SelectSubset<T, CommentCreateArgs<ExtArgs>>
        ): Prisma__CommentClient<
            $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Comments.
         * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
         * @example
         * // Create many Comments
         * const comment = await prisma.comment.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends CommentCreateManyArgs>(
            args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Delete a Comment.
         * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
         * @example
         * // Delete one Comment
         * const Comment = await prisma.comment.delete({
         *   where: {
         *     // ... filter to delete one Comment
         *   }
         * })
         *
         */
        delete<T extends CommentDeleteArgs>(
            args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>
        ): Prisma__CommentClient<
            $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one Comment.
         * @param {CommentUpdateArgs} args - Arguments to update one Comment.
         * @example
         * // Update one Comment
         * const comment = await prisma.comment.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends CommentUpdateArgs>(
            args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>
        ): Prisma__CommentClient<
            $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Comments.
         * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
         * @example
         * // Delete a few Comments
         * const { count } = await prisma.comment.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends CommentDeleteManyArgs>(
            args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Comments.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Comments
         * const comment = await prisma.comment.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends CommentUpdateManyArgs>(
            args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create or update one Comment.
         * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
         * @example
         * // Update or create a Comment
         * const comment = await prisma.comment.upsert({
         *   create: {
         *     // ... data to create a Comment
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Comment we want to update
         *   }
         * })
         */
        upsert<T extends CommentUpsertArgs>(
            args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>
        ): Prisma__CommentClient<
            $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Comments.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CommentCountArgs} args - Arguments to filter Comments to count.
         * @example
         * // Count the number of Comments
         * const count = await prisma.comment.count({
         *   where: {
         *     // ... the filter for the Comments we want to count
         *   }
         * })
         **/
        count<T extends CommentCountArgs>(
            args?: Subset<T, CommentCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], CommentCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Comment.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends CommentAggregateArgs>(
            args: Subset<T, CommentAggregateArgs>
        ): Prisma.PrismaPromise<GetCommentAggregateType<T>>

        /**
         * Group by Comment.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CommentGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends CommentGroupByArgs,
            HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: CommentGroupByArgs['orderBy'] }
                : { orderBy?: CommentGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
                    }[HavingFields]
                  : 'take' extends Keys<T>
                    ? 'orderBy' extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : 'skip' extends Keys<T>
                      ? 'orderBy' extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the Comment model
         */
        readonly fields: CommentFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for Comment.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__CommentClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        user<T extends UserDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, UserDefaultArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >
        post<T extends PostDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, PostDefaultArgs<ExtArgs>>
        ): Prisma__PostClient<
            $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }

    /**
     * Fields of the Comment model
     */
    interface CommentFieldRefs {
        readonly id: FieldRef<'Comment', 'Int'>
        readonly content: FieldRef<'Comment', 'String'>
        readonly userId: FieldRef<'Comment', 'Int'>
        readonly postId: FieldRef<'Comment', 'Int'>
        readonly createdAt: FieldRef<'Comment', 'DateTime'>
        readonly updatedAt: FieldRef<'Comment', 'DateTime'>
    }

    // Custom InputTypes
    /**
     * Comment findUnique
     */
    export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Comment
         */
        select?: CommentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Comment
         */
        omit?: CommentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CommentInclude<ExtArgs> | null
        /**
         * Filter, which Comment to fetch.
         */
        where: CommentWhereUniqueInput
    }

    /**
     * Comment findUniqueOrThrow
     */
    export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Comment
         */
        select?: CommentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Comment
         */
        omit?: CommentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CommentInclude<ExtArgs> | null
        /**
         * Filter, which Comment to fetch.
         */
        where: CommentWhereUniqueInput
    }

    /**
     * Comment findFirst
     */
    export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Comment
         */
        select?: CommentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Comment
         */
        omit?: CommentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CommentInclude<ExtArgs> | null
        /**
         * Filter, which Comment to fetch.
         */
        where?: CommentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Comments to fetch.
         */
        orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Comments.
         */
        cursor?: CommentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Comments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Comments.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Comments.
         */
        distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
    }

    /**
     * Comment findFirstOrThrow
     */
    export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Comment
         */
        select?: CommentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Comment
         */
        omit?: CommentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CommentInclude<ExtArgs> | null
        /**
         * Filter, which Comment to fetch.
         */
        where?: CommentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Comments to fetch.
         */
        orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Comments.
         */
        cursor?: CommentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Comments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Comments.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Comments.
         */
        distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
    }

    /**
     * Comment findMany
     */
    export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Comment
         */
        select?: CommentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Comment
         */
        omit?: CommentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CommentInclude<ExtArgs> | null
        /**
         * Filter, which Comments to fetch.
         */
        where?: CommentWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Comments to fetch.
         */
        orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Comments.
         */
        cursor?: CommentWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Comments from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Comments.
         */
        skip?: number
        distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
    }

    /**
     * Comment create
     */
    export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Comment
         */
        select?: CommentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Comment
         */
        omit?: CommentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CommentInclude<ExtArgs> | null
        /**
         * The data needed to create a Comment.
         */
        data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    }

    /**
     * Comment createMany
     */
    export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Comments.
         */
        data: CommentCreateManyInput | CommentCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Comment update
     */
    export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Comment
         */
        select?: CommentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Comment
         */
        omit?: CommentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CommentInclude<ExtArgs> | null
        /**
         * The data needed to update a Comment.
         */
        data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
        /**
         * Choose, which Comment to update.
         */
        where: CommentWhereUniqueInput
    }

    /**
     * Comment updateMany
     */
    export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Comments.
         */
        data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
        /**
         * Filter which Comments to update
         */
        where?: CommentWhereInput
        /**
         * Limit how many Comments to update.
         */
        limit?: number
    }

    /**
     * Comment upsert
     */
    export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Comment
         */
        select?: CommentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Comment
         */
        omit?: CommentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CommentInclude<ExtArgs> | null
        /**
         * The filter to search for the Comment to update in case it exists.
         */
        where: CommentWhereUniqueInput
        /**
         * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
         */
        create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
        /**
         * In case the Comment was found with the provided `where` argument, update it with this data.
         */
        update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    }

    /**
     * Comment delete
     */
    export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Comment
         */
        select?: CommentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Comment
         */
        omit?: CommentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CommentInclude<ExtArgs> | null
        /**
         * Filter which Comment to delete.
         */
        where: CommentWhereUniqueInput
    }

    /**
     * Comment deleteMany
     */
    export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Comments to delete
         */
        where?: CommentWhereInput
        /**
         * Limit how many Comments to delete.
         */
        limit?: number
    }

    /**
     * Comment without action
     */
    export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Comment
         */
        select?: CommentSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Comment
         */
        omit?: CommentOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CommentInclude<ExtArgs> | null
    }

    /**
     * Model Category
     */

    export type AggregateCategory = {
        _count: CategoryCountAggregateOutputType | null
        _avg: CategoryAvgAggregateOutputType | null
        _sum: CategorySumAggregateOutputType | null
        _min: CategoryMinAggregateOutputType | null
        _max: CategoryMaxAggregateOutputType | null
    }

    export type CategoryAvgAggregateOutputType = {
        id: number | null
    }

    export type CategorySumAggregateOutputType = {
        id: number | null
    }

    export type CategoryMinAggregateOutputType = {
        id: number | null
        name: string | null
    }

    export type CategoryMaxAggregateOutputType = {
        id: number | null
        name: string | null
    }

    export type CategoryCountAggregateOutputType = {
        id: number
        name: number
        _all: number
    }

    export type CategoryAvgAggregateInputType = {
        id?: true
    }

    export type CategorySumAggregateInputType = {
        id?: true
    }

    export type CategoryMinAggregateInputType = {
        id?: true
        name?: true
    }

    export type CategoryMaxAggregateInputType = {
        id?: true
        name?: true
    }

    export type CategoryCountAggregateInputType = {
        id?: true
        name?: true
        _all?: true
    }

    export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Category to aggregate.
         */
        where?: CategoryWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Categories to fetch.
         */
        orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: CategoryWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Categories from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Categories.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Categories
         **/
        _count?: true | CategoryCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: CategoryAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: CategorySumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: CategoryMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: CategoryMaxAggregateInputType
    }

    export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateCategory[P]>
            : GetScalarType<T[P], AggregateCategory[P]>
    }

    export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: CategoryWhereInput
        orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
        by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
        having?: CategoryScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: CategoryCountAggregateInputType | true
        _avg?: CategoryAvgAggregateInputType
        _sum?: CategorySumAggregateInputType
        _min?: CategoryMinAggregateInputType
        _max?: CategoryMaxAggregateInputType
    }

    export type CategoryGroupByOutputType = {
        id: number
        name: string
        _count: CategoryCountAggregateOutputType | null
        _avg: CategoryAvgAggregateOutputType | null
        _sum: CategorySumAggregateOutputType | null
        _min: CategoryMinAggregateOutputType | null
        _max: CategoryMaxAggregateOutputType | null
    }

    type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<CategoryGroupByOutputType, T['by']> & {
                [P in keyof T & keyof CategoryGroupByOutputType]: P extends '_count'
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], CategoryGroupByOutputType[P]>
                    : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            }
        >
    >

    export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                id?: boolean
                name?: boolean
                posts?: boolean | Category$postsArgs<ExtArgs>
                _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
            },
            ExtArgs['result']['category']
        >

    export type CategorySelectScalar = {
        id?: boolean
        name?: boolean
    }

    export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
        'id' | 'name',
        ExtArgs['result']['category']
    >
    export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        posts?: boolean | Category$postsArgs<ExtArgs>
        _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
    }

    export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: 'Category'
        objects: {
            posts: Prisma.$PostPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<
            {
                id: number
                name: string
            },
            ExtArgs['result']['category']
        >
        composites: {}
    }

    type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<
        Prisma.$CategoryPayload,
        S
    >

    type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
        CategoryFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: CategoryCountAggregateInputType | true
    }

    export interface CategoryDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category']; meta: { name: 'Category' } }
        /**
         * Find zero or one Category that matches the filter.
         * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
         * @example
         * // Get one Category
         * const category = await prisma.category.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends CategoryFindUniqueArgs>(
            args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
        ): Prisma__CategoryClient<
            $Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one Category that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
         * @example
         * // Get one Category
         * const category = await prisma.category.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
            args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__CategoryClient<
            $Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Category that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CategoryFindFirstArgs} args - Arguments to find a Category
         * @example
         * // Get one Category
         * const category = await prisma.category.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends CategoryFindFirstArgs>(
            args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
        ): Prisma__CategoryClient<
            $Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Category that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
         * @example
         * // Get one Category
         * const category = await prisma.category.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
            args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__CategoryClient<
            $Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Categories that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Categories
         * const categories = await prisma.category.findMany()
         *
         * // Get first 10 Categories
         * const categories = await prisma.category.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
         *
         */
        findMany<T extends CategoryFindManyArgs>(
            args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

        /**
         * Create a Category.
         * @param {CategoryCreateArgs} args - Arguments to create a Category.
         * @example
         * // Create one Category
         * const Category = await prisma.category.create({
         *   data: {
         *     // ... data to create a Category
         *   }
         * })
         *
         */
        create<T extends CategoryCreateArgs>(
            args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
        ): Prisma__CategoryClient<
            $Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Categories.
         * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
         * @example
         * // Create many Categories
         * const category = await prisma.category.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends CategoryCreateManyArgs>(
            args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Delete a Category.
         * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
         * @example
         * // Delete one Category
         * const Category = await prisma.category.delete({
         *   where: {
         *     // ... filter to delete one Category
         *   }
         * })
         *
         */
        delete<T extends CategoryDeleteArgs>(
            args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
        ): Prisma__CategoryClient<
            $Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one Category.
         * @param {CategoryUpdateArgs} args - Arguments to update one Category.
         * @example
         * // Update one Category
         * const category = await prisma.category.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends CategoryUpdateArgs>(
            args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
        ): Prisma__CategoryClient<
            $Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Categories.
         * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
         * @example
         * // Delete a few Categories
         * const { count } = await prisma.category.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends CategoryDeleteManyArgs>(
            args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Categories.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Categories
         * const category = await prisma.category.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends CategoryUpdateManyArgs>(
            args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create or update one Category.
         * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
         * @example
         * // Update or create a Category
         * const category = await prisma.category.upsert({
         *   create: {
         *     // ... data to create a Category
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Category we want to update
         *   }
         * })
         */
        upsert<T extends CategoryUpsertArgs>(
            args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
        ): Prisma__CategoryClient<
            $Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Categories.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
         * @example
         * // Count the number of Categories
         * const count = await prisma.category.count({
         *   where: {
         *     // ... the filter for the Categories we want to count
         *   }
         * })
         **/
        count<T extends CategoryCountArgs>(
            args?: Subset<T, CategoryCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], CategoryCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Category.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends CategoryAggregateArgs>(
            args: Subset<T, CategoryAggregateArgs>
        ): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

        /**
         * Group by Category.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CategoryGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends CategoryGroupByArgs,
            HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: CategoryGroupByArgs['orderBy'] }
                : { orderBy?: CategoryGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
                    }[HavingFields]
                  : 'take' extends Keys<T>
                    ? 'orderBy' extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : 'skip' extends Keys<T>
                      ? 'orderBy' extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the Category model
         */
        readonly fields: CategoryFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for Category.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__CategoryClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        posts<T extends Category$postsArgs<ExtArgs> = {}>(
            args?: Subset<T, Category$postsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }

    /**
     * Fields of the Category model
     */
    interface CategoryFieldRefs {
        readonly id: FieldRef<'Category', 'Int'>
        readonly name: FieldRef<'Category', 'String'>
    }

    // Custom InputTypes
    /**
     * Category findUnique
     */
    export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Category
         */
        select?: CategorySelect<ExtArgs> | null
        /**
         * Omit specific fields from the Category
         */
        omit?: CategoryOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CategoryInclude<ExtArgs> | null
        /**
         * Filter, which Category to fetch.
         */
        where: CategoryWhereUniqueInput
    }

    /**
     * Category findUniqueOrThrow
     */
    export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Category
         */
        select?: CategorySelect<ExtArgs> | null
        /**
         * Omit specific fields from the Category
         */
        omit?: CategoryOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CategoryInclude<ExtArgs> | null
        /**
         * Filter, which Category to fetch.
         */
        where: CategoryWhereUniqueInput
    }

    /**
     * Category findFirst
     */
    export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Category
         */
        select?: CategorySelect<ExtArgs> | null
        /**
         * Omit specific fields from the Category
         */
        omit?: CategoryOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CategoryInclude<ExtArgs> | null
        /**
         * Filter, which Category to fetch.
         */
        where?: CategoryWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Categories to fetch.
         */
        orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Categories.
         */
        cursor?: CategoryWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Categories from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Categories.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Categories.
         */
        distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
    }

    /**
     * Category findFirstOrThrow
     */
    export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Category
         */
        select?: CategorySelect<ExtArgs> | null
        /**
         * Omit specific fields from the Category
         */
        omit?: CategoryOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CategoryInclude<ExtArgs> | null
        /**
         * Filter, which Category to fetch.
         */
        where?: CategoryWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Categories to fetch.
         */
        orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Categories.
         */
        cursor?: CategoryWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Categories from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Categories.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Categories.
         */
        distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
    }

    /**
     * Category findMany
     */
    export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Category
         */
        select?: CategorySelect<ExtArgs> | null
        /**
         * Omit specific fields from the Category
         */
        omit?: CategoryOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CategoryInclude<ExtArgs> | null
        /**
         * Filter, which Categories to fetch.
         */
        where?: CategoryWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Categories to fetch.
         */
        orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Categories.
         */
        cursor?: CategoryWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Categories from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Categories.
         */
        skip?: number
        distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
    }

    /**
     * Category create
     */
    export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Category
         */
        select?: CategorySelect<ExtArgs> | null
        /**
         * Omit specific fields from the Category
         */
        omit?: CategoryOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CategoryInclude<ExtArgs> | null
        /**
         * The data needed to create a Category.
         */
        data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    }

    /**
     * Category createMany
     */
    export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Categories.
         */
        data: CategoryCreateManyInput | CategoryCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Category update
     */
    export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Category
         */
        select?: CategorySelect<ExtArgs> | null
        /**
         * Omit specific fields from the Category
         */
        omit?: CategoryOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CategoryInclude<ExtArgs> | null
        /**
         * The data needed to update a Category.
         */
        data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
        /**
         * Choose, which Category to update.
         */
        where: CategoryWhereUniqueInput
    }

    /**
     * Category updateMany
     */
    export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Categories.
         */
        data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
        /**
         * Filter which Categories to update
         */
        where?: CategoryWhereInput
        /**
         * Limit how many Categories to update.
         */
        limit?: number
    }

    /**
     * Category upsert
     */
    export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Category
         */
        select?: CategorySelect<ExtArgs> | null
        /**
         * Omit specific fields from the Category
         */
        omit?: CategoryOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CategoryInclude<ExtArgs> | null
        /**
         * The filter to search for the Category to update in case it exists.
         */
        where: CategoryWhereUniqueInput
        /**
         * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
         */
        create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
        /**
         * In case the Category was found with the provided `where` argument, update it with this data.
         */
        update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    }

    /**
     * Category delete
     */
    export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Category
         */
        select?: CategorySelect<ExtArgs> | null
        /**
         * Omit specific fields from the Category
         */
        omit?: CategoryOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CategoryInclude<ExtArgs> | null
        /**
         * Filter which Category to delete.
         */
        where: CategoryWhereUniqueInput
    }

    /**
     * Category deleteMany
     */
    export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Categories to delete
         */
        where?: CategoryWhereInput
        /**
         * Limit how many Categories to delete.
         */
        limit?: number
    }

    /**
     * Category.posts
     */
    export type Category$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Post
         */
        select?: PostSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Post
         */
        omit?: PostOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostInclude<ExtArgs> | null
        where?: PostWhereInput
        orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
        cursor?: PostWhereUniqueInput
        take?: number
        skip?: number
        distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
    }

    /**
     * Category without action
     */
    export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Category
         */
        select?: CategorySelect<ExtArgs> | null
        /**
         * Omit specific fields from the Category
         */
        omit?: CategoryOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CategoryInclude<ExtArgs> | null
    }

    /**
     * Model Like
     */

    export type AggregateLike = {
        _count: LikeCountAggregateOutputType | null
        _avg: LikeAvgAggregateOutputType | null
        _sum: LikeSumAggregateOutputType | null
        _min: LikeMinAggregateOutputType | null
        _max: LikeMaxAggregateOutputType | null
    }

    export type LikeAvgAggregateOutputType = {
        id: number | null
        userId: number | null
        postId: number | null
    }

    export type LikeSumAggregateOutputType = {
        id: number | null
        userId: number | null
        postId: number | null
    }

    export type LikeMinAggregateOutputType = {
        id: number | null
        userId: number | null
        postId: number | null
    }

    export type LikeMaxAggregateOutputType = {
        id: number | null
        userId: number | null
        postId: number | null
    }

    export type LikeCountAggregateOutputType = {
        id: number
        userId: number
        postId: number
        _all: number
    }

    export type LikeAvgAggregateInputType = {
        id?: true
        userId?: true
        postId?: true
    }

    export type LikeSumAggregateInputType = {
        id?: true
        userId?: true
        postId?: true
    }

    export type LikeMinAggregateInputType = {
        id?: true
        userId?: true
        postId?: true
    }

    export type LikeMaxAggregateInputType = {
        id?: true
        userId?: true
        postId?: true
    }

    export type LikeCountAggregateInputType = {
        id?: true
        userId?: true
        postId?: true
        _all?: true
    }

    export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Like to aggregate.
         */
        where?: LikeWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Likes to fetch.
         */
        orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: LikeWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Likes from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Likes.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Likes
         **/
        _count?: true | LikeCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: LikeAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: LikeSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: LikeMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: LikeMaxAggregateInputType
    }

    export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateLike[P]>
            : GetScalarType<T[P], AggregateLike[P]>
    }

    export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: LikeWhereInput
        orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
        by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
        having?: LikeScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: LikeCountAggregateInputType | true
        _avg?: LikeAvgAggregateInputType
        _sum?: LikeSumAggregateInputType
        _min?: LikeMinAggregateInputType
        _max?: LikeMaxAggregateInputType
    }

    export type LikeGroupByOutputType = {
        id: number
        userId: number
        postId: number
        _count: LikeCountAggregateOutputType | null
        _avg: LikeAvgAggregateOutputType | null
        _sum: LikeSumAggregateOutputType | null
        _min: LikeMinAggregateOutputType | null
        _max: LikeMaxAggregateOutputType | null
    }

    type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<LikeGroupByOutputType, T['by']> & {
                [P in keyof T & keyof LikeGroupByOutputType]: P extends '_count'
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], LikeGroupByOutputType[P]>
                    : GetScalarType<T[P], LikeGroupByOutputType[P]>
            }
        >
    >

    export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
        {
            id?: boolean
            userId?: boolean
            postId?: boolean
            user?: boolean | UserDefaultArgs<ExtArgs>
            post?: boolean | PostDefaultArgs<ExtArgs>
        },
        ExtArgs['result']['like']
    >

    export type LikeSelectScalar = {
        id?: boolean
        userId?: boolean
        postId?: boolean
    }

    export type LikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
        'id' | 'userId' | 'postId',
        ExtArgs['result']['like']
    >
    export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        user?: boolean | UserDefaultArgs<ExtArgs>
        post?: boolean | PostDefaultArgs<ExtArgs>
    }

    export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: 'Like'
        objects: {
            user: Prisma.$UserPayload<ExtArgs>
            post: Prisma.$PostPayload<ExtArgs>
        }
        scalars: $Extensions.GetPayloadResult<
            {
                id: number
                userId: number
                postId: number
            },
            ExtArgs['result']['like']
        >
        composites: {}
    }

    type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<
        Prisma.$LikePayload,
        S
    >

    type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
        LikeFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: LikeCountAggregateInputType | true
    }

    export interface LikeDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like']; meta: { name: 'Like' } }
        /**
         * Find zero or one Like that matches the filter.
         * @param {LikeFindUniqueArgs} args - Arguments to find a Like
         * @example
         * // Get one Like
         * const like = await prisma.like.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends LikeFindUniqueArgs>(
            args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>
        ): Prisma__LikeClient<
            $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one Like that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
         * @example
         * // Get one Like
         * const like = await prisma.like.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(
            args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__LikeClient<
            $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Like that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LikeFindFirstArgs} args - Arguments to find a Like
         * @example
         * // Get one Like
         * const like = await prisma.like.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends LikeFindFirstArgs>(
            args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>
        ): Prisma__LikeClient<
            $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Like that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
         * @example
         * // Get one Like
         * const like = await prisma.like.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(
            args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__LikeClient<
            $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Likes that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Likes
         * const likes = await prisma.like.findMany()
         *
         * // Get first 10 Likes
         * const likes = await prisma.like.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
         *
         */
        findMany<T extends LikeFindManyArgs>(
            args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

        /**
         * Create a Like.
         * @param {LikeCreateArgs} args - Arguments to create a Like.
         * @example
         * // Create one Like
         * const Like = await prisma.like.create({
         *   data: {
         *     // ... data to create a Like
         *   }
         * })
         *
         */
        create<T extends LikeCreateArgs>(
            args: SelectSubset<T, LikeCreateArgs<ExtArgs>>
        ): Prisma__LikeClient<
            $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Likes.
         * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
         * @example
         * // Create many Likes
         * const like = await prisma.like.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends LikeCreateManyArgs>(
            args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Delete a Like.
         * @param {LikeDeleteArgs} args - Arguments to delete one Like.
         * @example
         * // Delete one Like
         * const Like = await prisma.like.delete({
         *   where: {
         *     // ... filter to delete one Like
         *   }
         * })
         *
         */
        delete<T extends LikeDeleteArgs>(
            args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>
        ): Prisma__LikeClient<
            $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one Like.
         * @param {LikeUpdateArgs} args - Arguments to update one Like.
         * @example
         * // Update one Like
         * const like = await prisma.like.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends LikeUpdateArgs>(
            args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>
        ): Prisma__LikeClient<
            $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Likes.
         * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
         * @example
         * // Delete a few Likes
         * const { count } = await prisma.like.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends LikeDeleteManyArgs>(
            args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Likes.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Likes
         * const like = await prisma.like.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends LikeUpdateManyArgs>(
            args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create or update one Like.
         * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
         * @example
         * // Update or create a Like
         * const like = await prisma.like.upsert({
         *   create: {
         *     // ... data to create a Like
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Like we want to update
         *   }
         * })
         */
        upsert<T extends LikeUpsertArgs>(
            args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>
        ): Prisma__LikeClient<
            $Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Likes.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LikeCountArgs} args - Arguments to filter Likes to count.
         * @example
         * // Count the number of Likes
         * const count = await prisma.like.count({
         *   where: {
         *     // ... the filter for the Likes we want to count
         *   }
         * })
         **/
        count<T extends LikeCountArgs>(
            args?: Subset<T, LikeCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], LikeCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Like.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends LikeAggregateArgs>(
            args: Subset<T, LikeAggregateArgs>
        ): Prisma.PrismaPromise<GetLikeAggregateType<T>>

        /**
         * Group by Like.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LikeGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends LikeGroupByArgs,
            HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: LikeGroupByArgs['orderBy'] }
                : { orderBy?: LikeGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
                    }[HavingFields]
                  : 'take' extends Keys<T>
                    ? 'orderBy' extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : 'skip' extends Keys<T>
                      ? 'orderBy' extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the Like model
         */
        readonly fields: LikeFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for Like.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__LikeClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        user<T extends UserDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, UserDefaultArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >
        post<T extends PostDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, PostDefaultArgs<ExtArgs>>
        ): Prisma__PostClient<
            $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }

    /**
     * Fields of the Like model
     */
    interface LikeFieldRefs {
        readonly id: FieldRef<'Like', 'Int'>
        readonly userId: FieldRef<'Like', 'Int'>
        readonly postId: FieldRef<'Like', 'Int'>
    }

    // Custom InputTypes
    /**
     * Like findUnique
     */
    export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Like
         */
        select?: LikeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Like
         */
        omit?: LikeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LikeInclude<ExtArgs> | null
        /**
         * Filter, which Like to fetch.
         */
        where: LikeWhereUniqueInput
    }

    /**
     * Like findUniqueOrThrow
     */
    export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Like
         */
        select?: LikeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Like
         */
        omit?: LikeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LikeInclude<ExtArgs> | null
        /**
         * Filter, which Like to fetch.
         */
        where: LikeWhereUniqueInput
    }

    /**
     * Like findFirst
     */
    export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Like
         */
        select?: LikeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Like
         */
        omit?: LikeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LikeInclude<ExtArgs> | null
        /**
         * Filter, which Like to fetch.
         */
        where?: LikeWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Likes to fetch.
         */
        orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Likes.
         */
        cursor?: LikeWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Likes from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Likes.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Likes.
         */
        distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
    }

    /**
     * Like findFirstOrThrow
     */
    export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Like
         */
        select?: LikeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Like
         */
        omit?: LikeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LikeInclude<ExtArgs> | null
        /**
         * Filter, which Like to fetch.
         */
        where?: LikeWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Likes to fetch.
         */
        orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Likes.
         */
        cursor?: LikeWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Likes from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Likes.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Likes.
         */
        distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
    }

    /**
     * Like findMany
     */
    export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Like
         */
        select?: LikeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Like
         */
        omit?: LikeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LikeInclude<ExtArgs> | null
        /**
         * Filter, which Likes to fetch.
         */
        where?: LikeWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Likes to fetch.
         */
        orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Likes.
         */
        cursor?: LikeWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Likes from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Likes.
         */
        skip?: number
        distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
    }

    /**
     * Like create
     */
    export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Like
         */
        select?: LikeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Like
         */
        omit?: LikeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LikeInclude<ExtArgs> | null
        /**
         * The data needed to create a Like.
         */
        data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    }

    /**
     * Like createMany
     */
    export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Likes.
         */
        data: LikeCreateManyInput | LikeCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Like update
     */
    export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Like
         */
        select?: LikeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Like
         */
        omit?: LikeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LikeInclude<ExtArgs> | null
        /**
         * The data needed to update a Like.
         */
        data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
        /**
         * Choose, which Like to update.
         */
        where: LikeWhereUniqueInput
    }

    /**
     * Like updateMany
     */
    export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Likes.
         */
        data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
        /**
         * Filter which Likes to update
         */
        where?: LikeWhereInput
        /**
         * Limit how many Likes to update.
         */
        limit?: number
    }

    /**
     * Like upsert
     */
    export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Like
         */
        select?: LikeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Like
         */
        omit?: LikeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LikeInclude<ExtArgs> | null
        /**
         * The filter to search for the Like to update in case it exists.
         */
        where: LikeWhereUniqueInput
        /**
         * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
         */
        create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
        /**
         * In case the Like was found with the provided `where` argument, update it with this data.
         */
        update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    }

    /**
     * Like delete
     */
    export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Like
         */
        select?: LikeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Like
         */
        omit?: LikeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LikeInclude<ExtArgs> | null
        /**
         * Filter which Like to delete.
         */
        where: LikeWhereUniqueInput
    }

    /**
     * Like deleteMany
     */
    export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Likes to delete
         */
        where?: LikeWhereInput
        /**
         * Limit how many Likes to delete.
         */
        limit?: number
    }

    /**
     * Like without action
     */
    export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Like
         */
        select?: LikeSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Like
         */
        omit?: LikeOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LikeInclude<ExtArgs> | null
    }

    /**
     * Model Tag
     */

    export type AggregateTag = {
        _count: TagCountAggregateOutputType | null
        _avg: TagAvgAggregateOutputType | null
        _sum: TagSumAggregateOutputType | null
        _min: TagMinAggregateOutputType | null
        _max: TagMaxAggregateOutputType | null
    }

    export type TagAvgAggregateOutputType = {
        id: number | null
    }

    export type TagSumAggregateOutputType = {
        id: number | null
    }

    export type TagMinAggregateOutputType = {
        id: number | null
        name: string | null
    }

    export type TagMaxAggregateOutputType = {
        id: number | null
        name: string | null
    }

    export type TagCountAggregateOutputType = {
        id: number
        name: number
        _all: number
    }

    export type TagAvgAggregateInputType = {
        id?: true
    }

    export type TagSumAggregateInputType = {
        id?: true
    }

    export type TagMinAggregateInputType = {
        id?: true
        name?: true
    }

    export type TagMaxAggregateInputType = {
        id?: true
        name?: true
    }

    export type TagCountAggregateInputType = {
        id?: true
        name?: true
        _all?: true
    }

    export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Tag to aggregate.
         */
        where?: TagWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Tags to fetch.
         */
        orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: TagWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Tags from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Tags.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Tags
         **/
        _count?: true | TagCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: TagAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: TagSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: TagMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: TagMaxAggregateInputType
    }

    export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateTag[P]>
            : GetScalarType<T[P], AggregateTag[P]>
    }

    export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: TagWhereInput
        orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
        by: TagScalarFieldEnum[] | TagScalarFieldEnum
        having?: TagScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: TagCountAggregateInputType | true
        _avg?: TagAvgAggregateInputType
        _sum?: TagSumAggregateInputType
        _min?: TagMinAggregateInputType
        _max?: TagMaxAggregateInputType
    }

    export type TagGroupByOutputType = {
        id: number
        name: string
        _count: TagCountAggregateOutputType | null
        _avg: TagAvgAggregateOutputType | null
        _sum: TagSumAggregateOutputType | null
        _min: TagMinAggregateOutputType | null
        _max: TagMaxAggregateOutputType | null
    }

    type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<TagGroupByOutputType, T['by']> & {
                [P in keyof T & keyof TagGroupByOutputType]: P extends '_count'
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], TagGroupByOutputType[P]>
                    : GetScalarType<T[P], TagGroupByOutputType[P]>
            }
        >
    >

    export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
        {
            id?: boolean
            name?: boolean
            posts?: boolean | Tag$postsArgs<ExtArgs>
            _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
        },
        ExtArgs['result']['tag']
    >

    export type TagSelectScalar = {
        id?: boolean
        name?: boolean
    }

    export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
        'id' | 'name',
        ExtArgs['result']['tag']
    >
    export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        posts?: boolean | Tag$postsArgs<ExtArgs>
        _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
    }

    export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: 'Tag'
        objects: {
            posts: Prisma.$PostTagPayload<ExtArgs>[]
        }
        scalars: $Extensions.GetPayloadResult<
            {
                id: number
                name: string
            },
            ExtArgs['result']['tag']
        >
        composites: {}
    }

    type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

    type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
        TagFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: TagCountAggregateInputType | true
    }

    export interface TagDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag']; meta: { name: 'Tag' } }
        /**
         * Find zero or one Tag that matches the filter.
         * @param {TagFindUniqueArgs} args - Arguments to find a Tag
         * @example
         * // Get one Tag
         * const tag = await prisma.tag.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends TagFindUniqueArgs>(
            args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>
        ): Prisma__TagClient<
            $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
         * @example
         * // Get one Tag
         * const tag = await prisma.tag.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(
            args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__TagClient<
            $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tag that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TagFindFirstArgs} args - Arguments to find a Tag
         * @example
         * // Get one Tag
         * const tag = await prisma.tag.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends TagFindFirstArgs>(
            args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>
        ): Prisma__TagClient<
            $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first Tag that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
         * @example
         * // Get one Tag
         * const tag = await prisma.tag.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(
            args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__TagClient<
            $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more Tags that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Tags
         * const tags = await prisma.tag.findMany()
         *
         * // Get first 10 Tags
         * const tags = await prisma.tag.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
         *
         */
        findMany<T extends TagFindManyArgs>(
            args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

        /**
         * Create a Tag.
         * @param {TagCreateArgs} args - Arguments to create a Tag.
         * @example
         * // Create one Tag
         * const Tag = await prisma.tag.create({
         *   data: {
         *     // ... data to create a Tag
         *   }
         * })
         *
         */
        create<T extends TagCreateArgs>(
            args: SelectSubset<T, TagCreateArgs<ExtArgs>>
        ): Prisma__TagClient<
            $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many Tags.
         * @param {TagCreateManyArgs} args - Arguments to create many Tags.
         * @example
         * // Create many Tags
         * const tag = await prisma.tag.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends TagCreateManyArgs>(
            args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Delete a Tag.
         * @param {TagDeleteArgs} args - Arguments to delete one Tag.
         * @example
         * // Delete one Tag
         * const Tag = await prisma.tag.delete({
         *   where: {
         *     // ... filter to delete one Tag
         *   }
         * })
         *
         */
        delete<T extends TagDeleteArgs>(
            args: SelectSubset<T, TagDeleteArgs<ExtArgs>>
        ): Prisma__TagClient<
            $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one Tag.
         * @param {TagUpdateArgs} args - Arguments to update one Tag.
         * @example
         * // Update one Tag
         * const tag = await prisma.tag.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends TagUpdateArgs>(
            args: SelectSubset<T, TagUpdateArgs<ExtArgs>>
        ): Prisma__TagClient<
            $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more Tags.
         * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
         * @example
         * // Delete a few Tags
         * const { count } = await prisma.tag.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends TagDeleteManyArgs>(
            args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more Tags.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Tags
         * const tag = await prisma.tag.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends TagUpdateManyArgs>(
            args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create or update one Tag.
         * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
         * @example
         * // Update or create a Tag
         * const tag = await prisma.tag.upsert({
         *   create: {
         *     // ... data to create a Tag
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Tag we want to update
         *   }
         * })
         */
        upsert<T extends TagUpsertArgs>(
            args: SelectSubset<T, TagUpsertArgs<ExtArgs>>
        ): Prisma__TagClient<
            $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of Tags.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TagCountArgs} args - Arguments to filter Tags to count.
         * @example
         * // Count the number of Tags
         * const count = await prisma.tag.count({
         *   where: {
         *     // ... the filter for the Tags we want to count
         *   }
         * })
         **/
        count<T extends TagCountArgs>(
            args?: Subset<T, TagCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], TagCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a Tag.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends TagAggregateArgs>(
            args: Subset<T, TagAggregateArgs>
        ): Prisma.PrismaPromise<GetTagAggregateType<T>>

        /**
         * Group by Tag.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {TagGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends TagGroupByArgs,
            HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: TagGroupByArgs['orderBy'] }
                : { orderBy?: TagGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
                    }[HavingFields]
                  : 'take' extends Keys<T>
                    ? 'orderBy' extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : 'skip' extends Keys<T>
                      ? 'orderBy' extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the Tag model
         */
        readonly fields: TagFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for Tag.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__TagClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        posts<T extends Tag$postsArgs<ExtArgs> = {}>(
            args?: Subset<T, Tag$postsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }

    /**
     * Fields of the Tag model
     */
    interface TagFieldRefs {
        readonly id: FieldRef<'Tag', 'Int'>
        readonly name: FieldRef<'Tag', 'String'>
    }

    // Custom InputTypes
    /**
     * Tag findUnique
     */
    export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null
        /**
         * Filter, which Tag to fetch.
         */
        where: TagWhereUniqueInput
    }

    /**
     * Tag findUniqueOrThrow
     */
    export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null
        /**
         * Filter, which Tag to fetch.
         */
        where: TagWhereUniqueInput
    }

    /**
     * Tag findFirst
     */
    export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null
        /**
         * Filter, which Tag to fetch.
         */
        where?: TagWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Tags to fetch.
         */
        orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Tags.
         */
        cursor?: TagWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Tags from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Tags.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Tags.
         */
        distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
    }

    /**
     * Tag findFirstOrThrow
     */
    export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null
        /**
         * Filter, which Tag to fetch.
         */
        where?: TagWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Tags to fetch.
         */
        orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Tags.
         */
        cursor?: TagWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Tags from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Tags.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Tags.
         */
        distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
    }

    /**
     * Tag findMany
     */
    export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null
        /**
         * Filter, which Tags to fetch.
         */
        where?: TagWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Tags to fetch.
         */
        orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Tags.
         */
        cursor?: TagWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Tags from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Tags.
         */
        skip?: number
        distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
    }

    /**
     * Tag create
     */
    export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null
        /**
         * The data needed to create a Tag.
         */
        data: XOR<TagCreateInput, TagUncheckedCreateInput>
    }

    /**
     * Tag createMany
     */
    export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many Tags.
         */
        data: TagCreateManyInput | TagCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * Tag update
     */
    export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null
        /**
         * The data needed to update a Tag.
         */
        data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
        /**
         * Choose, which Tag to update.
         */
        where: TagWhereUniqueInput
    }

    /**
     * Tag updateMany
     */
    export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update Tags.
         */
        data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
        /**
         * Filter which Tags to update
         */
        where?: TagWhereInput
        /**
         * Limit how many Tags to update.
         */
        limit?: number
    }

    /**
     * Tag upsert
     */
    export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null
        /**
         * The filter to search for the Tag to update in case it exists.
         */
        where: TagWhereUniqueInput
        /**
         * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
         */
        create: XOR<TagCreateInput, TagUncheckedCreateInput>
        /**
         * In case the Tag was found with the provided `where` argument, update it with this data.
         */
        update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    }

    /**
     * Tag delete
     */
    export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null
        /**
         * Filter which Tag to delete.
         */
        where: TagWhereUniqueInput
    }

    /**
     * Tag deleteMany
     */
    export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which Tags to delete
         */
        where?: TagWhereInput
        /**
         * Limit how many Tags to delete.
         */
        limit?: number
    }

    /**
     * Tag.posts
     */
    export type Tag$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the PostTag
         */
        select?: PostTagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the PostTag
         */
        omit?: PostTagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostTagInclude<ExtArgs> | null
        where?: PostTagWhereInput
        orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
        cursor?: PostTagWhereUniqueInput
        take?: number
        skip?: number
        distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
    }

    /**
     * Tag without action
     */
    export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the Tag
         */
        select?: TagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the Tag
         */
        omit?: TagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: TagInclude<ExtArgs> | null
    }

    /**
     * Model PostTag
     */

    export type AggregatePostTag = {
        _count: PostTagCountAggregateOutputType | null
        _avg: PostTagAvgAggregateOutputType | null
        _sum: PostTagSumAggregateOutputType | null
        _min: PostTagMinAggregateOutputType | null
        _max: PostTagMaxAggregateOutputType | null
    }

    export type PostTagAvgAggregateOutputType = {
        postId: number | null
        tagId: number | null
    }

    export type PostTagSumAggregateOutputType = {
        postId: number | null
        tagId: number | null
    }

    export type PostTagMinAggregateOutputType = {
        postId: number | null
        tagId: number | null
    }

    export type PostTagMaxAggregateOutputType = {
        postId: number | null
        tagId: number | null
    }

    export type PostTagCountAggregateOutputType = {
        postId: number
        tagId: number
        _all: number
    }

    export type PostTagAvgAggregateInputType = {
        postId?: true
        tagId?: true
    }

    export type PostTagSumAggregateInputType = {
        postId?: true
        tagId?: true
    }

    export type PostTagMinAggregateInputType = {
        postId?: true
        tagId?: true
    }

    export type PostTagMaxAggregateInputType = {
        postId?: true
        tagId?: true
    }

    export type PostTagCountAggregateInputType = {
        postId?: true
        tagId?: true
        _all?: true
    }

    export type PostTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which PostTag to aggregate.
         */
        where?: PostTagWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of PostTags to fetch.
         */
        orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: PostTagWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` PostTags from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` PostTags.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned PostTags
         **/
        _count?: true | PostTagCountAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: PostTagAvgAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: PostTagSumAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: PostTagMinAggregateInputType
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: PostTagMaxAggregateInputType
    }

    export type GetPostTagAggregateType<T extends PostTagAggregateArgs> = {
        [P in keyof T & keyof AggregatePostTag]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregatePostTag[P]>
            : GetScalarType<T[P], AggregatePostTag[P]>
    }

    export type PostTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        where?: PostTagWhereInput
        orderBy?: PostTagOrderByWithAggregationInput | PostTagOrderByWithAggregationInput[]
        by: PostTagScalarFieldEnum[] | PostTagScalarFieldEnum
        having?: PostTagScalarWhereWithAggregatesInput
        take?: number
        skip?: number
        _count?: PostTagCountAggregateInputType | true
        _avg?: PostTagAvgAggregateInputType
        _sum?: PostTagSumAggregateInputType
        _min?: PostTagMinAggregateInputType
        _max?: PostTagMaxAggregateInputType
    }

    export type PostTagGroupByOutputType = {
        postId: number
        tagId: number
        _count: PostTagCountAggregateOutputType | null
        _avg: PostTagAvgAggregateOutputType | null
        _sum: PostTagSumAggregateOutputType | null
        _min: PostTagMinAggregateOutputType | null
        _max: PostTagMaxAggregateOutputType | null
    }

    type GetPostTagGroupByPayload<T extends PostTagGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<PostTagGroupByOutputType, T['by']> & {
                [P in keyof T & keyof PostTagGroupByOutputType]: P extends '_count'
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], PostTagGroupByOutputType[P]>
                    : GetScalarType<T[P], PostTagGroupByOutputType[P]>
            }
        >
    >

    export type PostTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                postId?: boolean
                tagId?: boolean
                post?: boolean | PostDefaultArgs<ExtArgs>
                tag?: boolean | TagDefaultArgs<ExtArgs>
            },
            ExtArgs['result']['postTag']
        >

    export type PostTagSelectScalar = {
        postId?: boolean
        tagId?: boolean
    }

    export type PostTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
        'postId' | 'tagId',
        ExtArgs['result']['postTag']
    >
    export type PostTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        post?: boolean | PostDefaultArgs<ExtArgs>
        tag?: boolean | TagDefaultArgs<ExtArgs>
    }

    export type $PostTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: 'PostTag'
        objects: {
            post: Prisma.$PostPayload<ExtArgs>
            tag: Prisma.$TagPayload<ExtArgs>
        }
        scalars: $Extensions.GetPayloadResult<
            {
                postId: number
                tagId: number
            },
            ExtArgs['result']['postTag']
        >
        composites: {}
    }

    type PostTagGetPayload<S extends boolean | null | undefined | PostTagDefaultArgs> = $Result.GetResult<
        Prisma.$PostTagPayload,
        S
    >

    type PostTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
        PostTagFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: PostTagCountAggregateInputType | true
    }

    export interface PostTagDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostTag']; meta: { name: 'PostTag' } }
        /**
         * Find zero or one PostTag that matches the filter.
         * @param {PostTagFindUniqueArgs} args - Arguments to find a PostTag
         * @example
         * // Get one PostTag
         * const postTag = await prisma.postTag.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends PostTagFindUniqueArgs>(
            args: SelectSubset<T, PostTagFindUniqueArgs<ExtArgs>>
        ): Prisma__PostTagClient<
            $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find one PostTag that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {PostTagFindUniqueOrThrowArgs} args - Arguments to find a PostTag
         * @example
         * // Get one PostTag
         * const postTag = await prisma.postTag.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends PostTagFindUniqueOrThrowArgs>(
            args: SelectSubset<T, PostTagFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__PostTagClient<
            $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first PostTag that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PostTagFindFirstArgs} args - Arguments to find a PostTag
         * @example
         * // Get one PostTag
         * const postTag = await prisma.postTag.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends PostTagFindFirstArgs>(
            args?: SelectSubset<T, PostTagFindFirstArgs<ExtArgs>>
        ): Prisma__PostTagClient<
            $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find the first PostTag that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PostTagFindFirstOrThrowArgs} args - Arguments to find a PostTag
         * @example
         * // Get one PostTag
         * const postTag = await prisma.postTag.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends PostTagFindFirstOrThrowArgs>(
            args?: SelectSubset<T, PostTagFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__PostTagClient<
            $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Find zero or more PostTags that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PostTagFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all PostTags
         * const postTags = await prisma.postTag.findMany()
         *
         * // Get first 10 PostTags
         * const postTags = await prisma.postTag.findMany({ take: 10 })
         *
         * // Only select the `postId`
         * const postTagWithPostIdOnly = await prisma.postTag.findMany({ select: { postId: true } })
         *
         */
        findMany<T extends PostTagFindManyArgs>(
            args?: SelectSubset<T, PostTagFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

        /**
         * Create a PostTag.
         * @param {PostTagCreateArgs} args - Arguments to create a PostTag.
         * @example
         * // Create one PostTag
         * const PostTag = await prisma.postTag.create({
         *   data: {
         *     // ... data to create a PostTag
         *   }
         * })
         *
         */
        create<T extends PostTagCreateArgs>(
            args: SelectSubset<T, PostTagCreateArgs<ExtArgs>>
        ): Prisma__PostTagClient<
            $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Create many PostTags.
         * @param {PostTagCreateManyArgs} args - Arguments to create many PostTags.
         * @example
         * // Create many PostTags
         * const postTag = await prisma.postTag.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends PostTagCreateManyArgs>(
            args?: SelectSubset<T, PostTagCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Delete a PostTag.
         * @param {PostTagDeleteArgs} args - Arguments to delete one PostTag.
         * @example
         * // Delete one PostTag
         * const PostTag = await prisma.postTag.delete({
         *   where: {
         *     // ... filter to delete one PostTag
         *   }
         * })
         *
         */
        delete<T extends PostTagDeleteArgs>(
            args: SelectSubset<T, PostTagDeleteArgs<ExtArgs>>
        ): Prisma__PostTagClient<
            $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Update one PostTag.
         * @param {PostTagUpdateArgs} args - Arguments to update one PostTag.
         * @example
         * // Update one PostTag
         * const postTag = await prisma.postTag.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends PostTagUpdateArgs>(
            args: SelectSubset<T, PostTagUpdateArgs<ExtArgs>>
        ): Prisma__PostTagClient<
            $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Delete zero or more PostTags.
         * @param {PostTagDeleteManyArgs} args - Arguments to filter PostTags to delete.
         * @example
         * // Delete a few PostTags
         * const { count } = await prisma.postTag.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends PostTagDeleteManyArgs>(
            args?: SelectSubset<T, PostTagDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Update zero or more PostTags.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PostTagUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many PostTags
         * const postTag = await prisma.postTag.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends PostTagUpdateManyArgs>(
            args: SelectSubset<T, PostTagUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>

        /**
         * Create or update one PostTag.
         * @param {PostTagUpsertArgs} args - Arguments to update or create a PostTag.
         * @example
         * // Update or create a PostTag
         * const postTag = await prisma.postTag.upsert({
         *   create: {
         *     // ... data to create a PostTag
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the PostTag we want to update
         *   }
         * })
         */
        upsert<T extends PostTagUpsertArgs>(
            args: SelectSubset<T, PostTagUpsertArgs<ExtArgs>>
        ): Prisma__PostTagClient<
            $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >

        /**
         * Count the number of PostTags.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PostTagCountArgs} args - Arguments to filter PostTags to count.
         * @example
         * // Count the number of PostTags
         * const count = await prisma.postTag.count({
         *   where: {
         *     // ... the filter for the PostTags we want to count
         *   }
         * })
         **/
        count<T extends PostTagCountArgs>(
            args?: Subset<T, PostTagCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], PostTagCountAggregateOutputType>
                : number
        >

        /**
         * Allows you to perform aggregations operations on a PostTag.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PostTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
         * @example
         * // Ordered by age ascending
         * // Where email contains prisma.io
         * // Limited to the 10 users
         * const aggregations = await prisma.user.aggregate({
         *   _avg: {
         *     age: true,
         *   },
         *   where: {
         *     email: {
         *       contains: "prisma.io",
         *     },
         *   },
         *   orderBy: {
         *     age: "asc",
         *   },
         *   take: 10,
         * })
         **/
        aggregate<T extends PostTagAggregateArgs>(
            args: Subset<T, PostTagAggregateArgs>
        ): Prisma.PrismaPromise<GetPostTagAggregateType<T>>

        /**
         * Group by PostTag.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {PostTagGroupByArgs} args - Group by arguments.
         * @example
         * // Group by city, order by createdAt, get count
         * const result = await prisma.user.groupBy({
         *   by: ['city', 'createdAt'],
         *   orderBy: {
         *     createdAt: true
         *   },
         *   _count: {
         *     _all: true
         *   },
         * })
         *
         **/
        groupBy<
            T extends PostTagGroupByArgs,
            HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: PostTagGroupByArgs['orderBy'] }
                : { orderBy?: PostTagGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends MaybeTupleToUnion<T['by']>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T['having']>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
                    }[HavingFields]
                  : 'take' extends Keys<T>
                    ? 'orderBy' extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : 'skip' extends Keys<T>
                      ? 'orderBy' extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, PostTagGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetPostTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
        /**
         * Fields of the PostTag model
         */
        readonly fields: PostTagFieldRefs
    }

    /**
     * The delegate class that acts as a "Promise-like" for PostTag.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__PostTagClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise'
        post<T extends PostDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, PostDefaultArgs<ExtArgs>>
        ): Prisma__PostClient<
            $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >
        tag<T extends TagDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, TagDefaultArgs<ExtArgs>>
        ): Prisma__TagClient<
            $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
    }

    /**
     * Fields of the PostTag model
     */
    interface PostTagFieldRefs {
        readonly postId: FieldRef<'PostTag', 'Int'>
        readonly tagId: FieldRef<'PostTag', 'Int'>
    }

    // Custom InputTypes
    /**
     * PostTag findUnique
     */
    export type PostTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the PostTag
         */
        select?: PostTagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the PostTag
         */
        omit?: PostTagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostTagInclude<ExtArgs> | null
        /**
         * Filter, which PostTag to fetch.
         */
        where: PostTagWhereUniqueInput
    }

    /**
     * PostTag findUniqueOrThrow
     */
    export type PostTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the PostTag
         */
        select?: PostTagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the PostTag
         */
        omit?: PostTagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostTagInclude<ExtArgs> | null
        /**
         * Filter, which PostTag to fetch.
         */
        where: PostTagWhereUniqueInput
    }

    /**
     * PostTag findFirst
     */
    export type PostTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the PostTag
         */
        select?: PostTagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the PostTag
         */
        omit?: PostTagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostTagInclude<ExtArgs> | null
        /**
         * Filter, which PostTag to fetch.
         */
        where?: PostTagWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of PostTags to fetch.
         */
        orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for PostTags.
         */
        cursor?: PostTagWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` PostTags from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` PostTags.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of PostTags.
         */
        distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
    }

    /**
     * PostTag findFirstOrThrow
     */
    export type PostTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the PostTag
         */
        select?: PostTagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the PostTag
         */
        omit?: PostTagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostTagInclude<ExtArgs> | null
        /**
         * Filter, which PostTag to fetch.
         */
        where?: PostTagWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of PostTags to fetch.
         */
        orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for PostTags.
         */
        cursor?: PostTagWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` PostTags from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` PostTags.
         */
        skip?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of PostTags.
         */
        distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
    }

    /**
     * PostTag findMany
     */
    export type PostTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the PostTag
         */
        select?: PostTagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the PostTag
         */
        omit?: PostTagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostTagInclude<ExtArgs> | null
        /**
         * Filter, which PostTags to fetch.
         */
        where?: PostTagWhereInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of PostTags to fetch.
         */
        orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing PostTags.
         */
        cursor?: PostTagWhereUniqueInput
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` PostTags from the position of the cursor.
         */
        take?: number
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` PostTags.
         */
        skip?: number
        distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
    }

    /**
     * PostTag create
     */
    export type PostTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the PostTag
         */
        select?: PostTagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the PostTag
         */
        omit?: PostTagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostTagInclude<ExtArgs> | null
        /**
         * The data needed to create a PostTag.
         */
        data: XOR<PostTagCreateInput, PostTagUncheckedCreateInput>
    }

    /**
     * PostTag createMany
     */
    export type PostTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to create many PostTags.
         */
        data: PostTagCreateManyInput | PostTagCreateManyInput[]
        skipDuplicates?: boolean
    }

    /**
     * PostTag update
     */
    export type PostTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the PostTag
         */
        select?: PostTagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the PostTag
         */
        omit?: PostTagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostTagInclude<ExtArgs> | null
        /**
         * The data needed to update a PostTag.
         */
        data: XOR<PostTagUpdateInput, PostTagUncheckedUpdateInput>
        /**
         * Choose, which PostTag to update.
         */
        where: PostTagWhereUniqueInput
    }

    /**
     * PostTag updateMany
     */
    export type PostTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * The data used to update PostTags.
         */
        data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyInput>
        /**
         * Filter which PostTags to update
         */
        where?: PostTagWhereInput
        /**
         * Limit how many PostTags to update.
         */
        limit?: number
    }

    /**
     * PostTag upsert
     */
    export type PostTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the PostTag
         */
        select?: PostTagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the PostTag
         */
        omit?: PostTagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostTagInclude<ExtArgs> | null
        /**
         * The filter to search for the PostTag to update in case it exists.
         */
        where: PostTagWhereUniqueInput
        /**
         * In case the PostTag found by the `where` argument doesn't exist, create a new PostTag with this data.
         */
        create: XOR<PostTagCreateInput, PostTagUncheckedCreateInput>
        /**
         * In case the PostTag was found with the provided `where` argument, update it with this data.
         */
        update: XOR<PostTagUpdateInput, PostTagUncheckedUpdateInput>
    }

    /**
     * PostTag delete
     */
    export type PostTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the PostTag
         */
        select?: PostTagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the PostTag
         */
        omit?: PostTagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostTagInclude<ExtArgs> | null
        /**
         * Filter which PostTag to delete.
         */
        where: PostTagWhereUniqueInput
    }

    /**
     * PostTag deleteMany
     */
    export type PostTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Filter which PostTags to delete
         */
        where?: PostTagWhereInput
        /**
         * Limit how many PostTags to delete.
         */
        limit?: number
    }

    /**
     * PostTag without action
     */
    export type PostTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        /**
         * Select specific fields to fetch from the PostTag
         */
        select?: PostTagSelect<ExtArgs> | null
        /**
         * Omit specific fields from the PostTag
         */
        omit?: PostTagOmit<ExtArgs> | null
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: PostTagInclude<ExtArgs> | null
    }

    /**
     * Enums
     */

    export const TransactionIsolationLevel: {
        ReadUncommitted: 'ReadUncommitted'
        ReadCommitted: 'ReadCommitted'
        RepeatableRead: 'RepeatableRead'
        Serializable: 'Serializable'
    }

    export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

    export const UserScalarFieldEnum: {
        id: 'id'
        email: 'email'
        firstname: 'firstname'
        lastname: 'lastname'
        password: 'password'
        role: 'role'
        createdAt: 'createdAt'
        updatedAt: 'updatedAt'
    }

    export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]

    export const PostScalarFieldEnum: {
        id: 'id'
        title: 'title'
        content: 'content'
        description: 'description'
        imageUrl: 'imageUrl'
        status: 'status'
        views: 'views'
        userId: 'userId'
        categoryId: 'categoryId'
        createdAt: 'createdAt'
        updatedAt: 'updatedAt'
    }

    export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]

    export const CommentScalarFieldEnum: {
        id: 'id'
        content: 'content'
        userId: 'userId'
        postId: 'postId'
        createdAt: 'createdAt'
        updatedAt: 'updatedAt'
    }

    export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]

    export const CategoryScalarFieldEnum: {
        id: 'id'
        name: 'name'
    }

    export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]

    export const LikeScalarFieldEnum: {
        id: 'id'
        userId: 'userId'
        postId: 'postId'
    }

    export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]

    export const TagScalarFieldEnum: {
        id: 'id'
        name: 'name'
    }

    export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]

    export const PostTagScalarFieldEnum: {
        postId: 'postId'
        tagId: 'tagId'
    }

    export type PostTagScalarFieldEnum = (typeof PostTagScalarFieldEnum)[keyof typeof PostTagScalarFieldEnum]

    export const SortOrder: {
        asc: 'asc'
        desc: 'desc'
    }

    export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

    export const UserOrderByRelevanceFieldEnum: {
        email: 'email'
        firstname: 'firstname'
        lastname: 'lastname'
        password: 'password'
    }

    export type UserOrderByRelevanceFieldEnum =
        (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]

    export const NullsOrder: {
        first: 'first'
        last: 'last'
    }

    export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]

    export const PostOrderByRelevanceFieldEnum: {
        title: 'title'
        content: 'content'
        description: 'description'
        imageUrl: 'imageUrl'
    }

    export type PostOrderByRelevanceFieldEnum =
        (typeof PostOrderByRelevanceFieldEnum)[keyof typeof PostOrderByRelevanceFieldEnum]

    export const CommentOrderByRelevanceFieldEnum: {
        content: 'content'
    }

    export type CommentOrderByRelevanceFieldEnum =
        (typeof CommentOrderByRelevanceFieldEnum)[keyof typeof CommentOrderByRelevanceFieldEnum]

    export const CategoryOrderByRelevanceFieldEnum: {
        name: 'name'
    }

    export type CategoryOrderByRelevanceFieldEnum =
        (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]

    export const TagOrderByRelevanceFieldEnum: {
        name: 'name'
    }

    export type TagOrderByRelevanceFieldEnum =
        (typeof TagOrderByRelevanceFieldEnum)[keyof typeof TagOrderByRelevanceFieldEnum]

    /**
     * Field references
     */

    /**
     * Reference to a field of type 'Int'
     */
    export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>

    /**
     * Reference to a field of type 'String'
     */
    export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>

    /**
     * Reference to a field of type 'Role'
     */
    export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>

    /**
     * Reference to a field of type 'DateTime'
     */
    export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>

    /**
     * Reference to a field of type 'PostStatus'
     */
    export type EnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus'>

    /**
     * Reference to a field of type 'Float'
     */
    export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>

    /**
     * Deep Input Types
     */

    export type UserWhereInput = {
        AND?: UserWhereInput | UserWhereInput[]
        OR?: UserWhereInput[]
        NOT?: UserWhereInput | UserWhereInput[]
        id?: IntFilter<'User'> | number
        email?: StringFilter<'User'> | string
        firstname?: StringFilter<'User'> | string
        lastname?: StringFilter<'User'> | string
        password?: StringFilter<'User'> | string
        role?: EnumRoleFilter<'User'> | $Enums.Role
        createdAt?: DateTimeFilter<'User'> | Date | string
        updatedAt?: DateTimeFilter<'User'> | Date | string
        posts?: PostListRelationFilter
        comments?: CommentListRelationFilter
        likes?: LikeListRelationFilter
    }

    export type UserOrderByWithRelationInput = {
        id?: SortOrder
        email?: SortOrder
        firstname?: SortOrder
        lastname?: SortOrder
        password?: SortOrder
        role?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        posts?: PostOrderByRelationAggregateInput
        comments?: CommentOrderByRelationAggregateInput
        likes?: LikeOrderByRelationAggregateInput
        _relevance?: UserOrderByRelevanceInput
    }

    export type UserWhereUniqueInput = Prisma.AtLeast<
        {
            id?: number
            email?: string
            AND?: UserWhereInput | UserWhereInput[]
            OR?: UserWhereInput[]
            NOT?: UserWhereInput | UserWhereInput[]
            firstname?: StringFilter<'User'> | string
            lastname?: StringFilter<'User'> | string
            password?: StringFilter<'User'> | string
            role?: EnumRoleFilter<'User'> | $Enums.Role
            createdAt?: DateTimeFilter<'User'> | Date | string
            updatedAt?: DateTimeFilter<'User'> | Date | string
            posts?: PostListRelationFilter
            comments?: CommentListRelationFilter
            likes?: LikeListRelationFilter
        },
        'id' | 'email'
    >

    export type UserOrderByWithAggregationInput = {
        id?: SortOrder
        email?: SortOrder
        firstname?: SortOrder
        lastname?: SortOrder
        password?: SortOrder
        role?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        _count?: UserCountOrderByAggregateInput
        _avg?: UserAvgOrderByAggregateInput
        _max?: UserMaxOrderByAggregateInput
        _min?: UserMinOrderByAggregateInput
        _sum?: UserSumOrderByAggregateInput
    }

    export type UserScalarWhereWithAggregatesInput = {
        AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
        OR?: UserScalarWhereWithAggregatesInput[]
        NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
        id?: IntWithAggregatesFilter<'User'> | number
        email?: StringWithAggregatesFilter<'User'> | string
        firstname?: StringWithAggregatesFilter<'User'> | string
        lastname?: StringWithAggregatesFilter<'User'> | string
        password?: StringWithAggregatesFilter<'User'> | string
        role?: EnumRoleWithAggregatesFilter<'User'> | $Enums.Role
        createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string
    }

    export type PostWhereInput = {
        AND?: PostWhereInput | PostWhereInput[]
        OR?: PostWhereInput[]
        NOT?: PostWhereInput | PostWhereInput[]
        id?: IntFilter<'Post'> | number
        title?: StringFilter<'Post'> | string
        content?: StringFilter<'Post'> | string
        description?: StringNullableFilter<'Post'> | string | null
        imageUrl?: StringNullableFilter<'Post'> | string | null
        status?: EnumPostStatusFilter<'Post'> | $Enums.PostStatus
        views?: IntFilter<'Post'> | number
        userId?: IntFilter<'Post'> | number
        categoryId?: IntNullableFilter<'Post'> | number | null
        createdAt?: DateTimeFilter<'Post'> | Date | string
        updatedAt?: DateTimeFilter<'Post'> | Date | string
        user?: XOR<UserScalarRelationFilter, UserWhereInput>
        comments?: CommentListRelationFilter
        category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
        likes?: LikeListRelationFilter
        postTags?: PostTagListRelationFilter
    }

    export type PostOrderByWithRelationInput = {
        id?: SortOrder
        title?: SortOrder
        content?: SortOrder
        description?: SortOrderInput | SortOrder
        imageUrl?: SortOrderInput | SortOrder
        status?: SortOrder
        views?: SortOrder
        userId?: SortOrder
        categoryId?: SortOrderInput | SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        user?: UserOrderByWithRelationInput
        comments?: CommentOrderByRelationAggregateInput
        category?: CategoryOrderByWithRelationInput
        likes?: LikeOrderByRelationAggregateInput
        postTags?: PostTagOrderByRelationAggregateInput
        _relevance?: PostOrderByRelevanceInput
    }

    export type PostWhereUniqueInput = Prisma.AtLeast<
        {
            id?: number
            AND?: PostWhereInput | PostWhereInput[]
            OR?: PostWhereInput[]
            NOT?: PostWhereInput | PostWhereInput[]
            title?: StringFilter<'Post'> | string
            content?: StringFilter<'Post'> | string
            description?: StringNullableFilter<'Post'> | string | null
            imageUrl?: StringNullableFilter<'Post'> | string | null
            status?: EnumPostStatusFilter<'Post'> | $Enums.PostStatus
            views?: IntFilter<'Post'> | number
            userId?: IntFilter<'Post'> | number
            categoryId?: IntNullableFilter<'Post'> | number | null
            createdAt?: DateTimeFilter<'Post'> | Date | string
            updatedAt?: DateTimeFilter<'Post'> | Date | string
            user?: XOR<UserScalarRelationFilter, UserWhereInput>
            comments?: CommentListRelationFilter
            category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
            likes?: LikeListRelationFilter
            postTags?: PostTagListRelationFilter
        },
        'id'
    >

    export type PostOrderByWithAggregationInput = {
        id?: SortOrder
        title?: SortOrder
        content?: SortOrder
        description?: SortOrderInput | SortOrder
        imageUrl?: SortOrderInput | SortOrder
        status?: SortOrder
        views?: SortOrder
        userId?: SortOrder
        categoryId?: SortOrderInput | SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        _count?: PostCountOrderByAggregateInput
        _avg?: PostAvgOrderByAggregateInput
        _max?: PostMaxOrderByAggregateInput
        _min?: PostMinOrderByAggregateInput
        _sum?: PostSumOrderByAggregateInput
    }

    export type PostScalarWhereWithAggregatesInput = {
        AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
        OR?: PostScalarWhereWithAggregatesInput[]
        NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
        id?: IntWithAggregatesFilter<'Post'> | number
        title?: StringWithAggregatesFilter<'Post'> | string
        content?: StringWithAggregatesFilter<'Post'> | string
        description?: StringNullableWithAggregatesFilter<'Post'> | string | null
        imageUrl?: StringNullableWithAggregatesFilter<'Post'> | string | null
        status?: EnumPostStatusWithAggregatesFilter<'Post'> | $Enums.PostStatus
        views?: IntWithAggregatesFilter<'Post'> | number
        userId?: IntWithAggregatesFilter<'Post'> | number
        categoryId?: IntNullableWithAggregatesFilter<'Post'> | number | null
        createdAt?: DateTimeWithAggregatesFilter<'Post'> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<'Post'> | Date | string
    }

    export type CommentWhereInput = {
        AND?: CommentWhereInput | CommentWhereInput[]
        OR?: CommentWhereInput[]
        NOT?: CommentWhereInput | CommentWhereInput[]
        id?: IntFilter<'Comment'> | number
        content?: StringFilter<'Comment'> | string
        userId?: IntFilter<'Comment'> | number
        postId?: IntFilter<'Comment'> | number
        createdAt?: DateTimeFilter<'Comment'> | Date | string
        updatedAt?: DateTimeFilter<'Comment'> | Date | string
        user?: XOR<UserScalarRelationFilter, UserWhereInput>
        post?: XOR<PostScalarRelationFilter, PostWhereInput>
    }

    export type CommentOrderByWithRelationInput = {
        id?: SortOrder
        content?: SortOrder
        userId?: SortOrder
        postId?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        user?: UserOrderByWithRelationInput
        post?: PostOrderByWithRelationInput
        _relevance?: CommentOrderByRelevanceInput
    }

    export type CommentWhereUniqueInput = Prisma.AtLeast<
        {
            id?: number
            AND?: CommentWhereInput | CommentWhereInput[]
            OR?: CommentWhereInput[]
            NOT?: CommentWhereInput | CommentWhereInput[]
            content?: StringFilter<'Comment'> | string
            userId?: IntFilter<'Comment'> | number
            postId?: IntFilter<'Comment'> | number
            createdAt?: DateTimeFilter<'Comment'> | Date | string
            updatedAt?: DateTimeFilter<'Comment'> | Date | string
            user?: XOR<UserScalarRelationFilter, UserWhereInput>
            post?: XOR<PostScalarRelationFilter, PostWhereInput>
        },
        'id'
    >

    export type CommentOrderByWithAggregationInput = {
        id?: SortOrder
        content?: SortOrder
        userId?: SortOrder
        postId?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
        _count?: CommentCountOrderByAggregateInput
        _avg?: CommentAvgOrderByAggregateInput
        _max?: CommentMaxOrderByAggregateInput
        _min?: CommentMinOrderByAggregateInput
        _sum?: CommentSumOrderByAggregateInput
    }

    export type CommentScalarWhereWithAggregatesInput = {
        AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
        OR?: CommentScalarWhereWithAggregatesInput[]
        NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
        id?: IntWithAggregatesFilter<'Comment'> | number
        content?: StringWithAggregatesFilter<'Comment'> | string
        userId?: IntWithAggregatesFilter<'Comment'> | number
        postId?: IntWithAggregatesFilter<'Comment'> | number
        createdAt?: DateTimeWithAggregatesFilter<'Comment'> | Date | string
        updatedAt?: DateTimeWithAggregatesFilter<'Comment'> | Date | string
    }

    export type CategoryWhereInput = {
        AND?: CategoryWhereInput | CategoryWhereInput[]
        OR?: CategoryWhereInput[]
        NOT?: CategoryWhereInput | CategoryWhereInput[]
        id?: IntFilter<'Category'> | number
        name?: StringFilter<'Category'> | string
        posts?: PostListRelationFilter
    }

    export type CategoryOrderByWithRelationInput = {
        id?: SortOrder
        name?: SortOrder
        posts?: PostOrderByRelationAggregateInput
        _relevance?: CategoryOrderByRelevanceInput
    }

    export type CategoryWhereUniqueInput = Prisma.AtLeast<
        {
            id?: number
            name?: string
            AND?: CategoryWhereInput | CategoryWhereInput[]
            OR?: CategoryWhereInput[]
            NOT?: CategoryWhereInput | CategoryWhereInput[]
            posts?: PostListRelationFilter
        },
        'id' | 'name'
    >

    export type CategoryOrderByWithAggregationInput = {
        id?: SortOrder
        name?: SortOrder
        _count?: CategoryCountOrderByAggregateInput
        _avg?: CategoryAvgOrderByAggregateInput
        _max?: CategoryMaxOrderByAggregateInput
        _min?: CategoryMinOrderByAggregateInput
        _sum?: CategorySumOrderByAggregateInput
    }

    export type CategoryScalarWhereWithAggregatesInput = {
        AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
        OR?: CategoryScalarWhereWithAggregatesInput[]
        NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
        id?: IntWithAggregatesFilter<'Category'> | number
        name?: StringWithAggregatesFilter<'Category'> | string
    }

    export type LikeWhereInput = {
        AND?: LikeWhereInput | LikeWhereInput[]
        OR?: LikeWhereInput[]
        NOT?: LikeWhereInput | LikeWhereInput[]
        id?: IntFilter<'Like'> | number
        userId?: IntFilter<'Like'> | number
        postId?: IntFilter<'Like'> | number
        user?: XOR<UserScalarRelationFilter, UserWhereInput>
        post?: XOR<PostScalarRelationFilter, PostWhereInput>
    }

    export type LikeOrderByWithRelationInput = {
        id?: SortOrder
        userId?: SortOrder
        postId?: SortOrder
        user?: UserOrderByWithRelationInput
        post?: PostOrderByWithRelationInput
    }

    export type LikeWhereUniqueInput = Prisma.AtLeast<
        {
            id?: number
            userId_postId?: LikeUserIdPostIdCompoundUniqueInput
            AND?: LikeWhereInput | LikeWhereInput[]
            OR?: LikeWhereInput[]
            NOT?: LikeWhereInput | LikeWhereInput[]
            userId?: IntFilter<'Like'> | number
            postId?: IntFilter<'Like'> | number
            user?: XOR<UserScalarRelationFilter, UserWhereInput>
            post?: XOR<PostScalarRelationFilter, PostWhereInput>
        },
        'id' | 'userId_postId'
    >

    export type LikeOrderByWithAggregationInput = {
        id?: SortOrder
        userId?: SortOrder
        postId?: SortOrder
        _count?: LikeCountOrderByAggregateInput
        _avg?: LikeAvgOrderByAggregateInput
        _max?: LikeMaxOrderByAggregateInput
        _min?: LikeMinOrderByAggregateInput
        _sum?: LikeSumOrderByAggregateInput
    }

    export type LikeScalarWhereWithAggregatesInput = {
        AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
        OR?: LikeScalarWhereWithAggregatesInput[]
        NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
        id?: IntWithAggregatesFilter<'Like'> | number
        userId?: IntWithAggregatesFilter<'Like'> | number
        postId?: IntWithAggregatesFilter<'Like'> | number
    }

    export type TagWhereInput = {
        AND?: TagWhereInput | TagWhereInput[]
        OR?: TagWhereInput[]
        NOT?: TagWhereInput | TagWhereInput[]
        id?: IntFilter<'Tag'> | number
        name?: StringFilter<'Tag'> | string
        posts?: PostTagListRelationFilter
    }

    export type TagOrderByWithRelationInput = {
        id?: SortOrder
        name?: SortOrder
        posts?: PostTagOrderByRelationAggregateInput
        _relevance?: TagOrderByRelevanceInput
    }

    export type TagWhereUniqueInput = Prisma.AtLeast<
        {
            id?: number
            name?: string
            AND?: TagWhereInput | TagWhereInput[]
            OR?: TagWhereInput[]
            NOT?: TagWhereInput | TagWhereInput[]
            posts?: PostTagListRelationFilter
        },
        'id' | 'name'
    >

    export type TagOrderByWithAggregationInput = {
        id?: SortOrder
        name?: SortOrder
        _count?: TagCountOrderByAggregateInput
        _avg?: TagAvgOrderByAggregateInput
        _max?: TagMaxOrderByAggregateInput
        _min?: TagMinOrderByAggregateInput
        _sum?: TagSumOrderByAggregateInput
    }

    export type TagScalarWhereWithAggregatesInput = {
        AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
        OR?: TagScalarWhereWithAggregatesInput[]
        NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
        id?: IntWithAggregatesFilter<'Tag'> | number
        name?: StringWithAggregatesFilter<'Tag'> | string
    }

    export type PostTagWhereInput = {
        AND?: PostTagWhereInput | PostTagWhereInput[]
        OR?: PostTagWhereInput[]
        NOT?: PostTagWhereInput | PostTagWhereInput[]
        postId?: IntFilter<'PostTag'> | number
        tagId?: IntFilter<'PostTag'> | number
        post?: XOR<PostScalarRelationFilter, PostWhereInput>
        tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    }

    export type PostTagOrderByWithRelationInput = {
        postId?: SortOrder
        tagId?: SortOrder
        post?: PostOrderByWithRelationInput
        tag?: TagOrderByWithRelationInput
    }

    export type PostTagWhereUniqueInput = Prisma.AtLeast<
        {
            postId_tagId?: PostTagPostIdTagIdCompoundUniqueInput
            AND?: PostTagWhereInput | PostTagWhereInput[]
            OR?: PostTagWhereInput[]
            NOT?: PostTagWhereInput | PostTagWhereInput[]
            postId?: IntFilter<'PostTag'> | number
            tagId?: IntFilter<'PostTag'> | number
            post?: XOR<PostScalarRelationFilter, PostWhereInput>
            tag?: XOR<TagScalarRelationFilter, TagWhereInput>
        },
        'postId_tagId'
    >

    export type PostTagOrderByWithAggregationInput = {
        postId?: SortOrder
        tagId?: SortOrder
        _count?: PostTagCountOrderByAggregateInput
        _avg?: PostTagAvgOrderByAggregateInput
        _max?: PostTagMaxOrderByAggregateInput
        _min?: PostTagMinOrderByAggregateInput
        _sum?: PostTagSumOrderByAggregateInput
    }

    export type PostTagScalarWhereWithAggregatesInput = {
        AND?: PostTagScalarWhereWithAggregatesInput | PostTagScalarWhereWithAggregatesInput[]
        OR?: PostTagScalarWhereWithAggregatesInput[]
        NOT?: PostTagScalarWhereWithAggregatesInput | PostTagScalarWhereWithAggregatesInput[]
        postId?: IntWithAggregatesFilter<'PostTag'> | number
        tagId?: IntWithAggregatesFilter<'PostTag'> | number
    }

    export type UserCreateInput = {
        email: string
        firstname: string
        lastname: string
        password: string
        role?: $Enums.Role
        createdAt?: Date | string
        updatedAt?: Date | string
        posts?: PostCreateNestedManyWithoutUserInput
        comments?: CommentCreateNestedManyWithoutUserInput
        likes?: LikeCreateNestedManyWithoutUserInput
    }

    export type UserUncheckedCreateInput = {
        id?: number
        email: string
        firstname: string
        lastname: string
        password: string
        role?: $Enums.Role
        createdAt?: Date | string
        updatedAt?: Date | string
        posts?: PostUncheckedCreateNestedManyWithoutUserInput
        comments?: CommentUncheckedCreateNestedManyWithoutUserInput
        likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    }

    export type UserUpdateInput = {
        email?: StringFieldUpdateOperationsInput | string
        firstname?: StringFieldUpdateOperationsInput | string
        lastname?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        posts?: PostUpdateManyWithoutUserNestedInput
        comments?: CommentUpdateManyWithoutUserNestedInput
        likes?: LikeUpdateManyWithoutUserNestedInput
    }

    export type UserUncheckedUpdateInput = {
        id?: IntFieldUpdateOperationsInput | number
        email?: StringFieldUpdateOperationsInput | string
        firstname?: StringFieldUpdateOperationsInput | string
        lastname?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        posts?: PostUncheckedUpdateManyWithoutUserNestedInput
        comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
        likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    }

    export type UserCreateManyInput = {
        id?: number
        email: string
        firstname: string
        lastname: string
        password: string
        role?: $Enums.Role
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type UserUpdateManyMutationInput = {
        email?: StringFieldUpdateOperationsInput | string
        firstname?: StringFieldUpdateOperationsInput | string
        lastname?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type UserUncheckedUpdateManyInput = {
        id?: IntFieldUpdateOperationsInput | number
        email?: StringFieldUpdateOperationsInput | string
        firstname?: StringFieldUpdateOperationsInput | string
        lastname?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type PostCreateInput = {
        title: string
        content: string
        description?: string | null
        imageUrl?: string | null
        status?: $Enums.PostStatus
        views?: number
        createdAt?: Date | string
        updatedAt?: Date | string
        user: UserCreateNestedOneWithoutPostsInput
        comments?: CommentCreateNestedManyWithoutPostInput
        category?: CategoryCreateNestedOneWithoutPostsInput
        likes?: LikeCreateNestedManyWithoutPostInput
        postTags?: PostTagCreateNestedManyWithoutPostInput
    }

    export type PostUncheckedCreateInput = {
        id?: number
        title: string
        content: string
        description?: string | null
        imageUrl?: string | null
        status?: $Enums.PostStatus
        views?: number
        userId: number
        categoryId?: number | null
        createdAt?: Date | string
        updatedAt?: Date | string
        comments?: CommentUncheckedCreateNestedManyWithoutPostInput
        likes?: LikeUncheckedCreateNestedManyWithoutPostInput
        postTags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    }

    export type PostUpdateInput = {
        title?: StringFieldUpdateOperationsInput | string
        content?: StringFieldUpdateOperationsInput | string
        description?: NullableStringFieldUpdateOperationsInput | string | null
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
        views?: IntFieldUpdateOperationsInput | number
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        user?: UserUpdateOneRequiredWithoutPostsNestedInput
        comments?: CommentUpdateManyWithoutPostNestedInput
        category?: CategoryUpdateOneWithoutPostsNestedInput
        likes?: LikeUpdateManyWithoutPostNestedInput
        postTags?: PostTagUpdateManyWithoutPostNestedInput
    }

    export type PostUncheckedUpdateInput = {
        id?: IntFieldUpdateOperationsInput | number
        title?: StringFieldUpdateOperationsInput | string
        content?: StringFieldUpdateOperationsInput | string
        description?: NullableStringFieldUpdateOperationsInput | string | null
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
        views?: IntFieldUpdateOperationsInput | number
        userId?: IntFieldUpdateOperationsInput | number
        categoryId?: NullableIntFieldUpdateOperationsInput | number | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
        likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
        postTags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    }

    export type PostCreateManyInput = {
        id?: number
        title: string
        content: string
        description?: string | null
        imageUrl?: string | null
        status?: $Enums.PostStatus
        views?: number
        userId: number
        categoryId?: number | null
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type PostUpdateManyMutationInput = {
        title?: StringFieldUpdateOperationsInput | string
        content?: StringFieldUpdateOperationsInput | string
        description?: NullableStringFieldUpdateOperationsInput | string | null
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
        views?: IntFieldUpdateOperationsInput | number
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type PostUncheckedUpdateManyInput = {
        id?: IntFieldUpdateOperationsInput | number
        title?: StringFieldUpdateOperationsInput | string
        content?: StringFieldUpdateOperationsInput | string
        description?: NullableStringFieldUpdateOperationsInput | string | null
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
        views?: IntFieldUpdateOperationsInput | number
        userId?: IntFieldUpdateOperationsInput | number
        categoryId?: NullableIntFieldUpdateOperationsInput | number | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type CommentCreateInput = {
        content: string
        createdAt?: Date | string
        updatedAt?: Date | string
        user: UserCreateNestedOneWithoutCommentsInput
        post: PostCreateNestedOneWithoutCommentsInput
    }

    export type CommentUncheckedCreateInput = {
        id?: number
        content: string
        userId: number
        postId: number
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type CommentUpdateInput = {
        content?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        user?: UserUpdateOneRequiredWithoutCommentsNestedInput
        post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    }

    export type CommentUncheckedUpdateInput = {
        id?: IntFieldUpdateOperationsInput | number
        content?: StringFieldUpdateOperationsInput | string
        userId?: IntFieldUpdateOperationsInput | number
        postId?: IntFieldUpdateOperationsInput | number
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type CommentCreateManyInput = {
        id?: number
        content: string
        userId: number
        postId: number
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type CommentUpdateManyMutationInput = {
        content?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type CommentUncheckedUpdateManyInput = {
        id?: IntFieldUpdateOperationsInput | number
        content?: StringFieldUpdateOperationsInput | string
        userId?: IntFieldUpdateOperationsInput | number
        postId?: IntFieldUpdateOperationsInput | number
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type CategoryCreateInput = {
        name: string
        posts?: PostCreateNestedManyWithoutCategoryInput
    }

    export type CategoryUncheckedCreateInput = {
        id?: number
        name: string
        posts?: PostUncheckedCreateNestedManyWithoutCategoryInput
    }

    export type CategoryUpdateInput = {
        name?: StringFieldUpdateOperationsInput | string
        posts?: PostUpdateManyWithoutCategoryNestedInput
    }

    export type CategoryUncheckedUpdateInput = {
        id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
        posts?: PostUncheckedUpdateManyWithoutCategoryNestedInput
    }

    export type CategoryCreateManyInput = {
        id?: number
        name: string
    }

    export type CategoryUpdateManyMutationInput = {
        name?: StringFieldUpdateOperationsInput | string
    }

    export type CategoryUncheckedUpdateManyInput = {
        id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
    }

    export type LikeCreateInput = {
        user: UserCreateNestedOneWithoutLikesInput
        post: PostCreateNestedOneWithoutLikesInput
    }

    export type LikeUncheckedCreateInput = {
        id?: number
        userId: number
        postId: number
    }

    export type LikeUpdateInput = {
        user?: UserUpdateOneRequiredWithoutLikesNestedInput
        post?: PostUpdateOneRequiredWithoutLikesNestedInput
    }

    export type LikeUncheckedUpdateInput = {
        id?: IntFieldUpdateOperationsInput | number
        userId?: IntFieldUpdateOperationsInput | number
        postId?: IntFieldUpdateOperationsInput | number
    }

    export type LikeCreateManyInput = {
        id?: number
        userId: number
        postId: number
    }

    export type LikeUpdateManyMutationInput = {}

    export type LikeUncheckedUpdateManyInput = {
        id?: IntFieldUpdateOperationsInput | number
        userId?: IntFieldUpdateOperationsInput | number
        postId?: IntFieldUpdateOperationsInput | number
    }

    export type TagCreateInput = {
        name: string
        posts?: PostTagCreateNestedManyWithoutTagInput
    }

    export type TagUncheckedCreateInput = {
        id?: number
        name: string
        posts?: PostTagUncheckedCreateNestedManyWithoutTagInput
    }

    export type TagUpdateInput = {
        name?: StringFieldUpdateOperationsInput | string
        posts?: PostTagUpdateManyWithoutTagNestedInput
    }

    export type TagUncheckedUpdateInput = {
        id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
        posts?: PostTagUncheckedUpdateManyWithoutTagNestedInput
    }

    export type TagCreateManyInput = {
        id?: number
        name: string
    }

    export type TagUpdateManyMutationInput = {
        name?: StringFieldUpdateOperationsInput | string
    }

    export type TagUncheckedUpdateManyInput = {
        id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
    }

    export type PostTagCreateInput = {
        post: PostCreateNestedOneWithoutPostTagsInput
        tag: TagCreateNestedOneWithoutPostsInput
    }

    export type PostTagUncheckedCreateInput = {
        postId: number
        tagId: number
    }

    export type PostTagUpdateInput = {
        post?: PostUpdateOneRequiredWithoutPostTagsNestedInput
        tag?: TagUpdateOneRequiredWithoutPostsNestedInput
    }

    export type PostTagUncheckedUpdateInput = {
        postId?: IntFieldUpdateOperationsInput | number
        tagId?: IntFieldUpdateOperationsInput | number
    }

    export type PostTagCreateManyInput = {
        postId: number
        tagId: number
    }

    export type PostTagUpdateManyMutationInput = {}

    export type PostTagUncheckedUpdateManyInput = {
        postId?: IntFieldUpdateOperationsInput | number
        tagId?: IntFieldUpdateOperationsInput | number
    }

    export type IntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[]
        notIn?: number[]
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntFilter<$PrismaModel> | number
    }

    export type StringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[]
        notIn?: string[]
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        search?: string
        not?: NestedStringFilter<$PrismaModel> | string
    }

    export type EnumRoleFilter<$PrismaModel = never> = {
        equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
        in?: $Enums.Role[]
        notIn?: $Enums.Role[]
        not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
    }

    export type DateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[]
        notIn?: Date[] | string[]
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string
    }

    export type PostListRelationFilter = {
        every?: PostWhereInput
        some?: PostWhereInput
        none?: PostWhereInput
    }

    export type CommentListRelationFilter = {
        every?: CommentWhereInput
        some?: CommentWhereInput
        none?: CommentWhereInput
    }

    export type LikeListRelationFilter = {
        every?: LikeWhereInput
        some?: LikeWhereInput
        none?: LikeWhereInput
    }

    export type PostOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type CommentOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type LikeOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type UserOrderByRelevanceInput = {
        fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
        sort: SortOrder
        search: string
    }

    export type UserCountOrderByAggregateInput = {
        id?: SortOrder
        email?: SortOrder
        firstname?: SortOrder
        lastname?: SortOrder
        password?: SortOrder
        role?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type UserAvgOrderByAggregateInput = {
        id?: SortOrder
    }

    export type UserMaxOrderByAggregateInput = {
        id?: SortOrder
        email?: SortOrder
        firstname?: SortOrder
        lastname?: SortOrder
        password?: SortOrder
        role?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type UserMinOrderByAggregateInput = {
        id?: SortOrder
        email?: SortOrder
        firstname?: SortOrder
        lastname?: SortOrder
        password?: SortOrder
        role?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type UserSumOrderByAggregateInput = {
        id?: SortOrder
    }

    export type IntWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[]
        notIn?: number[]
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
        _count?: NestedIntFilter<$PrismaModel>
        _avg?: NestedFloatFilter<$PrismaModel>
        _sum?: NestedIntFilter<$PrismaModel>
        _min?: NestedIntFilter<$PrismaModel>
        _max?: NestedIntFilter<$PrismaModel>
    }

    export type StringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[]
        notIn?: string[]
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        search?: string
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedStringFilter<$PrismaModel>
        _max?: NestedStringFilter<$PrismaModel>
    }

    export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
        in?: $Enums.Role[]
        notIn?: $Enums.Role[]
        not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumRoleFilter<$PrismaModel>
        _max?: NestedEnumRoleFilter<$PrismaModel>
    }

    export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[]
        notIn?: Date[] | string[]
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedDateTimeFilter<$PrismaModel>
        _max?: NestedDateTimeFilter<$PrismaModel>
    }

    export type StringNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null
        in?: string[] | null
        notIn?: string[] | null
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        search?: string
        not?: NestedStringNullableFilter<$PrismaModel> | string | null
    }

    export type EnumPostStatusFilter<$PrismaModel = never> = {
        equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
        in?: $Enums.PostStatus[]
        notIn?: $Enums.PostStatus[]
        not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
    }

    export type IntNullableFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel> | null
        in?: number[] | null
        notIn?: number[] | null
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntNullableFilter<$PrismaModel> | number | null
    }

    export type UserScalarRelationFilter = {
        is?: UserWhereInput
        isNot?: UserWhereInput
    }

    export type CategoryNullableScalarRelationFilter = {
        is?: CategoryWhereInput | null
        isNot?: CategoryWhereInput | null
    }

    export type PostTagListRelationFilter = {
        every?: PostTagWhereInput
        some?: PostTagWhereInput
        none?: PostTagWhereInput
    }

    export type SortOrderInput = {
        sort: SortOrder
        nulls?: NullsOrder
    }

    export type PostTagOrderByRelationAggregateInput = {
        _count?: SortOrder
    }

    export type PostOrderByRelevanceInput = {
        fields: PostOrderByRelevanceFieldEnum | PostOrderByRelevanceFieldEnum[]
        sort: SortOrder
        search: string
    }

    export type PostCountOrderByAggregateInput = {
        id?: SortOrder
        title?: SortOrder
        content?: SortOrder
        description?: SortOrder
        imageUrl?: SortOrder
        status?: SortOrder
        views?: SortOrder
        userId?: SortOrder
        categoryId?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type PostAvgOrderByAggregateInput = {
        id?: SortOrder
        views?: SortOrder
        userId?: SortOrder
        categoryId?: SortOrder
    }

    export type PostMaxOrderByAggregateInput = {
        id?: SortOrder
        title?: SortOrder
        content?: SortOrder
        description?: SortOrder
        imageUrl?: SortOrder
        status?: SortOrder
        views?: SortOrder
        userId?: SortOrder
        categoryId?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type PostMinOrderByAggregateInput = {
        id?: SortOrder
        title?: SortOrder
        content?: SortOrder
        description?: SortOrder
        imageUrl?: SortOrder
        status?: SortOrder
        views?: SortOrder
        userId?: SortOrder
        categoryId?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type PostSumOrderByAggregateInput = {
        id?: SortOrder
        views?: SortOrder
        userId?: SortOrder
        categoryId?: SortOrder
    }

    export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null
        in?: string[] | null
        notIn?: string[] | null
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        search?: string
        not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedStringNullableFilter<$PrismaModel>
        _max?: NestedStringNullableFilter<$PrismaModel>
    }

    export type EnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
        in?: $Enums.PostStatus[]
        notIn?: $Enums.PostStatus[]
        not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumPostStatusFilter<$PrismaModel>
        _max?: NestedEnumPostStatusFilter<$PrismaModel>
    }

    export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel> | null
        in?: number[] | null
        notIn?: number[] | null
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _avg?: NestedFloatNullableFilter<$PrismaModel>
        _sum?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedIntNullableFilter<$PrismaModel>
        _max?: NestedIntNullableFilter<$PrismaModel>
    }

    export type PostScalarRelationFilter = {
        is?: PostWhereInput
        isNot?: PostWhereInput
    }

    export type CommentOrderByRelevanceInput = {
        fields: CommentOrderByRelevanceFieldEnum | CommentOrderByRelevanceFieldEnum[]
        sort: SortOrder
        search: string
    }

    export type CommentCountOrderByAggregateInput = {
        id?: SortOrder
        content?: SortOrder
        userId?: SortOrder
        postId?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type CommentAvgOrderByAggregateInput = {
        id?: SortOrder
        userId?: SortOrder
        postId?: SortOrder
    }

    export type CommentMaxOrderByAggregateInput = {
        id?: SortOrder
        content?: SortOrder
        userId?: SortOrder
        postId?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type CommentMinOrderByAggregateInput = {
        id?: SortOrder
        content?: SortOrder
        userId?: SortOrder
        postId?: SortOrder
        createdAt?: SortOrder
        updatedAt?: SortOrder
    }

    export type CommentSumOrderByAggregateInput = {
        id?: SortOrder
        userId?: SortOrder
        postId?: SortOrder
    }

    export type CategoryOrderByRelevanceInput = {
        fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
        sort: SortOrder
        search: string
    }

    export type CategoryCountOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
    }

    export type CategoryAvgOrderByAggregateInput = {
        id?: SortOrder
    }

    export type CategoryMaxOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
    }

    export type CategoryMinOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
    }

    export type CategorySumOrderByAggregateInput = {
        id?: SortOrder
    }

    export type LikeUserIdPostIdCompoundUniqueInput = {
        userId: number
        postId: number
    }

    export type LikeCountOrderByAggregateInput = {
        id?: SortOrder
        userId?: SortOrder
        postId?: SortOrder
    }

    export type LikeAvgOrderByAggregateInput = {
        id?: SortOrder
        userId?: SortOrder
        postId?: SortOrder
    }

    export type LikeMaxOrderByAggregateInput = {
        id?: SortOrder
        userId?: SortOrder
        postId?: SortOrder
    }

    export type LikeMinOrderByAggregateInput = {
        id?: SortOrder
        userId?: SortOrder
        postId?: SortOrder
    }

    export type LikeSumOrderByAggregateInput = {
        id?: SortOrder
        userId?: SortOrder
        postId?: SortOrder
    }

    export type TagOrderByRelevanceInput = {
        fields: TagOrderByRelevanceFieldEnum | TagOrderByRelevanceFieldEnum[]
        sort: SortOrder
        search: string
    }

    export type TagCountOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
    }

    export type TagAvgOrderByAggregateInput = {
        id?: SortOrder
    }

    export type TagMaxOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
    }

    export type TagMinOrderByAggregateInput = {
        id?: SortOrder
        name?: SortOrder
    }

    export type TagSumOrderByAggregateInput = {
        id?: SortOrder
    }

    export type TagScalarRelationFilter = {
        is?: TagWhereInput
        isNot?: TagWhereInput
    }

    export type PostTagPostIdTagIdCompoundUniqueInput = {
        postId: number
        tagId: number
    }

    export type PostTagCountOrderByAggregateInput = {
        postId?: SortOrder
        tagId?: SortOrder
    }

    export type PostTagAvgOrderByAggregateInput = {
        postId?: SortOrder
        tagId?: SortOrder
    }

    export type PostTagMaxOrderByAggregateInput = {
        postId?: SortOrder
        tagId?: SortOrder
    }

    export type PostTagMinOrderByAggregateInput = {
        postId?: SortOrder
        tagId?: SortOrder
    }

    export type PostTagSumOrderByAggregateInput = {
        postId?: SortOrder
        tagId?: SortOrder
    }

    export type PostCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
            | PostCreateWithoutUserInput[]
            | PostUncheckedCreateWithoutUserInput[]
        connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
        createMany?: PostCreateManyUserInputEnvelope
        connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    }

    export type CommentCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
            | CommentCreateWithoutUserInput[]
            | CommentUncheckedCreateWithoutUserInput[]
        connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
        createMany?: CommentCreateManyUserInputEnvelope
        connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    }

    export type LikeCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
            | LikeCreateWithoutUserInput[]
            | LikeUncheckedCreateWithoutUserInput[]
        connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
        createMany?: LikeCreateManyUserInputEnvelope
        connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    }

    export type PostUncheckedCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
            | PostCreateWithoutUserInput[]
            | PostUncheckedCreateWithoutUserInput[]
        connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
        createMany?: PostCreateManyUserInputEnvelope
        connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    }

    export type CommentUncheckedCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
            | CommentCreateWithoutUserInput[]
            | CommentUncheckedCreateWithoutUserInput[]
        connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
        createMany?: CommentCreateManyUserInputEnvelope
        connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    }

    export type LikeUncheckedCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
            | LikeCreateWithoutUserInput[]
            | LikeUncheckedCreateWithoutUserInput[]
        connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
        createMany?: LikeCreateManyUserInputEnvelope
        connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    }

    export type StringFieldUpdateOperationsInput = {
        set?: string
    }

    export type EnumRoleFieldUpdateOperationsInput = {
        set?: $Enums.Role
    }

    export type DateTimeFieldUpdateOperationsInput = {
        set?: Date | string
    }

    export type PostUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
            | PostCreateWithoutUserInput[]
            | PostUncheckedCreateWithoutUserInput[]
        connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
        upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
        createMany?: PostCreateManyUserInputEnvelope
        set?: PostWhereUniqueInput | PostWhereUniqueInput[]
        disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
        delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
        connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
        update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
        updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
        deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
    }

    export type CommentUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
            | CommentCreateWithoutUserInput[]
            | CommentUncheckedCreateWithoutUserInput[]
        connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
        upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
        createMany?: CommentCreateManyUserInputEnvelope
        set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
        disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
        delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
        connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
        update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
        updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
        deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
    }

    export type LikeUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
            | LikeCreateWithoutUserInput[]
            | LikeUncheckedCreateWithoutUserInput[]
        connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
        upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
        createMany?: LikeCreateManyUserInputEnvelope
        set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
        disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
        delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
        connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
        update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
        updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
        deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
    }

    export type IntFieldUpdateOperationsInput = {
        set?: number
        increment?: number
        decrement?: number
        multiply?: number
        divide?: number
    }

    export type PostUncheckedUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
            | PostCreateWithoutUserInput[]
            | PostUncheckedCreateWithoutUserInput[]
        connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
        upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
        createMany?: PostCreateManyUserInputEnvelope
        set?: PostWhereUniqueInput | PostWhereUniqueInput[]
        disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
        delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
        connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
        update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
        updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
        deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
    }

    export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
            | CommentCreateWithoutUserInput[]
            | CommentUncheckedCreateWithoutUserInput[]
        connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
        upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
        createMany?: CommentCreateManyUserInputEnvelope
        set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
        disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
        delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
        connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
        update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
        updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
        deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
    }

    export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
            | LikeCreateWithoutUserInput[]
            | LikeUncheckedCreateWithoutUserInput[]
        connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
        upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
        createMany?: LikeCreateManyUserInputEnvelope
        set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
        disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
        delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
        connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
        update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
        updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
        deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
    }

    export type UserCreateNestedOneWithoutPostsInput = {
        create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
        connectOrCreate?: UserCreateOrConnectWithoutPostsInput
        connect?: UserWhereUniqueInput
    }

    export type CommentCreateNestedManyWithoutPostInput = {
        create?:
            | XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
            | CommentCreateWithoutPostInput[]
            | CommentUncheckedCreateWithoutPostInput[]
        connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
        createMany?: CommentCreateManyPostInputEnvelope
        connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    }

    export type CategoryCreateNestedOneWithoutPostsInput = {
        create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
        connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
        connect?: CategoryWhereUniqueInput
    }

    export type LikeCreateNestedManyWithoutPostInput = {
        create?:
            | XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput>
            | LikeCreateWithoutPostInput[]
            | LikeUncheckedCreateWithoutPostInput[]
        connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[]
        createMany?: LikeCreateManyPostInputEnvelope
        connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    }

    export type PostTagCreateNestedManyWithoutPostInput = {
        create?:
            | XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
            | PostTagCreateWithoutPostInput[]
            | PostTagUncheckedCreateWithoutPostInput[]
        connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
        createMany?: PostTagCreateManyPostInputEnvelope
        connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    }

    export type CommentUncheckedCreateNestedManyWithoutPostInput = {
        create?:
            | XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
            | CommentCreateWithoutPostInput[]
            | CommentUncheckedCreateWithoutPostInput[]
        connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
        createMany?: CommentCreateManyPostInputEnvelope
        connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    }

    export type LikeUncheckedCreateNestedManyWithoutPostInput = {
        create?:
            | XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput>
            | LikeCreateWithoutPostInput[]
            | LikeUncheckedCreateWithoutPostInput[]
        connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[]
        createMany?: LikeCreateManyPostInputEnvelope
        connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    }

    export type PostTagUncheckedCreateNestedManyWithoutPostInput = {
        create?:
            | XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
            | PostTagCreateWithoutPostInput[]
            | PostTagUncheckedCreateWithoutPostInput[]
        connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
        createMany?: PostTagCreateManyPostInputEnvelope
        connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    }

    export type NullableStringFieldUpdateOperationsInput = {
        set?: string | null
    }

    export type EnumPostStatusFieldUpdateOperationsInput = {
        set?: $Enums.PostStatus
    }

    export type UserUpdateOneRequiredWithoutPostsNestedInput = {
        create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
        connectOrCreate?: UserCreateOrConnectWithoutPostsInput
        upsert?: UserUpsertWithoutPostsInput
        connect?: UserWhereUniqueInput
        update?: XOR<
            XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>,
            UserUncheckedUpdateWithoutPostsInput
        >
    }

    export type CommentUpdateManyWithoutPostNestedInput = {
        create?:
            | XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
            | CommentCreateWithoutPostInput[]
            | CommentUncheckedCreateWithoutPostInput[]
        connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
        upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
        createMany?: CommentCreateManyPostInputEnvelope
        set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
        disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
        delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
        connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
        update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
        updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
        deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
    }

    export type CategoryUpdateOneWithoutPostsNestedInput = {
        create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
        connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
        upsert?: CategoryUpsertWithoutPostsInput
        disconnect?: CategoryWhereInput | boolean
        delete?: CategoryWhereInput | boolean
        connect?: CategoryWhereUniqueInput
        update?: XOR<
            XOR<CategoryUpdateToOneWithWhereWithoutPostsInput, CategoryUpdateWithoutPostsInput>,
            CategoryUncheckedUpdateWithoutPostsInput
        >
    }

    export type LikeUpdateManyWithoutPostNestedInput = {
        create?:
            | XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput>
            | LikeCreateWithoutPostInput[]
            | LikeUncheckedCreateWithoutPostInput[]
        connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[]
        upsert?: LikeUpsertWithWhereUniqueWithoutPostInput | LikeUpsertWithWhereUniqueWithoutPostInput[]
        createMany?: LikeCreateManyPostInputEnvelope
        set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
        disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
        delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
        connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
        update?: LikeUpdateWithWhereUniqueWithoutPostInput | LikeUpdateWithWhereUniqueWithoutPostInput[]
        updateMany?: LikeUpdateManyWithWhereWithoutPostInput | LikeUpdateManyWithWhereWithoutPostInput[]
        deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
    }

    export type PostTagUpdateManyWithoutPostNestedInput = {
        create?:
            | XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
            | PostTagCreateWithoutPostInput[]
            | PostTagUncheckedCreateWithoutPostInput[]
        connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
        upsert?: PostTagUpsertWithWhereUniqueWithoutPostInput | PostTagUpsertWithWhereUniqueWithoutPostInput[]
        createMany?: PostTagCreateManyPostInputEnvelope
        set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
        disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
        delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
        connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
        update?: PostTagUpdateWithWhereUniqueWithoutPostInput | PostTagUpdateWithWhereUniqueWithoutPostInput[]
        updateMany?: PostTagUpdateManyWithWhereWithoutPostInput | PostTagUpdateManyWithWhereWithoutPostInput[]
        deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
    }

    export type NullableIntFieldUpdateOperationsInput = {
        set?: number | null
        increment?: number
        decrement?: number
        multiply?: number
        divide?: number
    }

    export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
        create?:
            | XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
            | CommentCreateWithoutPostInput[]
            | CommentUncheckedCreateWithoutPostInput[]
        connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
        upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
        createMany?: CommentCreateManyPostInputEnvelope
        set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
        disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
        delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
        connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
        update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
        updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
        deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
    }

    export type LikeUncheckedUpdateManyWithoutPostNestedInput = {
        create?:
            | XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput>
            | LikeCreateWithoutPostInput[]
            | LikeUncheckedCreateWithoutPostInput[]
        connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[]
        upsert?: LikeUpsertWithWhereUniqueWithoutPostInput | LikeUpsertWithWhereUniqueWithoutPostInput[]
        createMany?: LikeCreateManyPostInputEnvelope
        set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
        disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
        delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
        connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
        update?: LikeUpdateWithWhereUniqueWithoutPostInput | LikeUpdateWithWhereUniqueWithoutPostInput[]
        updateMany?: LikeUpdateManyWithWhereWithoutPostInput | LikeUpdateManyWithWhereWithoutPostInput[]
        deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
    }

    export type PostTagUncheckedUpdateManyWithoutPostNestedInput = {
        create?:
            | XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
            | PostTagCreateWithoutPostInput[]
            | PostTagUncheckedCreateWithoutPostInput[]
        connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
        upsert?: PostTagUpsertWithWhereUniqueWithoutPostInput | PostTagUpsertWithWhereUniqueWithoutPostInput[]
        createMany?: PostTagCreateManyPostInputEnvelope
        set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
        disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
        delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
        connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
        update?: PostTagUpdateWithWhereUniqueWithoutPostInput | PostTagUpdateWithWhereUniqueWithoutPostInput[]
        updateMany?: PostTagUpdateManyWithWhereWithoutPostInput | PostTagUpdateManyWithWhereWithoutPostInput[]
        deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
    }

    export type UserCreateNestedOneWithoutCommentsInput = {
        create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
        connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
        connect?: UserWhereUniqueInput
    }

    export type PostCreateNestedOneWithoutCommentsInput = {
        create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
        connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
        connect?: PostWhereUniqueInput
    }

    export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
        create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
        connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
        upsert?: UserUpsertWithoutCommentsInput
        connect?: UserWhereUniqueInput
        update?: XOR<
            XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>,
            UserUncheckedUpdateWithoutCommentsInput
        >
    }

    export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
        create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
        connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
        upsert?: PostUpsertWithoutCommentsInput
        connect?: PostWhereUniqueInput
        update?: XOR<
            XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>,
            PostUncheckedUpdateWithoutCommentsInput
        >
    }

    export type PostCreateNestedManyWithoutCategoryInput = {
        create?:
            | XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput>
            | PostCreateWithoutCategoryInput[]
            | PostUncheckedCreateWithoutCategoryInput[]
        connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
        createMany?: PostCreateManyCategoryInputEnvelope
        connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    }

    export type PostUncheckedCreateNestedManyWithoutCategoryInput = {
        create?:
            | XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput>
            | PostCreateWithoutCategoryInput[]
            | PostUncheckedCreateWithoutCategoryInput[]
        connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
        createMany?: PostCreateManyCategoryInputEnvelope
        connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    }

    export type PostUpdateManyWithoutCategoryNestedInput = {
        create?:
            | XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput>
            | PostCreateWithoutCategoryInput[]
            | PostUncheckedCreateWithoutCategoryInput[]
        connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
        upsert?: PostUpsertWithWhereUniqueWithoutCategoryInput | PostUpsertWithWhereUniqueWithoutCategoryInput[]
        createMany?: PostCreateManyCategoryInputEnvelope
        set?: PostWhereUniqueInput | PostWhereUniqueInput[]
        disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
        delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
        connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
        update?: PostUpdateWithWhereUniqueWithoutCategoryInput | PostUpdateWithWhereUniqueWithoutCategoryInput[]
        updateMany?: PostUpdateManyWithWhereWithoutCategoryInput | PostUpdateManyWithWhereWithoutCategoryInput[]
        deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
    }

    export type PostUncheckedUpdateManyWithoutCategoryNestedInput = {
        create?:
            | XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput>
            | PostCreateWithoutCategoryInput[]
            | PostUncheckedCreateWithoutCategoryInput[]
        connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
        upsert?: PostUpsertWithWhereUniqueWithoutCategoryInput | PostUpsertWithWhereUniqueWithoutCategoryInput[]
        createMany?: PostCreateManyCategoryInputEnvelope
        set?: PostWhereUniqueInput | PostWhereUniqueInput[]
        disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
        delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
        connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
        update?: PostUpdateWithWhereUniqueWithoutCategoryInput | PostUpdateWithWhereUniqueWithoutCategoryInput[]
        updateMany?: PostUpdateManyWithWhereWithoutCategoryInput | PostUpdateManyWithWhereWithoutCategoryInput[]
        deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
    }

    export type UserCreateNestedOneWithoutLikesInput = {
        create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
        connectOrCreate?: UserCreateOrConnectWithoutLikesInput
        connect?: UserWhereUniqueInput
    }

    export type PostCreateNestedOneWithoutLikesInput = {
        create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
        connectOrCreate?: PostCreateOrConnectWithoutLikesInput
        connect?: PostWhereUniqueInput
    }

    export type UserUpdateOneRequiredWithoutLikesNestedInput = {
        create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
        connectOrCreate?: UserCreateOrConnectWithoutLikesInput
        upsert?: UserUpsertWithoutLikesInput
        connect?: UserWhereUniqueInput
        update?: XOR<
            XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>,
            UserUncheckedUpdateWithoutLikesInput
        >
    }

    export type PostUpdateOneRequiredWithoutLikesNestedInput = {
        create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
        connectOrCreate?: PostCreateOrConnectWithoutLikesInput
        upsert?: PostUpsertWithoutLikesInput
        connect?: PostWhereUniqueInput
        update?: XOR<
            XOR<PostUpdateToOneWithWhereWithoutLikesInput, PostUpdateWithoutLikesInput>,
            PostUncheckedUpdateWithoutLikesInput
        >
    }

    export type PostTagCreateNestedManyWithoutTagInput = {
        create?:
            | XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
            | PostTagCreateWithoutTagInput[]
            | PostTagUncheckedCreateWithoutTagInput[]
        connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
        createMany?: PostTagCreateManyTagInputEnvelope
        connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    }

    export type PostTagUncheckedCreateNestedManyWithoutTagInput = {
        create?:
            | XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
            | PostTagCreateWithoutTagInput[]
            | PostTagUncheckedCreateWithoutTagInput[]
        connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
        createMany?: PostTagCreateManyTagInputEnvelope
        connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    }

    export type PostTagUpdateManyWithoutTagNestedInput = {
        create?:
            | XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
            | PostTagCreateWithoutTagInput[]
            | PostTagUncheckedCreateWithoutTagInput[]
        connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
        upsert?: PostTagUpsertWithWhereUniqueWithoutTagInput | PostTagUpsertWithWhereUniqueWithoutTagInput[]
        createMany?: PostTagCreateManyTagInputEnvelope
        set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
        disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
        delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
        connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
        update?: PostTagUpdateWithWhereUniqueWithoutTagInput | PostTagUpdateWithWhereUniqueWithoutTagInput[]
        updateMany?: PostTagUpdateManyWithWhereWithoutTagInput | PostTagUpdateManyWithWhereWithoutTagInput[]
        deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
    }

    export type PostTagUncheckedUpdateManyWithoutTagNestedInput = {
        create?:
            | XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
            | PostTagCreateWithoutTagInput[]
            | PostTagUncheckedCreateWithoutTagInput[]
        connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
        upsert?: PostTagUpsertWithWhereUniqueWithoutTagInput | PostTagUpsertWithWhereUniqueWithoutTagInput[]
        createMany?: PostTagCreateManyTagInputEnvelope
        set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
        disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
        delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
        connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
        update?: PostTagUpdateWithWhereUniqueWithoutTagInput | PostTagUpdateWithWhereUniqueWithoutTagInput[]
        updateMany?: PostTagUpdateManyWithWhereWithoutTagInput | PostTagUpdateManyWithWhereWithoutTagInput[]
        deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
    }

    export type PostCreateNestedOneWithoutPostTagsInput = {
        create?: XOR<PostCreateWithoutPostTagsInput, PostUncheckedCreateWithoutPostTagsInput>
        connectOrCreate?: PostCreateOrConnectWithoutPostTagsInput
        connect?: PostWhereUniqueInput
    }

    export type TagCreateNestedOneWithoutPostsInput = {
        create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
        connectOrCreate?: TagCreateOrConnectWithoutPostsInput
        connect?: TagWhereUniqueInput
    }

    export type PostUpdateOneRequiredWithoutPostTagsNestedInput = {
        create?: XOR<PostCreateWithoutPostTagsInput, PostUncheckedCreateWithoutPostTagsInput>
        connectOrCreate?: PostCreateOrConnectWithoutPostTagsInput
        upsert?: PostUpsertWithoutPostTagsInput
        connect?: PostWhereUniqueInput
        update?: XOR<
            XOR<PostUpdateToOneWithWhereWithoutPostTagsInput, PostUpdateWithoutPostTagsInput>,
            PostUncheckedUpdateWithoutPostTagsInput
        >
    }

    export type TagUpdateOneRequiredWithoutPostsNestedInput = {
        create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
        connectOrCreate?: TagCreateOrConnectWithoutPostsInput
        upsert?: TagUpsertWithoutPostsInput
        connect?: TagWhereUniqueInput
        update?: XOR<
            XOR<TagUpdateToOneWithWhereWithoutPostsInput, TagUpdateWithoutPostsInput>,
            TagUncheckedUpdateWithoutPostsInput
        >
    }

    export type NestedIntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[]
        notIn?: number[]
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntFilter<$PrismaModel> | number
    }

    export type NestedStringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[]
        notIn?: string[]
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        search?: string
        not?: NestedStringFilter<$PrismaModel> | string
    }

    export type NestedEnumRoleFilter<$PrismaModel = never> = {
        equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
        in?: $Enums.Role[]
        notIn?: $Enums.Role[]
        not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
    }

    export type NestedDateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[]
        notIn?: Date[] | string[]
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string
    }

    export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>
        in?: number[]
        notIn?: number[]
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
        _count?: NestedIntFilter<$PrismaModel>
        _avg?: NestedFloatFilter<$PrismaModel>
        _sum?: NestedIntFilter<$PrismaModel>
        _min?: NestedIntFilter<$PrismaModel>
        _max?: NestedIntFilter<$PrismaModel>
    }

    export type NestedFloatFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>
        in?: number[]
        notIn?: number[]
        lt?: number | FloatFieldRefInput<$PrismaModel>
        lte?: number | FloatFieldRefInput<$PrismaModel>
        gt?: number | FloatFieldRefInput<$PrismaModel>
        gte?: number | FloatFieldRefInput<$PrismaModel>
        not?: NestedFloatFilter<$PrismaModel> | number
    }

    export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>
        in?: string[]
        notIn?: string[]
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        search?: string
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedStringFilter<$PrismaModel>
        _max?: NestedStringFilter<$PrismaModel>
    }

    export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
        in?: $Enums.Role[]
        notIn?: $Enums.Role[]
        not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumRoleFilter<$PrismaModel>
        _max?: NestedEnumRoleFilter<$PrismaModel>
    }

    export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        in?: Date[] | string[]
        notIn?: Date[] | string[]
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedDateTimeFilter<$PrismaModel>
        _max?: NestedDateTimeFilter<$PrismaModel>
    }

    export type NestedStringNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null
        in?: string[] | null
        notIn?: string[] | null
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        search?: string
        not?: NestedStringNullableFilter<$PrismaModel> | string | null
    }

    export type NestedEnumPostStatusFilter<$PrismaModel = never> = {
        equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
        in?: $Enums.PostStatus[]
        notIn?: $Enums.PostStatus[]
        not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
    }

    export type NestedIntNullableFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel> | null
        in?: number[] | null
        notIn?: number[] | null
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntNullableFilter<$PrismaModel> | number | null
    }

    export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null
        in?: string[] | null
        notIn?: string[] | null
        lt?: string | StringFieldRefInput<$PrismaModel>
        lte?: string | StringFieldRefInput<$PrismaModel>
        gt?: string | StringFieldRefInput<$PrismaModel>
        gte?: string | StringFieldRefInput<$PrismaModel>
        contains?: string | StringFieldRefInput<$PrismaModel>
        startsWith?: string | StringFieldRefInput<$PrismaModel>
        endsWith?: string | StringFieldRefInput<$PrismaModel>
        search?: string
        not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedStringNullableFilter<$PrismaModel>
        _max?: NestedStringNullableFilter<$PrismaModel>
    }

    export type NestedEnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
        in?: $Enums.PostStatus[]
        notIn?: $Enums.PostStatus[]
        not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
        _count?: NestedIntFilter<$PrismaModel>
        _min?: NestedEnumPostStatusFilter<$PrismaModel>
        _max?: NestedEnumPostStatusFilter<$PrismaModel>
    }

    export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel> | null
        in?: number[] | null
        notIn?: number[] | null
        lt?: number | IntFieldRefInput<$PrismaModel>
        lte?: number | IntFieldRefInput<$PrismaModel>
        gt?: number | IntFieldRefInput<$PrismaModel>
        gte?: number | IntFieldRefInput<$PrismaModel>
        not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
        _count?: NestedIntNullableFilter<$PrismaModel>
        _avg?: NestedFloatNullableFilter<$PrismaModel>
        _sum?: NestedIntNullableFilter<$PrismaModel>
        _min?: NestedIntNullableFilter<$PrismaModel>
        _max?: NestedIntNullableFilter<$PrismaModel>
    }

    export type NestedFloatNullableFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel> | null
        in?: number[] | null
        notIn?: number[] | null
        lt?: number | FloatFieldRefInput<$PrismaModel>
        lte?: number | FloatFieldRefInput<$PrismaModel>
        gt?: number | FloatFieldRefInput<$PrismaModel>
        gte?: number | FloatFieldRefInput<$PrismaModel>
        not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    }

    export type PostCreateWithoutUserInput = {
        title: string
        content: string
        description?: string | null
        imageUrl?: string | null
        status?: $Enums.PostStatus
        views?: number
        createdAt?: Date | string
        updatedAt?: Date | string
        comments?: CommentCreateNestedManyWithoutPostInput
        category?: CategoryCreateNestedOneWithoutPostsInput
        likes?: LikeCreateNestedManyWithoutPostInput
        postTags?: PostTagCreateNestedManyWithoutPostInput
    }

    export type PostUncheckedCreateWithoutUserInput = {
        id?: number
        title: string
        content: string
        description?: string | null
        imageUrl?: string | null
        status?: $Enums.PostStatus
        views?: number
        categoryId?: number | null
        createdAt?: Date | string
        updatedAt?: Date | string
        comments?: CommentUncheckedCreateNestedManyWithoutPostInput
        likes?: LikeUncheckedCreateNestedManyWithoutPostInput
        postTags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    }

    export type PostCreateOrConnectWithoutUserInput = {
        where: PostWhereUniqueInput
        create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
    }

    export type PostCreateManyUserInputEnvelope = {
        data: PostCreateManyUserInput | PostCreateManyUserInput[]
        skipDuplicates?: boolean
    }

    export type CommentCreateWithoutUserInput = {
        content: string
        createdAt?: Date | string
        updatedAt?: Date | string
        post: PostCreateNestedOneWithoutCommentsInput
    }

    export type CommentUncheckedCreateWithoutUserInput = {
        id?: number
        content: string
        postId: number
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type CommentCreateOrConnectWithoutUserInput = {
        where: CommentWhereUniqueInput
        create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
    }

    export type CommentCreateManyUserInputEnvelope = {
        data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
        skipDuplicates?: boolean
    }

    export type LikeCreateWithoutUserInput = {
        post: PostCreateNestedOneWithoutLikesInput
    }

    export type LikeUncheckedCreateWithoutUserInput = {
        id?: number
        postId: number
    }

    export type LikeCreateOrConnectWithoutUserInput = {
        where: LikeWhereUniqueInput
        create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
    }

    export type LikeCreateManyUserInputEnvelope = {
        data: LikeCreateManyUserInput | LikeCreateManyUserInput[]
        skipDuplicates?: boolean
    }

    export type PostUpsertWithWhereUniqueWithoutUserInput = {
        where: PostWhereUniqueInput
        update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
        create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
    }

    export type PostUpdateWithWhereUniqueWithoutUserInput = {
        where: PostWhereUniqueInput
        data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    }

    export type PostUpdateManyWithWhereWithoutUserInput = {
        where: PostScalarWhereInput
        data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
    }

    export type PostScalarWhereInput = {
        AND?: PostScalarWhereInput | PostScalarWhereInput[]
        OR?: PostScalarWhereInput[]
        NOT?: PostScalarWhereInput | PostScalarWhereInput[]
        id?: IntFilter<'Post'> | number
        title?: StringFilter<'Post'> | string
        content?: StringFilter<'Post'> | string
        description?: StringNullableFilter<'Post'> | string | null
        imageUrl?: StringNullableFilter<'Post'> | string | null
        status?: EnumPostStatusFilter<'Post'> | $Enums.PostStatus
        views?: IntFilter<'Post'> | number
        userId?: IntFilter<'Post'> | number
        categoryId?: IntNullableFilter<'Post'> | number | null
        createdAt?: DateTimeFilter<'Post'> | Date | string
        updatedAt?: DateTimeFilter<'Post'> | Date | string
    }

    export type CommentUpsertWithWhereUniqueWithoutUserInput = {
        where: CommentWhereUniqueInput
        update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
        create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
    }

    export type CommentUpdateWithWhereUniqueWithoutUserInput = {
        where: CommentWhereUniqueInput
        data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    }

    export type CommentUpdateManyWithWhereWithoutUserInput = {
        where: CommentScalarWhereInput
        data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
    }

    export type CommentScalarWhereInput = {
        AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
        OR?: CommentScalarWhereInput[]
        NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
        id?: IntFilter<'Comment'> | number
        content?: StringFilter<'Comment'> | string
        userId?: IntFilter<'Comment'> | number
        postId?: IntFilter<'Comment'> | number
        createdAt?: DateTimeFilter<'Comment'> | Date | string
        updatedAt?: DateTimeFilter<'Comment'> | Date | string
    }

    export type LikeUpsertWithWhereUniqueWithoutUserInput = {
        where: LikeWhereUniqueInput
        update: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
        create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
    }

    export type LikeUpdateWithWhereUniqueWithoutUserInput = {
        where: LikeWhereUniqueInput
        data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
    }

    export type LikeUpdateManyWithWhereWithoutUserInput = {
        where: LikeScalarWhereInput
        data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutUserInput>
    }

    export type LikeScalarWhereInput = {
        AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
        OR?: LikeScalarWhereInput[]
        NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
        id?: IntFilter<'Like'> | number
        userId?: IntFilter<'Like'> | number
        postId?: IntFilter<'Like'> | number
    }

    export type UserCreateWithoutPostsInput = {
        email: string
        firstname: string
        lastname: string
        password: string
        role?: $Enums.Role
        createdAt?: Date | string
        updatedAt?: Date | string
        comments?: CommentCreateNestedManyWithoutUserInput
        likes?: LikeCreateNestedManyWithoutUserInput
    }

    export type UserUncheckedCreateWithoutPostsInput = {
        id?: number
        email: string
        firstname: string
        lastname: string
        password: string
        role?: $Enums.Role
        createdAt?: Date | string
        updatedAt?: Date | string
        comments?: CommentUncheckedCreateNestedManyWithoutUserInput
        likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    }

    export type UserCreateOrConnectWithoutPostsInput = {
        where: UserWhereUniqueInput
        create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    }

    export type CommentCreateWithoutPostInput = {
        content: string
        createdAt?: Date | string
        updatedAt?: Date | string
        user: UserCreateNestedOneWithoutCommentsInput
    }

    export type CommentUncheckedCreateWithoutPostInput = {
        id?: number
        content: string
        userId: number
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type CommentCreateOrConnectWithoutPostInput = {
        where: CommentWhereUniqueInput
        create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
    }

    export type CommentCreateManyPostInputEnvelope = {
        data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
        skipDuplicates?: boolean
    }

    export type CategoryCreateWithoutPostsInput = {
        name: string
    }

    export type CategoryUncheckedCreateWithoutPostsInput = {
        id?: number
        name: string
    }

    export type CategoryCreateOrConnectWithoutPostsInput = {
        where: CategoryWhereUniqueInput
        create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    }

    export type LikeCreateWithoutPostInput = {
        user: UserCreateNestedOneWithoutLikesInput
    }

    export type LikeUncheckedCreateWithoutPostInput = {
        id?: number
        userId: number
    }

    export type LikeCreateOrConnectWithoutPostInput = {
        where: LikeWhereUniqueInput
        create: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput>
    }

    export type LikeCreateManyPostInputEnvelope = {
        data: LikeCreateManyPostInput | LikeCreateManyPostInput[]
        skipDuplicates?: boolean
    }

    export type PostTagCreateWithoutPostInput = {
        tag: TagCreateNestedOneWithoutPostsInput
    }

    export type PostTagUncheckedCreateWithoutPostInput = {
        tagId: number
    }

    export type PostTagCreateOrConnectWithoutPostInput = {
        where: PostTagWhereUniqueInput
        create: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
    }

    export type PostTagCreateManyPostInputEnvelope = {
        data: PostTagCreateManyPostInput | PostTagCreateManyPostInput[]
        skipDuplicates?: boolean
    }

    export type UserUpsertWithoutPostsInput = {
        update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
        create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
        where?: UserWhereInput
    }

    export type UserUpdateToOneWithWhereWithoutPostsInput = {
        where?: UserWhereInput
        data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    }

    export type UserUpdateWithoutPostsInput = {
        email?: StringFieldUpdateOperationsInput | string
        firstname?: StringFieldUpdateOperationsInput | string
        lastname?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        comments?: CommentUpdateManyWithoutUserNestedInput
        likes?: LikeUpdateManyWithoutUserNestedInput
    }

    export type UserUncheckedUpdateWithoutPostsInput = {
        id?: IntFieldUpdateOperationsInput | number
        email?: StringFieldUpdateOperationsInput | string
        firstname?: StringFieldUpdateOperationsInput | string
        lastname?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
        likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    }

    export type CommentUpsertWithWhereUniqueWithoutPostInput = {
        where: CommentWhereUniqueInput
        update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
        create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
    }

    export type CommentUpdateWithWhereUniqueWithoutPostInput = {
        where: CommentWhereUniqueInput
        data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    }

    export type CommentUpdateManyWithWhereWithoutPostInput = {
        where: CommentScalarWhereInput
        data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
    }

    export type CategoryUpsertWithoutPostsInput = {
        update: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
        create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
        where?: CategoryWhereInput
    }

    export type CategoryUpdateToOneWithWhereWithoutPostsInput = {
        where?: CategoryWhereInput
        data: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
    }

    export type CategoryUpdateWithoutPostsInput = {
        name?: StringFieldUpdateOperationsInput | string
    }

    export type CategoryUncheckedUpdateWithoutPostsInput = {
        id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
    }

    export type LikeUpsertWithWhereUniqueWithoutPostInput = {
        where: LikeWhereUniqueInput
        update: XOR<LikeUpdateWithoutPostInput, LikeUncheckedUpdateWithoutPostInput>
        create: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput>
    }

    export type LikeUpdateWithWhereUniqueWithoutPostInput = {
        where: LikeWhereUniqueInput
        data: XOR<LikeUpdateWithoutPostInput, LikeUncheckedUpdateWithoutPostInput>
    }

    export type LikeUpdateManyWithWhereWithoutPostInput = {
        where: LikeScalarWhereInput
        data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutPostInput>
    }

    export type PostTagUpsertWithWhereUniqueWithoutPostInput = {
        where: PostTagWhereUniqueInput
        update: XOR<PostTagUpdateWithoutPostInput, PostTagUncheckedUpdateWithoutPostInput>
        create: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
    }

    export type PostTagUpdateWithWhereUniqueWithoutPostInput = {
        where: PostTagWhereUniqueInput
        data: XOR<PostTagUpdateWithoutPostInput, PostTagUncheckedUpdateWithoutPostInput>
    }

    export type PostTagUpdateManyWithWhereWithoutPostInput = {
        where: PostTagScalarWhereInput
        data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyWithoutPostInput>
    }

    export type PostTagScalarWhereInput = {
        AND?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
        OR?: PostTagScalarWhereInput[]
        NOT?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
        postId?: IntFilter<'PostTag'> | number
        tagId?: IntFilter<'PostTag'> | number
    }

    export type UserCreateWithoutCommentsInput = {
        email: string
        firstname: string
        lastname: string
        password: string
        role?: $Enums.Role
        createdAt?: Date | string
        updatedAt?: Date | string
        posts?: PostCreateNestedManyWithoutUserInput
        likes?: LikeCreateNestedManyWithoutUserInput
    }

    export type UserUncheckedCreateWithoutCommentsInput = {
        id?: number
        email: string
        firstname: string
        lastname: string
        password: string
        role?: $Enums.Role
        createdAt?: Date | string
        updatedAt?: Date | string
        posts?: PostUncheckedCreateNestedManyWithoutUserInput
        likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    }

    export type UserCreateOrConnectWithoutCommentsInput = {
        where: UserWhereUniqueInput
        create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    }

    export type PostCreateWithoutCommentsInput = {
        title: string
        content: string
        description?: string | null
        imageUrl?: string | null
        status?: $Enums.PostStatus
        views?: number
        createdAt?: Date | string
        updatedAt?: Date | string
        user: UserCreateNestedOneWithoutPostsInput
        category?: CategoryCreateNestedOneWithoutPostsInput
        likes?: LikeCreateNestedManyWithoutPostInput
        postTags?: PostTagCreateNestedManyWithoutPostInput
    }

    export type PostUncheckedCreateWithoutCommentsInput = {
        id?: number
        title: string
        content: string
        description?: string | null
        imageUrl?: string | null
        status?: $Enums.PostStatus
        views?: number
        userId: number
        categoryId?: number | null
        createdAt?: Date | string
        updatedAt?: Date | string
        likes?: LikeUncheckedCreateNestedManyWithoutPostInput
        postTags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    }

    export type PostCreateOrConnectWithoutCommentsInput = {
        where: PostWhereUniqueInput
        create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    }

    export type UserUpsertWithoutCommentsInput = {
        update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
        create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
        where?: UserWhereInput
    }

    export type UserUpdateToOneWithWhereWithoutCommentsInput = {
        where?: UserWhereInput
        data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    }

    export type UserUpdateWithoutCommentsInput = {
        email?: StringFieldUpdateOperationsInput | string
        firstname?: StringFieldUpdateOperationsInput | string
        lastname?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        posts?: PostUpdateManyWithoutUserNestedInput
        likes?: LikeUpdateManyWithoutUserNestedInput
    }

    export type UserUncheckedUpdateWithoutCommentsInput = {
        id?: IntFieldUpdateOperationsInput | number
        email?: StringFieldUpdateOperationsInput | string
        firstname?: StringFieldUpdateOperationsInput | string
        lastname?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        posts?: PostUncheckedUpdateManyWithoutUserNestedInput
        likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    }

    export type PostUpsertWithoutCommentsInput = {
        update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
        create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
        where?: PostWhereInput
    }

    export type PostUpdateToOneWithWhereWithoutCommentsInput = {
        where?: PostWhereInput
        data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    }

    export type PostUpdateWithoutCommentsInput = {
        title?: StringFieldUpdateOperationsInput | string
        content?: StringFieldUpdateOperationsInput | string
        description?: NullableStringFieldUpdateOperationsInput | string | null
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
        views?: IntFieldUpdateOperationsInput | number
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        user?: UserUpdateOneRequiredWithoutPostsNestedInput
        category?: CategoryUpdateOneWithoutPostsNestedInput
        likes?: LikeUpdateManyWithoutPostNestedInput
        postTags?: PostTagUpdateManyWithoutPostNestedInput
    }

    export type PostUncheckedUpdateWithoutCommentsInput = {
        id?: IntFieldUpdateOperationsInput | number
        title?: StringFieldUpdateOperationsInput | string
        content?: StringFieldUpdateOperationsInput | string
        description?: NullableStringFieldUpdateOperationsInput | string | null
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
        views?: IntFieldUpdateOperationsInput | number
        userId?: IntFieldUpdateOperationsInput | number
        categoryId?: NullableIntFieldUpdateOperationsInput | number | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
        postTags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    }

    export type PostCreateWithoutCategoryInput = {
        title: string
        content: string
        description?: string | null
        imageUrl?: string | null
        status?: $Enums.PostStatus
        views?: number
        createdAt?: Date | string
        updatedAt?: Date | string
        user: UserCreateNestedOneWithoutPostsInput
        comments?: CommentCreateNestedManyWithoutPostInput
        likes?: LikeCreateNestedManyWithoutPostInput
        postTags?: PostTagCreateNestedManyWithoutPostInput
    }

    export type PostUncheckedCreateWithoutCategoryInput = {
        id?: number
        title: string
        content: string
        description?: string | null
        imageUrl?: string | null
        status?: $Enums.PostStatus
        views?: number
        userId: number
        createdAt?: Date | string
        updatedAt?: Date | string
        comments?: CommentUncheckedCreateNestedManyWithoutPostInput
        likes?: LikeUncheckedCreateNestedManyWithoutPostInput
        postTags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    }

    export type PostCreateOrConnectWithoutCategoryInput = {
        where: PostWhereUniqueInput
        create: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput>
    }

    export type PostCreateManyCategoryInputEnvelope = {
        data: PostCreateManyCategoryInput | PostCreateManyCategoryInput[]
        skipDuplicates?: boolean
    }

    export type PostUpsertWithWhereUniqueWithoutCategoryInput = {
        where: PostWhereUniqueInput
        update: XOR<PostUpdateWithoutCategoryInput, PostUncheckedUpdateWithoutCategoryInput>
        create: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput>
    }

    export type PostUpdateWithWhereUniqueWithoutCategoryInput = {
        where: PostWhereUniqueInput
        data: XOR<PostUpdateWithoutCategoryInput, PostUncheckedUpdateWithoutCategoryInput>
    }

    export type PostUpdateManyWithWhereWithoutCategoryInput = {
        where: PostScalarWhereInput
        data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCategoryInput>
    }

    export type UserCreateWithoutLikesInput = {
        email: string
        firstname: string
        lastname: string
        password: string
        role?: $Enums.Role
        createdAt?: Date | string
        updatedAt?: Date | string
        posts?: PostCreateNestedManyWithoutUserInput
        comments?: CommentCreateNestedManyWithoutUserInput
    }

    export type UserUncheckedCreateWithoutLikesInput = {
        id?: number
        email: string
        firstname: string
        lastname: string
        password: string
        role?: $Enums.Role
        createdAt?: Date | string
        updatedAt?: Date | string
        posts?: PostUncheckedCreateNestedManyWithoutUserInput
        comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    }

    export type UserCreateOrConnectWithoutLikesInput = {
        where: UserWhereUniqueInput
        create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    }

    export type PostCreateWithoutLikesInput = {
        title: string
        content: string
        description?: string | null
        imageUrl?: string | null
        status?: $Enums.PostStatus
        views?: number
        createdAt?: Date | string
        updatedAt?: Date | string
        user: UserCreateNestedOneWithoutPostsInput
        comments?: CommentCreateNestedManyWithoutPostInput
        category?: CategoryCreateNestedOneWithoutPostsInput
        postTags?: PostTagCreateNestedManyWithoutPostInput
    }

    export type PostUncheckedCreateWithoutLikesInput = {
        id?: number
        title: string
        content: string
        description?: string | null
        imageUrl?: string | null
        status?: $Enums.PostStatus
        views?: number
        userId: number
        categoryId?: number | null
        createdAt?: Date | string
        updatedAt?: Date | string
        comments?: CommentUncheckedCreateNestedManyWithoutPostInput
        postTags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    }

    export type PostCreateOrConnectWithoutLikesInput = {
        where: PostWhereUniqueInput
        create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    }

    export type UserUpsertWithoutLikesInput = {
        update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
        create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
        where?: UserWhereInput
    }

    export type UserUpdateToOneWithWhereWithoutLikesInput = {
        where?: UserWhereInput
        data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    }

    export type UserUpdateWithoutLikesInput = {
        email?: StringFieldUpdateOperationsInput | string
        firstname?: StringFieldUpdateOperationsInput | string
        lastname?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        posts?: PostUpdateManyWithoutUserNestedInput
        comments?: CommentUpdateManyWithoutUserNestedInput
    }

    export type UserUncheckedUpdateWithoutLikesInput = {
        id?: IntFieldUpdateOperationsInput | number
        email?: StringFieldUpdateOperationsInput | string
        firstname?: StringFieldUpdateOperationsInput | string
        lastname?: StringFieldUpdateOperationsInput | string
        password?: StringFieldUpdateOperationsInput | string
        role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        posts?: PostUncheckedUpdateManyWithoutUserNestedInput
        comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    }

    export type PostUpsertWithoutLikesInput = {
        update: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
        create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
        where?: PostWhereInput
    }

    export type PostUpdateToOneWithWhereWithoutLikesInput = {
        where?: PostWhereInput
        data: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
    }

    export type PostUpdateWithoutLikesInput = {
        title?: StringFieldUpdateOperationsInput | string
        content?: StringFieldUpdateOperationsInput | string
        description?: NullableStringFieldUpdateOperationsInput | string | null
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
        views?: IntFieldUpdateOperationsInput | number
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        user?: UserUpdateOneRequiredWithoutPostsNestedInput
        comments?: CommentUpdateManyWithoutPostNestedInput
        category?: CategoryUpdateOneWithoutPostsNestedInput
        postTags?: PostTagUpdateManyWithoutPostNestedInput
    }

    export type PostUncheckedUpdateWithoutLikesInput = {
        id?: IntFieldUpdateOperationsInput | number
        title?: StringFieldUpdateOperationsInput | string
        content?: StringFieldUpdateOperationsInput | string
        description?: NullableStringFieldUpdateOperationsInput | string | null
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
        views?: IntFieldUpdateOperationsInput | number
        userId?: IntFieldUpdateOperationsInput | number
        categoryId?: NullableIntFieldUpdateOperationsInput | number | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
        postTags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    }

    export type PostTagCreateWithoutTagInput = {
        post: PostCreateNestedOneWithoutPostTagsInput
    }

    export type PostTagUncheckedCreateWithoutTagInput = {
        postId: number
    }

    export type PostTagCreateOrConnectWithoutTagInput = {
        where: PostTagWhereUniqueInput
        create: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
    }

    export type PostTagCreateManyTagInputEnvelope = {
        data: PostTagCreateManyTagInput | PostTagCreateManyTagInput[]
        skipDuplicates?: boolean
    }

    export type PostTagUpsertWithWhereUniqueWithoutTagInput = {
        where: PostTagWhereUniqueInput
        update: XOR<PostTagUpdateWithoutTagInput, PostTagUncheckedUpdateWithoutTagInput>
        create: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
    }

    export type PostTagUpdateWithWhereUniqueWithoutTagInput = {
        where: PostTagWhereUniqueInput
        data: XOR<PostTagUpdateWithoutTagInput, PostTagUncheckedUpdateWithoutTagInput>
    }

    export type PostTagUpdateManyWithWhereWithoutTagInput = {
        where: PostTagScalarWhereInput
        data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyWithoutTagInput>
    }

    export type PostCreateWithoutPostTagsInput = {
        title: string
        content: string
        description?: string | null
        imageUrl?: string | null
        status?: $Enums.PostStatus
        views?: number
        createdAt?: Date | string
        updatedAt?: Date | string
        user: UserCreateNestedOneWithoutPostsInput
        comments?: CommentCreateNestedManyWithoutPostInput
        category?: CategoryCreateNestedOneWithoutPostsInput
        likes?: LikeCreateNestedManyWithoutPostInput
    }

    export type PostUncheckedCreateWithoutPostTagsInput = {
        id?: number
        title: string
        content: string
        description?: string | null
        imageUrl?: string | null
        status?: $Enums.PostStatus
        views?: number
        userId: number
        categoryId?: number | null
        createdAt?: Date | string
        updatedAt?: Date | string
        comments?: CommentUncheckedCreateNestedManyWithoutPostInput
        likes?: LikeUncheckedCreateNestedManyWithoutPostInput
    }

    export type PostCreateOrConnectWithoutPostTagsInput = {
        where: PostWhereUniqueInput
        create: XOR<PostCreateWithoutPostTagsInput, PostUncheckedCreateWithoutPostTagsInput>
    }

    export type TagCreateWithoutPostsInput = {
        name: string
    }

    export type TagUncheckedCreateWithoutPostsInput = {
        id?: number
        name: string
    }

    export type TagCreateOrConnectWithoutPostsInput = {
        where: TagWhereUniqueInput
        create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
    }

    export type PostUpsertWithoutPostTagsInput = {
        update: XOR<PostUpdateWithoutPostTagsInput, PostUncheckedUpdateWithoutPostTagsInput>
        create: XOR<PostCreateWithoutPostTagsInput, PostUncheckedCreateWithoutPostTagsInput>
        where?: PostWhereInput
    }

    export type PostUpdateToOneWithWhereWithoutPostTagsInput = {
        where?: PostWhereInput
        data: XOR<PostUpdateWithoutPostTagsInput, PostUncheckedUpdateWithoutPostTagsInput>
    }

    export type PostUpdateWithoutPostTagsInput = {
        title?: StringFieldUpdateOperationsInput | string
        content?: StringFieldUpdateOperationsInput | string
        description?: NullableStringFieldUpdateOperationsInput | string | null
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
        views?: IntFieldUpdateOperationsInput | number
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        user?: UserUpdateOneRequiredWithoutPostsNestedInput
        comments?: CommentUpdateManyWithoutPostNestedInput
        category?: CategoryUpdateOneWithoutPostsNestedInput
        likes?: LikeUpdateManyWithoutPostNestedInput
    }

    export type PostUncheckedUpdateWithoutPostTagsInput = {
        id?: IntFieldUpdateOperationsInput | number
        title?: StringFieldUpdateOperationsInput | string
        content?: StringFieldUpdateOperationsInput | string
        description?: NullableStringFieldUpdateOperationsInput | string | null
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
        views?: IntFieldUpdateOperationsInput | number
        userId?: IntFieldUpdateOperationsInput | number
        categoryId?: NullableIntFieldUpdateOperationsInput | number | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
        likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
    }

    export type TagUpsertWithoutPostsInput = {
        update: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>
        create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
        where?: TagWhereInput
    }

    export type TagUpdateToOneWithWhereWithoutPostsInput = {
        where?: TagWhereInput
        data: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>
    }

    export type TagUpdateWithoutPostsInput = {
        name?: StringFieldUpdateOperationsInput | string
    }

    export type TagUncheckedUpdateWithoutPostsInput = {
        id?: IntFieldUpdateOperationsInput | number
        name?: StringFieldUpdateOperationsInput | string
    }

    export type PostCreateManyUserInput = {
        id?: number
        title: string
        content: string
        description?: string | null
        imageUrl?: string | null
        status?: $Enums.PostStatus
        views?: number
        categoryId?: number | null
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type CommentCreateManyUserInput = {
        id?: number
        content: string
        postId: number
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type LikeCreateManyUserInput = {
        id?: number
        postId: number
    }

    export type PostUpdateWithoutUserInput = {
        title?: StringFieldUpdateOperationsInput | string
        content?: StringFieldUpdateOperationsInput | string
        description?: NullableStringFieldUpdateOperationsInput | string | null
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
        views?: IntFieldUpdateOperationsInput | number
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        comments?: CommentUpdateManyWithoutPostNestedInput
        category?: CategoryUpdateOneWithoutPostsNestedInput
        likes?: LikeUpdateManyWithoutPostNestedInput
        postTags?: PostTagUpdateManyWithoutPostNestedInput
    }

    export type PostUncheckedUpdateWithoutUserInput = {
        id?: IntFieldUpdateOperationsInput | number
        title?: StringFieldUpdateOperationsInput | string
        content?: StringFieldUpdateOperationsInput | string
        description?: NullableStringFieldUpdateOperationsInput | string | null
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
        views?: IntFieldUpdateOperationsInput | number
        categoryId?: NullableIntFieldUpdateOperationsInput | number | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
        likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
        postTags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    }

    export type PostUncheckedUpdateManyWithoutUserInput = {
        id?: IntFieldUpdateOperationsInput | number
        title?: StringFieldUpdateOperationsInput | string
        content?: StringFieldUpdateOperationsInput | string
        description?: NullableStringFieldUpdateOperationsInput | string | null
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
        views?: IntFieldUpdateOperationsInput | number
        categoryId?: NullableIntFieldUpdateOperationsInput | number | null
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type CommentUpdateWithoutUserInput = {
        content?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    }

    export type CommentUncheckedUpdateWithoutUserInput = {
        id?: IntFieldUpdateOperationsInput | number
        content?: StringFieldUpdateOperationsInput | string
        postId?: IntFieldUpdateOperationsInput | number
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type CommentUncheckedUpdateManyWithoutUserInput = {
        id?: IntFieldUpdateOperationsInput | number
        content?: StringFieldUpdateOperationsInput | string
        postId?: IntFieldUpdateOperationsInput | number
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type LikeUpdateWithoutUserInput = {
        post?: PostUpdateOneRequiredWithoutLikesNestedInput
    }

    export type LikeUncheckedUpdateWithoutUserInput = {
        id?: IntFieldUpdateOperationsInput | number
        postId?: IntFieldUpdateOperationsInput | number
    }

    export type LikeUncheckedUpdateManyWithoutUserInput = {
        id?: IntFieldUpdateOperationsInput | number
        postId?: IntFieldUpdateOperationsInput | number
    }

    export type CommentCreateManyPostInput = {
        id?: number
        content: string
        userId: number
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type LikeCreateManyPostInput = {
        id?: number
        userId: number
    }

    export type PostTagCreateManyPostInput = {
        tagId: number
    }

    export type CommentUpdateWithoutPostInput = {
        content?: StringFieldUpdateOperationsInput | string
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    }

    export type CommentUncheckedUpdateWithoutPostInput = {
        id?: IntFieldUpdateOperationsInput | number
        content?: StringFieldUpdateOperationsInput | string
        userId?: IntFieldUpdateOperationsInput | number
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type CommentUncheckedUpdateManyWithoutPostInput = {
        id?: IntFieldUpdateOperationsInput | number
        content?: StringFieldUpdateOperationsInput | string
        userId?: IntFieldUpdateOperationsInput | number
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type LikeUpdateWithoutPostInput = {
        user?: UserUpdateOneRequiredWithoutLikesNestedInput
    }

    export type LikeUncheckedUpdateWithoutPostInput = {
        id?: IntFieldUpdateOperationsInput | number
        userId?: IntFieldUpdateOperationsInput | number
    }

    export type LikeUncheckedUpdateManyWithoutPostInput = {
        id?: IntFieldUpdateOperationsInput | number
        userId?: IntFieldUpdateOperationsInput | number
    }

    export type PostTagUpdateWithoutPostInput = {
        tag?: TagUpdateOneRequiredWithoutPostsNestedInput
    }

    export type PostTagUncheckedUpdateWithoutPostInput = {
        tagId?: IntFieldUpdateOperationsInput | number
    }

    export type PostTagUncheckedUpdateManyWithoutPostInput = {
        tagId?: IntFieldUpdateOperationsInput | number
    }

    export type PostCreateManyCategoryInput = {
        id?: number
        title: string
        content: string
        description?: string | null
        imageUrl?: string | null
        status?: $Enums.PostStatus
        views?: number
        userId: number
        createdAt?: Date | string
        updatedAt?: Date | string
    }

    export type PostUpdateWithoutCategoryInput = {
        title?: StringFieldUpdateOperationsInput | string
        content?: StringFieldUpdateOperationsInput | string
        description?: NullableStringFieldUpdateOperationsInput | string | null
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
        views?: IntFieldUpdateOperationsInput | number
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        user?: UserUpdateOneRequiredWithoutPostsNestedInput
        comments?: CommentUpdateManyWithoutPostNestedInput
        likes?: LikeUpdateManyWithoutPostNestedInput
        postTags?: PostTagUpdateManyWithoutPostNestedInput
    }

    export type PostUncheckedUpdateWithoutCategoryInput = {
        id?: IntFieldUpdateOperationsInput | number
        title?: StringFieldUpdateOperationsInput | string
        content?: StringFieldUpdateOperationsInput | string
        description?: NullableStringFieldUpdateOperationsInput | string | null
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
        views?: IntFieldUpdateOperationsInput | number
        userId?: IntFieldUpdateOperationsInput | number
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
        comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
        likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
        postTags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    }

    export type PostUncheckedUpdateManyWithoutCategoryInput = {
        id?: IntFieldUpdateOperationsInput | number
        title?: StringFieldUpdateOperationsInput | string
        content?: StringFieldUpdateOperationsInput | string
        description?: NullableStringFieldUpdateOperationsInput | string | null
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
        status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
        views?: IntFieldUpdateOperationsInput | number
        userId?: IntFieldUpdateOperationsInput | number
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    }

    export type PostTagCreateManyTagInput = {
        postId: number
    }

    export type PostTagUpdateWithoutTagInput = {
        post?: PostUpdateOneRequiredWithoutPostTagsNestedInput
    }

    export type PostTagUncheckedUpdateWithoutTagInput = {
        postId?: IntFieldUpdateOperationsInput | number
    }

    export type PostTagUncheckedUpdateManyWithoutTagInput = {
        postId?: IntFieldUpdateOperationsInput | number
    }

    /**
     * Batch Payload for updateMany & deleteMany & createMany
     */

    export type BatchPayload = {
        count: number
    }

    /**
     * DMMF
     */
    export const dmmf: runtime.BaseDMMF
}
