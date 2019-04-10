import User from "./model";
const userController = {};

userController.register = async (req, res) => {
  User.create(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone_number: req.body.phone_number
    },
    (err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.send(user);
      }
    }
  );
};

export default userController;
