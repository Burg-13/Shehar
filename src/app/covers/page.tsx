import Image from "next/image";
import { covers } from "@/lib/data";

export default function Covers() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6">Magazine Covers</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A visual archive of Shehar editions. Celebrating the art, fashion, and faces that define Hyderabad.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {covers.map((cover, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative w-full aspect-[3/4] overflow-hidden border border-gray-200 shadow-md transition-all duration-300 group-hover:shadow-xl">
              <Image 
                src={cover} 
                alt={`Shehar Issue ${covers.length - i}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 top-8 text-center mix-blend-difference top-logo">
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-widest opacity-90">Shehar.</h2>
              </div>
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 tracking-wider z-10">
                ISSUE {covers.length - i}
              </div>
            </div>
            <h3 className="text-xl font-serif mt-6 text-center text-foreground group-hover:text-primary transition-colors">
              Issue 0{covers.length - i} — The Hyderabad Edition
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
