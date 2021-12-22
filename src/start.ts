
import express from "express";
import cors from "cors";
import {Core} from './index'

const PORT = process.env.PORT || 3000;

let app = express();
app.use(express.json()); // for parsing application/json
app.use(cors());
app.listen(PORT);

;(async () => {
    const instance = new Core(app);
    console.info(`Starting server on port ${PORT}`);
    await instance.start();
    
})();