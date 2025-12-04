export const pricingData = [
  {
    id: "tourist",
    tabTitle: "Tourist Visa",
    icon: "✈️",
    title: "Tourist Visa Services",
    description:
      "Enjoy your holiday in Indonesia with ease. We assist with application, documentation, and appointment scheduling at the Indonesian consulate.",
    requiredDocuments: [
      {
        title: "Required Documents for C1",
        list: [
          "Valid passport (min. 6 months validity)",
          "Passport-size photos",
          "Travel itinerary",
          "Bank statement (min. USD 2000 last 3 months)",
        ],
      },
      {
        title: "Required Documents for D1",
        list: [
          "Valid passport (min. 6 months validity)",
          "Passport-size photos",
          "Travel itinerary",
          "Bank statement (min. USD 2000 last 3 months)",
          "Curriculum vitae (English or Indonesian)",
        ],
      },
    ],
    priceList: [
      {
        title: "Standard | Express - C1 Visa",
        price: "IDR 2.700.000 | IDR 4.200.000",
        duration: "7–10 days | 5–6 days",
      },
      {
        title: "Extension - C1 Visa",
        price: "IDR 850.000",
        duration: "2–4 days",
      },
      {
        title: "Standard | Express - D1 Visa (1 Year)",
        price: "IDR 5.500.000 | IDR 7.000.000",
        duration: "7–10 days | 5–6 days",
      },
      {
        title: "Extension - D1 Visa (1 Year)",
        price: "IDR -",
        duration: "3–5 days",
      },
      {
        title: "Standard | Express - D1 Visa (2 Year)",
        price: "IDR 9.000.000 | IDR 10.500.000",
        duration: "7–10 days | 5–6 days",
      },
      {
        title: "Extension - D1 Visa (2 Year)",
        price: "IDR -",
        duration: "3–5 days",
      },
    ],
  },

  {
    id: "business",
    tabTitle: "Business Visa",
    icon: "💼",
    title: "Business Visa Services",
    description:
      "For clients traveling to Indonesia for meetings, conventions, or commercial transactions. We ensure proper documentation and fast processing.",
    requiredDocuments: [
      {
        title: "General Requirements",
        list: [
          "Passport (min. 6 months validity)",
          "Company sponsorship letter",
          "Passport-size photos",
          "Proof of accommodation",
        ],
      },
    ],
    priceList: [
      {
        title: "Single Entry Business Visa (B211A)",
        price: "IDR 3.500.000",
        duration: "7–10 days",
      },
      {
        title: "Extend Stay Permit (per extension)",
        price: "IDR 2.650.000",
        duration: "5–7 days",
      },
    ],
  },

  {
    id: "retirement",
    tabTitle: "Retirement Visa",
    icon: "👴👵",
    title: "Retirement Visa Services",
    description:
      "For foreign retirees who want to live comfortably in Indonesia long-term. We handle full documentation & sponsor preparation.",
    requiredDocuments: [
      {
        title: "Requirements",
        list: [
          "Age 55+",
          "Proof of monthly income/pension ≥ USD 1500",
          "Health & life insurance",
          "Rental agreement",
        ],
      },
    ],
    priceList: [
      {
        title: "Retirement Visa KITAS (1 Year)",
        price: "IDR 15.000.000",
        duration: "3–4 weeks",
      },
      {
        title: "Retirement Visa Renewal",
        price: "IDR 14.000.000",
        duration: "3–4 weeks",
      },
    ],
  },

  {
    id: "family",
    tabTitle: "Family Visa",
    icon: "👨‍👩‍👧",
    title: "Family Visa Services",
    description:
      "Designed for spouses and children of Indonesian citizens or KITAS holders. We ensure smooth family stay permits.",
    requiredDocuments: [
      {
        title: "Requirements",
        list: [
          "Marriage/Birth certificate",
          "Passport (6+ months validity)",
          "Proof of residence",
        ],
      },
    ],
    priceList: [
      {
        title: "Family KITAS (1 Year)",
        price: "IDR 12.000.000",
        duration: "3–4 weeks",
      },
      {
        title: "Family KITAS Renewal",
        price: "IDR 10.000.000",
        duration: "3–4 weeks",
      },
    ],
  },

  {
    id: "working",
    tabTitle: "Working Visa",
    icon: "👷",
    title: "Working Visa Services",
    description:
      "Work legally in Indonesia with a registered employer. Our team manages RPTKA, Notifikasi, and IMTA procedures.",
    requiredDocuments: [
      {
        title: "Requirements",
        list: [
          "Employment contract",
          "Employer company documents",
          "Passport (6+ months validity)",
        ],
      },
    ],
    priceList: [
      {
        title: "Working Visa KITAS (1 Year)",
        price: "IDR 18.000.000",
        duration: "4–6 weeks",
      },
      {
        title: "Working Visa KITAS Renewal",
        price: "IDR 16.000.000",
        duration: "4–6 weeks",
      },
    ],
  },
];
