interface ArticleCardInterface {
    title: string;
    author: {
        firstName: string;
        lastName: string;
        profileImageURL: string;
    };
    date: string;
    summary: string;
}


export const ArticleCard = ({ title, author, date, summary }: ArticleCardInterface) => {
  return (
    <div className="border shadow-sm rounded-lg hover:shadow-md transition w-max relative">
      <div className="w-full rounded-t-lg h-45 bg-gray-300">

      </div>
      <div className="py-4 px-3">
        <h2 className="text-md font-semibold mb-1">{title}</h2>

        <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
            <div className="flex gap-2 items-center">
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                <span>{author.firstName} {author.lastName}</span>
            </div>
            <span className="text-gray-400">•</span>
            <div className="flex items-center gap-1">
                <span>{date}</span>
            </div>
        </div>

        <p className="text-gray-700 text-sm mb-8 w-75">{summary}</p>

        <button className="px-4 py-1.5 cursor-pointer outline-none font-semibold text-sm absolute bottom-4 right-4">
            Read more ➡️
        </button>
      </div>
    </div>
  );
};
