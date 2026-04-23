import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, MapPin, ArrowRight } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import AnimatedSection from "../components/shared/AnimatedSection";

export default function VideoIntro() {
  return (
    <div className="pt-24 lg:pt-32 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Video Introduction"
          title={<>Meet <span className="text-primary">Talha</span></>}
          subtitle="A brief introduction: my studies, interests, and future goals in my own words."
          align="center"
        />

        {/* Video Player */}
        <AnimatedSection className="mb-12">
          <div className="relative rounded-3xl overflow-hidden bg-card border border-border">
            <div className="aspect-video">
              <iframe
                src="https://drive.google.com/file/d/1NKpTpNQP-SH1wioWnyyMgfqBK4K3B7qc/preview"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Muhammad Talha - Video Introduction"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Info below video */}
        <AnimatedSection delay={0.2}>
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-xl bg-card/30 border border-border text-center">
              <MapPin className="w-5 h-5 text-primary mx-auto mb-3" />
              <p className="text-sm font-medium">Dubai, UAE</p>
              <p className="text-xs text-muted-foreground mt-1">Based</p>
            </div>
            <div className="p-6 rounded-xl bg-card/30 border border-border text-center">
              <Play className="w-5 h-5 text-primary mx-auto mb-3" />
              <p className="text-sm font-medium">Media & Communication</p>
              <p className="text-xs text-muted-foreground mt-1">Field of Study</p>
            </div>
            <div className="p-6 rounded-xl bg-card/30 border border-border text-center">
              <ArrowRight className="w-5 h-5 text-primary mx-auto mb-3" />
              <p className="text-sm font-medium">Dynamic Marketing</p>
              <p className="text-xs text-muted-foreground mt-1">Career Goal</p>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.3}>
          <div className="text-center pb-16">
            <p className="text-muted-foreground mb-6">
              Interested in connecting? Let's discuss how I can contribute to your team.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}