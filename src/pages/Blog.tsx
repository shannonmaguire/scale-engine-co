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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/20 border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-mono font-bold text-foreground mb-6">
              Revenue Systems
              <span className="text-primary block">Intelligence</span>
            </h1>
            <p className="text-xl text-foreground/90 font-mono mb-8 max-w-2xl">
              Insights, strategies, and technical deep-dives into building scalable revenue operations and systems architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="border-b border-border bg-background/50">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 console-input"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="font-mono"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <Badge variant="secondary" className="system-badge mb-4">Featured Article</Badge>
            <h2 className="text-2xl font-mono font-bold text-foreground mb-2">Latest Insights</h2>
          </div>
          
          <Card className="console-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="font-mono text-xs">
                  {featuredPost.category}
                </Badge>
                {featuredPost.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-mono text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardTitle className="text-2xl font-mono hover:text-primary transition-colors">
                <Link to={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </CardTitle>
              <CardDescription className="text-base text-foreground/80 mt-3">
                {featuredPost.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                  <span>{featuredPost.author}</span>
                  <span>•</span>
                  <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link to={`/blog/${featuredPost.slug}`} className="flex items-center gap-2">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <Card key={post.id} className="console-card hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline" className="font-mono text-xs">
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-mono group-hover:text-primary transition-colors">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-foreground/80 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <time className="text-xs text-muted-foreground font-mono">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </time>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground font-mono">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="bg-muted/30 border-t border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-mono font-bold text-foreground mb-4">
              Stay Updated on Revenue Systems
            </h3>
            <p className="text-foreground/80 mb-8">
              Get weekly insights on revenue operations, systems automation, and strategic business intelligence delivered to your inbox.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="console-input"
              />
              <Button className="btn-console">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;