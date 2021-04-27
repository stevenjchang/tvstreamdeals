import { tw } from 'twind';

const Logo = () => {
  return (
    <div className={tw(`flex flex-col items-center mr-8`)}>
      <p className={tw(`text-2xl text-white font-bold`)} style={{ lineHeight: '0.5' }}>
        TV STREAM
      </p>
      <p className={tw(`text-2xl text-white font-bold mb-3`)} style={{ color: '#FCAD19' }}>
        DEALS
      </p>

      <p className={tw(`text-xs text-white`)} style={{ letterSpacing: '0.35em' }}>
        Best Monthly Deals
      </p>
    </div>
  );
};

export default Logo;
