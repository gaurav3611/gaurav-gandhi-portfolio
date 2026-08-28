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
    href: "https://linkedin.com/in/Gaurav-gandhi",
    icon: "linkedin",
  },
  {
    label: "Twitter",
    handle: "@gaurav3611",
    href: "https://twitter.com/gaurav3611",
    icon: "twitter",
  },
  {
    label: "Instagram",
    handle: "@gaurav3611",
    href: "https://instagram.com/gaurav3611",
    icon: "instagram",
  },
  {
    label: "YouTube",
    handle: "@gaurav3611",
    href: "https://youtube.com/@gaurav3611",
    icon: "youtube",
  },
  {
    label: "Website",
    handle: "gauravgandhi.dev",
    href: "https://gauravgandhi.dev",
    icon: "globe",
  },
];
