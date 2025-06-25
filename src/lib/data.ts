import { DollarSign, Home, Maximize, ParkingCircle, Utensils, WashingMachine, Wifi } from "lucide-react";

export const data = {
  appName: "Lodgify",
  siteUrl: "https://kos.dpublic.my.id",
  metadata: {
    title: "Lodgify Landing | Cozy & Convenient Boarding House",
    description: "Clean, affordable rooms for rent with great amenities. Close to public transport and city center. Inquire today!",
    keywords: "boarding house, room for rent, affordable lodging, student housing, long-term stay",
  },
  navigation: {
    navItems: [
      { id: "features", label: "Features" },
      { id: "gallery", label: "Gallery" },
      { id: "amenities", label: "Amenities" },
      { id: "location", label: "Location" },
    ],
    ctaButton: "Book a Viewing",
  },
  hero: {
    title: "Your Comfort, Our Priority",
    subtitle: "Discover a clean, quiet, and convenient place to call home. Perfect for students and professionals.",
    imageUrl: "https://unsplash.com/photos/3Oo6qQMmycg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8Ym9hcmRpbmclMjBob3VzZXxlbnwwfHx8fDE3NTA4NTkyNjh8MA&force=true&w=1920",
    imageAlt: "A cozy and modern living room space",
  },
  keyFeatures: [
    {
      icon: DollarSign,
      title: "Affordable Rent",
      value: "Rp. 450k / month",
      description: "All utilities included. No hidden fees."
    },
    {
      icon: Maximize,
      title: "Room Dimensions",
      value: "15 m²",
      description: "Spacious and fully furnished."
    },
    {
      icon: Home,
      title: "Rooms Available",
      value: "6",
      description: "Ready for immediate move-in."
    }
  ],
  gallery: {
    title: "Explore Your New Home",
    description: "High-quality images of our rooms and common areas.",
    images: [
      {
        src: "https://unsplash.com/photos/GqbU78bdJFM/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUwODU3OTEwfA&force=true&w=640",
        alt: "Bright and airy bedroom with a desk",
        hint: "bedroom desk"
      },
      {
        src: "https://unsplash.com/photos/zwZpdhoTbU0/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUwODU4MzQ4fA&force=true&w=640",
        alt: "Clean and modern kitchen with appliances",
        hint: "modern kitchen"
      },
      {
        src: "https://unsplash.com/photos/oTJ92KUXHls/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUwODYwMzk0fA&force=true&w=640",
        alt: "Shared living area with comfortable seating",
        hint: "shared living"
      },
      {
        src: "https://unsplash.com/photos/puSizVhqZYw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NzV8fHRvaWxldHxlbnwwfHx8fDE3NTA4NjA1NDd8MA&force=true&w=640",
        alt: "Tidy bathroom with a shower",
        hint: "clean bathroom"
      },
    ]
  },
  amenities: {
    title: "Amenities Included",
    description: "Everything you need for a comfortable stay.",
    items: [
      { icon: Wifi, text: "High-Speed Wi-Fi" },
      { icon: WashingMachine, text: "On-site Laundry" },
      { icon: Utensils, text: "Fully-equipped Kitchen" },
      { icon: ParkingCircle, text: "Free Parking" },
    ]
  },
  map: {
    title: "Prime Location",
    description: "Conveniently located near essential services and transport links.",
    address: "Jl. Halu, Indramayu, Jawa Barat",
    embedUrl: "https://maps.google.com/maps?q=Indramayu,%20West%20Java&t=&z=15&ie=UTF8&iwloc=&output=embed",
    locations: [
      { name: "Train Stop", distance: "5 min bike" },
      { name: "Supermarket", distance: "5 min walk" },
      { name: "City Center", distance: "90 min train" },
    ]
  },
  contact: {
    title: "Get in Touch",
    description: "Have questions or want to schedule a viewing? Contact us!",
    landlord: {
      name: "John Doe",
      email: "contact@lodgify.example.com",
      phone: "+1 (234) 567-890",
    },
    infoCard: {
        title: "Contact Information"
    },
    formCard: {
        title: "Send an Inquiry",
        description: "Fill out the form below and we will get back to you."
    },
    form: {
        nameLabel: "Your Name",
        namePlaceholder: "Bambang",
        emailLabel: "Your Email (Optional)",
        emailPlaceholder: "jane.doe@example.com",
        messageLabel: "Message",
        messagePlaceholder: "I'm interested in viewing a room...",
        submitButton: "Send on WhatsApp",
        submittingButton: "Redirecting...",
        successToast: {
            title: "Redirecting to WhatsApp",
            description: "Your message is ready to be sent."
        }
    }
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Lodgify. All rights reserved.`
  }
};

export type LodgifyData = typeof data;
