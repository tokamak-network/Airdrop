import { ethers } from "ethers";
import { getGlobalState, setGlobalState } from "store";

const { ethereum } = window;

const chainID =
  import.meta.env.VITE_REACT_APP_MODE === "prod"
    ? import.meta.env.VITE_REACT_APP_DEFAULT_NETWORK_ID
    : import.meta.env.VITE_REACT_APP_TEST_NETWORK_ID;

const networkName =
  import.meta.env.VITE_REACT_APP_MODE === "prod"
    ? import.meta.env.VITE_REACT_APP_DEFAULT_NETWORK_NAME
    : import.meta.env.VITE_REACT_APP_TEST_NETWORK_NAME;

export const getEthereumContract = async (
  ContractAddress: string,
  ContractAbi: ethers.ContractInterface
) => {
  const connectedAccount =
    getGlobalState("connectedAccount") || localStorage.getItem("wallet");
  if (connectedAccount) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(ContractAddress, ContractAbi, signer);

    return contract;
  } else {
    return null;
  }
};

export const isWalletConnected = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask.");

    const accounts = await ethereum.request({ method: "eth_accounts" });
    const account = accounts[0]?.toLowerCase();
    setGlobalState("connectedAccount", account);

    window.ethereum.on("chainChanged", () => window.location.reload());
    window.ethereum.on("accountsChanged", async () => {
      const newAccounts = await ethereum.request({ method: "eth_accounts" });
      const newAccount = newAccounts[0]?.toLowerCase();
      setGlobalState("connectedAccount", newAccount);
      await isWalletConnected();
    });

    if (!accounts.length) {
      alert("Please connect your wallet.");
    }
  } catch (error) {
    reportError(error);
  }
};

export const connectWallet = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask.");

    const provider = new ethers.providers.Web3Provider(ethereum);
    const network = await provider.getNetwork();

    if (network.chainId !== parseInt(chainID)) {
      return alert(
        `Please change your network to ${networkName} in your wallet.`
      );
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setGlobalState("connectedAccount", accounts[0]?.toLowerCase());
    localStorage.setItem("wallet", accounts[0]?.toLowerCase());
  } catch (error) {
    reportError(error);
  }
};
