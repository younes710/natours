const fs = require('fs');

const users = JSON.parse(
  // * __dirname => controllers folder
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`, 'utf-8')
);

const getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requstTime,
    language: req.language,
    results: users.length,
    data: {
      users,
    },
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

exports.getAllUsers = getAllUsers;
exports.getUser = getUser;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
