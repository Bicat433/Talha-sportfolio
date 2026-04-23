import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Briefcase, GraduationCap, Linkedin, Phone } from "lucide-react";
import AnimatedSection from "../components/shared/AnimatedSection";
import HorizonLine from "../components/shared/HorizonLine";

const stats = [
  { value: "3+", label: "Years Experience", icon: Briefcase },
  { value: "2026", label: "Graduating", icon: GraduationCap },
  { value: "Dubai", label: "Based in UAE", icon: MapPin },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69e9b0388041cde73f1dcd41/2c3e20abb_generated_6404aa1a.png"
            alt="Dubai skyline at dusk"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-0 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-mono text-xs tracking-widest text-primary uppercase mb-6"
              >
                Media & Communication × Business Management
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8"
              >
                Muhammad
                <br />
                <span className="text-primary">Talha</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mb-10"
              >
                A rare combination of creative marketing expertise and
                hands-on business management experience, bridging brand
                strategy with operational excellence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:bg-primary/90 transition-all group"
                >
                  View Portfolio
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/cv"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full font-semibold text-sm hover:border-primary hover:text-primary transition-all"
                >
                  View CV
                </Link>
              </motion.div>
            </div>

            {/* Right: Stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex flex-col gap-6"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.15 }}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-heading text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      </div>

      {/* Quick Links Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <HorizonLine className="mb-16" />
        
        <AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuickLink to="/about" label="01" title="About Me" desc="Background, education & philosophy" />
            <QuickLink to="/portfolio" label="02" title="Portfolio" desc="University projects & case studies" />
            <QuickLink to="/video" label="03" title="Video Intro" desc="Meet Talha in person" />
          </div>
        </AnimatedSection>

        {/* Mobile contact bar */}
        <AnimatedSection className="mt-16 lg:hidden">
          <div className="flex flex-col sm:flex-row gap-4 p-6 rounded-2xl bg-card border border-border">
            <a
              href="tel:+971585048523"
              className="flex items-center gap-3 flex-1 justify-center py-3 rounded-xl bg-muted text-foreground font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-primary" />
              +971 58 504 8523
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-talha-a64256294"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 flex-1 justify-center py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

function QuickLink({ to, label, title, desc }) {
  return (
    <Link
      to={to}
      className="group p-8 rounded-2xl border border-border hover:border-primary/40 bg-card/30 hover:bg-card/60 transition-all duration-500"
    >
      <span className="font-mono text-xs text-primary">{label}</span>
      <h3 className="font-heading text-2xl font-bold mt-3 mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
      <ArrowRight className="w-5 h-5 text-muted-foreground mt-4 group-hover:text-primary group-hover:translate-x-2 transition-all" />
    </Link>
  );
}