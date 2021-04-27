import { tw } from 'twind/css';

const CtaLargeButtonWrapper = ({ children }: any) => {
  return (
    <div style={{ maxWidth: '400px' }} className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
      {children}
    </div>
  );
};

export { CtaLargeButtonWrapper };
