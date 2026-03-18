import { useMemo, useState } from "react";
import { Beaker, BookOpen, Download, FileText, FlaskConical, FolderOpen, GraduationCap, Mail, Search, User } from "lucide-react";

export default function ChemicalEngineeringPortfolio() {
  const [activePage, setActivePage] = useState("home");
  const [query, setQuery] = useState("");

  const subjects = [
    {
      title: "Analitikai kémia",
      desc: "Mérési módszerek, oldatok, kalibráció, hibaszámítás és laboranyagok.",
      tag: "Labor + számítás",
    },
    {
      title: "Szerves kémia",
      desc: "Funkciós csoportok, reakciómechanizmusok, összefoglalók és tanulókártyák.",
      tag: "Mechanizmusok",
    },
    {
      title: "Fizikai kémia",
      desc: "Termodinamika, egyensúlyok, kinetika és számolási segédletek.",
      tag: "Elmélet + képletek",
    },
    {
      title: "Művelettan",
      desc: "Desztilláció, abszorpció, hőátadás, technológiai sémák és alapfolyamatok.",
      tag: "Vegyipari műveletek",
    },
    {
      title: "Szervetlen kémia",
      desc: "Főbb vegyületcsoportok, reakciók, ipari jelentőség és vizsgajegyzetek.",
      tag: "Alapozó tárgy",
    },
    {
      title: "Anyag- és energiamegmaradás",
      desc: "Anyagmérlegek, energiamérlegek, alapfeladatok és számítási sémák.",
      tag: "Számolós tárgy",
    },
  ];

  const expandableProjects = [
    {
      title: "Laborjegyzőkönyvek",
      text: "Kísérletek, mérési eredmények, hibaszámítások és következtetések rendszerezve.",
    },
    {
      title: "Tanulmányi projektek",
      text: "Beadandók, prezentációk, mini kutatási projektek és csoportmunkák.",
    },
    {
      title: "Saját jegyzetgyűjtemény",
      text: "Tárgyanként rendezett tananyagok, képletek, rövidített magyarázatok és vizsgafelkészítők.",
    },
    {
      title: "Jövőbeli szakmai munkák",
      text: "Ez a szekció bővíthető későbbi szakmai projektekhez, kutatásokhoz és portfólióelemekhez.",
    },
  ];

  const notesLibrary = [
    {
      title: "Analitikai kémia – laborjegyzet",
      type: "PDF",
      category: "Labor",
      status: "Feltölthető",
    },
    {
      title: "Szerves kémia – reakciómechanizmus összefoglaló",
      type: "PDF",
      category: "Jegyzet",
      status: "Feltölthető",
    },
    {
      title: "Anyagmérleg – gyakorló feladatok",
      type: "Excel",
      category: "Számítás",
      status: "Feltölthető",
    },
    {
      title: "Fizikai kémia – képletgyűjtemény",
      type: "PDF",
      category: "Vizsgaanyag",
      status: "Feltölthető",
    },
    {
      title: "Művelettan – desztilláció vázlat",
      type: "Prezentáció",
      category: "Technológia",
      status: "Feltölthető",
    },
    {
      title: "Saját rövid jegyzetek",
      type: "DOC / PDF",
      category: "Saját anyag",
      status: "Bővíthető",
    },
  ];

  const filteredNotes = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return notesLibrary;
    return notesLibrary.filter((item) =>
      [item.title, item.type, item.category, item.status].join(" ").toLowerCase().includes(value)
    );
  }, [query]);

  const NavButton = ({ id, label }) => (
    <button
      onClick={() => setActivePage(id)}
      className={`rounded-full px-4 py-2 text-sm transition ${
        activePage === id
          ? "bg-cyan-400 text-slate-950"
          : "text-slate-300 hover:bg-white/5 hover:text-white"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_22%),linear-gradient(to_bottom,#020617,#020617)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Kovács Milán</p>
            <h1 className="text-xl font-semibold">Vegyészmérnöki portfólió</h1>
          </div>

          <nav className="flex flex-wrap gap-2">
            <NavButton id="home" label="Főoldal" />
            <NavButton id="notes" label="Letöltések / Jegyzetek" />
          </nav>
        </div>
      </header>

      {activePage === "home" ? (
        <main>
          <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
                <Beaker size={16} /> Tanulás • Jegyzetek • Laborok • Projektek
              </p>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Személyes tanulmányi felület vegyészmérnöki anyagokhoz.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Ez az oldal arra készült, hogy egy helyen legyenek a tantárgyaimhoz tartozó jegyzetek,
                laborjegyzőkönyvek, számítások, beadandók és a később bővíthető saját projektjeim.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setActivePage("notes")}
                  className="rounded-2xl bg-cyan-400 px-6 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
                >
                  Jegyzetek megnyitása
                </button>
                <button className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5">
                  Projektek áttekintése
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
                <p className="text-sm text-cyan-300">Profil</p>
                <h3 className="mt-2 text-2xl font-semibold">Kovács Milán</h3>
                <p className="mt-3 text-slate-300">Szak: Vegyészmérnök</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  A felület tanulmányi tudástárként és később szakmai bemutatkozó oldalként is használható.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5">
                  <p className="text-3xl font-bold">6</p>
                  <p className="mt-2 text-sm text-slate-400">minta tantárgyi blokk</p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5">
                  <p className="text-3xl font-bold">Bővíthető</p>
                  <p className="mt-2 text-sm text-slate-400">projektek és feltöltések</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-6">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Rólam</p>
              <div className="mt-4 grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <h3 className="text-3xl font-semibold">Tanulmányi portfólió és tudástár</h3>
                  <p className="mt-4 max-w-3xl text-slate-300 leading-8">
                    Az oldal célja, hogy rendszerezetten mutassa be a vegyészmérnöki tanulmányaimhoz kapcsolódó
                    anyagokat. Ide kerülhetnek jegyzetek, laboreredmények, vizsgafelkészítők, számítási segédletek,
                    beadandók és későbbi szakmai projektek is.
                  </p>
                  <p className="mt-4 max-w-3xl text-slate-300 leading-8">
                    A mostani verzió tanulási célokra készült, de később könnyen bővíthető szakmai önéletrajzzal,
                    kutatási érdeklődéssel, szakmai gyakorlattal és publikációs vagy projektlistás résszel is.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-black/20 p-6">
                  <h4 className="flex items-center gap-2 text-lg font-semibold">
                    <User size={18} className="text-cyan-300" /> Mit tud az oldal?
                  </h4>
                  <ul className="mt-4 space-y-3 text-slate-300">
                    <li>• tantárgyanként rendszerezett anyagok</li>
                    <li>• külön jegyzet / letöltés nézet</li>
                    <li>• laborjegyzőkönyvek és számítások helye</li>
                    <li>• bővíthető projektportfólió</li>
                    <li>• későbbi szakmai bemutatkozás alapja</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Tantárgyak</p>
                <h3 className="mt-3 text-3xl font-semibold md:text-4xl">Főbb tanulási területek</h3>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-slate-400">
                Ezek jelenleg mintaként szerepelnek, de teljesen személyre szabhatók a tényleges tantárgyaid szerint.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {subjects.map((subject) => (
                <div
                  key={subject.title}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-xl font-semibold">{subject.title}</h4>
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                      {subject.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{subject.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-4">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 md:p-12">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Projektek</p>
              <h3 className="mt-3 text-3xl font-semibold md:text-4xl">Bővíthető saját munkák</h3>
              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {expandableProjects.map((project) => (
                  <div key={project.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                    <h4 className="text-xl font-semibold">{project.title}</h4>
                    <p className="mt-3 leading-7 text-slate-300">{project.text}</p>
                    <button className="mt-6 rounded-2xl border border-cyan-400/30 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-400/10">
                      Helykitöltő blokk
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-cyan-300">Külön oldal</p>
                <h4 className="mt-2 flex items-center gap-2 text-xl font-semibold">
                  <FolderOpen size={18} /> Letöltések / Jegyzetek
                </h4>
                <p className="mt-3 text-slate-300">
                  Külön nézet készült a tananyagoknak, ahol később keresővel és kategóriákkal lehet böngészni.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-cyan-300">Későbbi fejlesztés</p>
                <h4 className="mt-2 flex items-center gap-2 text-xl font-semibold">
                  <FlaskConical size={18} /> Kalkulátorok
                </h4>
                <p className="mt-3 text-slate-300">
                  Hozam, koncentráció, anyagmérleg vagy pH számolók is beépíthetők később.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-cyan-300">Szakmai irány</p>
                <h4 className="mt-2 flex items-center gap-2 text-xl font-semibold">
                  <GraduationCap size={18} /> Portfólió alap
                </h4>
                <p className="mt-3 text-slate-300">
                  Az oldal később alkalmas lehet szakmai bemutatkozásra oktatók, gyakorlati helyek vagy munkaadók felé.
                </p>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <main className="mx-auto max-w-7xl px-6 py-16">
          <section className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Letöltések / Jegyzetek</p>
                <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Külön tudástár nézet</h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                  Itt lehet majd tantárgyanként feltölteni PDF-eket, Excel fájlokat, laborjegyzőkönyveket,
                  prezentációkat és saját összefoglalókat.
                </p>
              </div>

              <div className="relative w-full max-w-md">
                <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Keresés jegyzetek között..."
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/80 py-3 pl-11 pr-4 text-white outline-none placeholder:text-slate-500"
                />
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredNotes.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{item.category}</p>
                    <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300">
                    {item.type}
                  </span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-slate-400">Állapot: {item.status}</span>
                  <button className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/30 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-400/10">
                    <Download size={16} /> Megnyitás
                  </button>
                </div>
              </div>
            ))}
          </section>

          <section className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold">
                <BookOpen size={18} className="text-cyan-300" /> Ajánlott kategóriák
              </h3>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li>• Tantárgyi jegyzetek</li>
                <li>• Laborjegyzőkönyvek</li>
                <li>• Vizsgafelkészítők</li>
                <li>• Excel számítási sablonok</li>
                <li>• Prezentációk</li>
                <li>• Saját rövidített összefoglalók</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-dashed border-cyan-400/25 bg-cyan-400/5 p-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold">
                <FileText size={18} className="text-cyan-300" /> Feltöltési hely előkészítve
              </h3>
              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                Ebbe a blokkba később valódi fájllinkek, letöltési gombok, kategóriák, címkék és tantárgyszűrők is
                beépíthetők. A mostani változat már úgy van kialakítva, hogy könnyen továbbfejleszthető legyen.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">PDF</span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">Excel</span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">PPT</span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">DOC</span>
              </div>
            </div>
          </section>
        </main>
      )}

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Kapcsolat</p>
            <h3 className="mt-3 text-2xl font-semibold">Vegyészmérnöki tanulmányi portfólió</h3>
            <p className="mt-4 max-w-xl leading-8 text-slate-300">
              Személyre szabott, bővíthető weboldal tanulmányokhoz, jegyzetekhez, laboranyagokhoz és későbbi szakmai bemutatkozáshoz.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3 text-slate-300">
              <Mail size={18} className="text-cyan-300" />
              <span>Itt később megadható e-mail, LinkedIn vagy önéletrajz link.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
