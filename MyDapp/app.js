document.addEventListener('DOMContentLoaded', async () => {
  // Check if MetaMask is installed
  if (typeof window.ethereum === 'undefined') {
    alert('Please install MetaMask to use this DApp.');
    return;
  }

  // Create an instance of ethers.js provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // Deploy the contract and interact
  const deployButton = document.getElementById('deployButton');
  deployButton.addEventListener('click', async () => {
    try {
      // Request MetaMask to connect
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected to MetaMask');

      // Deploy your contract
      const signer = provider.getSigner();
      const contractFactory = new ethers.ContractFactory(contractAbi, contractBytecode, signer);
      const contract = await contractFactory.deploy();
      console.log('Contract deployed:', contract.address);
      console.log('Transaction hash:', contract.deployTransaction.hash);

      // Interact with the deployed contract
      const transactButton = document.getElementById('transactButton');
      transactButton.addEventListener('click', async () => {
        try {
          // Connect to the deployed contract
          const deployedContract = new ethers.Contract(contract.address, contractAbi, signer);

          // Perform a transaction on the contract
          const transaction = await deployedContract.someFunction();
          console.log('Transaction hash:', transaction.hash);

          // Wait for the transaction to be mined
          await transaction.wait();

          // Display success message
          alert('Transaction successful!');
        } catch (error) {
          console.error('Error performing transaction:', error);
        }
      });
    } catch (error) {
      console.error('Error deploying contract:', error);
    }
  });
});
