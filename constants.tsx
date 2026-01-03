
import React from 'react';
import { Pen, Flame, Hammer, Map, Star, Scroll, ShieldCheck, Ruler, PencilRuler, Box } from 'lucide-react';
import { Project, Service, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '7',
    title: 'Portail du Manoir des Ombres',
    category: 'Portails',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/Generated_Image_December_30_2025_-_9_04PM_v0kfci.jpg',
    description: 'Restauration d\'un ouvrage du XIXe siècle, alliant symétrie classique et robustesse intemporelle.'
  },
  {
    id: '8',
    title: 'Grille Impériale',
    category: 'Portails',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/Generated_Image_December_30_2025_-_8_54PM_h3udw4.jpg',
    description: 'Une entrée magistrale forgée pour l\'éternité, gardienne des secrets de la propriété.'
  },
  {
    id: '9',
    title: 'La Porte des Cieux',
    category: 'Portails',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/Generated_Image_December_30_2025_-_9_32PM_hgq4ks.jpg',
    description: 'Une composition aérienne et structurelle, invitant la lumière à traverser la matière.'
  },
  {
    id: '14',
    title: 'Auvent du Maître Verrier',
    category: 'Marquises',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/Generated_Image_December_30_2025_-_11_41PM_dgsdav.jpg',
    description: 'Une protection élégante où le verre s\'unit à l\'acier pour capter la lumière.'
  },
  {
    id: '15',
    title: 'L\'Éventail de Fer',
    category: 'Marquises',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/Generated_Image_December_30_2025_-_11_52PM_tj6obk.jpg',
    description: 'Une marquise en demi-lune aux motifs rayonnants, signature d\'une entrée prestigieuse.'
  },
  {
    id: '16',
    title: 'La Canopée de Cristal',
    category: 'Marquises',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/Generated_Image_December_31_2025_-_12_00AM_o5q8pg.jpg',
    description: 'Une architecture de lumière suspendue, protégeant le seuil avec une élégance intemporelle.'
  },
  {
    id: '10',
    title: 'Rampe de la Grande Montée',
    category: 'Rampes d\'escalier',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/Generated_Image_December_30_2025_-_10_00PM_mfzhye.jpg',
    description: 'Un ouvrage majestueux qui épouse parfaitement la courbe architecturale.'
  },
  {
    id: '11',
    title: 'L\'Ascension Hélicoïdale',
    category: 'Rampes d\'escalier',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/escalier_3_axkstv.jpg',
    description: 'Une spirale de fer noir, martelée pour guider le regard vers les sommets.'
  },
  {
    id: '12',
    title: 'Le Ruban d\'Acier',
    category: 'Rampes d\'escalier',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/escalier_4_pbffq0.jpg',
    description: 'Finesse et fluidité pour cette rampe contemporaine au caractère affirmé.'
  },
  {
    id: '13',
    title: 'La Courbe du Maître',
    category: 'Rampes d\'escalier',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/Generated_Image_December_30_2025_-_11_25PM_suuzvd.jpg',
    description: 'Une rampe sculpturale qui sublime l\'espace par son mouvement fluide et sa précision.'
  },
  {
    id: '17',
    title: 'Garde-corps Intérieur',
    category: 'Clôtures et grilles',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/IMG_20161215_103206_n6oqtn.jpg',
    description: 'Lignes géométriques et travail de texture pour ce garde-corps sur-mesure.'
  },
  {
    id: '18',
    title: 'Balcon de la Résidence',
    category: 'Clôtures et grilles',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/Generated_Image_January_03_2026_-_2_52AM_guxac7.jpg',
    description: 'Ouvrage extérieur cintré, épousant l\'architecture de la façade avec élégance.'
  },
  {
    id: '19',
    title: 'Clôture du Jardin',
    category: 'Clôtures et grilles',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/muret_1_z2tpkl.jpg',
    description: 'Délimitation de propriété sur muret, alliant sécurité et transparence visuelle.'
  },
  {
    id: '20',
    title: 'Grille de Défense Volutes',
    category: 'Clôtures et grilles',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/GRILLE_NOIR_fuqb18.jpg',
    description: 'Protection de fenêtre traditionnelle avec motifs en crosse et assemblage riveté.'
  },
  {
    id: '21',
    title: 'Potence de Puits Artisanale',
    category: 'Potences et puits',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/potence_1_g4lcur.jpg',
    description: 'Support en fer forgé traditionnel, martelé à la main pour un puits de pierre.'
  },
  {
    id: '22',
    title: 'Puits du Domaine',
    category: 'Potences et puits',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/puits_ehz5xb.jpg',
    description: 'Habillage complet en ferronnerie d\'art pour sublimer un point d\'eau historique.'
  },
  {
    id: '23',
    title: 'L\'Arche du Puisatier',
    category: 'Potences et puits',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/Generated_Image_January_03_2026_-_3_07AM_lyj4ey.jpg',
    description: 'Une structure aérienne et ornementale, mariant volutes classiques et solidité.'
  },
  {
    id: '24',
    title: 'Porte du Manoir Renaissance',
    category: 'Portes d\'entrée',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/Generated_Image_January_03_2026_-_3_15AM_k9ds8v.jpg',
    description: 'Une entrée monumentale alliant bois massif et ferronnerie d\'art pour un accueil seigneurial.'
  },
  {
    id: '25',
    title: 'L\'Entrée Florale',
    category: 'Portes d\'entrée',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/Generated_Image_January_03_2026_-_3_19AM_fgontf.jpg',
    description: 'Finesse des motifs végétaux forgés main, créant une transition poétique entre intérieur et extérieur.'
  },
  {
    id: '26',
    title: 'La Gardienne Vitrée',
    category: 'Portes d\'entrée',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/Generated_Image_January_03_2026_-_3_23AM_ocr2c5.jpg',
    description: 'Structure géométrique moderne avec verre armé, assurant sécurité et luminosité.'
  },
  {
    id: '27',
    title: 'Galerie du Belvédère',
    category: 'Galerie extérieure',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/Generated_Image_January_03_2026_-_3_37AM_s6g4id.jpg',
    description: 'Une promenade architecturale en fer forgé, prolongeant l\'espace de vie vers l\'horizon.'
  },
  {
    id: '28',
    title: 'Le Cloître de Fer',
    category: 'Galerie extérieure',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/image_tazbin.jpg',
    description: 'Une coursive extérieure aux rythmes réguliers, évoquant la sérénité des architectures monastiques.'
  },
  {
    id: '29',
    title: 'La Tonnelle du Parc',
    category: 'Galerie extérieure',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/Generated_Image_January_03_2026_-_3_52AM_dc737g.jpg',
    description: 'Une structure fine et élancée, créant un jeu d\'ombre et de lumière pour les après-midis d\'été.'
  },
  {
    id: '30',
    title: 'Pergola de l\'Épine',
    category: 'Pergolas',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/epine_1_boavqc.jpg',
    description: 'Structure contemporaine aux motifs végétaux stylisés, offrant un ombrage délicat et moderne.'
  },
  {
    id: '31',
    title: 'L\'Ombre Ciselée',
    category: 'Pergolas',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/Generated_Image_January_03_2026_-_4_14AM_alyx9a.jpg',
    description: 'Une pergola aux lignes pures, créant un jeu d\'ombres graphiques sur la terrasse en pierre.'
  },
  {
    id: '32',
    title: 'Le Toit de Verdure',
    category: 'Pergolas',
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/Generated_Image_January_03_2026_-_4_16AM_o2nubm.jpg',
    description: 'Structure robuste et élancée, conçue pour accueillir une vigne vierge centenaire.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'etude',
    title: 'Étude du projet et dessin',
    description: 'Rencontre du client, prise de besoins, création de dessins techniques et esthétiques pour un ouvrage sur-mesure.',
    icon: <PencilRuler className="w-8 h-8 text-gold" />,
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/download_ulzrv4.jpg'
  },
  {
    id: 'materiaux',
    title: 'Choix des matériaux et préparation artisanal',
    description: 'Sélection rigoureuse et préparation du métal selon les besoins du projet, avec un matériel traditionnel et ancien.',
    icon: <Box className="w-8 h-8 text-gold" />,
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200'
  },
  {
    id: 'forge',
    title: 'Travail à la forge et façonnage',
    description: 'Forge à chaud, martelage et assemblage selon la plus pure tradition artisanale pour donner vie à la matière.',
    icon: <Flame className="w-8 h-8 text-braise" />,
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/ChatGPT_Image_16_d%C3%A9c._2025_19_45_09_vvta0z.jpg'
  },
  {
    id: 'finitions',
    title: 'Finitions et protection durable',
    description: 'Application de patines et vernis protecteurs assurant esthétique et longévité, avec un contrôle qualité rigoureux.',
    icon: <ShieldCheck className="w-8 h-8 text-gold" />,
    imageUrl: 'https://res.cloudinary.com/dvwgxph9l/image/upload/009_Etienne_Ramousse_Agence_Zeppelin_Workshop_Etienne_Ramousse_Ferronnerie_2018_-_Copie_cnr8gl.jpg'
  }
];

export const PROCESS_STEPS = [
  {
    id: 1,
    title: "Le Trait",
    description: "Esquisse manuelle et étude des proportions pour un ouvrage harmonieux.",
    icon: <Ruler className="w-6 h-6 text-gold" />
  },
  {
    id: 2,
    title: "Le Appelle du Feu",
    description: "Préparation du brasier et montée en température de la matière brute.",
    icon: <Flame className="w-6 h-6 text-braise" />
  },
  {
    id: 3,
    title: "Le Martelage",
    description: "Mise en forme sur l'enclume. Le fer se plie à la volonté du forgeron.",
    icon: <Hammer className="w-6 h-6 text-gold" />
  },
  {
    id: 4,
    title: "La Patine",
    description: "Finitions naturelles pour sublimer le caractère unique de l'acier.",
    icon: <ShieldCheck className="w-6 h-6 text-gold" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'M. le Comte de V.',
    location: 'Propriété Privée',
    rating: 5,
    text: 'Un travail d\'une noblesse rare. Chaque volute raconte une histoire de feu et de passion.'
  },
  {
    id: 't2',
    name: 'Mme Durand',
    location: 'Architecte DPLG',
    rating: 5,
    text: 'Mercier a su comprendre l\'âme du bâtiment pour y intégrer un escalier qui semble là depuis toujours.'
  },
  {
    id: 't3',
    name: 'Mairie de Dole',
    location: 'Bâtiments Classés',
    rating: 5,
    text: 'Une expertise inégalée pour la sauvegarde de notre héritage architectural.'
  }
];
