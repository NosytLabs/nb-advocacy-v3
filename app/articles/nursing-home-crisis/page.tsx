import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Warehoused in Hospitals: NB's Nursing Home Crisis",
  description: "Over 1,000 seniors on NB nursing home waitlists. 500+ hospital beds blocked. Seniors dying before a bed opens. The Holt government's 624-bed promise by 2030 is a fraction of what's needed.",
  alternates: { canonical: "https://nbreform.ca/articles/nursing-home-crisis/" },
  openGraph: {
    title: "Warehoused in Hospitals: NB's Nursing Home Crisis",
    description: "1,000+ seniors waiting for nursing home beds. 500+ acute care beds blocked. Seniors dying before a placement opens.",
    images: [{ url: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?w=1200", width: 1200, height: 675, alt: "Nursing home" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Warehoused in Hospitals: NB's Nursing Home Crisis"
      date="April 2026"
      image="https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?w=1920&q=80"
      imageAlt="Senior care facility"
      imageCredit="Unsplash"
      imageCreditUrl="https://unsplash.com"
      sources={[
        { title: "CBC: Waitlist for N.B. nursing homes tops 1,000", url: "https://www.cbc.ca/news/canada/new-brunswick/nursing-home-longterm-care-new-brunswick-cecile-cassista-hospital-bed-blockers-1.7253182" },
        { title: "NBSCHA: Nursing home wait list hits record high", url: "https://www.nbscha.ca/news/category/nursing-home-wait-list-hits-record-high-and-is-now-holding-up-500-hospital-beds" },
        { title: "CTV: Too many N.B. seniors die while waiting for nursing home bed", url: "https://www.ctvnews.ca/atlantic/new-brunswick/article/its-a-timebomb-too-many-nb-seniors-die-while-waiting-for-nursing-home-bed-say-advocates/" },
        { title: "CBC: Province promises 624 nursing home beds by 2030", url: "https://www.cbc.ca/news/canada/new-brunswick/province-add-nursing-home-beds-9.7143091" },
        { title: "GNB: Seniors long-term care plan released (March 2026)", url: "https://www.gnb.ca/en/news/n-b.2026.03.seniors-long-term-care-plan-released.html" },
        { title: "CBC: A crisis foretold — 3 decades of warnings on NB aging", url: "https://www.cbc.ca/news/canada/new-brunswick/new-brunswick-aging-population-1.7591091" },
      ]}
    >
      <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight uppercase mb-8">Warehoused in Hospitals: NB&apos;s Nursing Home Crisis</h1>

      <p className="text-xl text-white leading-relaxed mb-8">
        They call them \&quot;bed blockers\&quot; in hospital administrator language. In human language, they are Ruth, 84, who had a stroke three months ago and is well enough to leave hospital — but not well enough to live alone. She is waiting for a nursing home bed that doesn&apos;t exist. In the meantime, she occupies an acute care bed that someone else, someone in crisis, desperately needs.
      </p>

      <p className="text-lg text-white leading-relaxed mb-8">
        The New Brunswick Coalition for Seniors and Nursing Home Residents tracks the provincial nursing home waitlist in real time. As of early 2026, that number consistently exceeds 1,000. The New Brunswick Special Care Home Association says the waitlist is at record highs, with seniors waiting months, sometimes more than a year, for a placement.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Bed Blockers: 500 and Counting</h2>
      <p>
        More than 500 acute care hospital beds across New Brunswick are occupied by patients who are medically ready for discharge — they just have nowhere to go. This is not a hospital problem. This is a long-term care problem. And it cascades through the entire healthcare system.
      </p>
      <p>
        When hospital beds are occupied by patients who don&apos;t need them, the Emergency Room cannot admit new patients. When the ER cannot admit patients, people wait longer in the waiting room. The crisis in the ER waiting room is, in significant part, a crisis in the nursing home system.
      </p>
      <p>
        The Auditor General has reported that 40% of acute care beds in New Brunswick are blocked by patients waiting for long-term care — that is over 500 beds. Hundreds of people per year cannot get into hospital when they need it, because someone who doesn&apos;t need hospital care is occupying a bed waiting for somewhere else to go.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Seniors Dying Before a Bed Opens</h2>
      <p>
        Multiple advocacy organizations in New Brunswick have documented seniors dying while on the nursing home waitlist — sometimes in hospital, sometimes at home, sometimes in inadequate temporary placements. A CTV investigation found that too many NB seniors die while waiting for a nursing home bed, with advocates calling the situation \&quot;a time bomb.\&quot;
      </p>
      <p>
        These are not isolated tragedies. They are the predictable outcome of a system that has been underfunded for decades. As the CBC reported in 2026, the crisis was \&quot;foretold\&quot; — three decades of warnings about New Brunswick&apos;s aging population, the decline in available nursing home beds, and the staffing shortages in long-term care were largely ignored by successive governments.
      </p>
      <p>
        The COVID-19 pandemic made the crisis acute. Outbreaks in nursing homes revealed the devastating consequences of understaffing and poor conditions. Many facilities were already operating with skeleton crews. When the pandemic hit, they buckled.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The 624-Bed Promise: Too Little, Too Late</h2>
      <p>
        In March 2026, the Holt government released its Seniors Long-Term Care Plan, promising to add 624 nursing home beds by 2030. The Special Care Home Association called it a step forward, but advocates noted the gap between the promise and the scale of the problem.
      </p>
      <p>
        With a waitlist consistently over 1,000, and with New Brunswick&apos;s 75-and-older population projected to grow significantly through the 2030s, adding 624 beds over four years does not close the gap. As of 2025, no new nursing home construction plans had been approved during the Liberal government&apos;s term, creating a multi-year gap in new capacity.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Staffing: The Hidden Crisis</h2>
      <p>
        Beds don&apos;t run themselves. Every nursing home bed requires qualified staff. New Brunswick has a province-wide healthcare staffing crisis, and long-term care is the least attractive option: lower wages than hospital work, difficult conditions, high injury rates.
      </p>
      <p>
        The NB Nurses Union has repeatedly warned that nursing homes are understaffed to the point of being unsafe. Personal support workers — who provide the majority of hands-on care — are among the lowest-paid workers in healthcare. Turnover is high. Recruitment is difficult. Even the beds that exist sometimes operate below safe staffing levels.
      </p>
      <p>
        In 2025, Horizon Health was creating nursing-home-level beds within hospital settings as a stopgap — essentially converting hospital space to long-term care because the system outside the hospital had failed. This is not a solution. It is an admission of failure.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What Must Change</h2>
      <p>Reform NB believes that how a society treats its elders is a measure of its humanity. Specifically:</p>
      <ul className="list-disc pl-6 space-y-2 my-6">
        <li>Build enough nursing home beds to eliminate the waitlist within three years</li>
        <li>Raise personal support worker wages to competitive levels immediately</li>
        <li>Implement mandatory minimum staffing ratios in all licensed nursing homes</li>
        <li>Accelerate approvals for new nursing home construction</li>
        <li>Expand home care and community supports to keep seniors out of institutions when possible</li>
        <li>Create an independent oversight body for long-term care</li>
      </ul>

      <p className="text-white italic mt-8">
        Ruth is still waiting. Four months and counting. This is New Brunswick in 2026.
      </p>

      <p className="text-white italic mt-4">
        Reform NB is investigating the long-term care crisis. If you or a family member has been affected by the nursing home waitlist, we want to hear your story.
      </p>
    </ArticleLayout>
  );
}
