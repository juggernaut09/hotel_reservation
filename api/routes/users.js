import express from 'express';
import {deleteUser, getAllUsers, getUser, updateUser } from '../controllers/user.js';
import { verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/checkauthentication', verifyToken, (req, res, next) => {
    res.send("Hello user you are authenticated!");
});

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
    res.send("Hello user you are authenticated and you can delete your account!");
});

// UPDATE
router.put('/:id', updateUser);

// DELETE
router.delete('/:id', deleteUser);

// GET
router.get('/:id', getUser);

// GET All
router.get('/', getAllUsers);


export default router;