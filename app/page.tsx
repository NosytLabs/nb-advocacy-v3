"use client";

import { motion } from "framer-motion";
import { Activity, DollarSign, ArrowRight, ShieldAlert, Zap, FileSearch, AlertTriangle, Ban, Home, TrendingDown, Radio, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { InvestigationsFeed } from "@/components/InvestigationsFeed";
import { DataCard } from "@/components/DataCard";

// Content is visible by default for accessibility/no-JS users.
// Framer Motion adds a subtle slide-in animation when JS runs.
// Removed opacity:0 from hidden so content is readable without JS.
const fadeIn = {
  hidden: { opacity: 1, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const statsCards = [
  { value: "21.9%", label: "Child Poverty Rate", sublabel: "41.2% in Campbellton", color: "red" as const, href: "/child-poverty" },
  { value: "238K+", label: "Without Family Doctor", sublabel: "Nearly 1/3 of NB population", color: "red" as const, href: "/healthcare" },
  { value: "$5.9B", label: "NB Power Debt", sublabel: "Rate increases of 50% proposed", color: "neutral" as const, href: "/climate-energy" },
  { value: "1,500+", label: "Chronically Homeless", sublabel: "100+ deaths in 2025 alone", color: "red" as const, href: "/housing" },
  { value: "$30B+", label: "Billionaire Wealth", sublabel: "Irving, McCain, Cooke families", color: "neutral" as const, href: "/oligarchy" },
  { value: "61K+", label: "ER Walkouts/Year", sublabel: "12.9% rate — among highest in Canada", color: "red" as const, href: "/healthcare" },
  { value: "$173.9M", label: "Travel Nurse Scandal", sublabel: "Untendered, covered up by courts", color: "neutral" as const, href: "/corruption" },
  { value: "96%", label: "Salmon Collapse", sublabel: "Miramichi River at historic lows", color: "red" as const, href: "/fisheries" },
];

const recentEvents = [
  { date: "MAR 14", title: "NB Power Burns 4M Barrels of Oil", category: "ENERGY", description: "Emissions hit 16-year high while utility pitches 'net-zero' premium rate.", href: "/articles/nb-power-emissions" },
  { date: "MAR 14", title: "Fredericton Chemical Spill", category: "ENVIRONMENT", description: "Cancer-causing chemical coats roads. Government slow to notify.", href: "/articles/fredericton-chemical-spill" },
  { date: "MAR 14", title: "NB Liquor Markups Strangle Distillers", category: "ECONOMY", description: "Provincial monopoly prevents local producers from scaling up.", href: "/economy" },
  { date: "MAR 13", title: "$45M 'Industrial Blackmail' Grant", category: "ECONOMY", description: "Holt government subsidizes Irving Paper electricity while cutting education.", href: "/budget-2026" },
  { date: "MAR 11", title: "Stillborn Lawsuit Settled", category: "HEALTHCARE", description: "Aimee Dunn settles Chalmers ER negligence case after losing pregnancy.", href: "/articles/healthcare-er-deaths" },
  { date: "FEB 25", title: "2026 Poverty Report Card", category: "SOCIAL", description: "Campbellton child poverty hits 41.2%. Indigenous reserves: 51.2%.", href: "/articles/poverty-campbellton" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-crisis-red selection:text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          
          
          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight uppercase">
            The Cost of Silence
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            New Brunswick is an extraction zone for billionaire dynasties. Behind the {"\""}balanced budgets{"\""} are shuttered ERs and hungry children. We document the failures of a captured province.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="#crises" className="bg-crisis-red hover:bg-red-700 text-white font-semibold py-4 px-10 rounded-lg flex items-center justify-center gap-3 transition-colors uppercase tracking-wide text-sm">
              Access the Files <FileSearch size={20} />
            </Link>
            <Link href="/take-action" className="bg-neutral-800 border-2 border-neutral-700 hover:border-neutral-600 text-white font-semibold py-4 px-10 rounded-lg transition-colors uppercase tracking-wide text-sm">
              Mobilize
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <InvestigationsFeed />

      {/* By The Numbers Section */}
      <section className="py-24 bg-neutral-900 border-b border-neutral-800">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-crisis-red/10 border border-crisis-red/30 px-4 py-2 rounded-full mb-6">
              <span className="text-crisis-text text-xs font-semibold uppercase tracking-wide">The Data</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">By The Numbers</h2>
            <p className="text-neutral-400 mt-4 max-w-xl mx-auto">Every statistic is sourced. Every number represents real people failed by a captured system.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsCards.map((item, i) => (
              <DataCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events Timeline */}
      <section className="py-24 bg-black border-b border-neutral-800">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <Calendar className="text-crisis-text" size={24} />
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Latest Reports</h2>
          </div>
          <div className="space-y-4">
            {recentEvents.map((event, i) => (
              <Link key={i} href={event.href || "#"} className="group flex flex-col md:flex-row gap-4 items-start p-5 hover:bg-neutral-900/50 transition-colors cursor-pointer border-b border-neutral-800 last:border-b-0">
                <div className="shrink-0 flex items-center gap-3">
                  <span className="text-crisis-text font-semibold text-sm font-mono">{event.date}</span>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide px-2 py-1">{event.category}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-crisis-text transition-colors mb-1">{event.title}</h3>
                  <p className="text-neutral-400 text-base italic">{event.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="crises" className="py-20 bg-black relative border-t border-neutral-800/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-32">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight leading-tight">The Pillars of <br/><span className="text-crisis-text">Extraction</span></h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8 max-w-lg">
                The capture of New Brunswick is not a conspiracy; it is a business model. We have documented the structural mechanisms used to transfer public wealth into private hands.
              </p>
              <div className="space-y-4">
                
              </div>
            </div>

            <div className="space-y-12">
              {/* Healthcare */}
              <div className="group">
                <div className="flex items-center gap-4 mb-6">
                  <Activity className="text-crisis-text group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-xl font-semibold uppercase tracking-wide">Healthcare Collapse</h3>
                </div>
                <p className="text-neutral-300 text-base leading-relaxed mb-6">
                  2,199 patients pronounced deceased upon arrival at ERs since 2020. 40% of beds occupied by ALC seniors. $173.9M funneled to private travel nurse agencies. The government calls it {'"'}efficiency{'"'}; we call it <strong>abandonment</strong>.
                </p>
                <Link href="/healthcare" className="text-sm font-bold uppercase tracking-wide text-crisis-text hover:text-white transition-colors flex items-center gap-2 group/link">
                  Read About Healthcare Collapse <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Housing */}
              <div className="group border-t border-neutral-900 pt-12">
                <div className="flex items-center gap-4 mb-6">
                  <Home className="text-crisis-text group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-xl font-semibold uppercase tracking-wide">Housing & Homelessness</h3>
                </div>
                <p className="text-neutral-300 text-base leading-relaxed mb-6">
                  1,500+ chronically homeless across Moncton, Saint John, and Fredericton. 440 youth without shelter. 100+ unhoused deaths from toxic supply and exposure. Winter kills. The market has failed.
                </p>
                <Link href="/housing" className="text-sm font-bold uppercase tracking-wide text-crisis-text hover:text-white transition-colors flex items-center gap-2 group/link">
                  Read About Housing & Homelessness <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Oligarchy */}
              <div className="group border-t border-neutral-900 pt-12">
                <div className="flex items-center gap-4 mb-6">
                  <DollarSign className="text-crisis-text group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-xl font-semibold uppercase tracking-wide">The Oligarchy</h3>
                </div>
                <p className="text-neutral-300 text-base leading-relaxed mb-6">
                  A vertical monopoly controlling land, media, fuel, transportation, and agriculture. $30 Billion in private wealth generated by the extraction of New Brunswick{"'"}s natural heritage. 5x less property tax than US refineries.
                </p>
                <Link href="/oligarchy" className="text-sm font-bold uppercase tracking-wide text-crisis-text hover:text-white transition-colors flex items-center gap-2 group/link">
                  Read About the Oligarchy <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Economy */}
              <div className="group border-t border-neutral-900 pt-12">
                <div className="flex items-center gap-4 mb-6">
                  <Zap className="text-crisis-text group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-xl font-semibold uppercase tracking-wide">Economic Fraud</h3>
                </div>
                <p className="text-neutral-300 text-base leading-relaxed mb-6">
                  $5.9 Billion in utility debt. 21.9% child poverty rate. 15% HST — highest in Canada. 1 in 4 families live in energy poverty while industrial grants explode.
                </p>
                <Link href="/economy" className="text-sm font-bold uppercase tracking-wide text-crisis-text hover:text-white transition-colors flex items-center gap-2 group/link">
                  Read About Economic Fraud <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Environmental */}
              <div className="group border-t border-neutral-900 pt-12">
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="text-crisis-text group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-xl font-semibold uppercase tracking-wide">Ecological Failure</h3>
                </div>
                <p className="text-neutral-300 text-base leading-relaxed mb-6">
                  96% collapse of Miramichi Salmon. Systemic glyphosate saturation. 3M+ tonnes of CO₂. Fredericton chemical spill. Irving intimidation of conservation groups. Wolastoqey land title claim against reckless extraction.
                </p>
                <Link href="/environment" className="text-sm font-bold uppercase tracking-wide text-crisis-text hover:text-white transition-colors flex items-center gap-2 group/link">
                  Read About Ecological Failure <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Intimidation */}
              <div className="group border-t border-neutral-900 pt-12">
                <div className="flex items-center gap-4 mb-6">
                  <Ban className="text-crisis-text group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-xl font-semibold uppercase tracking-wide">Intimidation & Censorship</h3>
                </div>
                <p className="text-neutral-300 text-base leading-relaxed mb-6">
                  Cartoonist fired for drawing Trump. Salmon conservationists threatened with river access revocation. Academics purged for glyphosate criticism. Election laws broken with impunity. 90+ years of media monopoly.
                </p>
                <Link href="/intimidation" className="text-sm font-bold uppercase tracking-wide text-crisis-text hover:text-white transition-colors flex items-center gap-2 group/link">
                  Read About Intimidation & Censorship <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Corruption */}
              <div className="group border-t border-neutral-900 pt-12">
                <div className="flex items-center gap-4 mb-6">
                  <ShieldAlert className="text-crisis-text group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-xl font-semibold uppercase tracking-wide">Systemic Corruption</h3>
                </div>
                <p className="text-neutral-300 text-base leading-relaxed mb-6">
                  $700K embezzlement from the Lt. Governor. $481K stolen by the Deputy AG. $173.9M travel nurse scandal hidden behind &quot;litigation privilege.&quot; $10M+ in annual untendered contracts. The system is the crime.
                </p>
                <Link href="/corruption" className="text-sm font-bold uppercase tracking-wide text-crisis-text hover:text-white transition-colors flex items-center gap-2 group/link">
                  Read About Systemic Corruption <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-crisis-red/5 pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-6">Break the Media Monopoly.</h2>
          <p className="text-lg text-neutral-300 mb-10 leading-relaxed">
            The corporate dynasties rely on your silence. Every time this intelligence is shared, their enclosure weakens. <strong>It is time to take back New Brunswick.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/take-action" className="bg-crisis-red hover:bg-red-700 text-white font-semibold py-4 px-12 rounded-lg text-lg transition-colors uppercase tracking-wide">
              Take Action
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
