import { User } from './DB';

export default function findPassword(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    User.findOne({ where: { username: email } })
      .then((user) => {
        if (user) {
          const password = user.password;
          res.status(200).json({ password });
        } else {
          res.status(404).json({ message: '해당 이메일로 등록된 계정이 없습니다.' });
        }
      })
      .catch((err) => {
        console.error('비밀번호 조회에 실패했습니다:', err);
        res.status(500).json({ message: '비밀번호를 찾을 수 없습니다.' });
      });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
