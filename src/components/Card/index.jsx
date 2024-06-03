import clsx from 'clsx';
import Types from 'prop-types';

const Card = ({children, className}) => {
  const defaultClassName = 'rounded bg-white shadow-primary min-h-2 min-w-2';
  return <div className={clsx(defaultClassName, className)}>{children}</div>;
};

Card.propTypes = {
  children: Types.node,
  className: Types.string,
};

export default Card;
