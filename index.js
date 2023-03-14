const ethers=require('ethers')
const ABI=require('./abi.json')


async function getT(){
const usdtadd='0xdAC17F958D2ee523a2206206994597C13D831ec7';

 const provider=new ethers.WebSocketProvider('ws://mainnet.infura.io/ws/v3/idhere')
 console.log(provider)

const contract=new ethers.Contract(usdtadd,ABI,provider)
 await contract.on("Transfer",(from,to,value,event)=>{
    let transobj={
        from:from,
        to:to,
        value:value,
        eventData:event
        
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