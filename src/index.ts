import * as functions from 'firebase-functions';
import { app } from './server';
import * as express from 'express';
const server = express();

app(server)
    .then(appServer => {
        appServer.init()
    })
    .catch();

export const api = functions.https.onRequest(server);