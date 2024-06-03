import React from 'react';
import DownloadAppSection from './DownloadApp/DownloadAppSection';
import CenteredLogoTextSection from './LogoSection/CenteredLogoTextSection';
import TrustedByMillionsSection from './TrustSection/TrustedByMillionsSection';

const MainComponent = () => {
  return (
    <div>
      <DownloadAppSection />
      <CenteredLogoTextSection />
      <TrustedByMillionsSection />
    </div>
  );
};

export default MainComponent;
