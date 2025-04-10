import { Dispatch, SetStateAction } from "react";
import { Article } from "./Articles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ArticleProps {
  article: Article | null;
  setArticleVisibility: Dispatch<SetStateAction<boolean>>; 
}

export const ViewArticle = ({ article, setArticleVisibility }: ArticleProps) => {
  if (!article) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-300">
        No article found.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen px-8 md:px-24 py-12 bg-[#f5f5f5] dark:bg-[#121212] text-black dark:text-white">
      
      {/* Header */}
      <div className="mb-6">
        <button 
          onClick={() => setArticleVisibility(false)} 
          className="mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400 cursor-pointer"
        >
          ← Back to Articles
        </button>
        <h1 className="text-4xl font-bold">{article.title}</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          By {article.author.firstName} {article.author.lastName} |{" "}
          {new Date(article.createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Article */}
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {article.content || ""}
        </ReactMarkdown>
      </div>

        {/* Footer */}
      <div className="mt-12">
      </div>
    </div>
  );
};
