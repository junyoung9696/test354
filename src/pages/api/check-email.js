import { sequelize, User } from './DB';

export default function checkEmail(req, res) {
  const { email } = req.query;

  User.findOne({ where: { username: email } })
    .then((user) => {
      const emailExists = user ? true : false;
      res.status(200).json({ emailExists });
    })
    .catch((err) => {
      console.error('Failed to check email:', err);
      res.status(500).json({ emailExists: false });
    });
}

export const config = {
  api: {
    externalResolver: true,
  },
};
