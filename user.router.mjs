import  express  from "express";
import { deleteUser,deleteAllUsers } from "./userController.mjs";
import { updateUser,getUser } from "./userController.mjs";
import { createUser,getUsers } from "./userController.mjs";
import { protect } from './authController.mjs'

export const userRouter = express.Router();

userRouter.route('/')
  .get(protect,getUsers)
  .post(createUser)
  .delete(protect,deleteAllUsers);

userRouter.route('/:id')
  .get(protect,getUser)
  .patch(protect,updateUser)
  .delete(protect,deleteUser);