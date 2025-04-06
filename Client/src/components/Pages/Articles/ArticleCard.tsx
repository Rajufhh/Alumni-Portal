interface ArticleCardInterface {
    title: string;
    author: {
        firstName: string;
        lastName: string;
        profileImageURL: string;
    };
    date: string;
    summary: string;
    likes: number;
}

export const ArticleCard = ({ title, author, date, summary, likes }: ArticleCardInterface) => {

  
  const handleLike = () => {
    // 
  };

  return (
    <div className="border shadow-sm rounded-lg hover:shadow-lg transition w-max relative col-span-1">
      <div className="w-full rounded-t-lg h-45 bg-gray-300">

      </div>
      <div className="py-4 px-3 bg-white rounded-b-md dark:bg-[#151515]">
        <h2 className="text-md font-semibold mb-1 dark:text-white text-black">{title}</h2>

        <div className="flex items-center text-sm text-gray-500 gap-2 mb-3 dark:text-white">
            <div className="flex gap-2 items-center">
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                <span>{author.firstName} {author.lastName}</span>
            </div>
            <span className="text-gray-400">•</span>
            <div className="flex items-center gap-1">
                <span>{date}</span>
            </div>
        </div>

        <p className="text-gray-700 text-sm mb-4 w-75 dark:text-gray-400">{summary}</p>

        <div className="flex justify-between items-center px-3">
          <div onClick={handleLike} className="cursor-pointer">
            ❤️ {likes}
          </div>

          <button className="px-4 py-1.5 cursor-pointer outline-none font-semibold text-sm">
              Read more ➡️
          </button>
        </div>
      </div>
    </div>
  );
};
