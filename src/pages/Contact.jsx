import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, MapPin, ArrowUpRight, Send } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import AnimatedSection from "../components/shared/AnimatedSection";
import HorizonLine from "../components/shared/HorizonLine";

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: "+971 58 504 8523",
    href: "tel:+971585048523",
    desc: "Available for calls during UAE business hours",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Muhammad Talha",
    href: "https://www.linkedin.com/in/muhammad-talha-a64256294",
    desc: "Let's connect professionally",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "talhanasirfd99@gmail.com",
    href: "mailto:talhanasirfd99@gmail.com",
    desc: "For inquiries and opportunities",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dubai, United Arab Emirates",
    href: null,
    desc: "Open to on-site and remote opportunities",
  },
];

export default function Contact() {
  return (
    <div className="pt-24 lg:pt-32 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Get in Touch"
          title={<>Let's <span className="text-primary">Connect</span></>}
          subtitle="I'm actively seeking opportunities in marketing and business management. Don't hesitate to reach out."
          align="center"
        />

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {contactMethods.map((method, i) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {method.href ? (
                <a
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="block group p-8 rounded-2xl border border-border bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-500"
                >
                  <ContactCardContent method={method} />
                </a>
              ) : (
                <div className="p-8 rounded-2xl border border-border bg-card/30">
                  <ContactCardContent method={method} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <HorizonLine className="mb-16" />

        {/* CTA Section */}
        <AnimatedSection className="mb-24">
          <div className="relative p-10 lg:p-16 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative">
              <Send className="w-8 h-8 text-primary mx-auto mb-6" />
              <h3 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
                Whether it's a marketing role, a business consulting opportunity, or a creative
                collaboration, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/muhammad-talha-a64256294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all group"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="tel:+971585048523"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full font-semibold hover:border-primary hover:text-primary transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

function ContactCardContent({ method }) {
  return (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <method.icon className="w-5 h-5 text-primary" />
        </div>
        {method.href && (
          <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
        )}
      </div>
      <span className="font-mono text-xs text-primary tracking-widest uppercase">{method.label}</span>
      <h3 className="font-heading text-xl font-bold mt-2 mb-1 group-hover:text-primary transition-colors">
        {method.value}
      </h3>
      <p className="text-sm text-muted-foreground">{method.desc}</p>
    </>
  );
}