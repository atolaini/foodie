interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, onClick, type, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
