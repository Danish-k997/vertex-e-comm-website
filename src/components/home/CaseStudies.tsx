import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  const [featured, ...rest] = caseStudies;

  return (
    <section
      id="case-studies"
      className="scroll-mt-24 border-y border-[#282a2d] bg-[#080a0d] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          data-reveal
        >
          <div className="max-w-2xl">
            <p className="kicker">Illustrative engagements</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
              The Work Behind Online Sales.
            </h2>
            <p className="mt-4 text-lg leading-7 text-[#9aa0a8]">
              These examples show the type of work Vertex can support. They are
              not attributed client stories or verified performance claims.
            </p>
          </div>
          <span className="font-mono text-[11px] text-[#9aa0a8]">
            EXAMPLE WORK SCOPES
          </span>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12" data-reveal="delay">
          <article className="case-study flex flex-col justify-between border-t border-[#282a2d] pt-8 lg:col-span-7">
            <div>
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-[10px] text-[#ff6a00]">
                  {featured.type}
                </span>
                <span className="font-mono text-[10px] text-[#9aa0a8]">
                  ILLUSTRATIVE EXAMPLE
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#f5f5f2] md:text-3xl">
                {featured.title}
              </h3>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] font-semibold text-[#9aa0a8]">
                    CHALLENGE
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#9aa0a8]">
                    {featured.challenge}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold text-[#ff6a00]">
                    POSSIBLE WORK
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#9aa0a8]">
                    {featured.solution}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {featured.channels.map((channel) => (
                <span
                  key={channel}
                  className="font-mono text-[11px] text-[#9aa0a8]"
                >
                  {channel}
                </span>
              ))}
            </div>
          </article>

          <div className="grid gap-10 lg:col-span-5">
            {rest.map((study) => (
              <article
                key={study.title}
                className="case-study border-t border-[#282a2d] pt-8"
              >
                <div className="mb-4 flex justify-between gap-3">
                  <span className="font-mono text-[10px] text-[#ff6a00]">
                    {study.type}
                  </span>
                  <span className="font-mono text-[10px] text-[#9aa0a8]">
                    ILLUSTRATIVE EXAMPLE
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#f5f5f2]">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#9aa0a8]">
                  {study.solution}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {study.channels.map((channel) => (
                    <span
                      key={channel}
                      className="font-mono text-[11px] text-[#9aa0a8]"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
