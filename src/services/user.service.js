import User from "../models/User.js";

const findByEmailService = (email) => User.findOne({ email: email });
const createService = (body) => User.create(body);
const findAllService = () => User.find();
const findByIdService = (id) => User.findById(id);

const updateService = (
  id,
  name,
  username,
  email,
  password,
  avatar,
  background
) =>
  User.findOneAndUpdate(
    { _id: id },
    {
      name,
      username,
      email,
      password,
      avatar,
      background,
    },
    {
      rawResult: true,
    }
  );

export default {
  findByEmailService,
  createService,
  findAllService,
  findByIdService,
  updateService,
};
