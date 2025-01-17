import React from 'react';

const JupiterLogo: React.FC<{ width?: number; height?: number }> = ({ width = 24, height = 24 }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={'https://solana.com/src/img/branding/solanaLogoMark.svg'} width={width} height={height} alt="Solana aggregator" />;
};

export default JupiterLogo;
