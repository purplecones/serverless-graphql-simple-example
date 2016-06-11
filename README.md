install npm packages
```
npm install
```

change bucket name
```
"bucketName": "change.me.${stage}.${region}"
```

initialize serverless project
```
sls project init
```

deploy graphql endpoint
```
sls dash deploy
```

specify graphql endpoint url
```
var GRAPHQL_ENDPOINT = 'https://something.amazonaws.com';
```

deploy graphiql
```
npm run build
sls client deploy
```
