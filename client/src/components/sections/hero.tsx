import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
              Grow Your Business<br />
              with <span className="text-yellow-400">Expert</span><br />
              Solutions
            </h1>
            <p className="text-xl mb-8 text-blue-100" data-testid="text-hero-description">
              From social media marketing to customer support, we're your all-in-one partner for digital growth and business process optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors text-lg"
                data-testid="button-hero-start-journey"
                asChild
              >
                <Link href="/contact">Start Your Growth Journey</Link>
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
                data-testid="button-hero-view-work"
                asChild
              >
                <Link href="/portfolio">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80" 
              alt="Business team collaborating with sticky notes" 
              className="rounded-2xl shadow-2xl w-full"
              data-testid="img-hero-team"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-green-600 h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm" data-testid="text-hero-growth-label">Growth Rate</p>
                  <p className="text-2xl font-bold text-gray-800" data-testid="text-hero-growth-rate">+247%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
