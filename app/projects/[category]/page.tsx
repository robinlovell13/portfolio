import { notFound } from "next/navigation"

// This is a placeholder. In a real application, you'd fetch this data from an API or database.
const categories = ["projects", "self-study", "activities-and-interests"]

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  if (!categories.includes(params.category)) {
    notFound()
  }

  return (
    <div className="min-h-screen py-16 px-8">
      <h1 className="text-3xl mb-8 text-center capitalize">{params.category.replace(/-/g, " ")}</h1>
      <p className="text-center">
        This page will display all projects for the {params.category.replace(/-/g, " ")} category.
      </p>
    </div>
  );
}

