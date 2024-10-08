import { DesktopFooter } from './desktopFooter';
import { MobileFooter } from './mobileFooter';

export const Footer = () => {
  return (
    <>
      {/* footer view for desktop */}
      <DesktopFooter />
      {/* footer view for mobile */}
      <MobileFooter />
    </>
  );
};
