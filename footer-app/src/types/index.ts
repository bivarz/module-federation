// This file exports any custom types or interfaces used throughout the application. 
// It may include types for props passed to components or other relevant data structures.

export interface FooterProps {
    year: number;
    links: Array<{ href: string; label: string }>;
}