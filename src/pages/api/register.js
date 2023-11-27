import { sequelize, User } from "./DB";

export default function register(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    User.create({ username: email, password })
      .then(() => {
        res.status(200).json({ message: "Registration successful!" });
      })
      .catch((err) => {
        console.error("Failed to register:", err);
        res
          .status(500)
          .json({ message: "Failed to register. Please try again." });
      });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
