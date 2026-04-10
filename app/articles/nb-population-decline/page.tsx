import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "The Empty Province: NB's Population Decline",
  description: "New Brunswick population dropped for the first time in 8 years. Highest quarterly decline in decades. A demographic crisis that will reshape everything.",
  alternates: { canonical: "https://nbreform.ca/articles/nb-population-decline/" },
  openGraph: {
    title: "The Empty Province: NB's Population Decline",
    description: "NB population fell for first time in 8 years. Highest quarterly decline in decades. A demographic time bomb.",
    images: [{ url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200", width: 1200, height: 675, alt: "Empty town" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="The Empty Province: NB's Population Decline"
      date="April 2026"
      image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
      imageAlt="Rural New Brunswick landscape"
      imageCredit="Unsplash"
      imageCreditUrl="https://unsplash.com"
      sources={[
        { title: "CBC: N.B. population sees highest quarterly decline in decades", url: "https://www.cbc.ca/news/canada/new-brunswick/population-quarterly-decline-economist-9.7022924" },
        { title: "CTV: Most Atlantic provinces recorded first population decline in years at end of 2025", url: "https://www.ctvnews.ca/atlantic/article/most-atlantic-provinces-recorded-first-population-decline-in-years-at-the-end-of-2025/" },
        { title: "Global News: Atlantic provinces population decline", url: "https://globalnews.ca/news/11674360/atlantic-provinces-population-decline/" },
        { title: "Telegraph-Journal: N.B. population decline is a demographic time bomb", url: "https://tj.news/new-brunswick/n-b-s-population-decline-demographic-time-bomb-for-some-areas-expert" },
        { title: "Statistics Canada: Population estimates quarterly", url: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710000901" },
      ]}
    >
      <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight uppercase mb-8">The Empty Province: NB's Population Decline</h1>

      <p className="text-xl text-white leading-relaxed mb-8">
        Something remarkable happened in New Brunswick in late 2025: for the first time in eight years, the province's population declined. Not slowed. Not stabilized. Declined. And economists warned it was only the beginning.
      </p>

      <p className="text-lg text-white leading-relaxed mb-8">
        New Brunswick has been warning about its demographic problem for years. Low fertility rates, an aging population, and a history of young people leaving for Ontario, Alberta, and British Columbia have created a slow-motion emergency. The pandemic temporarily masked the trend with interprovincial migration gains. Those gains have evaporated. The underlying crisis is back — and it is worse than before.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Numbers</h2>
      <p>
        Statistics Canada's quarterly population estimates showed New Brunswick experiencing its highest quarterly population decline in decades at the end of 2025. Across most Atlantic provinces, it was the first population decline recorded in years.
      </p>
      <p>
        The Telegraph-Journal quoted experts describing the situation as a "demographic time bomb" for some areas of the province. Small communities that have been losing young people for decades are now facing outright population loss.
      </p>
      <p>
        Canada overall also contracted in 2025 — the first time in the country's modern history. When the country grows, NB shrinks. When the country contracts, NB contracts faster. This is not a trend. It is a crisis.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Why It Matters Everywhere</h2>
      <p>
        Population decline is not an abstraction. It is a workforce problem. It is a healthcare problem. It is a housing problem. It is a tax base problem. Every service the provincial government provides — hospitals, schools, roads, social programs — depends on a working-age population paying taxes to fund it.
      </p>
      <p>
        In healthcare, the math is stark. New Brunswick already has the oldest population in Canada. As the working-age population shrinks, there are fewer people to staff hospitals and fewer people paying taxes to fund them — while more seniors require care. The crisis in the ER is also a demographic crisis.
      </p>
      <p>
        In education, school closures have become a flashpoint as rural schools face declining enrollment. The government has considered closing schools with fewer than 100 students. But school closures accelerate population decline: when you close the school, families leave. When families leave, the community shrinks further.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Immigration Cuts Hit NB Hard</h2>
      <p>
        For years, immigration was New Brunswick's primary tool for offsetting population decline. The province actively recruited immigrants, particularly francophone immigrants, to maintain population levels. Federal immigration cuts in 2025-2026 hit New Brunswick disproportionately hard.
      </p>
      <p>
        Business groups in Saint John warned that reduced immigration would damage economic growth at exactly the moment the province could least afford it. The irony is that New Brunswick needs immigrants more than almost any other province — and is least positioned to attract them without federal support.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Rural Communities at the Breaking Point</h2>
      <p>
        While Moncton, Fredericton, and Saint John have seen some growth and densification, rural New Brunswick is in freefall in many areas. The outmigration of young people is not new. What is new is the speed at which it is accelerating.
      </p>
      <p>
        Regional municipalities are having real conversations about service consolidation and whether the province will continue to fund roads, bridges, and utilities for communities whose populations can no longer sustain them.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What Must Change</h2>
      <p>Reform NB believes New Brunswick's demographic crisis is the defining challenge of the next decade. Specifically:</p>
      <ul className="list-disc pl-6 space-y-2 my-6">
        <li>Invest in broadband, healthcare access, childcare, and schools in rural areas to stop outmigration</li>
        <li>Expand francophone immigration programs with real settlement support</li>
        <li>Advocate against federal immigration cuts that disproportionately harm Atlantic Canada</li>
        <li>Develop an economic strategy aimed at attracting young families, not just businesses</li>
        <li>Address urban housing shortages so immigrants do not choose cities where housing is available</li>
        <li>Treat population decline as a solvable policy problem, not an inevitable force</li>
      </ul>

      <p className="text-white italic mt-8">
        Reform NB is tracking New Brunswick's demographic crisis. The empty province is not inevitable — but it will happen if nothing changes.
      </p>
    </ArticleLayout>
  );
}
