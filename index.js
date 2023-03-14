const ethers=require('ethers')
const ABI=require('./abi.json')


async function getT(){
const usdtadd='0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';

 const provider=new ethers.WebSocketProvider('wss://mainnet.infura.io/ws/v3/7b04e9f39b424f97a38950cb4a02d611')
 console.log(provider)

const contract=new ethers.Contract(usdtadd,ABI,provider)
  contract.on("Transfer",(from,to,value,event)=>{
    let transobj={
        from:from,
        to:to,
        value:value,
        eveentdata:event
    }
    console.log(JSON.stringify(transobj,null,4))

})
console.log(contract)
// var wsProvider = new ethers.WebSocketProvider("wss://rinkeby.infura.io/ws/v3/idhere");

// let contract = new ethers.Contract(usdtadd,ABI, wsProvider);

// contract.on("*", (from, to, value, event) => {
//   console.log("event: ", event);
// });
}
getT()