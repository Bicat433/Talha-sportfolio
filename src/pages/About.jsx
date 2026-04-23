import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Heart } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import AnimatedSection from "../components/shared/AnimatedSection";
import HorizonLine from "../components/shared/HorizonLine";

const highlights = [
  { icon: GraduationCap, title: "Middlesex University", desc: "Bachelors in Media & Communication (2022–2026), Dubai Campus" },
  { icon: Briefcase, title: "3+ Years in Business", desc: "Key role in family business: accounting, operations, and brand growth" },
  { icon: MapPin, title: "Dubai, UAE", desc: "Based in one of the world's most dynamic business hubs" },
  { icon: Heart, title: "The Rare Combination", desc: "Bridging creative marketing expertise with operational business acumen" },
];

export default function About() {
  return (
    <div className="pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          <div>
            <SectionHeading
              label="About Me"
              title={<>The Story Behind<br /><span className="text-primary">the Strategy</span></>}
            />
            <AnimatedSection delay={0.1}>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Graduate offering a rare combination of creative marketing expertise and 3+ years
                of business management experience. Having played a key role in a family business,
                I possess a deep understanding of accounting and operational efficiency, alongside
                a track record of enhancing brand presence through social media marketing.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                A highly organized and versatile professional seeking to apply a holistic business
                perspective to a dynamic marketing team.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://media.base44.com/images/public/69e9b0388041cde73f1dcd41/cfdfd55c1_generated_311dccce.png"
                alt="Light refracting through prisms representing media and communication"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-mono text-xs text-primary tracking-widest uppercase">
                  Dubai, United Arab Emirates
                </div>
                <div className="font-heading text-2xl font-bold mt-1">
                  Muhammad Talha
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <HorizonLine className="mb-20" />

        {/* Highlights Grid */}
        <AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6 mb-24">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-8 rounded-2xl border border-border bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Philosophy */}
        <AnimatedSection>
          <div className="relative p-10 lg:p-16 rounded-3xl bg-card border border-border mb-24 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <span className="font-mono text-xs text-primary tracking-widest uppercase">My Philosophy</span>
            <blockquote className="relative mt-6 font-heading text-2xl lg:text-3xl font-bold leading-relaxed text-foreground max-w-3xl">
              "I believe the best marketing strategies are built on a foundation of
              <span className="text-primary"> operational understanding</span>. When you
              know how a business truly runs, you can craft narratives that aren't
              just creative, they're <span className="text-primary">strategic</span>."
            </blockquote>
            <div className="mt-8 font-body text-sm text-muted-foreground">
              - Muhammad Talha
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}