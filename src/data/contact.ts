export interface SocialLink {
  label: string;
  handle: string;
  href: string;
  icon: string;
}

export const contactInfo = {
  name: "Gaurav Nitesh Gandhi",
  email: "gandhigaurav1145@gmail.com",
  phone: "+91 9346663611",
  location: "Vellore, India",
  website: "https://gauravgandhi.dev",
};

export const socialsFull: SocialLink[] = [
  {
    label: "GitHub",
    handle: "@gaurav3611",
    href: "https://github.com/gaurav3611",
    icon: "github",
  },
  {
    label: "LinkedIn",
    handle: "Gaurav Gandhi",
    href: "https://www.linkedin.com/in/gaurav-gandhi-700a8a29a/",
    icon: "linkedin",
  },
];
