import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Deadzone",
    tagline: "Reclaim the Physical World",
    category: "Campaign Strategy & Space Design",
    image: "https://media.base44.com/images/public/69e9b0388041cde73f1dcd41/f3840605a_generated_1870f3ce.png",
    description:
      "To counteract social media and excessive screen time issues that lead to depression amongst young people, Deadzone offers a phone-free physical space featuring retro diner vibes, bowling, arcade games, and a sanctuary from the digital world.",
    skills: ["Campaign Strategy", "Branding", "Social Impact", "Space Design", "PR"],
    color: "from-orange-600/20 to-red-600/20",
  },
  {
    id: 2,
    number: "02",
    title: "Zewar",
    tagline: "Luxury Jewelry, Digitized",
    category: "Web Design & Market Research",
    image: "https://media.base44.com/images/public/69e9b0388041cde73f1dcd41/deb2cfb86_generated_1fca6ee9.png",
    description:
      "A comprehensive website and research design project for a luxury jewelry e-commerce platform. Zewar combines market analysis with elegant UI/UX design to create a digital shopping experience that matches the sophistication of the jewelry it sells.",
    skills: ["Web Design", "UX Research", "E-Commerce", "Market Analysis", "Branding"],
    color: "from-amber-600/20 to-yellow-600/20",
  },
  {
    id: 3,
    number: "03",
    title: "Netflix Research",
    tagline: "Beyond Borders, Beyond Language",
    category: "Research & Campaign Strategy",
    image: "https://media.base44.com/images/public/69e9b0388041cde73f1dcd41/8e9ed7870_generated_22455aec.png",
    description:
      "A strategic campaign to create awareness of non-English language content on Netflix and spark discussions that UK-based audiences can relate to. Promoting cultural diversity and exposure to new perspectives while addressing subtitle and dubbing concerns, aligned with Netflix's brand management initiative.",
    skills: ["Research", "Campaign Strategy", "Cultural Analysis", "Brand Management", "Content Marketing"],
    color: "from-red-600/20 to-purple-600/20",
  },
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];

  const next = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="pt-24 lg:pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title={<>Selected<br /><span className="text-primary">Projects</span></>}
          subtitle="Key university projects showcasing strategy, research, and creative thinking."
        />

        {/* Project Navigation */}
        <div className="flex items-center gap-4 mb-10">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveIndex(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                i === activeIndex
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              <span className="font-mono text-xs">{p.number}</span>
              {p.title}
            </button>
          ))}
        </div>

        {/* Project Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-video group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="font-mono text-6xl font-bold text-foreground/10">{project.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <span className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
                  {project.category}
                </span>
                <h3 className="font-heading text-3xl lg:text-4xl font-bold mb-2">{project.title}</h3>
                <p className="text-lg text-muted-foreground italic mb-6">{project.tagline}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">{project.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-muted text-xs font-medium text-muted-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <span className="font-mono text-xs text-muted-foreground ml-2">
                    {activeIndex + 1} / {projects.length}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}