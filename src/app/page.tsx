import Image from "next/image";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/data";

export default function Home() {
  const featuredArticle = articles[0];
  const latestArticles = articles.slice(1, 5);
  const categoryHighlights = [
    { name: "Food", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800", count: "12 Articles" },
    { name: "Lifestyle", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800", count: "8 Articles" },
    { name: "Fashion", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800", count: "15 Articles" }
  ];

  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section - Featured Article */}
      <section className="container mx-auto px-4 md:px-8 pt-8">
        <ArticleCard article={featuredArticle} featured />
      </section>

      {/* Latest Posts */}
      <section className="container mx-auto px-4 md:px-8 border-t border-gray-200 pt-16">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-4xl font-serif text-foreground">Latest Stories</h2>
          <Link href="/lifestyle" className="text-sm font-medium uppercase tracking-wider text-primary hover:text-foreground transition-colors hidden md:block">
            View All Stories →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <Link href="/lifestyle" className="mt-10 block text-center text-sm font-medium uppercase tracking-wider text-primary hover:text-foreground transition-colors md:hidden">
          View All Stories →
        </Link>
      </section>

      {/* Category Highlights */}
      <section className="bg-[#EAE8E3] dark:bg-[#222222] py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-foreground mb-4">Explore Shehar</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Dive deep into the specific aspects of life that make Hyderabad beautifully unique and truly alive.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoryHighlights.map((cat, i) => (
              <Link href={`/${cat.name.toLowerCase()}`} key={i} className="group relative block aspect-[4/5] overflow-hidden rounded-sm">
                <Image 
                  src={cat.image} 
                  alt={cat.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="text-3xl font-serif tracking-wide mb-2">{cat.name}</h3>
                  <span className="text-sm uppercase tracking-wider opacity-90">{cat.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 md:px-8 pb-12">
        <div className="bg-primary/5 border border-primary/20 rounded-sm p-12 md:p-24 text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Join the Community</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter and get curated stories, exclusive invites, and the best of Hyderabad delivered directly to your inbox every week.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-background border border-gray-300 dark:border-gray-700 rounded-sm px-6 py-4 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground"
              required
            />
            <button 
              type="button"
              className="bg-foreground text-background hover:bg-primary rounded-sm px-8 py-4 uppercase tracking-wider font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
