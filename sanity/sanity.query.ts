import { groq } from 'next-sanity';

import { client } from './lib/client';

export async function getLandingPageData() {
  return client.fetch(
    groq`*[_type == "landingPage"][0]{backgroundVideo, backgroundImage}`
  );
}

export async function getProgrammingPageData() {
  return client.fetch(groq`*[_type == "programmingPage"][0]{
    headerImage,
    pageTitle,
    titlePosition,
    textContent,
    specialProjectsTitle,
    specialProjectsTextContent
  }`);
}

export async function getNumberOfProgrammingProjects() {
  return client.fetch(groq`count(*[_type == "programmingProject"])`);
}

export async function getNumberOfSpecialProjects() {
  return client.fetch(groq`count(*[_type == "specialProject"])`);
}

export async function getAboutPageData() {
  return client.fetch(groq`*[_type == "aboutPage"][0]{
    headerImage,
    pageTitle,
    titlePosition,
    textContent,
    timeline,
    endTextBlock
  }`);
}

export async function getTeamPageData() {
  return client.fetch(groq`*[_type == "teamPage"][1]{
    showPageTitle,
    pageTitle,
    staffSections[]{
      sectionTitle,
      members[]->{
        name,
        jobTitle,
        image,
        slug { current }
      }
    }
  }`);
}

export async function getTeamMemberData(slug: string) {
  return client.fetch(groq`*[_type == "teamMember" && slug.current == "${slug}"][0]{
    name,
    jobTitle,
    image,
    bio
  }`);
}

export async function getFirstProgrammingProjects() {
  return client.fetch(groq`*[_type == "programmingProject"] | order(date desc) [0..5]{
    title,
    projectImage,
    subtitleGreen,
    date,
    flexibleDate,
    slug { current }
  }`);
}

export async function getNextProgrammingProjects(startIndex: number) {
  return client.fetch(groq`*[_type == "programmingProject"] | order(date desc) [${startIndex}..${
    startIndex + 6
  }]{
    title,
    projectImage,
    subtitleGreen,
    date,
    flexibleDate,
    slug { current }
  }`);
}

export async function getFirstSpecialProjects() {
  return client.fetch(groq`*[_type == "specialProject"] | order(date desc) [0..5]{
    title,
    projectImage,
    subtitleGreen,
    date,
    flexibleDate,
    slug { current }
  }`);
}

export async function getNextSpecialProjects(startIndex: number) {
  return client.fetch(groq`*[_type == "specialProject"] | order(date desc) [${startIndex}..${
    startIndex + 6
  }]{
    title,
    projectImage,
    subtitleGreen,
    date,
    flexibleDate,
    slug { current }
  }`);
}

export async function getProgrammingProject(slug: string) {
  return client.fetch(groq`*[_type == "programmingProject" && slug.current == "${slug}"][0]{
    title,
    slug,
    projectImage,
    date,
    projectInfo,
    textContent,
    images
  }`);
}

export async function getSpecialProject(slug: string) {
  return client.fetch(groq`*[_type == "specialProject" && slug.current == "${slug}"][0]{
    title,
    slug,
    projectImage,
    date,
    projectInfo,
    textContent,
    images
  }`);
}

export async function getSupportPageData() {
  return client.fetch(groq`*[_type == "supportPage"][0]{
    textContent,
    link,
    backgroundImage
  }`);
}

export async function getJobPageData() {
  return client.fetch(groq`*[_type == "jobPage"][0]{
    showPageTitle,
    pageTitle,
    noJobOpeningsText,
    jobOpeningsText,
    singUpText,
    jobOpenings
  }`);
}

export async function getContactPageData() {
  return client.fetch(groq`*[_type == "contactPage"][0]{
    showPageTitle,
    pageTitle,
    textContent
  }`);
}

export async function getVolunteerPageData() {
  return client.fetch(groq`*[_type == "volunteerPage"][0]{
    showPageTitle,
    pageTitle,
    textContent
  }`);
}

export async function getGrantsPageData() {
  return client.fetch(
    groq`*[_type == "grantsPage"][0]{
    showPageTitle,
    pageTitle,
    textContent,
    grantSections[]{
      sectionTitle,
      members[]->{
        name,
        jobTitle,
        image,
        slug { current }
      }
    }
  }`
  );
}

export async function getFoodAccessPageData() {
  return client.fetch(
    groq`*[_type == "foodaccessPage"][0]{
    showPageTitle,
    pageTitle,
    textContent,
    organizations[]->{
      name,
      slug { current },
    }
  }`
  );
}

export async function getFellowshipPageData() {
  return client.fetch(groq`*[_type == "fellowshipPage"][0]{
    showPageTitle,
    pageTitle,
    textContent,
    fellowSections[]{
      sectionTitle,
      members[]->{
        name,
        jobTitle,
        image,
        slug { current }
      }
    }
  }`);
}

export async function getSingleOrganizationData(slug: string) {
  return client.fetch(groq`*[_type == "organizations" && slug.current == "${slug}"][0]{
    name,
    orgInfo,
    image,
    text,
  }`);
}

export async function getSingleGrantsData(slug: string) {
  return client.fetch(groq`*[_type == "grant" && slug.current == "${slug}"][0]{
    name,
    orgInfo,
    image,
    text,
  }`);
}

export async function getSingleFellowshipData(slug: string) {
  return client.fetch(groq`*[_type == "fellow" && slug.current == "${slug}"][0]{
    name,
    orgInfo,
    image,
    text,
  }`);
}

export async function getLandingPageMetaData() {
  return client.fetch(groq`*[_type == "landingPage"][0]{
    seoTitle,
    seoDescription,
    seoImage,
  }`);
}

export async function getFoodAccessPageMetaData() {
  return client.fetch(groq`*[_type == "foodaccessPage"][0]{
    seoTitle,
    seoDescription,
    seoImage,
  }`);
}

export async function getFellowshipPageMetaData() {
  return client.fetch(groq`*[_type == "fellowshipPage"][0]{
    seoTitle,
    seoDescription,
    seoImage,
  }`);
}

export async function getProgrammingPageMetaData() {
  return client.fetch(groq`*[_type == "programmingPage"][0]{
    seoTitle,
    seoDescription,
    seoImage,
  }`);
}

export async function getGrantsPageMetaData() {
  return client.fetch(groq`*[_type == "grantsPage"][0]{
    seoTitle,
    seoDescription,
    seoImage,
  }`);
}

export async function getAboutPageMetaData() {
  return client.fetch(groq`*[_type == "aboutPage"][0]{
    seoTitle,
    seoDescription,
    seoImage,
  }`);
}

export async function getTeamPageMetaData() {
  return client.fetch(groq`*[_type == "teamPage"][1]{
    seoTitle,
    seoDescription,
    seoImage,
  }`);
}

export async function getVolunteerPageMetaData() {
  return client.fetch(groq`*[_type == "volunteerPage"][0]{
    seoTitle,
    seoDescription,
    seoImage,
  }`);
}

export async function getJobPageMetaData() {
  return client.fetch(groq`*[_type == "jobPage"][0]{
    seoTitle,
    seoDescription,
    seoImage,
  }`);
}

export async function getSupportPageMetaData() {
  return client.fetch(groq`*[_type == "supportPage"][0]{
    seoTitle,
    seoDescription,
    seoImage,
  }`);
}

export async function getContactPageMetaData() {
  return client.fetch(groq`*[_type == "contactPage"][0]{
    seoTitle,
    seoDescription,
    seoImage,
  }`);
}

export async function getTeamMemberMetaData(slug: string) {
  return client.fetch(groq`*[_type == "teamMember" && slug.current == "${slug}"][0]{
    name,
    seoDescription,
    image,
  }`);
}

export async function getSingleProgrammingProjectMetaData(slug: string) {
  return client.fetch(groq`*[_type == "programmingProject" && slug.current == "${slug}"][0]{
    title,
    seoDescription,
    projectImage,
  }`);
}

export async function getSingleSpecialProjectMetaData(slug: string) {
  return client.fetch(groq`*[_type == "specialProject" && slug.current == "${slug}"][0]{
    title,
    seoDescription,
    projectImage,
  }`);
}

export async function getPageSettings() {
  return client.fetch(groq`*[_type == "settings"][0]{
    menuColor,
  }`);
}
