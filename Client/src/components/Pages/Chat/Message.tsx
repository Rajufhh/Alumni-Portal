interface messageProps {
  sender: "you" | "them";
  text: string;
}

export const Message = ({ sender, text }: messageProps) => {
  return (
    <div
      className={`max-w-[65%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
        sender === "you"
          ? "bg-blue-300 dark:text-white text-black dark:bg-blue-900 self-end"
          : "bg-gray-200 dark:bg-neutral-800 self-start text-gray-800 dark:text-gray-100"
      }`}
    >
      {text}
    </div>
  );
};
