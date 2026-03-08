import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 mt-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="text-4xl font-serif font-bold tracking-tight inline-block mb-6">
              Shehar.
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Exploring the culture, stories, and vibrant lifestyle of Hyderabad. Discover the city through our eyes.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Categories</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link href="/lifestyle" className="hover:text-primary transition-colors">Lifestyle</Link></li>
              <li><Link href="/fashion" className="hover:text-primary transition-colors">Fashion</Link></li>
              <li><Link href="/food" className="hover:text-primary transition-colors">Food & Drink</Link></li>
              <li><Link href="/travel" className="hover:text-primary transition-colors">Travel</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/covers" className="hover:text-primary transition-colors">Magazine Covers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest stories from Hyderabad delivered to your inbox.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border border-background/40 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-background transition-colors text-background placeholder:text-background/60"
                required
              />
              <button 
                type="button"
                className="bg-primary text-white hover:bg-[#732218] rounded-sm px-4 py-3 text-sm uppercase tracking-wider font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col items-center justify-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Shehar Magazine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
