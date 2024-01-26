import React from 'react';

const JupiterLogo: React.FC<{ width?: number; height?: number }> = ({ width = 24, height = 24 }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={'https://cryptoexchange.vip/assets/img/content/cta_thumb.png'} width={width} height={height} alt="VIP Exchange aggregator" />;
};

export default JupiterLogo;
