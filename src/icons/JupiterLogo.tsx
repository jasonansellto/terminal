import React from 'react';

const JupiterLogo: React.FC<{ width?: number; height?: number }> = ({ width = 24, height = 24 }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={'https://getmoneytoken.xyz/assets/images/logo/logo.png'} width={width} height={height} alt="Get Money aggregator" />;
};

export default JupiterLogo;
