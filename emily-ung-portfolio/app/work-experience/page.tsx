import TextLoop from "@/components/TextLoop";

export default function WorkExperiencePage() {
  return (
    <>
      <main>
        <TextLoop
          text="Work Experience"
          shape="wave"
          speed={10}
          direction="forward"
          separator="⋆｡˚✩"
          curviness={14}
          fontSize={15}
          fontWeight={600}
          letterSpacing={1.5}
          uppercase={false}
          color="var(--color-ink)"
          ribbon={false}
          ribbonWidth={60}
          pauseOnHover={false}
          viewHeight={60}
        />
        <section className="mx-8 max-w-5xl px-6 py-12">
          <h1 className="font-heading text-rainbow drop-shadow-md text-6xl">
            Work Experience
          </h1>
        </section>
      </main>
    </>
  );
}
