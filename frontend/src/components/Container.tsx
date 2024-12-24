const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`max-w-[90%] w-full mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
