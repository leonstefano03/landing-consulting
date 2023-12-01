export default function SectionInfoSI() {
  return (
    <section
      className={`w-[95%] sm:w-[85%] lg:w-[70%] mx-auto h-full flex flex-col sm:grid sm:grid-cols-2 text-black my-8`}
    >
      <div className="mx-4 my-6 sm:my-0">
        <h2 className="inline text-lg border-b-4 border-green-800 pb-1 ">
          OUR OBJETIVE
        </h2>
        <p className="mt-4">
          Having a strategy is important, but its execution is everything. At
          Co-enable we know that this is a key point for success and therefore,
          we work by your side, co-directing the entire implementation process.
          In addition, we help you lay the foundations by transferring knowledge
          so that in the medium term you can manage the strategy autonomously.
          We activate with you all the fundamental levers to transfer the
          strategy from paper to reality.
        </p>
      </div>
      <div className="mx-4 my-6 sm:my-0">
        <h2 className="inline text-lg border-b-4 border-green-800 pb-1 ">
          OUR METHODOLOGY
        </h2>
        <p className="mt-4">
          We prioritize projects and resource allocation. We help in measuring
          indicators We create coordination and decision-making mechanisms for
          monitoring. We support you in the communication of the strategy
          internally and externally. We review the critical processes to achieve
          the objectives We manage change and align the team around the
          strategy.
        </p>
      </div>
    </section>
  );
}
