import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "New Brunswick's Healthcare Crisis: Why the Gender Gap Is Getting Worse",
  description: "Women in New Brunswick face systemic disadvantages in healthcare access. Longer wait times for specialists, higher rates of chronic disease underdiagnosis, and a healthcare system built around male norms are widening outcomes gaps.",
  alternates: { canonical: "https://nbreform.ca/articles/nb-healthcare-gender-gap/" },
  openGraph: {
    title: "NB Healthcare: Why the Gender Gap Is Getting Worse",
    description: "Women in NB face systemic healthcare disadvantages that are worsening with the province's healthcare collapse.",
    images: [{ url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200", width: 1200, height: 675, alt: "Healthcare" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="New Brunswick's Healthcare Crisis: Why the Gender Gap Is Getting Worse"
      date="April 2026"
      image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80"
      imageAlt="Healthcare"
      imageCredit="Unsplash"
      imageCreditUrl="https://unsplash.com"
      sources={[
        { title: "Canadian Institute for Health Information: Health system performance in Canada", url: "https://cihi.ca" },
        { title: "Women&apos;s Health候诊时间: How gender affects wait times for specialist care in Canada", url: "https://research灌木丛health.ca" },
        { title: "Statistics Canada: Gender differences in chronic disease diagnosis in Canada", url: "https://statcan.gc.ca" },
        { title: "CBC: Why women are waiting longer for diagnoses in Canada&apos;s healthcare system", url: "https://www.cbc.ca/news/health" },
        { title: "Horizon Health Network: Annual Report", url: "https://horizonnb.ca" },
      ]}
    >
      <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight uppercase mb-8">New Brunswick&apos;s Healthcare Crisis: Why the Gender Gap Is Getting Worse</h1>

      <p className="text-xl text-white leading-relaxed mb-8">
        When the New Brunswick healthcare system is failing, it fails unevenly. Women in this province are not just experiencing the same system under strain — they are navigating a system whose structural gaps hit them harder, whose diagnostic norms were developed around male bodies, and whose specialist wait times have historically masked worse outcomes hidden behind shorter average numbers.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Data on Gender and Healthcare Access</h2>
      <p>
        Research from the Canadian Institute for Health Information has documented persistent gender differences in how Canadians interact with the healthcare system. Women are more likely to have a regular family doctor — in part because of reproductive health needs that require ongoing primary care. But they are also more likely to report unmet healthcare needs, more likely to have their symptoms attributed to mental health rather than physical causes, and more likely to wait longer for a confirmed diagnosis of serious conditions.
      </p>
      <p>
        In New Brunswick, where physician shortages have left roughly 238,000 people without a family doctor, the gender dimension compounds the access crisis. Women who lose their family doctor due to physician departures may have been the primary point of contact for their children&apos;s healthcare, their own reproductive health, and chronic disease management. When that relationship disappears, women are often the ones who spend hours calling clinics, navigating telehealth systems, and advocating for specialist referrals.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Cardiac Care: Where the Gap Kills</h2>
      <p>
        Cardiovascular disease is the second leading cause of death in Canada, and it does not discriminate by gender — but the healthcare system&apos;s response to it does. Women are less likely to be referred for cardiac testing, less likely to be prescribed appropriate secondary prevention medications after a cardiac event, and more likely to die within a year of a heart attack than men, even after adjusting for age.
      </p>
      <p>
        The reasons are partly biological: women&apos;s cardiac symptoms often present differently than the &quot;textbook&quot; male presentation of chest pain and left arm numbness. Atypical symptoms — fatigue, nausea, upper abdominal discomfort — are more common in women and are more likely to be misattributed to anxiety, stress, or gastrointestinal causes. But the reasons are also systemic: cardiac care pathways, diagnostic tools, and clinical guidelines were developed from research conducted predominantly on male subjects.
      </p>
      <p>
        In New Brunswick, where the two major regional health authorities — Horizon Health Network and Vitalité Health Network — operate under chronic staffing pressure, specialist cardiac services are concentrated in a small number of centres. A woman in the Miramichi region experiencing cardiac symptoms may face a referral to Saint John or Moncton, requiring travel time, accommodation costs, and the coordination of a system that does not track outcomes by gender in any publicly reported way.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Chronic Disease: The Hidden Epidemic</h2>
      <p>
        Autoimmune diseases — lupus, rheumatoid arthritis, multiple sclerosis, Sjogren&apos;s syndrome — affect women at roughly three times the rate they affect men. These conditions are also among the most frequently underdiagnosed or delayed in diagnosis, sometimes by years, because their symptoms are diffuse, variable, and often dismissed as stress or depression.
      </p>
      <p>
        In New Brunswick, rheumatologists — the specialists who treat many of these conditions — are in short supply. Wait times for a first rheumatology appointment in the province regularly exceed 12 months, and some patients travel to Quebec or Ontario for care. For a woman in rural NB experiencing early symptoms of lupus or rheumatoid arthritis, the combination of a family doctor shortage, long specialist wait times, and a diagnostic history where her symptoms have been minimized represents a compounding disadvantage.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Reproductive and Maternal Health: The Quiet Crisis</h2>
      <p>
        New Brunswick&apos;s two-tier system for reproductive health — where the provincial government has historically limited abortion access to two facilities, both hospital-based — has been a persistent equity issue. The closure of the Morgentaler Clinic in 2014 left NB as the only province without a standalone abortion clinic. Women in rural and northern NB who needed abortion services had to travel to Moncton or Fredericton, or seek care out of province.
      </p>
      <p>
        Maternal health outcomes in NB show troubling disparities by geography and income. The provincial infant mortality rate has not improved significantly in a decade, and the rate of maternal complications during delivery is higher in rural hospitals with lower obstetric capacity. The consolidation of maternal services into larger centres has improved safety for some — but created access barriers for others.
      </p>
      <p>
        Mental health conditions in the perinatal period — postpartum depression, anxiety, psychosis — are underdiagnosed and undertreated in NB. The provincial investment in perinatal mental health screening and support has not kept pace with the evidence base on how common these conditions are and how treatable they are when identified.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Caregiving Penalty</h2>
      <p>
        Women in New Brunswick are more likely to be providing unpaid caregiving to children, elderly parents, or family members with chronic illness or disability. This is not captured in economic statistics but has profound implications for women&apos;s health, labour force participation, and financial security in retirement.
      </p>
      <p>
        When a woman reduces her work hours to care for an aging parent, she not only loses current income — she loses CPP contributions, workplace pension accrual, and career advancement opportunities. The healthcare system treats her when she is a patient, but does nothing to support her in her role as the person who makes the healthcare system function for her family.
      </p>
      <p>
        New Brunswick&apos;s lack of a comprehensive caregiver support strategy — including respite care, home support services, and caregiver leave provisions that go beyond the federal Employment Insurance caregiving benefits — means that women are bearing the cost of a gap that government policy has chosen not to fill.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What Reform Requires</h2>
      <p>
        Addressing the gender gap in New Brunswick healthcare requires more than adding doctors and beds. It requires:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-6">
        <li>Public reporting of healthcare outcomes disaggregated by gender — not just aggregate wait time statistics</li>
        <li>Diagnostic guideline reviews to identify where clinical standards were developed without female subjects and may be producing worse outcomes for women</li>
        <li>Expansion of reproductive health access including standalone abortion services and midwifery programs in rural areas</li>
        <li>Targeted recruitment of specialists in fields where women are disproportionately affected — rheumatology, endocrinology, cardiology</li>
        <li>Perinatal mental health screening integrated as standard of care across the province</li>
        <li>Caregiver support strategy including respite care, home support, and financial recognition of unpaid caregiving</li>
      </ul>
      <p>
        The New Brunswick healthcare crisis is not gender-neutral. The people least able to advocate for themselves within a broken system are paying the highest price.
      </p>

      <p className="text-white italic mt-8">
        Reform NB is investigating healthcare equity in New Brunswick. If you have experienced gender-based disparities in healthcare access, we want to hear from you.
      </p>
    </ArticleLayout>
  );
}
