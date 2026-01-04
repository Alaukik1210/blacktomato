export interface TeamMember {
  name: string;
  title: string;
}

export interface TeamSection {
  title: string;
  bgImage: string;
  bgImage1: string;
  members: TeamMember[][];
}

export const TEAM_DATA: TeamSection[] = [
  {
    title: "OUR TEAM",
    bgImage: "/images/our team/bg1.jpg",
    bgImage1: "/images/our team/xyz.svg",
    members: [
      [
        { name: "TOM MARCHANT", title: "CO-FOUNDER" },
        { name: "JAMES MERRETT", title: "CO-FOUNDER" },
      ],
      [
        { name: "JOS DAVIES", title: "CO-HEAD" },
        { name: "OLIVER BLACKLAY", title: "CO-HEAD" },
      ],
    ],
  },
  {
    title: "TRAVEL TEAM",
    bgImage: "/images/our team/bg2.jpg",
    bgImage1: "/images/our team/xyz.svg",
    members: [
      [
        { name: "ALICE DUNNE", title: "CO-OPERATIONS MANAGER" },
        { name: "ALIX CREEL", title: "RELATIONSHIP MANAGER" },
        { name: "ALYS COLAYERA", title: "TRAVEL EXPERT & TRAINING MANAGER" },
      ],
      [
        { name: "ANDIE MCLAUGHLIN", title: "TRAVEL EXPERT" },
        { name: "ANGELA RUBINO", title: "OPERATIONS EXPERT" },
        { name: "ANNA HENDERSON", title: "CLIENT RELATIONS EXECUTIVE" },
      ],
      [
        { name: "ANNA SHARMAN", title: "TRAVEL EXPERT" },
        { name: "ANTHONY CONVEY", title: "TRAVEL EXPERT" },
        { name: "ARIN FORSTADT", title: "TRAVEL EXPERT" },
      ],
      [
        { name: "AVA HATHERELL", title: "OPERATIONS EXPERT" },
        { name: "BLAKE PEACHEY", title: "OPERATIONS EXPERT" },
        { name: "CARLY MOSS", title: "TRAVEL EXPERT" },
      ],
      [
        { name: "CAROLINE QUINN", title: "TRAVEL EXPERT" },
        { name: "CHRISTIAN WILLOUGHBY", title: "OPERATIONS EXPERT" },
      ],
    ],
  },
  {
    title: "MARKETING AND OPERATIONS",
    bgImage: "/images/our team/bg3.jpg",
    bgImage1: "/images/our team/xyz.svg",
    members: [
      [
        { name: "ABIGAIL HARNESS", title: "REGIONAL PRODUCT MANAGER" },
        { name: "ALISTER YUEN", title: "VIDEO PRODUCER & EDITOR" },
        { name: "AMY WALLACE", title: "SENIOR RETENTION MARKETING MANAGER" },
      ],
      [
        { name: "ANNA GREGORY-HALL", title: "DIGITAL MARKETING MANAGER" },
        { name: "BRENDAN DREWNIANY", title: "HEAD OF PR" },
      ],
      [
        { name: "CAROLYN ADDISON", title: "HEAD OF PRODUCT" },
        { name: "CINZIA SERENA", title: "BUSINESS ANALYST" },
        { name: "DANI WIEDER", title: "HEAD OF MARKETING" },
      ],
      [
        { name: "DREA SOBIESKI", title: "NEW MEDIA & INFLUENCER RELATIONS PR DIRECTOR" },
        { name: "ELENA-MAY DAVIS-BENNETT", title: "FINANCE ASSISTANT" },
      ],
      [
        { name: "JANINE SHROFF", title: "HEAD OF DESIGN" },
        { name: "JESSICA WELLS", title: "SENIOR PRODUCER MANAGER" },
        { name: "JOSEPH CONNELL", title: "RETENTION MARKETING EXECUTIVE" },
      ],
    ],
  },
];
