import ExperienceTimelineCard, {
  JobRoleExperience,
} from "@/components/ExperienceTimelineCard";
import TextLoop from "@/components/TextLoop";
import { Fragment } from "react";

const bachelorsDegreeExperience: JobRoleExperience = {
  jobTitle: "Bachelor of Computer Science",
  startDate: new Date(2022, 1),
  endDate: new Date(2025, 11),
  keySkills: [
    "Full-stack Development",
    "Frontend Development",
    "Android App Development",
    "UI/UX Design",
    "Leadership",
  ],
  shortDescription:
    "Specialisation in Advanced Computer Science, Minor in Mobile Application Development",
  accomplishments: [
    "GPA: 3.5/4.0 (Distinction)",
    "Sir John Monash Scholarship for Distinction (Women in IT)",
    "Monash Minds Student Leadership Program (2022)",
  ],
};

const ccaHrDirector: JobRoleExperience = {
  jobTitle: "Human Resources Director",
  startDate: new Date(2024, 7),
  endDate: new Date(2025, 8),
  keySkills: [
    "Leadership",
    "Student Recruitment",
    "Networking",
    "Graphic Design",
  ],
  shortDescription:
    "Served as the Human Resources director for a Monash student club",
  accomplishments: [
    "Lead and streamlined the recruitment process for general committee officers",
    "Planned internal committee events to increase member retainment and satisfaction",
    "Spearheaded the inaugral yearbook initiative",
  ],
};

const ccaHrOfficer: JobRoleExperience = {
  jobTitle: "Human Resources Officer",
  startDate: new Date(2023, 10),
  endDate: new Date(2024, 7),
  keySkills: ["Leadership", "Student Recruitment", "Networking"],
  shortDescription:
    "Served as the Human Resources officer for a Monash student club, under direction of the Human Resources director",
  accomplishments: [
    "Actively aided in the recruitment of general members and committee members through pitching at events such as Orientation Week, Students Clubs & Teams Expo, Crash Course To First Year, and more",
    "Reviewed applications in the hiring process for First Year Representatives, as well as helped facilitate group interviews",
    "Worked in a small team to implement new initiatives within CCA to boost committee member satisfaction, connection and engagement",
  ],
};

const monashAim: JobRoleExperience = {
  jobTitle: "Marketing Officer",
  startDate: new Date(2023, 10),
  endDate: new Date(2024, 7),
  keySkills: ["Graphic Design", "Social Media Marketing"],
  shortDescription:
    "Assisted in promotional materials for a Monash student team",
  accomplishments: [
    "Communicated and liased with other student clubs and teams to enhance social media engagement and exposure",
    "Designed social media posts using Canva",
  ],
};

const roles = [
  {
    company: "Monash University",
    jobRoles: [bachelorsDegreeExperience],
  },
  {
    company: "Computing and Commerce Association (CCA)",
    jobRoles: [ccaHrDirector, ccaHrOfficer],
  },
  {
    company: "Monash AIM (Analysis of Images in Medicine)",
    jobRoles: [monashAim],
  },
];

export default function EducationPage() {
  return (
    <main>
      <TextLoop
        text="Education"
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
        <h1 className="font-heading text-ink text-6xl">Education</h1>
        <span className="mt-3 block h-1.5 w-32 rounded-full bg-rainbow-gradient" />

        <div className="mt-8">
          {roles.map(({ company, jobRoles }, i) => (
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
  );
}
