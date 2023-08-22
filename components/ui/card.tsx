interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`bg-cream shadow-md rounded-2xl p-9 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
