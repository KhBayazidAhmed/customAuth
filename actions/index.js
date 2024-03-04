"use server";
import connectDB from "@/database/connectDb";
import User from "@/database/models/userModels";
import { generateJWTToken } from "@/utils";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function signUp(formData) {
  try {
    await connectDB();
    let oldUser = await User.findOne({ email: formData.get("email") });
    if (oldUser)
      return {
        response: true,
        message: JSON.stringify({
          message: "User already exists",
          success: false,
        }),
      };
    const user = await new User({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: await bcrypt.hash(formData.get("password"), 10),
    });
    user.save();
    return {
      response: true,
      message: JSON.stringify({
        message: "User created successfully",
        success: true,
      }),
    };
  } catch (error) {
    console.log(error);
    return {
      response: true,
      message: JSON.stringify({
        message: error.message,
        success: false,
      }),
    };
  }
}
export async function signIn(formData) {
  try {
    let userOK = false;
    await connectDB();
    let foundUser = await User.findOne({ email: formData.get("email") });
    if (!foundUser) {
      return {
        response: true,
        data: JSON.stringify({
          message: "User not found",
          success: false,
        }),
      };
    }
    const isPasswordValid = await bcrypt.compare(
      formData.get("password"),
      foundUser.password
    );
    if (!isPasswordValid) {
      return {
        response: true,
        data: JSON.stringify({
          message: "Invalid password",
          success: false,
        }),
      };
    }
    let token = await generateJWTToken(foundUser._id.toString());
    cookies().set("token", token, { secure: true });
    userOK = true;
    return {
      response: true,
      data: JSON.stringify({
        message: "User signed in successfully",
        success: true,
      }),
    };
  } catch (error) {
    console.log(error);
    return {
      response: true,
      data: JSON.stringify({
        message: error.message,
        success: false,
      }),
    };
  }
}
export async function signOut() {
  cookies().delete("token");
  return {
    response: true,
    data: JSON.stringify({
      message: "User signed out successfully",
      success: true,
    }),
  };
}
