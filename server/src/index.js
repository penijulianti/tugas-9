import express from "express"
import groupsRoute from "./router/group.js";
import descRoute from "./router/desc.js";
import cors from "cors";

const mem = express();
mem.use(cors({origin:"http://localhost:5173"}))

const router = express.Router();

router.use("/groups", groupsRoute);
router.use("/description", descRoute);

mem.use("/api",router);


mem.listen(3000, ()=> console.log("Server berhasil dijalankan di port 3100"));

