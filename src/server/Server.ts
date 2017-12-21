import * as express from 'express';
import {IServer} from "./IServer";
import * as bodyParser from 'body-parser';

export class Server implements IServer {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
        this.processError();
    }

    private middleware() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    private routes() {
        const wrap = fn => (req, res, next) => fn(req, res, next).catch(next);
        const router: express.Router = express.Router();
        router.get("/", wrap(async (req, res) => {
            res.status(200).json({result: "Hello World"})
        }));
        router.post("/", wrap(async (req, res) => {
            res.status(200).json({result: "Hello World"})
        }));
        router.put("/", wrap(async (req, res) => {
            res.status(200).json({result: "Hello World"})
        }));
        router.delete("/", wrap(async (req, res) => {
            res.status(200).json({result: "Hello World"})
        }));
        this.app.use(router);
    }

    private processError() {
        this.app.use((req: express.Request, res: express.Response, next: Function) => {
            const err: any = new Error('not_found');
            err.status = 404;
            next(err);
        });
        this.app.use((err: any, req: express.Request, res: express.Response) => {
            err.status = err.status || 500;
            console.error(`error on requst ${req.method} | ${req.url} | ${err.status}`);
            console.error(err.stack || `${err.message}`);
            err.message = err.status == 500 ? 'Something bad happened.' : err.message;
            res.status(err.status).send(err.message);
        });
    }

    public listen(port: number) {
        console.log('tt');
    }
}
