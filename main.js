const showAccount = document.querySelector('.showAccount');
const ethereumButton = document.querySelector('.enableEthereumButton');
const connect = document.querySelector('p');


if (typeof window.ethereum !== 'undefined') {
  connect.textContent = 'MetaMask is installed!'
} else {
  connect.textContent = 'Metamask not installed'
}
const getWeb3 = async => {
  return new Promise(async (resolve, reject) => {
    const web3 = new Web3(window.ethereum)
    try {
      await window.ethereum.request({ method: "eth_requestAccounts"});
      resolve(web3)
    } catch (err) {
      reject(err)
    }

  })

}
async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  
  showAccount.innerHTML = account;
}


document.addEventListener('DOMContentLoaded', () => {
  ethereumButton.addEventListener('click', async () => {
    await getWeb3();
    getAccount()
  })
})

