export interface TempleBackground {
  id: number;
  name: string;
  label: string;
  url: string;
}

// Free-to-use Japanese cherry-blossom (sakura) & nature photographs (Unsplash License).
// All URLs verified to return HTTP 200 (direct Unsplash CDN).
export const templeBackgrounds: TempleBackground[] = [
  {
    id: 0,
    name: "Sakura & Pagoda",
    label: "Mount Fuji · Cherry blossoms at the pagoda",
    url: "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 1,
    name: "Mountain Temple with Sakura",
    label: "Japan · Temple among the peaks",
    url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Cherry Blossom Sakura",
    label: "Japan · Blossoms in full bloom",
    url: "https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1920&auto=format&fit=crop",
  },
];

// Pexels fallbacks (verified HTTP 200, direct CDN files)
export const templeFallbacks: string[] = [
  "https://images.pexels.com/photos/3937580/pexels-photo-3937580.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/458597/pexels-photo-458597.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/1714409/pexels-photo-1714409.jpeg?auto=compress&cs=tinysrgb&w=1920",
];
