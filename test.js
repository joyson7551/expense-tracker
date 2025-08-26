import User from "../model/schema.js";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.json({
      message: "All the fields are required to proceed",
    });
  }

  try {
    const alreadyUser = await User.findOne({ email });
    if (alreadyUser) {
      return res.json({
        message: "This email has already been registerd..!!",
      });
    }

    const newUser = new User({ name, email, password, role });
    await newUser.save();

    const token = generateToken({ id: newUser._id, email: newUser.email });
    console.log(token, "check here for the token......!! ");

    res.json({
      success: true,
      message: "Admin added successfully...!",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    res.json({
      message: "Something went wrong during registration...!",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      message: "Email and Password are required to proceed..!",
    });
  }

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const token = generateToken({ id: user._id, email: user.email });

    res.json({
      success: true,
      message: "Login Successful!",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong....!",
      error: error.message,
    });
  }
};
