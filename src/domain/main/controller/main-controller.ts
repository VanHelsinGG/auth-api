import express from "express";
import { encryptController } from "../../encrypter/controller/encrypter-controller";
import { encrypt } from "../../encrypter/lib/functions/encrypter";

const api = express();
const port = 3000;

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.post('/encrypt', (req, resp) => {
    return encryptController(req.body, resp);
});


api.listen(port, () => {
    console.log(`[DEBUG] Application is runnin on ${port} port!`);
});