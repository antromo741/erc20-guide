// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const MyToken = artifacts.require("MyToken");


module.exports = async function (deployer) {
    const accounts = await web3.eth.getAccounts()

    await deployer.deploy(MyToken);

};