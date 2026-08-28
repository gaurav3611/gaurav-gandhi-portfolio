export interface TempleBackground {
  id: number;
  name: string;
  label: string;
  url: string;
}

// Free-to-use Japanese temple & mountain photographs (Unsplash License).
// All URLs verified to return HTTP 200 (direct Unsplash CDN).
export const templeBackgrounds: TempleBackground[] = [
  {
    id: 0,
    name: "Fushimi Inari Shrine",
    label: "Kyoto · The path of a thousand torii gates",
    url: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 1,
    name: "Kinkaku-ji",
    label: "Kyoto · The Golden Pavilion",
    url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Senso-ji Temple",
    label: "Tokyo · Asakusa's ancient lantern",
    url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Torii Path",
    label: "Kyoto · Vermilion gates through the forest",
    url: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Himeji Castle",
    label: "Hyogo · The White Heron",
    url: "https://images.unsplash.com/photo-1559666126-84f389727b9a?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Mountain Pagoda",
    label: "Japan · Temple among the peaks",
    url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Itsukushima Shrine",
    label: "Miyajima · The floating torii gate",
    url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1920&auto=format&fit=crop",
  },
];

// Pexels fallbacks (verified HTTP 200, direct CDN files)
export const templeFallbacks: string[] = [
  "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/1481847/pexels-photo-1481847.jpeg?auto=compress&cs=tinysrgb&w=1920",
];
