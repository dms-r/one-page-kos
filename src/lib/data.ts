import { DollarSign, Home, Maximize, ParkingCircle, Utensils, WashingMachine, Wifi } from "lucide-react";

export const data = {
  appName: "Lodgify",
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
    imageUrl: "https://placehold.co/1920x1080.png",
    imageAlt: "A cozy and modern living room space",
  },
  keyFeatures: [
    {
      icon: DollarSign,
      title: "Affordable Rent",
      value: "€450 / month",
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
      value: "2",
      description: "Ready for immediate move-in."
    }
  ],
  gallery: {
    title: "Explore Your New Home",
    description: "High-quality images of our rooms and common areas.",
    images: [
      {
        src: "https://placehold.co/600x400.png",
        alt: "Bright and airy bedroom with a desk",
        hint: "bedroom desk"
      },
      {
        src: "https://placehold.co/600x400.png",
        alt: "Clean and modern kitchen with appliances",
        hint: "modern kitchen"
      },
      {
        src: "https://placehold.co/600x400.png",
        alt: "Shared living area with comfortable seating",
        hint: "shared living"
      },
      {
        src: "https://placehold.co/600x400.png",
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
    address: "123 Serenity Lane, Dublin, Ireland",
    embedUrl: "https://maps.google.com/maps?q=123%20Serenity%20Lane,%20Dublin,%20Ireland&t=&z=15&ie=UTF8&iwloc=&output=embed",
    locations: [
      { name: "Train Stop", distance: "5 min walk" },
      { name: "Supermarket", distance: "7 min walk" },
      { name: "City Center", distance: "15 min train" },
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
        namePlaceholder: "Jane Doe",
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
