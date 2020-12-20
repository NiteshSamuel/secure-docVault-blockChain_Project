const checking = artifacts.require("checking");

module.exports = function(deployer) {
  deployer.deploy(checking);
};
