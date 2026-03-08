export default function Contact() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6">Get in Touch</h1>
        <p className="text-xl text-muted-foreground">
          Have a story idea, partnership proposal, or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-serif text-foreground mb-6">Contact Us</h2>
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="font-medium text-foreground uppercase tracking-wider text-sm mb-1">Editorial Enquiries</h3>
              <p>editor@sheharmagazine.com</p>
            </div>
            <div>
              <h3 className="font-medium text-foreground uppercase tracking-wider text-sm mb-1">Advertising & Partnerships</h3>
              <p>partners@sheharmagazine.com</p>
            </div>
            <div>
              <h3 className="font-medium text-foreground uppercase tracking-wider text-sm mb-1">Office</h3>
              <p>123 Road No 36, Jubilee Hills<br />Hyderabad, Telangana 500033</p>
            </div>
            <div>
              <h3 className="font-medium text-foreground uppercase tracking-wider text-sm mb-1">Phone</h3>
              <p>+91 (040) 1234 5678</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-8 rounded-sm shadow-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-transparent border border-gray-300 dark:border-zinc-700 rounded-sm px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-transparent border border-gray-300 dark:border-zinc-700 rounded-sm px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-transparent border border-gray-300 dark:border-zinc-700 rounded-sm px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground resize-none"
                required
              />
            </div>
            <button 
              type="button"
              className="w-full bg-foreground text-background hover:bg-primary transition-colors rounded-sm px-6 py-4 uppercase tracking-wider font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
