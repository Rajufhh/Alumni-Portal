interface badgeProps {
    value: string;
}

export const Badge = ({ value }: badgeProps) => {
  return (
    <span
        className="px-2 py-0.5 rounded-sm text-xs text-white bg-black dark:bg-white dark:text-black font-semibold"
    >
        {value}
    </span>
  )
}
