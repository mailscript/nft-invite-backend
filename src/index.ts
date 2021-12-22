"use strict";

import {Express} from "express";
import { MongoClient, Db } from "mongodb";

import express from "express";
import cors from "cors";

import { getClient } from "./db";

export class Core {
	db: Db
	app: Express
	mongodbClient: MongoClient
  invites: any;

	constructor(app: Express) {
		this.app = app;
	}
  async receiveAddress(addr) {
    this.invites.insertOne({
      addr,
      created_at: new Date()
    })
  }
	async start() {
		this.mongodbClient = getClient();
		await this.mongodbClient.connect();
		this.db = this.mongodbClient.db("nft-invites");
    this.invites = this.db.collection('invites')

	}
	async stop() {
		await this.mongodbClient.close();
	}
}

const PORT = process.env.PORT || 5007;

let app = express();
app.use(express.json()); // for parsing application/json
app.use(cors());
app.listen(PORT);

;(async () => {
    const instance = new Core(app);
    console.info(`Starting server on port ${PORT}`);
    await instance.start();
    
})();