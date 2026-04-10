import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Smiles Decaying in Silence: NB's Dental Care Crisis",
  description: "Hundreds of thousands of New Brunswickers have no dental coverage. Emergency rooms are filling the gap — at 10x the cost. The federal dental plan has arrived, but NB has fewer dentists participating than the national average.",
  alternates: { canonical: "https://nbreform.ca/articles/dental-care-crisis-nb/" },
  openGraph: {
    title: "Smiles Decaying in Silence: NB's Dental Care Crisis",
    description: "Hundreds of thousands of NB residents have no dental coverage. The federal plan arrived, but participation is critically low.",
    images: [{ url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200", width: 1200, height: 675, alt: "Dental care" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Smiles Decaying in Silence: NB's Dental Care Crisis"
      date="April 2026"
      image="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80"
      imageAlt="Dental office"
      imageCredit="Unsplash"
      imageCreditUrl="https://unsplash.com"
      sources={[
        { title: "CBC: Fewer N.B. dentists participating in federal dental plan than national average", url: "https://www.cbc.ca/news/canada/new-brunswick/few-new-brunswick-dentists-participating-national-dental-plan-1.7316092" },
        { title: "CBC: National dental care plan set to launch amid lingering questions", url: "https://www.cbc.ca/news/canada/new-brunswick/national-dental-care-plan-launch-1.7184740" },
        { title: "CBC: One million Canadians have now received dental care under new plan", url: "https://www.cbc.ca/news/politics/one-million-canadians-dental-care-1.7369144" },
        { title: "Canada.ca: Canadian Dental Care Plan - Do you qualify", url: "https://www.canada.ca/en/services/benefits/dental/dental-care-plan/qualify.html" },
        { title: "Social Supports NB: Help paying for dental care", url: "https://socialsupportsnb.ca/en/program/help-paying-dental-care" },
      ]}
    >
      <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight uppercase mb-8">Smiles Decaying in Silence: NB&apos;s Dental Care Crisis</h1>

      <p className="text-xl text-white leading-relaxed mb-8">
        When your teeth rot in New Brunswick, the system&apos;s answer is: wait until it becomes an emergency. Then go to the hospital — where a dentist isn&apos;t even in the room. This is what a dental care crisis looks like when government after government decides that teeth are somehow optional.
      </p>

      <p className="text-lg text-white leading-relaxed mb-8">
        Hundreds of thousands of New Brunswickers have no dental insurance. No provincial plan covers working-age adults. No program covers the majority of seniors. And the one thing that was supposed to fix it — the federal Canadian Dental Care Plan (CDCP) — has arrived to find New Brunswick&apos;s dentists among the least willing to participate in the country.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">A Province Without Coverage</h2>
      <p>
        New Brunswick has one of the worst dental coverage gaps in Canada. Unlike physician services — which are universal under Medicare — dental care in Canada is a patchwork of employer plans, private insurance, and nothing at all. For those without workplace benefits, and for those who are unemployed, self-employed, or underemployed, there is no provincial backstop.
      </p>
      <p>
        The NB Health Services Dental Program covers some seniors and social assistance recipients, but the income thresholds are low and the covered procedures are limited. A working-class family of four in Moncton earning $55,000 a year has no dental coverage, period. The employer plan exists only if the employer offers it — and in New Brunswick, where small businesses dominate, most don&apos;t.
      </p>
      <p>
        The result: people delay care until small problems become infections. They end up in hospital emergency rooms — not for dental care, but for antibiotics and painkillers. ERs are not equipped for tooth extractions. But they see it constantly.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Canadian Dental Care Plan: Fix or False Promise?</h2>
      <p>
        The federal government&apos;s Canadian Dental Care Plan, launched in 2023 and expanding through 2024-2025, was supposed to cover up to 9 million uninsured Canadians. By 2026, the government claimed over one million Canadians had received care under the plan. That sounds like progress.
      </p>
      <p>
        But New Brunswick is dragging behind the rest of the country. In reporting by CBC, New Brunswick had a lower rate of participating dentists than the national average — meaning NB residents eligible for the CDCP face a double barrier: they&apos;re in a province with among the fewest dentists per capita, and fewer of those dentists are signed up to accept the federal plan.
      </p>
      <p>
        The CDCP also doesn&apos;t cover everything. There are co-pays for some procedures. Some services require pre-authorization. And the plan uses a fee schedule that many dentists argue is below their cost of delivering care — making participation financially unattractive, particularly in a province where the cost of living is rising and dental practice overhead is not getting cheaper.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Children Left Behind</h2>
      <p>
        While the federal plan covers children under 18 and seniors first, there are significant gaps in who qualifies. Families must prove they lack access to dental insurance through employment. That means many children in working-poor families — whose parents have a job that doesn&apos;t provide benefits — fall into a gap between provincial and federal programs.
      </p>
      <p>
        Healthy Smiles NB, the provincial children&apos;s dental program, exists — but it targets families on social assistance, not the broader working-class population. Untreated childhood dental disease leads to school absences, infections, and long-term health consequences. Tooth decay is the most common childhood disease, and New Brunswick has one of the highest childhood poverty rates in Canada.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Emergency Room Trap</h2>
      <p>
        When dental pain becomes unbearable, people go to the ER. Dental conditions are a leading cause of preventable ER visits across Canada. In New Brunswick, the pattern is amplified: fewer family doctors, more poverty, larger geographic gaps, and a provincial government that has never treated dental care as part of the healthcare system.
      </p>
      <p>
        Hospital ERs cannot provide fillings, root canals, or dentures. What they can do is prescribe antibiotics and refer you to a dentist — if you can afford one. The cycle repeats: infection, ER visit, antibiotics, infection, ER visit. This is not healthcare. It is crisis management of a policy failure.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Rural Communities Bear the Brunt</h2>
      <p>
        New Brunswick&apos;s rural communities — particularly in the northwest and francophone rural areas — have long had a shortage of dentists. Private dental practices concentrate in Fredericton, Saint John, and Moncton. For a senior in Plaster Rock or a family in Rogersville, accessing dental care requires a long drive, time off work, and money for treatment they may not have.
      </p>
      <p>
        Mobile dental clinics and public health dental programs have been proposed as solutions for years. They have not been funded to scale. The result is a two-tier system: urban residents with insurance and access, and everyone else making do with nothing until it becomes an emergency.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What Must Change</h2>
      <p>
        Reform NB believes dental care should be treated as healthcare — not as an optional add-on for those with good jobs and good benefits. Specifically:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-6">
        <li>New Brunswick should expand its provincial dental program to cover low-income adults and seniors not yet eligible under the federal CDCP</li>
        <li>The province should provide incentives for dentists to practice in rural and underserved communities</li>
        <li>NB should advocate for the federal government to raise the CDCP fee schedule to make participation financially viable for dental practices</li>
        <li>Mobile dental clinics and public health dental programs should be expanded to reach schools and rural communities</li>
        <li>The government should fund a dental care access study specific to New Brunswick, with geographic and demographic breakdowns</li>
      </ul>
      <p>
        Teeth don&apos;t sort themselves out. In a province where 238,000 people don&apos;t have a family doctor, the last thing New Brunswickers need is another gap in the system — this one between a toothache and a hospital bed.
      </p>

      <p className="text-white italic mt-8">
        Reform NB is investigating dental care access in New Brunswick. If you have a story about being unable to access dental care, we want to hear from you.
      </p>
    </ArticleLayout>
  );
}
