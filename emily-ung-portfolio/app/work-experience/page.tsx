import ExperienceTimelineCard, {
  JobRoleExperience,
} from "@/components/ExperienceTimelineCard";
import TextLoop from "@/components/TextLoop";
import { Fragment } from "react";

const cbaInternExperience: JobRoleExperience = {
  jobTitle: "Engineering Summer Intern",
  startDate: new Date(2024, 10),
  endDate: new Date(2025, 0),
  keySkills: [
    "React",
    "Typescript",
    "CSS",
    "Web Development",
    "Software Testing",
    "Frontend Development",
  ],
  shortDescription: "Frontend software engineer - Design system (web)",
  accomplishments: [
    "Implemented reusable UI components to expand the new design system",
    "Improved documentation standards to enhance understanding between designers and engineers",
    "Developed fixes for long-standing bugs in the codebase",
    "Lead design and front-end development for a small collaborative team (CBA junior talent Hackathon finalist & People's Choice Award winner)",
  ],
};

const cbaGradExperience: JobRoleExperience = {
  jobTitle: "Engineering Graduate",
  startDate: new Date(2026, 1),
  keySkills: [
    "C#",
    ".NET",
    "LaunchDarkly",
    "Kubernetes",
    "Software Testing",
    "Backend Development",
  ],
  shortDescription:
    "Rotation 1: Backend software engineer - small business banking",
  accomplishments: [
    "Designed and implemented the Backend-for-Frontend (BFF) framework pattern for our APIs (including implementing authentication), allowing them to be consumed by the CBA mobile app",
    "Deployed backend microservices to various gateways, allowing the APIs to be consumed by both other internal APIs and the mobile app",
    "Implemented feature flagging for varying backend APIs, supporting a safe and gradual rollout to varying environments",
    "Automated tedious and repetitive deployment configuration work by creating a shareable Claude skill",
    "Improved documentation standards across the team by creating and managing an onboarding guide, deployment process guide, test data knowledge hub, etc",
    "Maintained APIs and implemented bug fixes as necessary",
    "Grad bootcamp hackathon finalist and Grad's Choice award winner (prototyped the UI in Figma and developed the frontend in React for a financial advice chatbot)",
  ],
};

const leidosInternExperience: JobRoleExperience = {
  jobTitle: "Software Developer Intern",
  startDate: new Date(2025, 1),
  endDate: new Date(2026, 0),
  keySkills: ["Java", "SpringBoot", "Selenium", "Full-stack Development"],
  shortDescription: "Full stack developer",
  accomplishments: [
    "Improved user experiences through implementing UI features and bug fixes with React and Typescript",
    "Wrote APIs and server-side code to handle business logic with Java and Spring",
    "Automated web UI testing using Selenium to detect regressions and improve test robustness",
    "Created original Python scripts to generate random XML test data",
  ],
};

const companies = [
  {
    company: "Commonwealth Bank of Australia",
    jobRoles: [cbaInternExperience, cbaGradExperience],
  },
  { company: "Leidos Australia", jobRoles: [leidosInternExperience] },
];

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
        <section className="mx-auto px-6 py-10 sm:px-16">
          <h1 className="font-heading text-ink text-6xl">Work Experience</h1>
          <span className="mt-3 block h-1.5 w-32 rounded-full bg-rainbow-gradient" />

          <div className="mt-8">
            {companies.map(({ company, jobRoles }, i) => (
              <Fragment key={company}>
                {i > 0 && (
                  <div
                    aria-hidden
                    className="my-6 h-1 rounded-full bg-rainbow-gradient"
                  />
                )}
                <ExperienceTimelineCard company={company} jobRoles={jobRoles} />
              </Fragment>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
