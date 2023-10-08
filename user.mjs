import { User } from "./models/user.mjs";
export const register = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  User.create({ name: name, email: email, password: password });

  return res
    .status(200)
    .send({ bSuccess: true, message: "you have successfully registered" });
};
export const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email: req.body.email });
  console.log(user.email);
  if (user) {
    if (password === user.password) {
      return res.status(201).send({ bSuccess: true, Authenticationid: email });
    } else {
     return  res
        .status(401)
        .send({ bSuccess: false, message: "password is incorrect" });
    }
  } else {
    return res.status(401).send({ bSuccess: false, message: "user does not exist" });
  }
};
