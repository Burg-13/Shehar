import ArticleCard from "@/components/ArticleCard";
import { articles, type Article } from "@/lib/data";

interface CategoryViewProps {
  title: string;
  description: string;
  category: Article["category"];
}

export default function CategoryView({ title, description, category }: CategoryViewProps) {
  const categoryArticles = articles.filter((a) => a.category === category);
  const featuredArticle = categoryArticles[0];
  const remainingArticles = categoryArticles.slice(1);

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="text-center mb-16 border-b border-gray-200 dark:border-zinc-800 pb-12">
        <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6">{title}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {categoryArticles.length > 0 ? (
        <div className="flex flex-col gap-16">
          <section>
            <ArticleCard article={featuredArticle} featured />
          </section>

          {remainingArticles.length > 0 && (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {remainingArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </section>
          )}
        </div>
      ) : (
        <div className="text-center py-20 text-muted-foreground">
          No articles found for this category yet. Check back soon.
        </div>
      )}
    </div>
  );
}
