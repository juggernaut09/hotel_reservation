import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//     res.send("Hello user you are authenticated!");
// });

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//     res.send("Hello user you are authenticated and you can delete your account!");
// });

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//     res.send("Hello Admin, you are logged in and you can delete all accounts!");
// });

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET All
router.get("/", verifyAdmin, getAllUsers);

export default router;
