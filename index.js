import { ethers } from "./ethers-5.6.esm.min.js"
import { contractAbi, contractAddress } from "./constants.js"

//selecting all the professors
let prof0 = document.querySelector("#zero");
let prof1 = document.querySelector("#one");
let prof2 = document.querySelector("#two");
let prof3 = document.querySelector("#three");
let prof4 = document.querySelector("#four");
let prof5 = document.querySelector("#five");

//initialize a number given to professors
let profid;

//adding event listeners to each professors 
prof0.addEventListener("click", (evt) => {
  profid = 1;
  prof0.style.backgroundColor = "#003d3a";
  prof1.style.backgroundColor = "#98dfaf";
  prof2.style.backgroundColor = "#98dfaf";
  prof3.style.backgroundColor = "#98dfaf";
  prof4.style.backgroundColor = "#98dfaf";
  prof5.style.backgroundColor = "#98dfaf";
})
prof1.addEventListener("click", (evt) => {
  profid = 2;
  prof1.style.backgroundColor = "#003d3a";
  prof0.style.backgroundColor = "#98dfaf";
  prof2.style.backgroundColor = "#98dfaf";
  prof3.style.backgroundColor = "#98dfaf";
  prof4.style.backgroundColor = "#98dfaf";
  prof5.style.backgroundColor = "#98dfaf";
})
prof2.addEventListener("click", (evt) => {
  profid = 3;
  prof2.style.backgroundColor = "#003d3a";
  prof1.style.backgroundColor = "#98dfaf";
  prof0.style.backgroundColor = "#98dfaf";
  prof3.style.backgroundColor = "#98dfaf";
  prof4.style.backgroundColor = "#98dfaf";
  prof5.style.backgroundColor = "#98dfaf";
})
prof3.addEventListener("click", (evt) => {
  profid = 4;
  prof3.style.backgroundColor = "#003d3a";
  prof1.style.backgroundColor = "#98dfaf";
  prof2.style.backgroundColor = "#98dfaf";
  prof0.style.backgroundColor = "#98dfaf";
  prof4.style.backgroundColor = "#98dfaf";
  prof5.style.backgroundColor = "#98dfaf";
})
prof4.addEventListener("click", (evt) => {
  profid = 5;
  prof4.style.backgroundColor = "#003d3a";
  prof1.style.backgroundColor = "#98dfaf";
  prof2.style.backgroundColor = "#98dfaf";
  prof3.style.backgroundColor = "#98dfaf";
  prof0.style.backgroundColor = "#98dfaf";
  prof5.style.backgroundColor = "#98dfaf";
})
prof5.addEventListener("click", (evt) => {
  profid = 6;
  prof5.style.backgroundColor = "#003d3a";
  prof1.style.backgroundColor = "#98dfaf";
  prof2.style.backgroundColor = "#98dfaf";
  prof3.style.backgroundColor = "#98dfaf";
  prof4.style.backgroundColor = "#98dfaf";
  prof0.style.backgroundColor = "#98dfaf";
})

//getting the value of review
let review = document.querySelector("textarea");

//accessing the submit button
let btn = document.querySelector("button");


const provider = new ethers.providers.Web3Provider(window.ethereum);

// Get the signer (account) from Metamask
const signer = provider.getSigner();

// Create a contract instance
const contract = new ethers.Contract(contractAddress, contractAbi, signer);

// Call a function on the contract that modifies the state
async function writeToContract() {
  try {
    const transaction = await contract.connect(signer).addReview(profid, review.value);

    // Wait for the transaction to be mined
    await transaction.wait();
    await alert("Review Submitted!!);
    console.log('Transaction successful!');
  } catch (error) {
    console.error('Error writing to contract:', error);
  }
}

//adding event listener to the submit button
btn.addEventListener("click", () => {
  if(profid){
    //connecting to the metamask
    console.log(window.ethereum.request({ method: "eth_requestAccounts" }));
    //updating the states of contract
    writeToContract();
    review.value ="";
  }
    else{
      alert("Select a Professor first!!");
      review.value ="";
    }
});






