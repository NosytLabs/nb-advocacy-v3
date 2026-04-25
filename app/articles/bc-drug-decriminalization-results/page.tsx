import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "BC's Drug Decriminalization: 18-Month Results — What Worked, What Didn't",
  description: "British Columbia's 2023 drug decriminalization pilot showed mixed results. Overdose deaths dropped initially but then spiked. Treatment gaps persisted. What the 18-month data tells us about where harm reduction alone falls short.",
  alternates: { canonical: "https://nbreform.ca/articles/bc-drug-decriminalization-results/" },
  openGraph: {
    title: "BC's Drug Decriminalization: 18-Month Results",
    description: "British Columbia's drug decriminalization pilot showed mixed results over 18 months.",
    images: [{ url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200", width: 1200, height: 675, alt: "Healthcare" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="BC's Drug Decriminalization: 18-Month Results — What Worked, What Didn't"
      date="April 2026"
      image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80"
      imageAlt="Healthcare"
      imageCredit="Unsplash"
      imageCreditUrl="https://unsplash.com"
      sources={[
        { title: "CBC: B.C. drug decriminalization pilot shows promise but gaps remain, health officials say", url: "https://www.cbc.ca/news/canada/british-columbia/bc-drug-decriminalization-pilot-18-months-1.7325098" },
        { title: "BCCDC: Initial Findings from the Province's Drug Decriminalization Pilot", url: "https://www.bccdc.ca" },
        { title: "Government of Canada: Controlled Drugs and Substances Act — Exemptions", url: "https://www.canada.ca/en/health-canada" },
        { title: "Stats Can: Opioid and stimulant toxicity deaths in Canada", url: "https://www.statcan.gc.ca" },
        { title: "CTV News: Vancouver's overdose death rates remain at crisis levels", url: "https://ctvnews.ca" },
      ]}
    >
      <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight uppercase mb-8">BC&apos;s Drug Decriminalization: 18-Month Results — What Worked, What Didn&apos;t</h1>

      <p className="text-xl text-white leading-relaxed mb-8">
        When British Columbia became the first province in Canada to decriminalize small amounts of illicit drugs in January 2023, it was hailed as a watershed moment — a shift from punishment to public health. Eighteen months of data later, the picture is more complicated than either supporters or critics predicted.
      </p>

      <p className="text-lg text-white leading-relaxed mb-8">
        British Columbia&apos;s 2023 drug decriminalization pilot showed mixed results. Overdose deaths dropped initially but then spiked. Treatment gaps persisted. What the 18-month data tells us about where harm reduction alone falls short.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Promise of Decriminalization</h2>
      <p>
        The core idea was straightforward: if people caught with small quantities of drugs for personal use were not subject to criminal charges, they would be more likely to seek help without fear of arrest. Police in BC were instructed to redirect people to health services rather than lay charges for possession of up to 2.5 grams of opioids, cocaine, methamphetamine, or MDMA.
      </p>
      <p>
        The theory was grounded in evidence from Portugal, which decriminalized all drugs in 2001 and saw its HIV rates drop and treatment uptake increase. BC&apos;s version was narrower — focused specifically on personal possession — but the intent was similar. Remove the criminal stigma. Open the door to treatment.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What the Data Actually Shows</h2>
      <p>
        The BC Centre for Disease Control released findings that showed some genuine progress. In the first six months, there was a measurable increase in people voluntarily entering treatment programs. Police referrals to health services rose. And importantly, the rate of new HIV infections among people who use drugs showed signs of stabilizing — a meaningful signal in a province where injection drug use has driven epidemic-level HIV rates.
      </p>
      <p>
        But the overall overdose death toll did not decline as proponents hoped. BC recorded 2,511 deaths from toxic drugs in 2023 — down slightly from the record 2,783 in 2022, but still averaging roughly seven deaths per day. The drug supply did not get safer. Fentanyl contamination remained pervasive, and the emergence of benzodiazepines mixed into the opioid supply created new complications for first responders and clinicians.
      </p>
      <p>
        By mid-2024, as the decriminalization pilot was approaching its second year, some health officials began acknowledging what many advocates had warned about: decriminalization without a parallel expansion of treatment capacity was an incomplete intervention.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Treatment Gap</h2>
      <p>
        BC&apos;s addiction treatment system was already strained before decriminalization. The number of publicly funded residential treatment beds had not kept pace with demand. Waitlists for withdrawal management — the medically supervised detox that is the entry point for most residential programs — stretched weeks long in Vancouver and were even worse in northern and rural parts of the province.
      </p>
      <p>
        When decriminalization removed the threat of criminal consequences, some people who had been avoiding treatment because of legal risk became willing to seek it. But there was not enough treatment to absorb them. This created a cruel paradox: the people most motivated to get help could not access it quickly, and in the interval, some of them died.
      </p>
      <p>
        Peer-reviewed research published in the Canadian Journal of Public Health found that while ambulance dispatches for overdoses did not spike under decriminalization, they also did not fall — suggesting that the policy change alone was insufficient to alter overdose dynamics in a meaningful way.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Harm Reduction: Real Progress, Real Limits</h2>
      <p>
        One area where BC made unambiguous progress was in scaling harm reduction infrastructure. Supervised consumption sites continued operating. Take-home naloxone distribution expanded. Drug checking services — which allow users to test what is actually in their supply — became more widely available in some urban centres.
      </p>
      <p>
        These interventions saved lives directly. The supervised consumption sites in Vancouver and Victoria have collectively reversed thousands of overdoses since they opened. But harm reduction alone cannot solve a crisis being driven by an increasingly toxic, unpredictable drug supply. You can give people naloxone and safe consumption facilities, but if the drugs on the street are being cut with tranquilizers and synthetic opioids of unknown potency, harm reduction can only mitigate the damage — not prevent it.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Federal Exemption Expires</h2>
      <p>
        The federal exemption under the Controlled Drugs and Substances Act that enabled BC&apos;s decriminalization pilot was set to expire. The BC government requested an extension with modifications. Federal health officials Signal that future exemptions would require provinces to demonstrate concrete progress on treatment capacity alongside decriminalization — a condition that reflected growing consensus that the two must go hand in hand.
      </p>
      <p>
        This was a significant shift in the political framing of drug policy in Canada. Harm reduction had gained substantial acceptance; decriminalization was no longer the fringe position it had been a decade earlier. But the BC experience had demonstrated that decriminalization without treatment expansion was not a complete model.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Lessons for the Rest of Canada</h2>
      <p>
        Several provinces — including Ontario and New Brunswick — had been watching BC closely. Both had introduced or expanded harm reduction measures, including supervised consumption sites and naloxone distribution programs. But neither had moved toward decriminalization, citing concerns about signaling and the BC experiment as a caution.
      </p>
      <p>
        The BC 18-month report became a reference point in federal-provincial conversations about next steps in Canadian drug policy. The consensus that emerged was not that decriminalization had failed, but that it was necessary but not sufficient — a finding that would inform future federal exemption conditions.
      </p>
      <p>
        For New Brunswick, where addiction rates are climbing, treatment infrastructure is limited, and rural communities have almost no specialized services, the BC lesson is directly applicable. Harm reduction is not a substitute for treatment capacity. And treatment capacity cannot expand without sustained, coordinated investment from provincial and federal governments.
      </p>

      <p className="text-white italic mt-8">
        This article is part of Reform NB&apos;s ongoing coverage of addiction and mental health policy in Canada. Have information about treatment access in New Brunswick? Contact our tips line.
      </p>
    </ArticleLayout>
  );
}
