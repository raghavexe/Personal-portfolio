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
type ExtraCurriculars = {
  title: string,
  id: string,
}

export const PROJECTS: Project[] = [
  {
    name: 'Home4U',
    description:
     'Simple Home security system using WIO terminal and arduino',
    link: 'https://github.com/raghavexe/Home4U',
    video:"null",
    id: 'project1',
  },
  {
    name: 'Deutsche Plates',
    description: 'Website to find the city, state, and location of a German car by entering its license plate initials.',
    link: 'https://german-numberplates.vercel.app',
    video: "null",
    id:"project2"
  }
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
export const EXTRACURRICULARS: ExtraCurriculars[] = [
  {
    title: "Badminton",
   
    id: "activity1"
  },
  {
    title: "Swimming",
   
    id: "activity2"
  },
  {
    title: "Hiking",
   
    id: "activity3"
  },
  {
    title: "Painting",
   
    id: "activity4"
  },
  {
    title: "Photography",
   
    id: "activity5"
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


