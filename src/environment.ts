import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from 'relay-runtime';

const fetchQuery: FetchFunction = (operation, variables) => {
  return fetch(process.env.API_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const store = (window as any).store = new Store(new RecordSource());

const environment = new Environment({
  store,
  network: Network.create(fetchQuery),
});


export default environment;