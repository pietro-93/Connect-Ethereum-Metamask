const showAccount = document.querySelector('.showAccount');
const ethereumButton = document.querySelector('.enableEthereumButton');

const getWeb3 = async => {
  return new Promise(async (resolve, reject) => {
    const web3 = new Web3(window.ethereum)
    try {
      await window.ethereum.request({ method: "eth_requestAccounts"});
      resolve(web3)
    
    } catch (error) {
      reject(error)
    
    }

  })

}
async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  showAccount.innerHTML = account;
}

ethereumButton.addEventListener('click', () => {
  getAccount();
});
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('connect_button').addEventListener('click', async () => {
    const web3 = await getWeb3();
  })
})