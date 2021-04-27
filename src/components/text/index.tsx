import { tw } from 'twind';

const Text: any = {};

const InfoText = ({ children }) => {
  return <p className={tw(`text-sm text-gray-600`)}>{children}</p>;
};

Text.Info = InfoText;

export default Text;
