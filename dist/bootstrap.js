"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./Server");
const port = parseInt(process.env.PORT) || 3000;
const app = new Server_1.Server().app;
app.set('port', port);
app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + port);
}).on('error', err => {
    console.error(err);
});
//# sourceMappingURL=bootstrap.js.map