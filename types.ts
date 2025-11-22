export interface AccordionItem {
  question: string;
  answer: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface BonusItem {
  title: string;
  description: string;
  price: string;
  image: string;
}