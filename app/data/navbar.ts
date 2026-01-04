export const NAV_LINKS = [
  {
    id: "destinations",
    label: "DESTINATIONS",
    href: "/destinations",
    hasDropdown: true,
  },
  {
    id: "experiences",
    label: "EXPERIENCES",
    href: "/experiences",
    hasDropdown: true,
  },
  { id: "about", label: "ABOUT", href: "/about", hasDropdown: true },
] as const;

export const EXPERIENCES_DATA = {
  categories: [
    {
      id: "who",
      label: "WHO",
      cards: [
        {
          title: "FAMILY\nHOLIDAYS",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/family-holidays",
        },
        {
          title: "COUPLES\nHOLIDAYS",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/couples-holidays",
        },
        {
          title: "GROUP\nHOLIDAYS",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/group-holidays",
        },
        {
          title: "SOLO\nHOLIDAYS",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/solo-holidays",
        },
        {
          title: "HONEYMOONS",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/honeymoons",
        },
      ],
    },
    {
      id: "what",
      label: "WHAT",
      cards: [
        {
          title: "SAFARI\nHOLIDAYS",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/safari-holidays",
        },
        {
          title: "REMOTE\nDESTINATIONS",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/remote-destinations",
        },
        {
          title: "BEACH\nHOLIDAYS",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/beach-holidays",
        },
        {
          title: "ADVENTURE\nHOLIDAYS",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/adventure-holidays",
        },
        {
          title: "FOOD\nHOLIDAYS",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/food-holidays",
        },
      ],
    },
    {
      id: "remarkable",
      label: "REMARKABLE EXPERIENCES",
      cards: [
        {
          title: "UNUSUAL\nHOLIDAYS",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/unusual-holidays",
        },
        {
          title: "ECLIPSE\nHOLIDAYS",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/eclipse-holidays",
        },
        {
          title: "SLOW TRAVEL",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/slow-travel",
        },
        {
          title: "PROPOSAL\nSERVICE",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/proposal-service",
        },
        {
          title: "TRAIN TRAVEL",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/train-travel",
        },
      ],
    },
    {
      id: "collaborations",
      label: "COLLABORATIONS",
      cards: [
        {
          title: "LUXURY\nPARTNERSHIPS",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/luxury-partnerships",
        },
        {
          title: "BRAND\nCOLLABORATIONS",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/brand-collaborations",
        },
        {
          title: "EXCLUSIVE\nOFFERS",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/exclusive-offers",
        },
        {
          title: "CURATED\nEXPERIENCES",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/curated-experiences",
        },
        {
          title: "SPECIAL\nEVENTS",
          image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
          link: "/experiences/special-events",
        },
      ],
    },
  ],
};

export const ABOUT_DATA = {
  categories: [
    {
      id: "who-we-are",
      label: "WHO WE ARE",
      items: ["Our purpose", "Our team"],
    },
    {
      id: "why-book",
      label: "WHY BOOK WITH US",
      items: [ "5 reasons to book with us","Why not just do it yourself?","How it all works","Regenerative travel"],
    },
    {
      id: "what-others-say",
      label: "WHAT OTHERS SAY",
      items: ["Client testimonials", "In the press"],
    },
  ],
};

export const MENU_DATA = {
  categories: [
    {
      id: "month",
      label: "MONTH",
      items: [],
    },
    {
      id: "inspiration",
      label: "INSPIRATION",
      items: [],
    },
    {
      id: "trip-finder",
      label: "TRIP FINDER",
      items: [],
    },
    {
      id: "most-popular",
      label: "MOST POPULAR",
      items: [],
    },
  ],
  months: [
    { name: "JANUARY", image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg" },
    { name: "FEBRUARY", image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg" },
    { name: "MARCH", image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg" },
    { name: "APRIL", image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg" },
    { name: "MAY", image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg" },
    { name: "JUNE", image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg" },
    { name: "JULY", image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg" },
    { name: "AUGUST", image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg" },
    { name: "SEPTEMBER", image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg" },
    { name: "OCTOBER", image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg" },
    { name: "NOVEMBER", image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg" },
    { name: "DECEMBER", image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg" },
  ],
};

export const DESTINATIONS_DATA = [
  {
    continent: "AFRICA",
    image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    countries: [
      "Botswana",
      "Congo",
      "Egypt",
      "Ethiopia",
      "Kenya",
      "Madagascar",
      "Malawi",
      "Mauritius",
      "Morocco",
      "Mozambique",
      "Namibia",
      "Rwanda",
      "The Seychelles",
      "South Africa",
      "Tanzania & Zanzibar",
      "Uganda",
      "Zambia",
      "Zimbabwe",
    ],
  },
  {
    continent: "ARCTIC CIRCLE",
    image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    countries: ["Greenland", "Iceland", "Norway", "Sweden", "Finland"],
  },
  {
    continent: "ASIA",
    image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    countries: [
      "Cambodia",
      "China",
      "India",
      "Indonesia",
      "Japan",
      "Laos",
      "Malaysia",
      "Myanmar",
      "Nepal",
      "Philippines",
      "Singapore",
      "South Korea",
      "Sri Lanka",
      "Thailand",
      "Vietnam",
    ],
  },
  {
    continent: "AUSTRALASIA & OCEANIA",
    image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    countries: ["Australia", "Fiji", "New Zealand", "Samoa", "Vanuatu"],
  },
  {
    continent: "CARIBBEAN",
    image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    countries: [
      "Barbados",
      "Jamaica",
      "Mexico",
      "Puerto Rico",
      "US Virgin Islands",
    ],
  },
  {
    continent: "EUROPE",
    image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    countries: [
      "Austria",
      "Belgium",
      "Croatia",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "England",
      "Finland",
      "France",
      "Georgia",
      "Germany",
      "Greece",
      "Greenland",
      "Hungary",
      "Iceland",
      "Ireland & Northern Ireland",
      "Italy",
      "Lithuania",
      "Montenegro",
      "Netherlands",
      "Norway",

      "UK",
    ],
  },
  {
    continent: "INDIAN OCEAN",
    image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    countries: ["Mauritius", "Seychelles", "Maldives"],
  },
  {
    continent: "INDIAN SUBCONTINENT",
    image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    countries: ["India", "Nepal", "Sri Lanka", "Bhutan"],
  },
  {
    continent: "LATIN AMERICA",
    image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    countries: [
      "Argentina",
      "Belize",
      "Bolivia",
      "Brazil",
      "Chile",
      "Colombia",
      "Costa Rica",
      "Ecuador",
      "El Salvador",
      "Guatemala",
      "Guyana",
      "Honduras",
      "Mexico",
      "Nicaragua",
      "Panama",
      "Paraguay",
      "Peru",
      "Suriname",
      "Uruguay",
      "Venezuela",
    ],
  },
  {
    continent: "MIDDLE EAST",
    image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    countries: [
      "Abu Dhabi",
      "Bahrain",
      "Egypt",
      "Iraq",
      "Israel",
      "Jordan",
      "Kuwait",
      "Lebanon",
      "Oman",
      "Qatar",
      "Saudi Arabia",
      "Syria",
      "UAE",
      "Yemen",
    ],
  },
  {
    continent: "NORTH AMERICA",
    image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    countries: ["Canada", "Mexico", "USA"],
  },
  {
    continent: "SOUTH EAST ASIA",
    image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    countries: [
      "Cambodia",
      "Indonesia",
      "Laos",
      "Malaysia",
      "Myanmar",
      "Philippines",
      "Singapore",
      "Thailand",
      "Vietnam",
    ],
  },
  {
    continent: "SOUTH PACIFIC",
    image: "/images/icons-comp/northern-lights-iceland-1-scaled.jpg",
    countries: ["Australia", "Fiji", "New Zealand", "Samoa", "Vanuatu"],
  },
];