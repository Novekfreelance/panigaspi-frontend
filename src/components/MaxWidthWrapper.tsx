type MaxWidthWrapperProps = {
  children: React.ReactNode;
	className?: string;
};

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
};

export default MaxWidthWrapper;
