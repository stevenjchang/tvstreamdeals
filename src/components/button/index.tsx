import { tw } from 'twind';
import { CtaLargeButtonWrapper } from './CtaLargeButtonWrapper';

export { CtaLargeButtonWrapper };
interface IButton {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
  large?: boolean;
}

const Button = ({ primary, large, modifier, children, ...rest }: IButton) => {
  const baseStyle = large
    ? `font-sans font-light py-2 px-2 md:px-16 border rounded tracking-wider uppercase`
    : `font-sans font-medium py-2 px-4 border rounded`;
  const styles = primary
    ? // ? `bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700`
      `bg-red-500 text-white border-red-400 hover:bg-red-600`
    : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

  return (
    <button type="button" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
