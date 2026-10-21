import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Diamond, ShieldCheck } from "lucide-react";

const people = [
  {
    image: "natubhai.png",
    name: "Natubhai Laxmanbhai Jasani",
    role: "Founder & Partner · Guidance",
    bio: "Born and raised in Pipardi, Gujarat, Natubhai entered diamond cutting during high school. After learning the trade in Bhavnagar and Mumbai, he began his own diamond trading business in 1998 and established J Varshit & Co. in 2000.",
    note: "His leadership is rooted in trust, transparency, quality, perseverance and responsibility."
  },
  {
    image: "rajnish.png",
    name: "Rajnish Jasani",
    role: "Sales Executive",
    bio: "Rajnish represents the next layer of the family business, building customer relationships through clear communication, disciplined coordination and a long-term partnership mindset.",
    note: "His focus is helping every buyer experience confidence from first conversation to final delivery."
  },
  {
    image: "ghanshyam.png",
    name: "Ghanshyam Jasani",
    role: "Multi-Department Executive",
    bio: "Ghanshyam supports the many connected departments that make the diamond business work, from planning and coordination to consistent execution.",
    note: "His role reflects the family’s hands-on approach to quality and responsibility."
  },
  {
    image: "varshit.png",
    name: "Varshit Jasani",
    role: "Upcoming Generation",
    bio: "Varshit represents the upcoming generation of J Varshit Diam, bringing fresh energy and a future-facing perspective to a family-owned business.",
    note: "The future grows with new ideas while the company’s vision, values and principles remain non-negotiable."
  }
];

const values = [
  ["Trust", "The foundation of every diamond and every deal."],
  ["Transparency", "Fair price, fair process and clear communication."],
  ["Quality", "Only the finest shine carries the J Varshit name."],
  ["Innovation", "Always evolving with awareness and purpose."],
  ["Customer-first", "Customer satisfaction guides every decision."]
];

export default function AboutUsPage() {
  return (
    <main>
      <div className="bg-ink px-5 py-2 text-center text-[10px] tracking-[.16em] text-white/70">J VARSHIT DIAM — 100% NATURAL DIAMONDS <span className="mx-3 text-gold">✦</span> TRUST · HONESTY · QUALITY</div>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <Link href="/" className="flex items-center gap-3"><Image src="/images/logo.png" alt="J Varshit Diam" width={166} height={83} className="h-12 w-auto object-contain" /><span className="hidden border-l border-ink/15 pl-3 text-sm font-bold tracking-[.08em] sm:block">J. VARSHIT</span></Link>
          <div className="hidden items-center gap-7 text-xs font-semibold lg:flex"><Link href="/">Home</Link><Link href="/about-us" className="text-gold">About Us</Link><Link href="/#diamonds">Diamonds</Link><Link href="/#services">Services</Link><Link href="/#inquiry">Inquiry</Link></div>
          <Link href="/#inquiry" className="rounded-full bg-gold px-5 py-3 text-xs font-bold text-white transition hover:bg-ink">Start an inquiry <ArrowUpRight className="ml-2 inline h-4 w-4" /></Link>
        </nav>
      </header>

      <section className="hero-glow px-5 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-end">
            <div><p className="eyebrow text-gold">About J Varshit Diam</p><h1 className="display mt-5 max-w-3xl text-5xl leading-[.98] sm:text-7xl">A family legacy<br /><em className="font-normal text-gold">shaped under pressure.</em></h1></div>
            <p className="max-w-lg text-base leading-8 text-white/65">Our journey began with a first touch of diamond cutting and grew through patience, courage and hard-earned wisdom. Today, J Varshit Diam stands for trust, honesty and quality.</p>
          </div>
        </div>
      </section>

      <section className="grid-lines px-5 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="eyebrow text-gold">01 / The founder journey</p><h2 className="display mt-4 text-4xl sm:text-5xl">From Mumbai’s<br /><em className="font-normal text-gold">market to a mission.</em></h2></div>
          <div className="space-y-6 text-sm leading-7 text-ink/65">
            <p>Natubhai Laxmanbhai Jasani moved to Mumbai in 1995, where he worked as a broker, observed the trade and absorbed every lesson the market offered. In 1998, he took the first bold step toward his own Diamond Trading Business.</p>
            <p>In 2000, J Varshit & Co. began with a small team of four to five people and dreams much bigger than the business itself. Over time, it evolved into J Varshit Diam — stronger, clearer and more rooted.</p>
            <p>The company’s purpose is not only financial growth. It is to build a business founded on values, contribute meaningfully to society, protect nature and create relationships that last generations.</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl"><p className="eyebrow text-gold">02 / The people behind the promise</p><h2 className="display mt-4 text-4xl sm:text-5xl">One family.<br /><em className="font-normal text-gold">One lasting vision.</em></h2></div>
          <div className="grid gap-5 md:grid-cols-2">
            {people.map((person) => <article key={person.name} className="grid gap-6 rounded-2xl bg-cream p-5 sm:grid-cols-[.7fr_1fr] sm:p-6"><div className="relative aspect-[.9] overflow-hidden rounded-xl bg-white"><Image src={`/images/${person.image}`} alt={person.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 30vw" /></div><div><p className="eyebrow text-gold">{person.role}</p><h3 className="display mt-3 text-2xl">{person.name}</h3><p className="mt-4 text-sm leading-6 text-ink/65">{person.bio}</p><p className="mt-4 border-l-2 border-gold pl-4 text-xs leading-5 text-ink/60">{person.note}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr]"><div><p className="eyebrow text-gold">03 / Our promise</p><h2 className="display mt-4 text-4xl sm:text-5xl">Trust, honesty<br /><em className="font-normal text-gold">and quality.</em></h2><p className="mt-6 max-w-md leading-7 text-white/60">Business success is not wealth — it is character. These principles guide our people, our processes and every partnership we build.</p></div><div className="grid gap-3 sm:grid-cols-2">{values.map(([name, text], index) => <div key={name} className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><div className="flex items-start justify-between"><Diamond className="text-gold" size={20} /><span className="text-xs text-gold">0{index + 1}</span></div><h3 className="mt-8 font-bold">{name}</h3><p className="mt-2 text-sm leading-6 text-white/55">{text}</p></div>)}</div></div>
      </section>

      <section className="bg-cream px-5 py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]"><div><p className="eyebrow text-gold">04 / The future</p><h2 className="display mt-4 text-4xl sm:text-5xl">Give the next generation<br /><em className="font-normal text-gold">wings to fly.</em></h2></div><div className="rounded-2xl bg-white p-7"><ShieldCheck className="text-gold" /><p className="mt-5 leading-7 text-ink/65">Our future stands strong on the shoulders of our team, nephews and son. New ideas are welcomed, but our vision, values and principles remain non-negotiable.</p><Link href="/#inquiry" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold">Build a partnership with us <ArrowUpRight size={16} /></Link></div></div></section>
      <footer className="bg-ink px-5 py-7 text-center text-xs text-white/45"><p>© 2026 J Varshit Diam. Natural brilliance, thoughtfully delivered.</p></footer>
    </main>
  );
}
