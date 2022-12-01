interface Buttonprops {
  copy?: string;
  className?: string;
  children?: React.ReactNode;
}

function Button({ copy, className, children }: Buttonprops) {
  return (
    <>
      <button className={className}>
        {copy}
        {children}
      </button>
    </>
  );
}

export default Button;
