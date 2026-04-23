import { motion } from "framer-motion";
import SectionHeading from "../components/shared/SectionHeading";
import AnimatedSection from "../components/shared/AnimatedSection";
import HorizonLine from "../components/shared/HorizonLine";

const interests = [
  {
    title: "Football",
    emoji: "⚽",
    desc: "Passionate follower of the beautiful game. Football teaches strategic thinking, teamwork, and the art of reading the play, skills that translate directly into marketing campaigns.",
    tags: ["Strategy", "Teamwork", "Competitive Spirit"],
  },
  {
    title: "Movies & Cinema",
    emoji: "🎬",
    desc: "A cinephile who draws creative inspiration from storytelling, cinematography, and narrative structure. Understanding how stories move audiences is at the heart of great advertising.",
    tags: ["Storytelling", "Visual Language", "Narrative"],
  },
  {
    title: "Anime",
    emoji: "🎌",
    desc: "The bold visual style, complex narratives, and cultural depth of anime inspire a unique perspective on branding and creative direction that goes beyond conventional Western aesthetics.",
    tags: ["Visual Art", "Culture", "Creative Thinking"],
  },
  {
    title: "Technology",
    emoji: "💻",
    desc: "Early adopter of AI tools and emerging tech. Constantly exploring how technology can enhance marketing workflows, automate processes, and create more personalized brand experiences.",
    tags: ["AI Tools", "Innovation", "Digital Trends"],
  },
];

export default function Creative() {
  return (
    <div className="pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Beyond Work"
          title={<>Creative<br /><span className="text-primary">Interests</span></>}
          subtitle="The passions and perspectives that fuel my creative thinking and unique approach to marketing."
        />

        {/* Hero Image */}
        <AnimatedSection className="mb-20">
          <div className="relative rounded-3xl overflow-hidden aspect-[21/9]">
            <img
              src="https://media.base44.com/images/public/69e9b0388041cde73f1dcd41/3ab8ddbdf_generated_dedf1fe9.png"
              alt="Dynamic sports photography with motion blur"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12">
              <span className="font-mono text-xs text-primary tracking-widest uppercase">
                Passion Meets Profession
              </span>
              <h3 className="font-heading text-3xl lg:text-4xl font-bold mt-2">
                Where Creativity Comes From
              </h3>
            </div>
          </div>
        </AnimatedSection>

        {/* Interest Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {interests.map((interest, i) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group p-8 lg:p-10 rounded-2xl border border-border bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl">{interest.emoji}</span>
                <h3 className="font-heading text-2xl font-bold group-hover:text-primary transition-colors">
                  {interest.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{interest.desc}</p>
              <div className="flex flex-wrap gap-2">
                {interest.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/10 text-xs font-mono text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <HorizonLine className="mb-20" />

        {/* Debating Section */}
        <AnimatedSection className="mb-24">
          <div className="relative p-10 lg:p-16 rounded-3xl bg-card border border-border overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="relative">
              <span className="font-mono text-xs text-primary tracking-widest uppercase">The Debater</span>
              <h3 className="font-heading text-3xl lg:text-4xl font-bold mt-4 mb-6">
                Seeing Both <span className="text-primary">Sides</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
                A skilled debater who thrives in intellectual discourse. The ability to construct
                compelling arguments from multiple perspectives is what makes marketing strategy
                truly effective, understanding the audience's counter-arguments before they even
                arise. This skill has been honed through competitive debating, university discussions,
                and real-world business negotiations.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {["Persuasion", "Critical Analysis", "Argument Construction"].map((skill) => (
                  <div key={skill} className="p-4 rounded-xl bg-muted/50 border border-border text-center">
                    <span className="text-sm font-medium text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}