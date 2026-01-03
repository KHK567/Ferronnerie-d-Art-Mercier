
// Fix: Import React to resolve 'Cannot find namespace React' error
import React from 'react';

export type Category = 
  | 'Tous' 
  | 'Portails' 
  | 'Rampes d\'escalier' 
  | 'Marquises' 
  | 'Clôtures et grilles' 
  | 'Potences et puits' 
  | 'Portes d\'entrée' 
  | 'Galerie extérieure' 
  | 'Pergolas';

export interface Project {
  id: string;
  title: string;
  category: Category;
  imageUrl: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
}
