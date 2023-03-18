import express, {Express, NextFunction, Request, Response} from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
import routes from "./routes";
import bodyParser from "body-parser";
import sequelize from "./utils/database";
import bearerTokenFilter from "./middleware/bearer-token.middleware";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors())

app.use(bearerTokenFilter)

routes(app);

(async () => {
    await sequelize.sync({ force: true})
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
})()


