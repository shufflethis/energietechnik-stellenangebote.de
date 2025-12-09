export enum Page {
  HOME = 'HOME',
  INDUSTRY = 'INDUSTRY',
  JOBS = 'JOBS',
  EMPLOYERS = 'EMPLOYERS',
  FAQ = 'FAQ',
  IMPRESSUM = 'IMPRESSUM'
}

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  tags: string[];
  posted: string;
}

export interface NavItem {
  label: string;
  page: Page;
}