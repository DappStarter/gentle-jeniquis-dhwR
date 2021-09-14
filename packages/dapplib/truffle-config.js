require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan release noble snake imitate prize fresh giggle'; 
let testAccounts = [
"0x5e487d1b8d7acbfac82bd70340b9e6a210b24d7ba461e4974756ff34538e0ec3",
"0x91c31d4aecf897008adc25bfb0703d25d920b17f83ae2472cae89501170c010c",
"0xc66a1de85b96a801df3e7f923fea12df72adac94b083c93601c4d4425d23de6a",
"0x61f0aa9a02ab9f0f380b649f4fccc733cafc7cdefe30fc6b950b69f87e27980b",
"0x8a91d097c71c93261f0aee8a326f2d42f86f9d375cffde98b1d1732896d73e4a",
"0x5c280454713dc20d7fe65c99725cd694624be349c38281f16c2f4f1fa26becf3",
"0x7385d00acba4cf2d459fb1d6e6176b950e72be736b92e69ab14f7531af2d03c2",
"0x4f6f88688a552f80e806cd879eda0f2968557fcea210c55eba706f78a11d9eb4",
"0xdf2aeb75c69a45b2fb3823d405e279f3eefddaa98870b7533c96a2366b4f6791",
"0xd8c89bd6b58afb6517703b2ede7df199c4894e6bef0f087253ead078829d0403"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

