import { ArticleCard } from "./ArticleCard"

export const Articles = () => {
  return (
    <div className="p-40">
      <ArticleCard
        title="Building Scalable Web Apps with React"
        author={{
          firstName: "Ojas",
          lastName: "Deshpande",
          profileImageURL: "image"
        }}
        date="April 3, 2025"
        summary="In this article, we explore the best practices for architecting scalable frontend applications using React and Tailwind CSS..."
      />

    </div>
  )
}
