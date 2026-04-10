import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Hungry in NB: The Food Bank Crisis",
  description: "NB food bank visits hit record highs in 2025. 1 in 7 NB households experiences food insecurity. Child poverty affects 32,140 children in a province of 830,000. This is the hunger no one is talking about.",
  alternates: { canonical: "https://nbreform.ca/articles/nb-food-bank-crisis/" },
  openGraph: {
    title: "Hungry in NB: The Food Bank Crisis",
    description: "NB food bank visits hit record highs in 2025. Child poverty affects 32,140 children. This is the hunger no one is talking about.",
    images: [{ url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200", width: 1200, height: 675, alt: "Food bank" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Hungry in NB: The Food Bank Crisis"
      date="April 2026"
      image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80"
      imageAlt="Food bank donations"
      imageCredit="Unsplash"
      imageCreditUrl="https://unsplash.com"
      sources={[
        { title: "CBC: More people in N.B. struggling to put meals on the table, food banks say", url: "https://www.cbc.ca/news/canada/new-brunswick/meals-struggling-food-banks-9.7004521" },
        { title: "CBC: New report shows frightening picture of food insecurity", url: "https://www.cbc.ca/news/canada/new-brunswick/report-food-bank-hunger-count-1.7024791" },
        { title: "Food Banks Canada: HungerCount 2025", url: "https://foodbankscanada.ca/hunger-in-canada/hungercount/" },
        { title: "Campaign 2000: 2025 NB Report Card on Child Poverty (PDF)", url: "https://campaign2000.ca/wp-content/uploads/2026/02/2025-NB-Report-Card-on-Child-and-Family-Poverty.pdf" },
        { title: "CBC: N.B. has second-highest rate of food insecurity in Canada", url: "https://www.cbc.ca/news/canada/new-brunswick/food-insecurity-report-proof-1.6841567" },
      ]}
    >
      <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight uppercase mb-8">Hungry in NB: The Food Bank Crisis</h1>

      <p className="text-xl text-white leading-relaxed mb-8">
        New Brunswick has a hunger problem. Not the dramatic, visible kind — the quiet kind that shows up in food bank lineups that never shrink, in children who come to school without breakfast, in seniors choosing between medication and groceries. The kind that happens in a province that officially acknowledges it has a poverty problem but has never adequately funded the solution.
      </p>

      <p className="text-lg text-white leading-relaxed mb-8">
        In 2025, Food Banks Canada&apos;s annual HungerCount report painted what advocates called a \&quot;frightening picture\&quot; of food insecurity across Canada. In New Brunswick, the data was worse than most provinces. CBC reporting confirmed that more people in NB were struggling to put meals on the table, with food banks seeing sustained record demand through 2024 and into 2025.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Numbers</h2>
      <p>
        Food insecurity — the state of being without reliable access to sufficient quantity of affordable, nutritious food — affects hundreds of thousands of New Brunswickers. According to Statistics Canada data cited in multiple reports, New Brunswick has historically had the second-highest rate of food insecurity among Canadian provinces.
      </p>
      <p>
        The Human Development Council, a Saint John-based research organization, has documented food bank use trends in New Brunswick for years. Their findings are consistent: demand is up, demographics are broadening (more working people, more seniors, more families with children), and the profile of the typical food bank user no longer matches the stereotype.
      </p>
      <p>
        Across Canada, the 2025 HungerCount recorded over 2 million food bank visits in a single month — a figure described by Food Banks Canada as representing a \&quot;new norm\&quot; rather than a crisis peak. In New Brunswick, that translated to a province where food bank use had risen every year for five consecutive years.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Child Poverty: 32,140 Children</h2>
      <p>
        Campaign 2000, a national coalition tracking child poverty, releases annual report cards for each province. In its most recent New Brunswick report, the organization found that <strong>32,140 children</strong> in New Brunswick were living in poverty. In a province of approximately 830,000 people, that is nearly one in ten children.
      </p>
      <p>
        Campbellton, the small northern city that has become a symbol of regional economic decline in New Brunswick, recorded child poverty rates above 40% — among the highest in Canada. But Campbellton is not unique. Rural communities across the north, the francophone southeast, and parts of southern New Brunswick all post rates that would be considered a national emergency if they occurred in a major city.
      </p>
      <p>
        Child poverty is not just about hunger. It affects educational outcomes, physical health, mental health, and long-term economic mobility. Children who grow up in poverty are more likely to remain in poverty as adults. The cost of child poverty, measured in healthcare use, lost productivity, and human potential, is enormous.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Who Is Hungry in NB?</h2>
      <p>
        The stereotype of the food bank user is outdated. In 2025, the typical food bank user in New Brunswick looks less like a stereotype and more like your neighbor. They are working — often in part-time or minimum-wage jobs that don&apos;t provide enough hours or enough pay to cover rent, utilities, and food. They are seniors on fixed incomes who watched inflation erode the purchasing power of their pensions. They are single parents, predominantly women, piecing together child support, social assistance, and two jobs.
      </p>
      <p>
        Social assistance rates in New Brunswick have long been recognized as insufficient to cover the actual cost of living. The provincial government&apos;s own Overcoming Poverty Together plan, released in 2025, acknowledged that current social assistance rates do not provide an adequate income standard. The plan set targets. It did not immediately change the rates.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The GST Rebate and Band-Aid Solutions</h2>
      <p>
        In response to inflation pressure, the federal government introduced a GST rebate and other affordability measures that provided some temporary relief. CBC reporting confirmed that NB non-profits saw increased demand for both food and equipment — meaning the GST measures helped some families, but the underlying problem of insufficient income remained.
      </p>
      <p>
        Advocates argue that temporary affordability measures are not a substitute for a coherent anti-poverty strategy. Food banks are not designed to solve structural poverty. They are emergency measures. When emergency measures become the primary response to chronic hunger, the system has failed at a policy level.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What Must Change</h2>
      <p>
        Reform NB believes that in one of the wealthiest countries in the world, no child should go hungry, and no senior should have to choose between food and medicine. Specifically:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-6">
        <li>Raise social assistance rates in New Brunswick to reflect actual cost of living — not a politically acceptable minimum</li>
        <li>Expand access to affordable childcare, which reduces the cost burden on working families</li>
        <li>Increase the minimum wage to a living wage, indexed to inflation</li>
        <li>Invest in community food programs, school nutrition initiatives, and food hubs in underserved communities</li>
        <li>Fund a comprehensive affordable housing strategy — housing affordability and food security are directly linked</li>
        <li>Create a provincial poverty reduction strategy with binding targets and independent oversight</li>
      </ul>

      <p className="text-white italic mt-8">
        Reform NB is investigating food insecurity in New Brunswick. If you have been affected by food insecurity, we want to hear your story.
      </p>
    </ArticleLayout>
  );
}
