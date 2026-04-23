import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Calendar, Download } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import AnimatedSection from "../components/shared/AnimatedSection";
import HorizonLine from "../components/shared/HorizonLine";

const education = [
  {
    period: "2022 - 2026",
    degree: "Bachelors in Media & Communication",
    institution: "Middlesex University, Dubai Campus",
    details: [
      "Focus on advertising, PR, and branding strategy",
      "Completed major projects including Deadzone, Zewar, and Netflix Research",
      "Developed strong foundations in digital marketing and brand management",
    ],
  },
];

const experience = [
  {
    period: "2021 - Present",
    role: "Business Operations & Marketing Manager",
    company: "Family Business Enterprise",
    details: [
      "Managed day-to-day accounting and financial record-keeping",
      "Streamlined operational processes for improved efficiency",
      "Enhanced brand presence through targeted social media marketing campaigns",
      "Coordinated vendor relationships and supply chain logistics",
      "Implemented data-driven strategies to optimize business performance",
    ],
  },
];

const certifications = [
  "Advanced Social Media Marketing - Strategic Campaign Development",
  "Financial Accounting Fundamentals - Business Operations",
  "Digital Branding & PR Communications",
  "Leadership & Team Management Principles",
];

export default function CV() {
  return (
    <div className="pt-24 lg:pt-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex items-start justify-between mb-4">
          <SectionHeading
            label="Curriculum Vitae"
            title={<>Professional<br /><span className="text-primary">Resume</span></>}
            subtitle="A structured overview of education, experience, and competencies."
          />
        </div>

        {/* Education */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold">Education</h3>
          </div>

          {education.map((item) => (
            <TimelineCard key={item.degree} item={item} type="education" />
          ))}
        </AnimatedSection>

        <HorizonLine className="mb-16" />

        {/* Experience */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold">Experience</h3>
          </div>

          {experience.map((item) => (
            <TimelineCard key={item.role} item={item} type="experience" />
          ))}
        </AnimatedSection>

        <HorizonLine className="mb-16" />

        {/* Certifications & Training */}
        <AnimatedSection className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold">Training & Focus Areas</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card/30 hover:border-primary/30 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-sm text-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

function TimelineCard({ item, type }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors pb-8 last:pb-0 group"
    >
      <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors" />
      
      <div className="flex items-center gap-2 mb-2">
        <Calendar className="w-3.5 h-3.5 text-primary" />
        <span className="font-mono text-xs text-primary">{item.period}</span>
      </div>
      
      <h4 className="font-heading text-xl font-bold mb-1">
        {type === "education" ? item.degree : item.role}
      </h4>
      <p className="text-sm text-muted-foreground mb-4">
        {type === "education" ? item.institution : item.company}
      </p>
      
      <ul className="space-y-2">
        {item.details.map((detail, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}