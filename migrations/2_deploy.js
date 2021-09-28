// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const Token = artifacts.require("Token");


module.exports = async function (deployer) {
    const accounts = await web3.eth.getAccounts()

    await deployer.deploy(Token);

};