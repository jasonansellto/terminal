import React, { useEffect } from 'react';
import { useUnifiedWalletContext, useUnifiedWallet } from '@jup-ag/wallet-adapter';
import { DEFAULT_EXPLORER, FormProps } from 'src/types';
import WalletDisconnectedGraphic from 'src/icons/WalletDisconnectedGraphic';

const ModalTerminal = (props: {
  rpcUrl: string;
  formProps: FormProps;
  simulateWalletPassthrough: boolean;
  strictTokenList: boolean;
  defaultExplorer: DEFAULT_EXPLORER;
}) => {
  const { rpcUrl, formProps, simulateWalletPassthrough, strictTokenList, defaultExplorer } = props;

  const passthroughWalletContextState = useUnifiedWallet();
  const { setShowModal } = useUnifiedWalletContext();

  const launchTerminal = () => {
    window.Jupiter.init({
      endpoint: rpcUrl,
      formProps,
      enableWalletPassthrough: simulateWalletPassthrough,
      passthroughWalletContextState: simulateWalletPassthrough ? passthroughWalletContextState : undefined,
      onRequestConnectWallet: () => setShowModal(true),
      strictTokenList,
      defaultExplorer,
    });
  };

import { useWallet } from "@solana/wallet-adapter-react"; // Or @jup-ag/wallet-adapter;
const passthroughWalletContextState = useWallet();

// To make sure passthrough wallet are synced
useEffect(() => {
  if (!window.Jupiter.syncProps) return;
  window.Jupiter.syncProps({ passthroughWalletContextState });
}, [passthroughWalletContextState.connected, props]);

window.Jupiter.init({
  displayMode: "integrated",
  integratedTargetId: "integrated-terminal",
  endpoint: "https://api.mainnet-beta.solana.com",
  strictTokenList: false,
  defaultExplorer: "Solscan",
  formProps: {
    initialAmount: "100000000",
  },
  enableWalletPassthrough: true,
});

  return (
    <div id="integrated-terminal"></div>
  );
};

export default ModalTerminal;
