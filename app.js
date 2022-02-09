const express = require('express');
const app = express();
const port = 8000;

const panels = require('./src/routes/panels');
const lists = require('./src/routes/lists');
const todos = require('./src/routes/todos');

app.use(express.json());


app.use('/panel', panels);
app.use('/list', lists);
app.use('/todo', todos);

app.listen(8000, '', () => {
  console.log(`App is running on port ${port}`);
});
