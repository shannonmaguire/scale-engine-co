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
      {/* Streamlined Masthead */}
      <section className="bg-background border-b-2 border-primary/30 section-spacing-quarter">
        <div className="container mx-auto px-6 py-10">
          <div className="text-center border-b border-border/50 pb-6 mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-black text-foreground tracking-tight">
              THE CWT STANDARD
            </h1>
            <div className="flex items-center justify-center gap-4 mt-4 text-sm font-mono text-muted-foreground">
              <time className="uppercase tracking-wide">{new Date().toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}</time>
              <span>•</span>
              <span className="uppercase tracking-wide">Digital Edition</span>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-base text-muted-foreground italic max-w-2xl mx-auto">
              Setting the standard for revenue operations excellence
            </p>
          </div>
        </div>
      </section>

      {/* Improved Navigation */}
      <section className="bg-muted/20 border-b border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-mono text-base font-semibold text-foreground">Browse:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`font-mono text-xs uppercase tracking-wide transition-all hover:scale-105 ${
                      selectedCategory === category 
                        ? 'bg-primary text-primary-foreground shadow-md' 
                        : 'hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full sm:w-72 font-mono text-sm bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="container mx-auto px-6 section-spacing-half border-b border-border">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-primary/50 flex-1"></div>
              <Badge variant="outline" className="font-mono text-sm uppercase tracking-wide bg-primary text-primary-foreground border-primary px-4 py-1">
                Featured
              </Badge>
              <div className="h-px bg-primary/50 flex-1"></div>
            </div>
          </div>
          
          <article className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-10">
              <div className="lg:col-span-3">
                <header className="mb-8">
                  <div className="flex items-center gap-3 mb-5">
                    <Badge variant="secondary" className="font-mono text-sm uppercase tracking-wide px-3 py-1">
                      {featuredPost.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">•</span>
                    <time className="text-sm font-mono text-muted-foreground">
                      {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </time>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-mono font-bold text-foreground leading-tight mb-6 hover:text-primary transition-colors cursor-pointer">
                    <Link to={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-base text-muted-foreground mb-8">
                    <span className="font-semibold">By {featuredPost.author}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-5 w-5" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Button asChild size="lg" className="font-mono text-base px-8 py-6">
                    <Link to={`/blog/${featuredPost.slug}`} className="flex items-center gap-2">
                      Read Article <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </header>
              </div>
              
              <aside className="space-y-6">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-1 h-8 bg-primary rounded-full"></div>
                    <h3 className="font-mono text-lg font-bold text-foreground">
                      Article Topics
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag, index) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="text-sm font-medium px-4 py-2 bg-background hover:bg-primary/10 transition-colors cursor-pointer border border-border"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-5 pt-5 border-t border-primary/20">
                    <p className="text-sm text-muted-foreground italic">
                      Deep dive into these key areas
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </article>
        </section>
      )}

      {/* Editorial Sections */}
      <section className="container mx-auto px-6 section-spacing-half">
        {/* Section Groups by Category */}
        {categories.filter(cat => cat !== 'All').map(category => {
          const categoryPosts = regularPosts.filter(post => 
            selectedCategory === 'All' || selectedCategory === category
          ).filter(post => post.category === category);
          
          if (categoryPosts.length === 0) return null;
          
          return (
            <div key={category} className="mb-20 border-b border-border pb-16 last:border-b-0">
              {/* Section Header */}
              <div className="mb-10">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-mono font-black text-foreground uppercase tracking-wide">
                    {category}
                  </h2>
                  <div className="h-px bg-border flex-1"></div>
                </div>
              </div>
              
              {/* Articles in Newspaper Column Layout */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {categoryPosts.map((post, index) => (
                  <article key={post.id} className={`
                    ${index === 0 && categoryPosts.length > 1 ? 'md:col-span-2 lg:col-span-1' : ''}
                    border-b border-border pb-8 last:border-b-0
                  `}>
                    <header className="mb-5">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm font-mono uppercase tracking-wide text-primary font-bold">
                          {post.category}
                        </span>
                        <span className="text-sm text-muted-foreground">|</span>
                        <time className="text-sm font-mono text-muted-foreground">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </time>
                      </div>
                      
                      <h3 className={`
                        font-mono font-semibold text-foreground leading-tight mb-4 hover:text-primary transition-colors cursor-pointer
                        ${index === 0 && categoryPosts.length > 1 ? 'text-2xl md:text-3xl' : 'text-xl'}
                      `}>
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className={`
                        text-foreground leading-relaxed
                        ${index === 0 && categoryPosts.length > 1 ? 'text-lg' : 'text-base'}
                      `}>
                        {post.excerpt}
                      </p>
                    </header>
                    
                    <footer className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-sm font-mono text-muted-foreground uppercase tracking-wide">
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
          <div className="mb-20">
            <div className="mb-10">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-mono font-black text-foreground uppercase tracking-wide">
                  {searchTerm ? `Search Results for "${searchTerm}"` : selectedCategory}
                </h2>
                <div className="h-px bg-border flex-1"></div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {regularPosts.map((post) => (
                <article key={post.id} className="border-b border-border pb-8">
                  <header className="mb-5">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-mono uppercase tracking-wide text-primary font-bold">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">|</span>
                      <time className="text-sm font-mono text-muted-foreground">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </time>
                    </div>
                    
                    <h3 className="text-xl font-mono font-bold text-foreground leading-tight mb-4 hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`} className="story-link">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-base text-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </header>
                  
                  <footer className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                      <span>By {post.author}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-sm font-mono text-muted-foreground uppercase tracking-wide">
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

      {/* Newsletter Subscription */}
      <section className="bg-muted/20 border-t-2 border-primary/30">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-background border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-mono font-bold text-foreground mb-3">
                Stay Updated
              </h3>
              <p className="text-muted-foreground mb-6">
                Get the latest revenue operations insights delivered weekly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 border-border focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <Button size="lg" className="sm:px-8 font-semibold">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground">
                Join 2,000+ professionals • Weekly insights • Unsubscribe anytime
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;