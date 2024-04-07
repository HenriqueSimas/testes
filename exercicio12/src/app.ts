import routes from './router/router'; 
import express from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import { engine } from 'express-handlebars';
import sass from 'node-sass-middleware';
dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 3333

app.engine('handlebars', engine({
  layoutsDir: `${__dirname}/views/layouts`,
  defaultLayout: 'main',
}));

app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.use(sass({
  src: `${__dirname}/../public/scss`,
  dest: `${__dirname}/../public/css`,
  outputStyle: "compressed",
  prefix: "/css",
  }));

  app.use("/css", express.static(`${__dirname}/../public/css`));

  app.use('/js', [
express.static(`${__dirname}/../public/js`),
express.static(`${__dirname}/../node_modules/bootstrap/dist/js`)
]);

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
