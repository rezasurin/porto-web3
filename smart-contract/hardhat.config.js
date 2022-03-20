// https://eth-ropsten.alchemyapi.io/v2/D6SetdkN-C4v2jtFEF-z2bBv30SVdvAh

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/D6SetdkN-C4v2jtFEF-z2bBv30SVdvAh',
      accounts: ['a0658346b0308142d7134c2ad1e1e40702448d9e2632f25cb23d4ae5ea0be1c6']
    }
  }
}