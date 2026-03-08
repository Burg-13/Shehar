import Image from "next/image";
import { team } from "@/lib/data";

export default function About() {
  return (
    <div className="container mx-auto px-4 md:px-8 max-w-5xl py-12">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6">Our Story</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Shehar is a love letter to Hyderabad. We believe in capturing the essence of the city—its heritage, its evolving modern culture, the food that brings people together, and the stories hidden in plain sight.
        </p>
      </div>

      <div className="relative w-full aspect-video mb-24 rounded-sm overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1544413660-299165566b1d?auto=format&fit=crop&q=80&w=2000" 
          alt="Hyderabad view" 
          fill 
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-4xl font-serif text-foreground mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We started Shehar with a simple idea: to document the lifestyle of Hyderabad in a way that feels authentic and elevating. The city is growing fast, and amidst the skyscrapers in Hitec City and the expanding cafes in Jubilee Hills, we wanted to ensure the soul of the city remains in focus.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether it's the rich tapestry of Banjara Hills street fashion or the timeless allure of Charminar, our mission is to deliver high-quality editorial content that resonates with the people who call this city home, or those who simply admire it from afar.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-square">
            <Image src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&q=80&w=600" alt="Culture" fill className="object-cover rounded-sm" />
          </div>
          <div className="relative aspect-square translate-y-8">
            <Image src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&q=80&w=600" alt="Lifestyle" fill className="object-cover rounded-sm" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-serif text-foreground mb-12 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 cursor-pointer">
          {team.map((member) => (
            <div key={member.id} className="group text-center">
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden rounded-sm">
                <Image 
                  src={member.imageUrl} 
                  alt={member.name} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif text-foreground mb-1">{member.name}</h3>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
