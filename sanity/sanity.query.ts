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
    noJobOpeningsText,
    jobOpeningsText,
    singUpText,
    jobOpenings
  }`);
}

export async function getContactPageData() {
  return client.fetch(groq`*[_type == "contactPage"][0]{
    textContent
  }`);
}

export async function getVolunteerPageData() {
  return client.fetch(groq`*[_type == "volunteerPage"][0]{
    textContent
  }`);
}

export async function getGrantsPageData() {
  return client.fetch(groq`*[_type == "grantsPage"][0]{
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
  }`);
}

export async function getFoodAccessPageData() {
  return client.fetch(
    groq`*[_type == "foodaccessPage"][0]{
    textContent,
    organizations[]->{
      name,
      slug { current },
    }
  }`,
    { next: { revalidate: 60 } }
  );
}

export async function getFellowshipPageData() {
  return client.fetch(groq`*[_type == "fellowshipPage"][0]{
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
