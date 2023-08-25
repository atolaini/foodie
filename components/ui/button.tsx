interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
