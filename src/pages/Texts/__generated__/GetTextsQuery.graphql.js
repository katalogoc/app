/**
 * @flow
 * @relayHash 4e13610a6920cf6b2a9cd630240e8479
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GetTextsQueryVariables = {||};
export type GetTextsQueryResponse = {|
  +texts: $ReadOnlyArray<{|
    +id: string,
    +title: ?string,
    +authors: ?$ReadOnlyArray<{|
      +id: ?string,
      +name: ?string,
    |}>,
  |}>
|};
export type GetTextsQuery = {|
  variables: GetTextsQueryVariables,
  response: GetTextsQueryResponse,
|};
*/


/*
query GetTextsQuery {
  texts {
    id
    title
    authors {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "texts",
    "storageKey": null,
    "args": null,
    "concreteType": "Text",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
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
          (v0/*: any*/),
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
    "name": "GetTextsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "GetTextsQuery",
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "GetTextsQuery",
    "id": null,
    "text": "query GetTextsQuery {\n  texts {\n    id\n    title\n    authors {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cd0470913b184be3097f6df55c5de247';
module.exports = node;
