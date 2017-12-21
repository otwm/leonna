import {Server} from './Server';
import * as express from "express";

const port: number = parseInt(process.env.PORT) || 3000;
const app: express.Application = new Server().app;

app.set('port', port);

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + port);
}).on('error', err => {
    console.error(err);
});
