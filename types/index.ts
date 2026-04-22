export interface Hoodie {
  id: string;
  name: string;
  price: number;
  colors: string[];
  sizes: string[];
  images: string[];
  description: string;
  material: string;
  fit: 'regular' | 'oversized' | 'slim';
  category: string;
}

export interface Patch {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'Truck Art' | 'Urdu Typography' | 'Symbols' | 'Regional Patterns' | 'Minimal Icons';
  size: { width: number; height: number };
  isCustom?: boolean;
  createdAt: string;
}

export interface PatchZone {
  id: string;
  name: string;
  position: { x: number; y: number };
  maxSize: { width: number; height: number };
  shape: 'rectangle' | 'circle';
}

export interface BuilderState {
  selectedHoodie: Hoodie | null;
  selectedColor: string;
  selectedSize: string;
  patches: { zoneId: string; patch: Patch; position: { x: number; y: number } }[];
  totalPrice: number;
}

export interface UploadState {
  originalImage: File | null;
  vectorizedImage: string | null;
  isProcessing: boolean;
  conversionSettings: {
    style: 'minimal' | 'detailed' | 'artistic';
    complexity: 'low' | 'medium' | 'high';
    colorMode: 'color' | 'monochrome' | 'duotone';
  };
}
