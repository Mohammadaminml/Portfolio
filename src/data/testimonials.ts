export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  profileUrl?: string;
  projectSlug?: string;
}

/* Keep this empty until a client provides a real quote and permission to publish it. */
export const testimonials: TestimonialItem[] = [];

export default testimonials;