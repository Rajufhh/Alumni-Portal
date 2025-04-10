import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Article } from "./Articles";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";

interface ArticleCardInterface {
    title: string;
    _id: string;
	content: string;
    author: {
        firstName: string;
        lastName: string;
        profileImageURL: string;
        _id: string;
		role: string;
    };
    createdAt: string;
    summary: string;
    likes: number;
    deleteArticle: (articleId: string) => void;
	setArticleToEdit: Dispatch<SetStateAction<string>>;
	setArticleToView: Dispatch<SetStateAction<Article | null>>;
	setFormVisibility: Dispatch<SetStateAction<boolean>>;
	setArticleVisibility: Dispatch<SetStateAction<boolean>>;
}

export const ArticleCard = ({ _id, title, author, createdAt, summary, likes, content, deleteArticle, setArticleToView, setArticleToEdit, setFormVisibility, setArticleVisibility }: ArticleCardInterface) => {
    const [dropdownVisibility, setDropdownVisibility] = useState(false);
	const { user } = useSelector((state: RootState) => state.user);
	
	const isAuthor = user?._id === author._id;
  
  const handleLike = () => {
    // 
  };

     useEffect(() => {
          const handleClickOutside = (e: MouseEvent) => {
              const target = e.target as HTMLElement;
              if (!target.closest(`#dropdown-${author._id}`)) {
                  setDropdownVisibility(false);
              }
          };
          document.addEventListener("mousedown", handleClickOutside);
          return () => document.removeEventListener("mousedown", handleClickOutside);
      }, [author._id]);

	  const formatDate = (isoString: string): string => {

		  const date = new Date(isoString);

		  return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
	  };

	createdAt = formatDate(createdAt);
	  

	  const handleUpdateArticle = () => {
		setArticleToEdit(_id);
		setFormVisibility(true);
	  }

	  const handleDeleteArticle = () => {
		deleteArticle(_id);
	  }

	  const handleViewArticle = () => {
		setArticleVisibility(true);
		setArticleToView({title, content, summary, author, createdAt, _id, likes});
	  }

  return (
    <div className="border shadow-sm rounded-lg hover:shadow-lg transition w-max relative col-span-1">
      <div className="w-full rounded-t-lg h-45 bg-gray-300">

      </div>
      <div className="py-4 px-3 bg-white rounded-b-md dark:bg-[#151515]">
        <div className="flex items-center justify-between relative">
          <h2 className="text-lg font-semibold mb-1 dark:text-white text-black">{title}</h2>
          <BsThreeDotsVertical className="cursor-pointer" onClick={() => setDropdownVisibility(prev => !prev)} />
          {
                            dropdownVisibility && isAuthor &&
                            <div id={`dropdown-${author._id}`}
                            className={`absolute top-6 right-1 z-20 w-20 rounded-sm border border-black bg-white text-black text-xs shadow-lg dark:bg-black dark:border-white dark:text-white`}
                            >

                                <div className="text-center w-full py-0.5 dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white  cursor-pointer rounded-t-sm" onClick={handleUpdateArticle}>
                                    Edit
                                </div>

                                <div className="cursor-pointer py-0.5 text-center dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black  rounded-b-sm" onClick={handleDeleteArticle}>
                                    Delete
                                </div>
                            </div>    
                        }  
        </div>

        <div className="flex items-center text-sm text-gray-500 gap-2 mb-3 dark:text-white">
            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                  <span>{author.firstName} {author.lastName}</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-1">
                  <span>{createdAt}</span>
              </div>
            </div>
        </div>

        <p className="text-gray-700 text-sm mb-4 w-75 dark:text-gray-400">{summary}</p>

        <div className="flex justify-between items-center px-3">
          <div onClick={handleLike} className="cursor-pointer">
            ❤️ {likes}
          </div>

          <div className="px-4 py-1.5 cursor-pointer outline-none font-semibold text-sm" onClick={handleViewArticle}>
              Read more ➡️
          </div>
        </div>
      </div>
    </div>
  );
};
