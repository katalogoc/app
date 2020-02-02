export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Author = {
   __typename?: 'Author',
  id?: Maybe<Scalars['ID']>,
  xid?: Maybe<Scalars['ID']>,
  source?: Maybe<DataSource>,
  birthdate?: Maybe<Scalars['String']>,
  deathdate?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  alias: Array<Scalars['String']>,
  texts: Array<Text>,
  thumbnail?: Maybe<Scalars['String']>,
};

export type AuthorFilterInput = {
  operations: Array<AuthorFilterOperation>,
};

export type AuthorFilterOperation = {
  type: Operation,
  field: AuthorIndexedField,
  value: Scalars['String'],
};

export enum AuthorIndexedField {
  Xid = 'xid',
  Source = 'source',
  Name = 'name'
}

export enum DataSource {
  Gutenberg = 'GUTENBERG',
  Dbpedia = 'DBPEDIA',
  Katalogoc = 'KATALOGOC'
}

export type Mutation = {
   __typename?: 'Mutation',
  saveText: Scalars['ID'],
  saveAuthor: Scalars['ID'],
  deleteTexts: Array<Scalars['ID']>,
  deleteAuthors: Array<Scalars['ID']>,
};


export type MutationSaveTextArgs = {
  text: SaveTextInput
};


export type MutationSaveAuthorArgs = {
  author: SaveAuthorInput
};


export type MutationDeleteTextsArgs = {
  ids: Array<Scalars['ID']>
};


export type MutationDeleteAuthorsArgs = {
  ids: Array<Scalars['ID']>
};

export enum Operation {
  Eq = 'eq'
}

export type Query = {
   __typename?: 'Query',
  author?: Maybe<Author>,
  searchAuthorByName?: Maybe<Author>,
  authors: Array<Author>,
  texts: Array<Text>,
  text?: Maybe<Text>,
};


export type QueryAuthorArgs = {
  id: Scalars['ID']
};


export type QuerySearchAuthorByNameArgs = {
  name?: Maybe<Scalars['String']>
};


export type QueryAuthorsArgs = {
  filter?: Maybe<AuthorFilterInput>,
  options?: Maybe<QueryOptions>
};


export type QueryTextsArgs = {
  options?: Maybe<QueryOptions>
};


export type QueryTextArgs = {
  id: Scalars['ID']
};

export type QueryOptions = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
};

export type SaveAuthorInput = {
  id?: Maybe<Scalars['ID']>,
  xid?: Maybe<Scalars['ID']>,
  source?: Maybe<DataSource>,
  name?: Maybe<Scalars['String']>,
  alias: Array<Scalars['String']>,
  texts: Array<Scalars['String']>,
  birthdate?: Maybe<Scalars['String']>,
  deathdate?: Maybe<Scalars['String']>,
  thumbnail?: Maybe<Scalars['String']>,
};

export type SaveTextInput = {
  id?: Maybe<Scalars['ID']>,
  xid?: Maybe<Scalars['ID']>,
  source?: Maybe<DataSource>,
  title?: Maybe<Scalars['String']>,
  url: Scalars['String'],
  authors: Array<Scalars['String']>,
  subject: Array<Scalars['String']>,
};

export type Text = {
   __typename?: 'Text',
  id: Scalars['ID'],
  xid?: Maybe<Scalars['ID']>,
  source?: Maybe<DataSource>,
  url?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  authors?: Maybe<Array<Author>>,
  subject?: Maybe<Array<Scalars['String']>>,
};
