export type ExperienceRole = {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: readonly string[];
};

export type Project = {
  name: string;
  subtitle?: string;
  stack: readonly string[];
  bullets: readonly string[];
  /** Public marketing site, customer app deep link, etc. */
  links?: {
    product?: string;
    app?: string;
  };
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
};

export type CertificateItem = {
  name: string;
  date: string;
};
