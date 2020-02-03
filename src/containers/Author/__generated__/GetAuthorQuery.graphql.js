/**
 * @flow
 * @relayHash 6ce65b8f61e2eb1dd8fff1186aa19f4d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GetAuthorQueryVariables = {|
  id: string
|};
export type GetAuthorQueryResponse = {|
  +author: ?{|
    +id: ?string,
    +name: ?string,
    +alias: $ReadOnlyArray<string>,
    +thumbnail: ?string,
    +texts: $ReadOnlyArray<{|
      +id: string,
      +title: ?string,
    |}>,
  |}
|};
export type GetAuthorQuery = {|
  variables: GetAuthorQueryVariables,
  response: GetAuthorQueryResponse,
|};
*/


/*
query GetAuthorQuery(
  $id: ID!
) {
  author(id: $id) {
    id
    name
    alias
    thumbnail
    texts {
      id
      title
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "author",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Author",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "alias",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "thumbnail",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "texts",
        "storageKey": null,
        "args": null,
        "concreteType": "Text",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "GetAuthorQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "GetAuthorQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "GetAuthorQuery",
    "id": null,
    "text": "query GetAuthorQuery(\n  $id: ID!\n) {\n  author(id: $id) {\n    id\n    name\n    alias\n    thumbnail\n    texts {\n      id\n      title\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '08a35c2c4b94c662ea4f4b1c9304f86a';
module.exports = node;
