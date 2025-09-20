import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Clock, ArrowRight } from "lucide-react";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    slug: "revenue-systems-automation-guide",
    title: "The Complete Guide to Revenue Systems Automation",
    excerpt: "Learn how to identify, design, and implement automated revenue systems that scale your business operations and improve conversion rates.",
    content: "Revenue systems automation is the foundation of scalable business growth...",
    author: "Shannon Mitchell",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Revenue Operations",
    tags: ["automation", "revenue", "systems", "scaling"],
    featured: true
  },
  {
    id: 2,
    slug: "salesforce-optimization-strategies",
    title: "Advanced Salesforce Optimization Strategies for Enterprise Teams",
    excerpt: "Discover proven techniques to maximize your Salesforce investment and streamline complex business processes for enterprise-scale operations.",
    content: "Enterprise Salesforce implementations require sophisticated optimization...",
    author: "Shannon Mitchell",
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    category: "Salesforce",
    tags: ["salesforce", "optimization", "enterprise", "crm"],
    featured: false
  },
  {
    id: 3,
    slug: "data-driven-decision-making-framework",
    title: "Building a Data-Driven Decision Making Framework",
    excerpt: "Establish systematic approaches to business intelligence that transform raw data into actionable insights for strategic decision making.",
    content: "Data-driven decision making requires more than just collecting metrics...",
    author: "Shannon Mitchell",
    publishedAt: "2024-01-05",
    readTime: "6 min read",
    category: "Strategy",
    tags: ["data", "analytics", "framework", "decisions"],
    featured: false
  },
  {
    id: 4,
    slug: "fractional-executive-benefits",
    title: "Why Fractional Executives Are the Future of Business Growth",
    excerpt: "Explore how fractional executive services provide enterprise-level expertise without the overhead of full-time executive hiring.",
    content: "The traditional model of executive hiring is being disrupted...",
    author: "Shannon Mitchell",
    publishedAt: "2023-12-28",
    readTime: "10 min read",
    category: "Leadership",
    tags: ["fractional", "executive", "growth", "strategy"],
    featured: true
  }
];

const categories = ["All", "Revenue Operations", "Salesforce", "Strategy", "Leadership"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Newspaper Masthead */}
      <section className="bg-background border-b-4 border-primary">
        <div className="container mx-auto px-6 py-8">
          {/* Publication Header */}
          <div className="text-center border-b border-border pb-6 mb-6">
            <h1 className="text-5xl md:text-7xl font-mono font-black text-foreground tracking-tight">
              CWT REVENUE INTELLIGENCE
            </h1>
            <div className="flex items-center justify-center gap-8 mt-4 text-sm font-mono text-muted-foreground">
              <span className="uppercase tracking-wide">Est. 2020</span>
              <span>•</span>
              <span className="uppercase tracking-wide">{new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <span>•</span>
              <span className="uppercase tracking-wide">Digital Edition</span>
            </div>
          </div>
          
          {/* Tagline */}
          <div className="text-center">
            <p className="text-lg text-foreground font-mono italic max-w-3xl mx-auto">
              "Professional insights on revenue systems, business automation, and strategic operations for the modern enterprise"
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Controls */}
      <section className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm font-bold text-foreground uppercase tracking-wide">Sections:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 text-xs font-mono uppercase tracking-wide border-b-2 transition-colors ${
                      selectedCategory === category 
                        ? 'border-primary text-primary font-bold' 
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search archives..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64 font-mono text-sm border-0 border-b border-border bg-transparent focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Front Page Lead Story */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="container mx-auto px-6 py-12 border-b border-border">
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-primary flex-1"></div>
              <span className="font-mono text-xs uppercase tracking-wide text-primary font-bold bg-background px-4">
                Lead Story
              </span>
              <div className="h-px bg-primary flex-1"></div>
            </div>
          </div>
          
          <article className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <header className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline" className="font-mono text-xs uppercase tracking-wide border-primary text-primary">
                      {featuredPost.category}
                    </Badge>
                    <div className="h-px bg-border flex-1"></div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-mono font-black text-foreground leading-tight mb-4 hover:text-primary transition-colors">
                    <Link to={`/blog/${featuredPost.slug}`} className="story-link">
                      {featuredPost.title}
                    </Link>
                  </h2>
                  
                  <p className="text-lg text-foreground leading-relaxed mb-6 font-serif">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-1 text-sm font-mono text-muted-foreground">
                    <span className="font-bold">By {featuredPost.author}</span>
                    <span className="mx-2">|</span>
                    <time>{new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</time>
                    <span className="mx-2">|</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </header>
              </div>
              
              <aside className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-mono text-sm font-bold text-foreground uppercase tracking-wide mb-2">
                    In This Issue
                  </h3>
                  <div className="space-y-2">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="block text-xs font-mono text-muted-foreground uppercase tracking-wide">
                        • {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border border-border p-4 bg-muted/20">
                  <Button asChild className="w-full font-mono text-sm">
                    <Link to={`/blog/${featuredPost.slug}`} className="flex items-center justify-center gap-2">
                      Read Full Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </aside>
            </div>
          </article>
        </section>
      )}

      {/* Editorial Sections */}
      <section className="container mx-auto px-6 py-12">
        {/* Section Groups by Category */}
        {categories.filter(cat => cat !== 'All').map(category => {
          const categoryPosts = regularPosts.filter(post => 
            selectedCategory === 'All' || selectedCategory === category
          ).filter(post => post.category === category);
          
          if (categoryPosts.length === 0) return null;
          
          return (
            <div key={category} className="mb-16 border-b border-border pb-12 last:border-b-0">
              {/* Section Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-mono font-black text-foreground uppercase tracking-wide">
                    {category}
                  </h2>
                  <div className="h-px bg-border flex-1"></div>
                </div>
              </div>
              
              {/* Articles in Newspaper Column Layout */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryPosts.map((post, index) => (
                  <article key={post.id} className={`
                    ${index === 0 && categoryPosts.length > 1 ? 'md:col-span-2 lg:col-span-1' : ''}
                    border-b border-border pb-6 last:border-b-0
                  `}>
                    <header className="mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-mono uppercase tracking-wide text-primary font-bold">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">|</span>
                        <time className="text-xs font-mono text-muted-foreground">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </time>
                      </div>
                      
                      <h3 className={`
                        font-mono font-bold text-foreground leading-tight mb-3 hover:text-primary transition-colors
                        ${index === 0 && categoryPosts.length > 1 ? 'text-xl md:text-2xl' : 'text-lg'}
                      `}>
                        <Link to={`/blog/${post.slug}`} className="story-link">
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className={`
                        text-foreground leading-relaxed
                        ${index === 0 && categoryPosts.length > 1 ? 'text-base' : 'text-sm'}
                      `}>
                        {post.excerpt}
                      </p>
                    </header>
                    
                    <footer className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </footer>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
        
        {/* Show all posts when filtering */}
        {(selectedCategory !== 'All' || searchTerm) && (
          <div className="mb-16">
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-mono font-black text-foreground uppercase tracking-wide">
                  {searchTerm ? `Search Results for "${searchTerm}"` : selectedCategory}
                </h2>
                <div className="h-px bg-border flex-1"></div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="border-b border-border pb-6">
                  <header className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono uppercase tracking-wide text-primary font-bold">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">|</span>
                      <time className="text-xs font-mono text-muted-foreground">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </time>
                    </div>
                    
                    <h3 className="text-lg font-mono font-bold text-foreground leading-tight mb-3 hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`} className="story-link">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-sm text-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </header>
                  
                  <footer className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                      <span>By {post.author}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 border-t border-border">
            <p className="text-muted-foreground font-mono italic">
              No articles found in our archives matching your search criteria.
            </p>
          </div>
        )}
      </section>

      {/* Subscription Notice - Newspaper Style */}
      <section className="bg-background border-t-4 border-primary">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-border p-8 bg-muted/10">
              <div className="text-center">
                <h3 className="text-xl font-mono font-black text-foreground uppercase tracking-wide mb-2">
                  INTELLIGENCE BRIEFINGS
                </h3>
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-wide mb-6">
                  WEEKLY SUBSCRIPTION AVAILABLE
                </p>
                
                <p className="text-base text-foreground mb-8 max-w-2xl mx-auto">
                  Receive our weekly digest of revenue operations insights, system automation strategies, 
                  and business intelligence analysis delivered directly to your executive briefcase.
                </p>
                
                <div className="flex gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Your business email"
                    className="font-mono text-sm border-2 border-border bg-background"
                  />
                  <Button className="font-mono uppercase tracking-wide bg-primary hover:bg-primary/90">
                    Subscribe
                  </Button>
                </div>
                
                <p className="text-xs font-mono text-muted-foreground mt-4 uppercase tracking-wide">
                  Professional insights • No promotional content • Unsubscribe anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;