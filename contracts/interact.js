equire('dotenv').config();
const ethers = require('ethers');

ADDRESS = '0x1AC90AFd478F30f2D617b3Cb76ee00Dd73A9E4d3'
ABI = [{"inputs":[{"internalType":"string","name":"initialFlag","type":"string"},{"internalType":"string","name":"initialMessage","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"enterVenue","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"goBack","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]
// provider
const provider = new ethers.AlchemyProvider('sepolia', process.env.API_KEY);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
async function main(){
    const venueContract = new ethers.Contract(ADDRESS, ABI, wallet)
    const message = await venueContract.goBack();
    console.log(message);
    const flag = await venueContract.enterVenue(); 
    console.log(flag);
}
main()