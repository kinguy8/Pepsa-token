const token = artifacts.require('Token');

module.exports = deployer => {
  console.log('done');
  deployer.deploy(token, 'Pepsa', 'PEPSA', 100000);
};
