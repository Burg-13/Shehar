import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/data";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <article className={`group flex flex-col gap-4 ${featured ? "md:flex-row md:items-center md:gap-8" : ""}`}>
      <Link href={`/${article.category.toLowerCase()}/${article.id}`} className={`block overflow-hidden rounded-sm relative ${featured ? "w-full md:w-3/5 aspect-[4/3] md:aspect-[16/9]" : "w-full aspect-[4/3]"}`}>
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
          {article.category}
        </div>
      </Link>
      
      <div className={`flex flex-col gap-3 ${featured ? "w-full md:w-2/5" : ""}`}>
        <div className="flex items-center gap-2 text-primary text-sm font-medium">
          <span>{article.date}</span>
        </div>
        
        <Link href={`/${article.category.toLowerCase()}/${article.id}`}>
          <h3 className={`font-serif text-foreground group-hover:text-primary transition-colors ${featured ? "text-3xl md:text-5xl leading-tight" : "text-xl leading-snug"}`}>
            {article.title}
          </h3>
        </Link>
        
        <p className={`text-muted-foreground ${featured ? "text-lg" : "text-base line-clamp-3"}`}>
          {article.excerpt}
        </p>

        <div className="mt-2 text-sm font-medium uppercase tracking-wide">
          By {article.author}
        </div>
      </div>
    </article>
  );
}
