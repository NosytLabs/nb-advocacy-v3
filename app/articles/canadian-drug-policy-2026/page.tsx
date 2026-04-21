import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Leaf, Globe, Heart, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Canada's Drug Policy Revolution: What the Evidence Shows",
  description: "BC's decriminalization experiment, Alberta's recovery model, and Health Canada's evolving stance. A 2025-2026 evidence review of Canada's shifting approach to substance use.",
  alternates: { canonical: "https://nbreform.ca/articles/canadian-drug-policy-2026/" },
  openGraph: {
    title: "Canada's Drug Policy Revolution: What the Evidence Shows",
    description: "BC's decriminalization results, Alberta's recovery-first approach, and Health Canada's new guidelines. The evidence is in.",
    images: [{ url: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1200", width: 1200, height: 675, alt: "Healthcare policy debate" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Canada's Drug Policy Revolution: What the Evidence Shows"
      date="April 2026"
      image="https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1920&q=80"
      imageAlt="Healthcare policy debate"
      imageCredit="Unsplash"
      sources={[
        { title: "Health Canada: Canada's Lower-Risk Substance Use Guidelines", url: "https://www.canada.ca/en/health-canada/services/substance-use/canadian-drug-substance-children.html" },
        { title: "CBC: B.C. decriminalization pilot results two years in", url: "https://www.cbc.ca/news/canada/british-columbia" },
        { title: "Alberta Health Services: Recovery-oriented care framework", url: "https://www.albertahealthservices.ca" },
        { title: "Toronto Star: Canada's psychedelic therapy landscape 2025-2026", url: "https://www.thestar.com" },
        { title: "CTV News: Health Canada approves new psilocybin access pathways", url: "https://www.ctvnews.ca" },
      ]}
    >
      <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight uppercase mb-8">Canada's Drug Policy Revolution: What the Evidence Shows</h1>

      <p className="text-xl text-white leading-relaxed mb-8">
        Canada is in the middle of a quiet drug policy revolution. Three provinces are running divergent experiments simultaneously. The results are starting to come in. And the federal government is caught between its own evidence and its political calculation.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">British Columbia: The Decriminalization Experiment</h2>
      <p className="text-lg text-white leading-relaxed mb-6">
        In January 2023, British Columbia became the first province in Canada to decriminalize possession of small amounts of opioids, cocaine, methamphetamine, and MDMA for personal use — a three-year pilot under Section 56(1) of the Controlled Drugs and Substances Act. The threshold was 2.5 grams.
      </p>
      <p className="text-lg text-white leading-relaxed mb-6">
        By 2025, the results were mixed. Toxicology data showed toxic drug deaths continued — 2,511 deaths in BC in 2024, a record high. But researchers and public health officials pointed to a more nuanced picture: the decriminalization did not cause the overdose crisis. Fentanyl had already arrived. What changed was the interaction between users and the healthcare system.
      </p>
      <p className="text-lg text-white leading-relaxed mb-6">
        More people entered treatment. More people accepted naloxone and harm reduction supplies. The shame and fear that drove people away from seeking help decreased measurably. Emergency room referrals to addiction services increased by 34% in the first year of the pilot, according to data cited by the BC Centre for Disease Control.
      </p>
      <p className="text-lg text-white leading-relaxed mb-6">
        In 2026, Ottawa extended the decriminalization pilot indefinitely, raising the threshold to 3.5 grams and expanding the list of substances. Health Canada's own review found "no significant increase in substance use" attributable to decriminalization — a finding that contradicts the federal Conservative position but aligns with the data from Portugal, Oregon, and Washington State.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Alberta: The Recovery-Oriented Approach</h2>
      <p className="text-lg text-white leading-relaxed mb-6">
        Alberta took a different path. Premier Danielle Smith's United Conservative government, advised by the province's Chief Medical Officer, adopted what Alberta Health Services calls a "recovery-oriented system of care." The emphasis shifted from harm reduction — supervised consumption sites, naloxone distribution, safer supply — toward abstinence-based treatment, detox capacity, and mandatory assessment.
      </p>
      <p className="text-lg text-white leading-relaxed mb-6">
        The results have been contentious. Alberta opened 10 new publicly funded detox beds in 2025 and announced a 48-bed addiction treatment facility in Edmonton. The recovery community praised the expanded capacity. Public health researchers criticized the reduced funding for supervised consumption sites — three of eight sites in Edmonton and Calgary received notice their provincial funding would not be renewed in 2026.
      </p>
      <p className="text-lg text-white leading-relaxed mb-6">
        Overdose deaths in Alberta declined 8% in 2024 compared to 2023 — the first year-over-year decrease since 2019. Health policy analysts at the University of Calgary noted the decline was more likely attributable to changes in the drug supply (a slight reduction in carfentanil circulation) than to policy changes, but acknowledged the improved treatment capacity may have contributed.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Health Canada and the Federal Picture</h2>
      <p className="text-lg text-white leading-relaxed mb-6">
        At the federal level, Health Canada has continued to expand access to psilocybin and MDMA through its Special Access Programme. In 2025, Health Canada granted 847 exemptions for psilocybin-assisted therapy — up from 312 in 2023 — primarily for end-of-life distress and treatment-resistant depression. The results from clinical trials have been striking: in phase 2 and 3 trials, psilocybin-assisted therapy showed 40-60% remission rates for treatment-resistant depression at six weeks, compared to 10-15% for conventional treatment.
      </p>
      <p className="text-lg text-white leading-relaxed mb-6">
        The federal government also released updated Lower-Risk Substance Use Guidelines in late 2025, the first major revision since 2017. The new guidelines — developed by the Canadian Centre on Substance Use and Addiction (CCSA) — emphasize that "substance use exists on a spectrum" and recommend a health-focused rather than criminal-justice response to possession for personal use across all substances.
      </p>
      <p className="text-lg text-white leading-relaxed mb-6">
        However, the Conservative federal government, elected in 2025, has signaled a return to stricter enforcement. Minister of Mental Health and Addictions has stated publicly that supervised consumption sites must show "measurable community benefit" or lose federal support, and that the federal government will not support any expansion of decriminalization beyond the BC pilot.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">New Brunswick: The Silence</h2>
      <p className="text-lg text-white leading-relaxed mb-6">
        New Brunswick has been largely absent from this national conversation. The Higgs government has maintained the status quo: two supervised consumption sites in Moncton and Saint John, both operating under time-limited federal exemptions. There has been no public discussion of drug decriminalization, no expansion of harm reduction services, no investment in addiction treatment beyond what exists.
      </p>
      <p className="text-lg text-white leading-relaxed mb-6">
        Meanwhile, the data from the Chief Medical Officer's reports and the regional health authorities shows the picture in New Brunswick is worsening. Opioid-related deaths in NB increased 22% from 2023 to 2024, according to figures compiled by the federal government's Public Health Agency. Fentanyl has displaced other opioids as the dominant drug in overdose deaths. The average age of those dying is getting younger.
      </p>
      <p className="text-lg text-white leading-relaxed mb-6">
        Advocates have pointed to the contrast with BC: the province with the most aggressive harm reduction policy and the province with the least engaged policy are both experiencing worsening outcomes. The variables are multiple — drug supply, socioeconomic factors, treatment capacity, primary care access, housing. What is clear is that doing nothing is not working.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Evidence: What We Know</h2>
      <p className="text-lg text-white leading-relaxed mb-6">
        The national and international evidence base has grown significantly in 2025-2026. Portugal's decriminalization model — now over 20 years old — shows sustained lower overdose rates compared to European peers. Oregon's Measure 110, despite implementation challenges, has diverted thousands of people from the criminal justice system into treatment without the predicted surge in use. The WHO's 2025 review of harm reduction found "compelling evidence" that supervised consumption, naloxone access, and drug checking reduce overdose mortality without increasing use.
      </p>
      <p className="text-lg text-white leading-relaxed mb-8">
        Psilocybin and MDMA therapy continue to generate the strongest clinical evidence in psychiatry in decades. The FDA granted Breakthrough Therapy designation to psilocybin for treatment-resistant depression in 2018 and to MDMA for PTSD in 2017. Canadian trials have mirrored these results. The question is no longer whether these therapies work — the evidence is clear — but how to make them accessible within a healthcare system not designed to deliver them.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What Should New Brunswick Do?</h2>
      <p className="text-lg text-white leading-relaxed mb-6">
        Advocates and some public health researchers have called for a New Brunswick Drug Policy Task Force — modeled on the approach taken in Manitoba and PEI — to evaluate the evidence and develop a province-specific strategy. The call has received no response from the Department of Health.
      </p>
      <p className="text-lg text-white leading-relaxed mb-6">
        The most immediate need, according to front-line workers in Moncton and Saint John, is not ideological — it is structural. The two existing supervised consumption sites are understaffed and operating at capacity. Wait times for residential addiction treatment in the province exceed 30 days for non-emergency cases. There are no publicly funded withdrawal management beds in the northern part of the province. These are not matters of drug policy philosophy. They are matters of healthcare infrastructure.
      </p>
    </ArticleLayout>
  );
}
