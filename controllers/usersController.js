import {
  getAllUsersDal,
  createUserDal,
  updateUserDal,
  deleteUserDal,
} from "../dal/userDal.js";

export async function getAllUsers(req, res) {
  const users = await getAllUsersDal();
  res.json(users);
}

export async function createUser(req, res) {
  const userData = req.body;
  const result = await createUserDal(userData);
  res.json({ insertedId: result.insertedId });
}

export async function updateUser(req, res) {
  const id = req.params.id;
  const updatedData = req.body; 
  const result = await updateUserDal(id, updatedData);
  res.json({ modifiedCount: result.modifiedCount });
}

export async function deleteUser(req, res) {
  const id = req.params.id;
  const result = await deleteUserDal(id);
  res.json({ deletedCount: result.deletedCount });
}
