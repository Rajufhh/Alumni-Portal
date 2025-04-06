interface buttonProps {
    value: string;
}

export const Button = ({ value }: buttonProps) => {
  return (
    <button className="px-4 py-1.5 bg-black font-semibold cursor-pointer text-white rounded-md transition text-sm dark:bg-white dark:text-black">
            {value}
    </button>
  )
}
