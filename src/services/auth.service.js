import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const loginService = (email) => User.findOne({ email: email }).select("+password");

const generateToken = (id, email) => jwt.sign({ id: id, email: email }, process.env.SECRET_JWT, { expiresIn: 86400 });

export { loginService, generateToken };