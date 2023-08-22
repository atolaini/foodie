interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
