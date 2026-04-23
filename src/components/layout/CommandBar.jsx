import { Linkedin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CommandBar() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 z-40 hidden lg:block"
    >
      <div className="bg-card/80 backdrop-blur-xl border-t border-border">
        <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:talhanasirfd99@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail className="w-4 h-4" />
              <span className="font-mono text-xs">Email</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="tel:+971585048523"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <Phone className="w-4 h-4" />
              <span className="font-mono text-xs">+971 58 504 8523</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-talha-a64256294"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold hover:bg-primary/90 transition-all group"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}