import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { handleError } from "../../client/src/utils/error.js";

export const signUp = async (req, res, next) => {
  const { userName, password, email, role } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  try {
    const newUser = new User({ userName, password: hashPassword, email, role });
    await newUser.save();
    res.status(201).json("user created");
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const isMatch = await User.findOne({ email });

    if (!isMatch) {
        return  next(handleError(401, "user not found"));
       
    }
    const comparepassword = bcryptjs.compareSync(password, isMatch.password);
    if (!comparepassword) {
        return next(handleError(401, "user not found"));
     
    }

    const token = jwt.sign(
      { _id: isMatch._id, role: isMatch.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const { password: pass, ...rest } = isMatch._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json( rest );
  } catch (error) {
    next(error);
  }
};
