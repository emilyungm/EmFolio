export interface JobRoleExperience {
  jobTitle: string;
  startDate: Date;
  endDate?: Date;
  keySkills: string[];
  shortDescription: string;
  accomplishments: string[];
}

interface ExperienceTimelineCardProps {
  company: string;
  companyLinkedIn: string;
  jobRoles: JobRoleExperience[];
}

const dateOptions: Intl.DateTimeFormatOptions = {
  month: "long",
  year: "numeric",
};

const ExperienceTimelineCard = ({
  company,
  companyLinkedIn,
  jobRoles,
}: ExperienceTimelineCardProps) => {
  // most recent start date first
  const sortedExperiences = jobRoles.toSorted(
    (a, b) => b.startDate.valueOf() - a.startDate.valueOf(),
  );

  return (
    <div className="font-commissioner rounded-2xl text-ink bg-secondary-foreground p-6 sm:p-8">
      <a href={companyLinkedIn} target={"_blank"}>
        <h2 className="text-3xl font-semibold underline underline-offset-4 decoration-2">
          {company}
        </h2>
      </a>

      {/* timeline line */}
      <div className="text-surface mt-6 ml-3 space-y-6 border-l-2 border-primary pl-6">
        {sortedExperiences.map((experience) => (
          <div
            key={`${experience.jobTitle}-${company}`}
            className="relative rounded-xl bg-primary-foreground p-5"
          >
            {/* timeline dot */}
            <span
              aria-hidden
              className="absolute top-6 -left-8 size-3.5 rounded-full bg-secondary-foreground ring-2 ring-primary"
            />

            <p className="inline-block rounded-full bg-accent/50 px-3 py-1 text-sm font-semibold">
              {experience.startDate.toLocaleDateString("en-AU", dateOptions)} -{" "}
              {experience.endDate?.toLocaleDateString("en-AU", dateOptions) ??
                "Present"}
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              {experience.jobTitle}
            </h3>
            <p className="mt-1">{experience.shortDescription}</p>

            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Key skills">
              {experience.keySkills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-accent/50 px-3 py-1 text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>

            <ul className="mt-4 space-y-2">
              {experience.accomplishments.map((accomplishment) => (
                <li key={accomplishment} className="flex gap-3 leading-relaxed">
                  <span aria-hidden className="shrink-0 text-accent">
                    ✦
                  </span>
                  <span>{accomplishment}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimelineCard;
