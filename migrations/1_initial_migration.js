const ThbToken = artifacts.require("ThbToken");

module.exports = function(deployer) {
  deployer.deploy(ThbToken, "1000000");
};
