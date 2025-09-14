type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}
type Education = {
  school: string
  outcome:string
  id: string
}
type Tools = {
  tools: string,
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Ericsson',
    title: 'Summer Intern',
    start: 'June 2025',
    end: 'September 2025',
    id: 'work1',
  },
  
]
export const TOOLS: Tools[] = [
  {
    tools: 'Java'
  },
  {
    tools: 'Javascript'
  },
  {
    tools: 'ReactJS'
  },
  {
    tools: 'MongoDB'
  },
]

export const Education: Education[] = [
  {
    school: 'International School of Hamburg',
    outcome: 'IB Diploma',
    id:'education1'
  },
  {
    school: 'University of Gothenburg',
    outcome: 'Bachelors in Software Engineering and Management',
    id:'education2'
  },
  {
    school: 'Linneaus Universitet',
    outcome: 'Discrete Mathematics, Calculus I & II , Linear Algebra',
    id:'education3'
  },
  {
    school: 'Linköping Universitet',
    outcome: 'Swedish B1',
    id:'education4'
  },

]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/raghavexe',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/raghav-tengse-05b774257/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/raghav.exe',
  },
]


