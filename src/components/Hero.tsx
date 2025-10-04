import { Link } from 'react-router-dom';
import { ArrowRight, Package, Globe, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary to-primary-hover text-primary-foreground">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Premium Global Shopping
              <span className="block text-accent mt-2">Made Simple</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Experience seamless international shopping with Venkat Express. We purchase and ship authentic Indian products directly to your doorstep worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/products">
                <Button size="lg" className="gradient-gold hover:shadow-gold text-lg px-8">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
                  Our Services
                </Button>
              </Link>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20"
              >
                <ShoppingBag className="h-12 w-12 text-accent mb-4 mx-auto" />
                <h3 className="font-heading font-semibold text-xl mb-2">Buy For You</h3>
                <p className="text-sm text-primary-foreground/80">
                  Browse our catalog or request specific items. We purchase and ship to you.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20"
              >
                <Package className="h-12 w-12 text-accent mb-4 mx-auto" />
                <h3 className="font-heading font-semibold text-xl mb-2">Ship Your Items</h3>
                <p className="text-sm text-primary-foreground/80">
                  Already have items? We'll collect and ship them internationally.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20"
              >
                <Globe className="h-12 w-12 text-accent mb-4 mx-auto" />
                <h3 className="font-heading font-semibold text-xl mb-2">Global Delivery</h3>
                <p className="text-sm text-primary-foreground/80">
                  Reliable shipping to 50+ countries with full tracking support.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
