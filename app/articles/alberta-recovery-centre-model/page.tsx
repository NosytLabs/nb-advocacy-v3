import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Alberta's Recovery Centre Model: A Template for the Rest of Canada?",
  description: "Alberta's Comprehensive Recovery Centre model combines detox, residential treatment, and community reintegration under one roof. Early results show higher completion rates than traditional fragmented care. Could it work in New Brunswick?",
  alternates: { canonical: "https://nbreform.ca/articles/alberta-recovery-centre-model/" },
  openGraph: {
    title: "Alberta's Recovery Centre Model: A Template for Canada?",
    description: "Alberta's integrated recovery centre model shows promising results. Could it work in New Brunswick?",
    images: [{ url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200", width: 1200, height: 675, alt: "Healthcare" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Alberta's Recovery Centre Model: A Template for the Rest of Canada?"
      date="April 2026"
      image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80"
      imageAlt="Healthcare"
      imageCredit="Unsplash"
      imageCreditUrl="https://unsplash.com"
      sources={[
        { title: "Alberta Health Services: Recovery Centre Model", url: "https://albertahealthservices.ca" },
        { title: "Government of Alberta: Substance use and addiction recovery", url: "https://alberta.ca/addiction" },
        { title: "Canadian Centre on Substance Use and Addiction: Best practices in addiction treatment", url: "https://ccsa.ca" },
        { title: "CBC: Alberta opens new recovery centres as addiction crisis deepens", url: "https://www.cbc.ca/news/canada/alberta" },
        { title: "The Narwhal: Can Alberta&apos;s recovery model fix Canada&apos;s addiction treatment gap?", url: "https://thenarwhal.ca" },
      ]}
    >
      <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight uppercase mb-8">Alberta&apos;s Recovery Centre Model: A Template for the Rest of Canada?</h1>

      <p className="text-xl text-white leading-relaxed mb-8">
        In most Canadian provinces, addiction treatment is a relay race with no designated handoff. A person in crisis might access emergency department care for an overdose, then be referred to a detoxification program, then discharged to a waitlist for residential treatment, then referred to a community-based program, then discharged again — with each transition a point where people fall out of the system. Alberta is trying to build something different.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Problem with Fragmented Care</h2>
      <p>
        Canadian addiction treatment has historically been delivered by a patchwork of organizations — some run by regional health authorities, some by non-profit organizations, some by for-profit operators — with limited coordination between them. A person seeking treatment might encounter waitlists at every step, disconnected records, and a system that expects individuals to navigate complex transitions between programs while managing a substance use disorder that impairs exactly the executive function required to do so.
      </p>
      <p>
        This fragmentation is not unique to Canada. It reflects a broader historical split in how addiction is treated: medical detox programs operated by health authorities, residential treatment programs operated by community organizations with different clinical standards, and community reintegration programs operated by yet another set of entities. The result is that people frequently cycle through treatment without completing a full continuum, and relapse rates remain high.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Alberta&apos;s Comprehensive Recovery Centre Model</h2>
      <p>
        Alberta&apos;s Recovery Centre model, piloted through Alberta Health Services and expanded through the province&apos;s 2023-2024 addiction reform agenda, takes a different approach. Rather than referring individuals between separate facilities for detox, residential treatment, and reintegration support, the Recovery Centre model integrates all three components within a single program — and often a single physical location.
      </p>
      <p>
        A person entering the program goes through an initial assessment and stabilization phase — typically medically supervised detox for those requiring it — then moves into residential treatment programming within the same facility. Clinical staff are shared across phases. Records are continuous. The individual does not graduate from one program and wait to enter another; the treatment continues as a single, coherent progression.
      </p>
      <p>
        The program also includes a family component — recognizing that addiction affects entire families and that family engagement improves treatment outcomes — and a reintegration phase that includes employment support, housing coordination, and peer mentorship connections.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What the Evidence Says</h2>
      <p>
        Alberta Health Services published preliminary outcome data for the Recovery Centre model in 2024. The results were compared against the legacy fragmented system and showed measurable improvements in several areas. Treatment completion rates — the percentage of individuals who entered a program and completed its full course — were higher at Recovery Centre sites than at traditional separate-facility programs. Rates of readmission to detox within 30 days of discharge were lower. And self-reported quality of life measures at 90-day follow-up showed greater improvement.
      </p>
      <p>
        The data is early and the comparison is not randomized — individuals at Recovery Centres may differ from those in the traditional system in ways that affect outcomes. But the directional findings are consistent with what the broader evidence base on integrated care suggests: when treatment is continuous rather than episodic, outcomes improve.
      </p>
      <p>
        The Canadian Centre on Substance Use and Addiction has published guidance identifying integrated care pathways as a best practice. Alberta&apos;s model is one of the most ambitious implementations of that principle in Canada to date.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What Alberta Gets Right — and What It Gets Wrong</h2>
      <p>
        Alberta&apos;s Recovery Centre model benefits from several structural advantages the province brought to its implementation. Alberta has a relatively strong fiscal position compared to Atlantic Canadian provinces, meaning it could make capital investments in purpose-built facilities that other provinces would struggle to finance. The province&apos;s single provincial health authority — Alberta Health Services — has centralized administrative capacity that makes system-level integration more feasible than in provinces with multiple regional health authorities that do not always coordinate well.
      </p>
      <p>
        Alberta also made a deliberate choice to expand for-profit treatment capacity alongside its public investment — a decision that has generated controversy. Critics argue that for-profit treatment operators have financial incentives that can conflict with patient welfare, including pressures to maintain high occupancy rates, shorter lengths of stay, and marketing practices that overstate outcomes. Alberta&apos;s approach does not resolve the quality concerns that have been raised about the for-profit treatment sector.
      </p>
      <p>
        And for all its integration, the Alberta model still faces the same challenge that every addiction treatment system faces: the drug supply is not getting safer. Fentanyl, benzodiazepines, and increasingly potent stimulants have fundamentally changed the risk profile of substance use in Canada. No treatment model can fully address a crisis driven by a toxic, unpredictable supply unless that supply itself changes.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Could This Work in New Brunswick?</h2>
      <p>
        New Brunswick has roughly one-seventh Alberta&apos;s population and a significantly more constrained fiscal situation. Building a network of comprehensive Recovery Centres as Alberta has done would require capital investment that NB&apos;s current budget environment makes difficult. The province would also need to address its chronic healthcare staffing challenges — and addiction treatment requires specialized clinical staff, including physicians with addiction medicine credentials, registered nurses with psychiatric training, and clinical psychologists.
      </p>
      <p>
        These are not small obstacles. But there are elements of the Alberta model that could be adapted to New Brunswick&apos;s context. A single regional health authority for the province — rather than the current split between Horizon and Vitalité — could theoretically enable the same kind of integrated care planning, though the political will to restructure NB&apos;s health authorities has been absent.
      </p>
      <p>
        Smaller-scale integrated hubs — combining withdrawal management, short-stay residential treatment, and outpatient follow-up in a single location, rather than a full comprehensive recovery campus — could be piloted in Fredericton or Moncton as a proof of concept. Federal addiction treatment funding, available through Health Canada&apos;s Substance Use and Addictions Program, could offset some of the capital costs.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Broader Policy Question</h2>
      <p>
        Alberta&apos;s Recovery Centre model is not a magic solution to Canada&apos;s addiction crisis. It is a more coherent approach to treatment delivery than the fragmented legacy system — and the early evidence suggests coherent delivery produces better outcomes. But it is also a resource-intensive approach that requires sustained funding, specialized staffing, and administrative integration that most provinces have not achieved.
      </p>
      <p>
        For New Brunswick, the question is not whether Alberta&apos;s model can be copied wholesale — it cannot, at least not without significant adaptation. The question is which elements of the integrated care principle can be implemented within the province&apos;s fiscal and structural constraints. The answer requires a level of strategic planning and cross-departmental coordination that New Brunswick&apos;s healthcare system has rarely demonstrated.
      </p>
      <p>
        Until that planning happens, New Brunswick will continue to rely on a fragmented treatment system that works for some people some of the time — and for too many people, none of the time.
      </p>

      <p className="text-white italic mt-8">
        Reform NB is investigating addiction treatment options in New Brunswick. If you have experience with the treatment system — positive or negative — we want to hear from you.
      </p>
    </ArticleLayout>
  );
}
