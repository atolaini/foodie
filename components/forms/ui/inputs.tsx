interface InputProps {
  type: string;
  label: string;
}

const Input = ({ type, label, ...props }: InputProps) => {
  return (
    <div className='flex flex-col items-start mb-5'>
      <label className='text-text font-medium mb-1'>{label}</label>
      <input
        type={type}
        className='border-2 transition duration-2000 border-text-20 bg-transparent rounded-md p-2 w-full focus:border-secondary focus:outline-none'
      />
    </div>
  );
};

export default Input;
