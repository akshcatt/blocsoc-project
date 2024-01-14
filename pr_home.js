import { ethers } from "./ethers-5.6.esm.min.js"
import { contractAbi , contractAddress } from "./constants.js"

//selecting the professor
let prof = document.querySelector("select");

//accessing the 'get review' button
let btn = document.querySelector("button");


const provider = new ethers.providers.Web3Provider(window.ethereum);

// Get the signer (account) from Metamask
const signer = provider.getSigner();


// Create a contract instance
const contract = new ethers.Contract(contractAddress, contractAbi, signer);

btn.addEventListener("click",async ()=>{
        let obj = document.querySelector(".obj")
    obj.innerHTML = "";
    //connecting to metamask
    console.log(window.ethereum.request({ method: "eth_requestAccounts" }));
    console.log(prof.value);
    async function readValue() {
        //getting tthe reviews of professor 
        const value = await contract.getReviewsForProfessor(prof.value);
        await console.log('Value:', value);
        return value;
      }
      const data = await readValue();
      for(let element in data){
        //creating div and appending it 
        await console.log(data[element][0]);
        const div = document.createElement("div");
        //setting the innertext from the data read by the contract
        div.innerText = data[element][0];
        div.classList.add("event");
        //accessing the container for the reviews
        obj.appendChild(div);
        };
    })
    
