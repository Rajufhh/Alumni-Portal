interface badgeProps {
    value: string;
}

export const Badge = ({ value }: badgeProps) => {
  return (
    <span
        className="px-2 rounded-full bg-blue-200 text-blue-900 text-xs font-medium border border-blue-300 shadow-sm hover:bg-blue-200 transition"
    >
        {value}
    </span>
  )
}
