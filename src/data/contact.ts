import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Share2,
} from "lucide-react";

export const contactInfo = [
  {
    icon: Phone,
    label: "Phone (Voice)",
    value: "+233 24 713 4085",
    href: "tel:+233247134085",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+233 24 713 4085",
    href: "https://wa.me/233247134085",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@developmentaltheatreinitiative.com",
    href: "mailto:info@developmentaltheatreinitiative.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "University of Ghana, Legon",
    href: "https://maps.google.com/?q=Department+of+Theatre+Arts+University+of+Ghana+Legon",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Fri: 8:00 AM – 5:00 PM",
    href: null,
  },
  {
    icon: Share2,
    label: "Social Media",
    value: "Developmental Theatre Initiative",
    href: null,
  },
];
