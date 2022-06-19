import { handler } from './build/handler.js';
import express from 'express'
const app = express();
const port =  3000;
import path from 'path'

app.get('/user', (req, res) => {
  return res.send({user: 'John'})
})


// add a route that lives separately from the SvelteKit app


// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});