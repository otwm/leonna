"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    constructor() {
        this.app = express();
        this.router();
        this.app.use((req, res, next) => {
            const err = new Error('not_found');
            err.status = 404;
            next(err);
        });
        this.app.use((err, req, res) => {
            err.status = err.status || 500;
            console.error(`error on requst ${req.method} | ${req.url} | ${err.status}`);
            console.error(err.stack || `${err.message}`);
            err.message = err.status == 500 ? 'Something bad happened.' : err.message;
            res.status(err.status).send(err.message);
        });
    }
    router() {
        const wrap = fn => (req, res, next) => fn(req, res, next).catch(next);
        const router = express.Router();
        router.get("/", wrap((req, res) => __awaiter(this, void 0, void 0, function* () {
            res.status(200).json({ result: "Hello World" });
        })));
        router.post("/", wrap((req, res) => __awaiter(this, void 0, void 0, function* () {
            res.status(200).json({ result: "Hello World" });
        })));
        router.put("/", wrap((req, res) => __awaiter(this, void 0, void 0, function* () {
            res.status(200).json({ result: "Hello World" });
        })));
        router.delete("/", wrap((req, res) => __awaiter(this, void 0, void 0, function* () {
            res.status(200).json({ result: "Hello World" });
        })));
        this.app.use(router);
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map