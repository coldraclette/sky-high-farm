import { type SchemaTypeDefinition } from 'sanity';

import { aboutPage } from './schema/about-page';
import { contactPage } from './schema/contact-page';
import { fellowshipPage } from './schema/fellowship-page';
import { foodaccessPage } from './schema/foodaccess-page';
import { grantsPage } from './schema/grants-page';
import { jobPage } from './schema/job-page';
import { landingPage } from './schema/landing-page';
import { programmingPage } from './schema/programming-page';
import { programmingProject } from './schema/programming-project';
import { specialProject } from './schema/special-project';
import { supportPage } from './schema/support-page';
import { teamMember } from './schema/team-member';
import { teamPage } from './schema/team-page';
import { volunteerPage } from './schema/volunteer-page';
import { organizations } from './schema/organizations';
import { fellow } from './schema/fellow';
import { grant } from './schema/grant';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    programmingProject,
    specialProject,
    landingPage,
    programmingPage,
    aboutPage,
    teamPage,
    teamMember,
    supportPage,
    jobPage,
    contactPage,
    volunteerPage,
    grantsPage,
    foodaccessPage,
    fellowshipPage,
    organizations,
    fellow,
    grant
  ],
};
