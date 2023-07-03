const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

const app = express();

app.use(cors());

const schema = buildSchema(`
  type User {
    id: String
    name: String
  }

  type Query {
    user: User
  }
`);

const root = {
  user: () => {
    return {
      id: '1',
      name: 'John Doe',
    };
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
