export interface TempleBackground {
  id: number;
  name: string;
  label: string;
  url: string;
}

// Free-to-use Japanese Mount Fuji, temple & mountain photographs (Unsplash License).
// All URLs verified to return HTTP 200 (direct Unsplash CDN).
export const templeBackgrounds: TempleBackground[] = [
  {
    id: 0,
    name: "Mount Fuji & Pagoda",
    label: "Fujiyoshida · Traditional pagoda with Mount Fuji",
    url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 1,
    name: "Mount Fuji & Lake",
    label: "Japan · Red pagoda over still water",
    url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Fushimi Inari Shrine",
    label: "Kyoto · The path of a thousand torii gates",
    url: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=1920&auto=format&fit=crop",
  },
];

// Pexels fallbacks (verified HTTP 200, direct CDN files)
export const templeFallbacks: string[] = [
  "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1920",
];
