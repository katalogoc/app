/**
 * @flow
 * @relayHash 3ace1a530173b586c60fb9b6027a9a24
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GetTextQueryVariables = {|
  id: string
|};
export type GetTextQueryResponse = {|
  +text: ?{|
    +id: string,
    +title: ?string,
    +url: ?string,
    +content: ?string,
    +authors: ?$ReadOnlyArray<{|
      +id: ?string,
      +name: ?string,
    |}>,
  |}
|};
export type GetTextQuery = {|
  variables: GetTextQueryVariables,
  response: GetTextQueryResponse,
|};
*/


/*
query GetTextQuery(
  $id: ID!
) {
  text(id: $id) {
    id
    title
    url
    content
    authors {
      id
      name
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
    "name": "text",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Text",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "url",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "content",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "authors",
        "storageKey": null,
        "args": null,
        "concreteType": "Author",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
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
    "name": "GetTextQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "GetTextQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "GetTextQuery",
    "id": null,
    "text": "query GetTextQuery(\n  $id: ID!\n) {\n  text(id: $id) {\n    id\n    title\n    url\n    content\n    authors {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd08ee8bcc92e5236486423d934746dfd';
module.exports = node;
