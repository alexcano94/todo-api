const express = require('express');
const app = express();
const port = 8000;
const panels = require('./src/routes/panels');
const lists = require('./src/routes/lists');
const todos = require('./src/routes/todos');
const auth = require('./src/routes/auth');

const errorMiddleware = require('./src/middlewares/error-middleware');
const protectMiddleware = require('./src/middlewares/protect-middleware');

app.use(express.json());


app.use('/auth', auth);

app.use(protectMiddleware);
app.use('/panel', panels);
app.use('/list', lists);
app.use('/todo', todos);


app.use(errorMiddleware);
app.listen(8000, '', () => {
  console.log(`App is running on port ${port}`);
});
