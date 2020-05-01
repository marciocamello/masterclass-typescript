const users = [{ name: "Marcio", email: "marciocamello@outlook.com" }];

export default {
  async index(req, res) {
    return res.json(users);
  },
};
