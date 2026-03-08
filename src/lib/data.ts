export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: "Lifestyle" | "Fashion" | "Travel" | "Food";
  date: string;
  imageUrl: string;
  author: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "The Ultimate Guide to Irani Cafes in Hyderabad",
    excerpt: "Discover the nostalgic charm, the best Osmania biscuits, and the perfect cup of Irani Chai in the heart of the city.",
    category: "Food",
    date: "Mar 07, 2026",
    imageUrl: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&q=80&w=1000",
    author: "Sara Ahmed",
  },
  {
    id: "2",
    title: "A Walk Through the Charminar Night Market",
    excerpt: "Experiencing the vibrant colors, shimmering bangles, and the lively crowd of the old city after dark.",
    category: "Travel",
    date: "Mar 05, 2026",
    imageUrl: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&q=80&w=1000",
    author: "Rahul Varma",
  },
  {
    id: "3",
    title: "Reviving Ikat: Modern Silhouettes in Traditional Weaves",
    excerpt: "How local designers are bringing Pochampally Ikat into everyday modern fashion.",
    category: "Fashion",
    date: "Mar 02, 2026",
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000",
    author: "Neha Singh",
  },
  {
    id: "4",
    title: "Slow Living in Jubilee Hills: Combining Nature and Urban Life",
    excerpt: "Finding peace amidst the bustling city in some of the most beautifully architected homes.",
    category: "Lifestyle",
    date: "Feb 28, 2026",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    author: "Vikram Rao",
  },
  {
    id: "5",
    title: "Beyond Biryani: The Hidden Gems of Hyderabadi Cuisine",
    excerpt: "From Haleem to Pathar ka Gosht, exploring the rich culinary heritage that often goes unnoticed.",
    category: "Food",
    date: "Feb 20, 2026",
    imageUrl: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=1000",
    author: "Sara Ahmed",
  },
  {
    id: "6",
    title: "Weekend Getaways: The Serenity of Ananthagiri Hills",
    excerpt: "A short drive from the city leads to dense forests, ancient temples, and breathtaking views.",
    category: "Travel",
    date: "Feb 15, 2026",
    imageUrl: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1000",
    author: "Rahul Varma",
  },
  {
    id: "7",
    title: "Minimalist Workspaces: Creating Your Own Aesthetic Corner",
    excerpt: "Curating a productive and beautiful home office setup.",
    category: "Lifestyle",
    date: "Feb 10, 2026",
    imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000",
    author: "Priya Reddy",
  },
  {
    id: "8",
    title: "Street Style Spotlight: Banjara Hills Edition",
    excerpt: "Capturing the best dressed individuals navigating the upscale cafes and boutiques.",
    category: "Fashion",
    date: "Feb 05, 2026",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000",
    author: "Neha Singh",
  }
];

export const team = [
  {
    id: "1",
    name: "Vikram Rao",
    role: "Editor in Chief",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "2",
    name: "Sara Ahmed",
    role: "Food & Culture Editor",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "3",
    name: "Neha Singh",
    role: "Style Director",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
  }
];

export const covers = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
];
