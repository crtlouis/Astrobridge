import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function App() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="bg-black text-white font-sans">
      {/* NAVBAR — chunky + dropdown */}
      <header className="fixed inset-x-0 top-0 z-50 font-sans">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex items-center justify-between">
            <a href="#intro" className="inline-flex items-center gap-3">
              <img src="/assets/logo.svg" alt="AstroBridge" className="h-14 w-auto" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-5">
              <button
                onClick={() => setVideoOpen(true)}
                className="rounded-full border-2 border-white/85 bg-black/20 px-7 py-3.5 text-lg font-semibold tracking-wide hover:bg-white hover:text-black transition"
              >
                Watch our introduction
              </button>
              <a
                href="#get-involved"
                className="rounded-full border-2 border-white/85 bg-black/20 px-7 py-3.5 text-lg font-semibold tracking-wide hover:bg-white hover:text-black transition"
              >
                Get Involved
              </a>
              <a
                href="#about"
                className="rounded-full border-2 border-white/85 bg-black/20 px-7 py-3.5 text-lg font-semibold tracking-wide hover:bg-white hover:text-black transition"
              >
                About
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden rounded-full border border-white/80 p-3"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm">
            <div className="mx-auto mt-24 w-[90%] max-w-sm rounded-3xl border border-white/15 bg-black/80 p-6">
              <div className="grid gap-4">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setVideoOpen(true);
                  }}
                  className="rounded-full border-2 border-white/80 px-6 py-3 text-lg font-semibold hover:bg-white hover:text-black transition"
                >
                  Watch our introduction
                </button>
                <a
                  href="#get-involved"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full border-2 border-white/80 px-6 py-3 text-lg font-semibold hover:bg-white hover:text-black transition text-center"
                >
                  Get Involved
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full border-2 border-white/80 px-6 py-3 text-lg font-semibold hover:bg-white hover:text-black transition text-center"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

{/* HERO */}
<section id="intro" className="relative isolate h-[95vh] w-full overflow-hidden pt-24">
  {/* Stars overlay */}
  <div
    aria-hidden
    className="absolute inset-0 opacity-60 bg-cover bg-center"
    style={{ backgroundImage: "url(/assets/starsbg.jpg)" }}
  />

  {/* Earth image */}
  <img
    src="/assets/earth.jpg"
    alt="Earth"
    className="absolute inset-0 h-full w-full object-cover object-[50%_55%]"
  />

  {/* Bottom darkening gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/25" />

  {/* Text container */}
  <div className="relative z-10 mx-auto h-full max-w-7xl px-4">
    {/* 3-row grid keeps text low; we add mobile-only spacing tweaks below */}
    <div className="grid h-full grid-rows-[1fr_auto_auto]">
      <div /> {/* spacer */}

      {/* FIRST LINE — pull it UP on mobile only */}
      <div className="flex justify-end">
        <h1
          className="
            max-w-2xl text-right font-extrabold drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]
            text-3xl sm:text-6xl lg:text-7xl
            leading-tight sm:leading-[1.05]
            -mt-6 sm:mt-0      /* ← mobile-only: move headline up */
            mb-20 sm:mb-4       /* small gap below on mobile */
          "
        >
          The next frontier isn’t just for rockets.
        </h1>
      </div>

      {/* SECOND LINE — a touch more bottom padding on mobile */}
      <div className="pb-12 sm:pb-14">
        <h2
          className="
            text-left font-extrabold drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]
            text-3xl sm:text-6xl lg:text-7xl
            leading-tight sm:leading-[1.05]
          "
        >
          It’s for ideas
        </h2>
      </div>
    </div>
  </div>
</section>


{/* ABOUT — exact reference layout */}
<section id="about" className="relative bg-black text-white overflow-x-hidden py-20 md:py-28">
  <div
    className="
      mx-auto max-w-[1400px]
      grid gap-10 md:gap-12
      md:grid-cols-[0.95fr_1.3fr]
      px-6 md:px-10
    "
  >
    {/* LEFT SIDE (title + sat card) */}
    <div className="relative z-20">
      {/* Big title that overlaps slightly into the Falcon area */}
      <h3
        className="
          font-extrabold tracking-tight
          text-[40px] leading-[1.06]
          sm:text-[30px] md:text-[64px] lg:text-[76px]
          -mr-10 md:-mr-24
          select-none
        "
      >
        Europe’s first student
        <br />
        association for business
        <br />
        in space
      </h3>

      {/* Satellite image with copy that starts inside and bleeds a bit */}
      <div className="relative mt-8 rounded-3xl overflow-hidden w-[96%] md:w-[98%]">
        <img
          src="/assets/sat.jpg"
          alt="Satellite over Earth"
          className="w-full h-[320px] sm:h-[360px] md:h-[320px] object-cover rounded-3xl"
        />
        {/* subtle readability gradient + text sitting on the image, spilling out a touch */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none" />
        <p
          className="
            absolute bottom-0 left-0 right-0
            p-5 sm:p-6 md:p-7 lg:p-8
            text-white text-lg sm:text-xl md:text-[22px] font-medium leading-relaxed
          "
        >
          Where strategy and business meets space. Astrobridge brings young business
          minds into the space economy through educational content, industry-led talks,
          and inter-disciplinary events that launch ideas beyond Earth.
        </p>
      </div>
    </div>

    {/* RIGHT SIDE (Falcon + button) */}
    <div className="relative z-10 overflow-visible">
      {/* Falcon image — rectangular, larger, expanded to the RIGHT */}
      <div className="relative overflow-visible">
        <img
          src="/assets/falcon.jpg"
          alt="Falcon deploy"
          className="
            rounded-3xl object-cover
            h-[420px] sm:h-[460px] md:h-[440px]
            w-[120%] md:w-[135%]    /* make it bigger than its column */
            translate-x-6 sm:translate-x-10 md:translate-x-16  /* push to the right */
          "
        />
      </div>

      {/* Button centered under the Falcon, aligned with its extra width/offset */}
      <div
        className="
          mt-8
          w-[120%] md:w-[135%]
          translate-x-6 sm:translate-x-10 md:translate-x-16
          flex justify-center
        "
      >
        <button
          onClick={() => setVideoOpen(true)}
          className="
            inline-flex items-center gap-3
            rounded-full border border-white/85
            px-7 sm:px-9 md:px-10
            py-3.5 sm:py-4
            text-base sm:text-lg md:text-xl font-semibold
            bg-black/20 hover:bg-white hover:text-black transition
          "
        >
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-white" />
          Watch our Introduction Video
        </button>
      </div>
    </div>
  </div>
</section>



{/* WHAT WE DO */}
<section
  id="get-involved"
  className="relative overflow-hidden flex items-center"
  style={{
    backgroundImage: "url(/assets/satearth.png)",
    backgroundSize: "cover",
    backgroundPosition: "50% 40%",
    minHeight: "90vh", // a bit taller overall
  }}
>
  <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

  <div className="relative mx-auto max-w-7xl px-6 w-full">
    <div className="grid gap-14 md:gap-20 md:grid-cols-3">
      {[
        {
          title: "Educate",
          text:
            "Providing educational content on the space economy, space policy, business models and non-engineering roles through social media content.",
        },
        {
          title: "Connect",
          text:
            "Bridging the gap between business students and the space industry through speakers, panels, and inter-university collaborations.",
        },
        {
          title: "Launch",
          text:
            "Empowering students to develop and apply ideas through workshops, professional opportunities, and cross-disciplinary projects to encourage business innovation in space.",
        },
      ].map((card) => (
        <div
          key={card.title}
          className="
            rounded-[2rem]
            bg-black/45
            p-10 sm:p-12
            shadow-[0_20px_60px_rgba(0,0,0,0.5)]
            ring-1 ring-white/10
            backdrop-blur-md
            transition-transform
            hover:scale-[1.03]
            hover:bg-black/55
          "
        >
          <h4 className="text-3xl sm:text-4xl font-extrabold mb-4">{card.title}</h4>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">{card.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CTA PANEL */}
      <section
        id="apply"
        className="relative flex flex-col items-center justify-center py-28 px-6 text-center text-white"
        style={{
          backgroundImage: "url(/assets/starsbg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 w-full max-w-3xl rounded-[28px] border border-white/80 p-8 bg-black/30 backdrop-blur-sm md:p-12">
          <h3 className="text-3xl font-extrabold md:text-4xl">
            Some markets grow.
            <br />
            Others escape gravity.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Apply now and discover what the future holds for business in space.
          </p>
          <a
            href="#join"
            className="mx-auto mt-6 inline-block w-full max-w-md rounded-full bg-white px-6 py-3 text-base font-semibold text-black hover:bg-white/90"
          >
            notify me 
          </a>
        </div>
        <p className="mt-6 text-sm text-white/80">
          Are you an individual or part of an organization and want to connect or collaborate? Contact us{" "}
          <a href="#contact" className="underline font-semibold">
            here
          </a>.
        </p>
      </section>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-3xl rounded-xl overflow-hidden bg-black">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/20 px-3 py-1 text-white hover:bg-white/30"
            >
              Close
            </button>
            <video src="/assets/space.mov" controls autoPlay className="w-full h-auto" />
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-sm text-white/60">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
          <div>© {new Date().getFullYear()} AstroBridge</div>
        </div>
      </footer>
    </main>
  );
}
