import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const ARTICLES: Record<string, {
    title: string; category: string; date: string; readTime: string; img: string;
    intro: string; body: string[]; pullQuote: string;
}> = {
    "choosing-home-care": {
        title: "Choosing Home Care: What Every Family Needs to Know",
        category: "Guide",
        date: "15 January 2025",
        readTime: "7 min read",
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&w=1600&q=85",
        intro: "When a loved one begins to need support at home, the decision to arrange care can feel both urgent and overwhelming. Support for health and wellbeing requires an approach that is both clinical and compassionate.",
        body: [
            "The first step is understanding what type of care is actually needed. Home care exists on a wide spectrum — from a single daily visit to help with morning routines, all the way to 24-hour live-in care for complex medical needs. Taking time to properly assess what is required will guide every decision that follows.",
            "Regulatory compliance is non-negotiable. Any care provider operating in England must be registered with and regulated by the Care Quality Commission (CQC). You can search any provider on the CQC website and view their inspection history and ratings before making any commitment. A 'Good' or 'Outstanding' rating is the minimum you should expect.",
            "The relationship between carer and client is the heart of good home care. When meeting potential providers, ask specifically about carer consistency — how many different carers will visit, and how often are they changed? Continuity matters enormously for the wellbeing of the person being cared for.",
            "Training and supervision should be thoroughly investigated. Ask what training new carers receive before their first visit, how regularly they are supervised, and what specialist training the agency offers for specific conditions such as dementia, Parkinson's disease, or complex clinical needs.",
            "Finally, look for a provider whose values align with your own. The best care agencies treat both their clients and their carers with genuine respect — this tends to be visible from the very first conversation.",
        ],
        pullQuote: "The relationship between carer and client is the heart of good home care. Never compromise on consistency or clinical purpose.",
    },
    "live-in-care-vs-care-home": {
        title: "Live-in Care vs Care Home: An Honest Comparison",
        category: "Insight",
        date: "3 December 2024",
        readTime: "9 min read",
        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1600&q=85",
        intro: "When intensive support is required, families typically face a choice between live-in home care and a residential care home. Both can provide excellent support — but they represent very different lifestyle experiences.",
        body: [
            "Cost is often the first consideration. A care home placement typically costs between £800 and £2,500 per week, depending on the level of care required and the location. Live-in care from a quality agency is typically comparable, often ranging from £900 to £1,800 per week. The difference is what you receive for that investment.",
            "Person-centred care is significantly easier to deliver in a home environment. In a residential setting, staff attention is shared across many residents. With live-in care, one dedicated professional's sole focus is your loved one — their preferences, routines, and individual needs.",
            "Familiarity and environment matters profoundly, particularly for those living with dementia. Research consistently shows that people experience less confusion and distress when remaining in a familiar environment surrounded by their own belongings, memories, and routines.",
            "Social opportunity differs between settings. Care homes benefit from a built-in community — other residents, group activities, and a regular programme of events. For those who thrive on social interaction, this can be an important advantage. Live-in care can address this through planned outings and activities, but it requires active management.",
            "Ultimately, the right choice depends on the individual. We always recommend a detailed assessment before making any decision — and we offer these assessments at no charge.",
        ],
        pullQuote: "One dedicated professional's sole focus is your loved one — their preferences, routines, and individual needs.",
    },
    "supported-living-independence": {
        title: "How Supported Living Can Transform Independence",
        category: "Stories",
        date: "19 November 2024",
        readTime: "5 min read",
        img: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=1600&q=85",
        intro: "For adults with learning or physical disabilities, the question of where and how to live is fundamental to their sense of identity and wellbeing. Supported living has transformed the lives of many of the people we support.",
        body: [
            "Supported living sits at the intersection of independence and support. It enables adults with disabilities to live in their own home while receiving the level of professional clinical support they need to manage daily life safely and confidently.",
            "The arrangements are highly flexible. Some individuals require only a few hours of support each week to help with practical tasks, finances, or community activities. Others need more intensive daily support, including personal care and management of complex needs. The key is that the support is built around the person.",
            "The benefits to wellbeing are profound. When people have meaningful control over their own lives — where they live, who they spend time with, what they eat, how they spend their days — outcomes across every measure improve. People are happier and more engaged.",
            "Our supported living team works as genuine partners with the individuals we support, their families, and any other professionals involved in their care. We co-produce every support plan regularly to reflect the person's changing goals.",
        ],
        pullQuote: "When people have genuine control over their own lives, outcomes across every measure improve.",
    },
};

// Generate static paths
export async function generateStaticParams() {
    return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
    const article = ARTICLES[params.slug];
    if (!article) notFound();

    return (
        <main>
            {/* Hero Section */}
            <section style={{
                position: "relative",
                height: "60vh",
                minHeight: "480px",
                overflow: "hidden",
                display: "flex",
                alignItems: "flex-end",
                background: "var(--royal-deep)"
            }}>
                <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                    sizes="100vw"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(59,43,92,0.95) 0%, rgba(59,43,92,0.4) 60%, transparent 100%)" }} />
                <div className="container" style={{ position: "relative", zIndex: 2, paddingBottom: "64px" }}>
                    <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.16em", color: "var(--lavender-l)", textTransform: "uppercase", marginBottom: "16px" }}>{article.category}</div>
                    <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 500, color: "white", maxWidth: "760px", lineHeight: 1.2, marginBottom: "16px" }}>
                        {article.title}
                    </h1>
                    <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{article.date} · {article.readTime}</div>
                </div>
            </section>

            {/* Article Content */}
            <section style={{ background: "white", padding: "100px 0" }}>
                <div className="container">
                    <div style={{ maxWidth: "740px", margin: "0 auto" }}>
                        {/* Intro / Lede */}
                        <p style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "24px",
                            fontStyle: "italic",
                            color: "var(--royal)",
                            lineHeight: 1.7,
                            marginBottom: "56px",
                            borderLeft: "3.5px solid var(--lavender)",
                            paddingLeft: "32px",
                            fontWeight: 400
                        }}>
                            {article.intro}
                        </p>

                        {/* Body Text */}
                        {article.body.map((para, i) => (
                            <div key={i}>
                                <p style={{ fontSize: "18px", color: "var(--slate-mid)", lineHeight: 1.9, marginBottom: "32px", fontWeight: 300 }}>
                                    {para}
                                </p>
                                {i === 1 && (
                                    <blockquote style={{
                                        margin: "64px 0",
                                        padding: "48px 48px",
                                        background: "var(--lavender-pale)",
                                        borderRadius: "var(--r-xl)",
                                        fontFamily: "var(--font-serif)",
                                        fontSize: "24px",
                                        fontStyle: "italic",
                                        color: "var(--royal)",
                                        lineHeight: 1.6,
                                        borderLeft: "4px solid var(--lavender)",
                                        position: "relative"
                                    }}>
                                        <div style={{ fontSize: "60px", color: "var(--lavender)", position: "absolute", top: "20px", left: "20px", opacity: 0.15, fontFamily: "var(--font-serif)" }}>“</div>
                                        {article.pullQuote}
                                    </blockquote>
                                )}
                            </div>
                        ))}

                        {/* CTA Section */}
                        <div style={{
                            marginTop: "80px",
                            padding: "64px",
                            background: "var(--royal-deep)",
                            borderRadius: "var(--r-xl)",
                            textAlign: "center",
                            position: "relative",
                            overflow: "hidden"
                        }}>
                            <div style={{ position: "absolute", inset: 0, opacity: 0.05, background: "radial-gradient(circle at center, var(--lavender) 0%, transparent 70%)" }} />
                            <div style={{ position: "relative", zIndex: 2 }}>
                                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "32px", color: "white", marginBottom: "16px" }}>
                                    Begin Your Care Journey.
                                </h3>
                                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "17px", marginBottom: "40px", maxWidth: "500px", margin: "0 auto 40px", fontWeight: 300 }}>
                                    Our clinical managers are ready to provide a free, no-obligation assessment for your family.
                                </p>
                                <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                                    <Link href="/contact" className="btn btn-purple" style={{ padding: "18px 40px" }}>Book Free Assessment</Link>
                                    <a href="tel:01202948898" className="btn btn-outline-white" style={{ padding: "18px 40px" }}>Speak to a Manager</a>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div style={{ marginTop: "64px", paddingTop: "40px", borderTop: "1px solid var(--mist)" }}>
                            <Link href="/blog" className="btn-text" style={{ fontSize: "15px", color: "var(--royal)" }}>
                                ← Back to Clinical Journal
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
