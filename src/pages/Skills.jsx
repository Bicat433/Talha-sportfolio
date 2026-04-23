import { motion } from "framer-motion";
import SectionHeading from "../components/shared/SectionHeading";
import AnimatedSection from "../components/shared/AnimatedSection";
import HorizonLine from "../components/shared/HorizonLine";

const hardSkills = [
  { name: "Advertising", level: 90 },
  { name: "Public Relations", level: 85 },
  { name: "Branding", level: 92 },
  { name: "Social Media Marketing", level: 88 },
  { name: "IT Fundamentals", level: 84 },
  { name: "CRM Management", level: 86 },
  { name: "Accounting", level: 80 },
  { name: "Operational Efficiency", level: 85 },
];

const tools = [
  { name: "MS Office", level: 95 },
  { name: "Google Suite", level: 92 },
  { name: "Canva", level: 88 },
  { name: "AI Tools", level: 85 },
  { name: "Excel / Spreadsheets", level: 90 },
];

const softSkills = [
  { name: "Leadership", desc: "Leading teams and driving projects to completion" },
  { name: "Teamwork", desc: "Working effectively with teams to achieve shared goals" },
  { name: "Strategic Thinking", desc: "Connecting creative vision with business objectives" },
  { name: "Public Speaking", desc: "Confident presenter and persuasive communicator" },
  { name: "Debating", desc: "Analyzing both sides of complex arguments with clarity" },
  { name: "Problem Solving", desc: "Data-driven approach to overcoming challenges" },
  { name: "Adaptability", desc: "Thriving in fast-paced, multicultural environments" },
  { name: "Team Collaboration", desc: "Building synergy across diverse teams" },
  { name: "Time Management", desc: "Balancing academics, business, and personal growth" },
];

export default function Skills() {
  return (
    <div className="pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Competencies"
          title={<>Skills &<br /><span className="text-primary">Expertise</span></>}
          subtitle="A competency matrix spanning creative marketing and business operations."
        />

        {/* Hard Skills */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <AnimatedSection>
            <h3 className="font-heading text-xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Professional Skills
            </h3>
            <div className="space-y-6">
              {hardSkills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 0.1} />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h3 className="font-heading text-xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Software & Tools
            </h3>
            <div className="space-y-6">
              {tools.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 0.1} />
              ))}
            </div>
          </AnimatedSection>
        </div>

        <HorizonLine className="mb-20" />

        {/* Soft Skills */}
        <AnimatedSection className="mb-24">
          <h3 className="font-heading text-2xl font-bold mb-10 text-center">
            Soft Skills & <span className="text-primary">Character</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -4, borderColor: "hsl(18, 100%, 50%)" }}
                className="p-6 rounded-xl border border-border bg-card/30 text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="font-heading text-lg font-bold text-primary">
                    {skill.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-sm mb-1">{skill.name}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

function SkillBar({ skill, delay }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="font-mono text-xs text-primary">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
        />
      </div>
    </div>
  );
}