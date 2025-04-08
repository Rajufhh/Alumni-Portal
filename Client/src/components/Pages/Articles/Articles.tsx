import { SearchbarTemplate } from "@/components/Utils/SearchbarTemplate"
import { ArticleCard } from "./ArticleCard"
import { useState } from "react";
import { Pagination } from "@/components/Utils/Pagination";
import { useAuthorize } from "@/hooks/useAuthorize";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/Store";

export const Articles = () => {
  // const isDarkMode = useSelector((state: RootState) => state.config.isDarkMode);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const totalPages = 10;
  useAuthorize();

  const articles = [
    {
      title: "Building Scalable Web Apps with React",
      author: {
        firstName: "Ojas",
        lastName: "Deshpande",
        profileImageURL: "image"
      },
      date: "April 3, 2025",
      summary: "In this article, we explore the best practices for architecting scalable frontend applications using React and Tailwind CSS...",
      likes: 0,
    },
    {
      title: "Building Scalable Web Apps with React",
      author: {
        firstName: "Ojas",
        lastName: "Deshpande",
        profileImageURL: "image"
      },
      date: "April 3, 2025",
      summary: "In this article, we explore the best practices for architecting scalable frontend applications using React and Tailwind CSS...",
      likes: 0,
    },
    {
      title: "Building Scalable Web Apps with React",
      author: {
        firstName: "Ojas",
        lastName: "Deshpande",
        profileImageURL: "image",
      },
      date: "April 3, 2025",
      summary: "In this article, we explore the best practices for architecting scalable frontend applications using React and Tailwind CSS...",
      likes: 0,
    },
    {
      title: "Building Scalable Web Apps with React",
      author: {
        firstName: "Ojas",
        lastName: "Deshpande",
        profileImageURL: "image"
      },
      date: "April 3, 2025",
      summary: "In this article, we explore the best practices for architecting scalable frontend applications using React and Tailwind CSS...",
      likes: 0,
    },
    {
      title: "Building Scalable Web Apps with React",
      author: {
        firstName: "Ojas",
        lastName: "Deshpande",
        profileImageURL: "image"
      },
      date: "April 3, 2025",
      summary: "In this article, we explore the best practices for architecting scalable frontend applications using React and Tailwind CSS...",
      likes: 0,
    },
    {
      title: "Building Scalable Web Apps with React",
      author: {
        firstName: "Ojas",
        lastName: "Deshpande",
        profileImageURL: "image"
      },
      date: "April 3, 2025",
      summary: "In this article, we explore the best practices for architecting scalable frontend applications using React and Tailwind CSS...",
      likes: 0,
    },
    {
      title: "Building Scalable Web Apps with React",
      author: {
        firstName: "Ojas",
        lastName: "Deshpande",
        profileImageURL: "image"
      },
      date: "April 3, 2025",
      summary: "In this article, we explore the best practices for architecting scalable frontend applications using React and Tailwind CSS...",
      likes: 0,
    },
    {
      title: "Building Scalable Web Apps with React",
      author: {
        firstName: "Ojas",
        lastName: "Deshpande",
        profileImageURL: "image"
      },
      date: "April 3, 2025",
      summary: "In this article, we explore the best practices for architecting scalable frontend applications using React and Tailwind CSS...",
      likes: 0,
    },
  ]
  
  const filteredArticles = articles.filter(article => {
    const query = searchQuery.toLowerCase();

    return (
      article.author.firstName.toLowerCase().includes(query) ||
      article.author.lastName.toLowerCase().includes(query) ||
      article.title.toLowerCase().includes(query)
    )
  })


  return (
    <div className="dark:bg-[#000000] bg-[#e6e9da] w-full min-h-screen flex flex-col items-center pb-6">

      <div className="space-y-2 py-6 w-full bg-gray-50 px-12 dark:bg-[#151515]">
        <h2 className="text-3xl font-bold dark:text-white text-black">Articles</h2>
        <p className="dark:text-gray-300 text-gray-700">Insights, experiences, and advice from our alumni community</p>
      </div>

      <SearchbarTemplate placeholder="Search articles by title, author or description" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 px-4 md:px-10 py-6">
          {
            filteredArticles.map((article, index) => (
              <ArticleCard key={index}
                title={article.title}
                author={{
                  firstName: article.author.firstName,
                  lastName: article.author.lastName,
                  profileImageURL: article.author.profileImageURL
                }}
                date={article.date}
                summary={article.summary}
                likes={article.likes}
              />
            ))
          }
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

    </div>
  )
}

