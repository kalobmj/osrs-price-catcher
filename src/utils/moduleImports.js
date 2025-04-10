// importing prayer icon modules
export const protectionPrayersIconsModules = import.meta.glob('/src/assets/images/colorUnderlayImages/protectionIcons/**/*.webp', { eager: true });

// mapping over prayer icon modules
export const protectionPrayerIcons = Object.entries(protectionPrayersIconsModules).map((module, index) => ({
    id: index,
    url: module[0]
}));

// import rest of changing underlay image modules
export const changedUnderlayImageModules = import.meta.glob('/src/assets/images/colorUnderlayImages/*.{webp,png}', { eager: true });

// mapping over rest of changing underlay images
export const changedUnderlayImages = Object.entries(changedUnderlayImageModules).map((module, index) => ({
    id: index,
    url: module[0]
}));

// importing backroundWallpaper modules
export const backgroundImageModules = import.meta.glob('/src/assets/images/backgroundWallpapers/**/*.{jpg,png}', { eager: true });

// mapping over backgroundImage modules
export const backgroundImages = Object.entries(backgroundImageModules).map((module, index) => ({
    id: index,
    url: module[0]
}));

// import all underlay modules
export const underlayModules = import.meta.glob('/src/assets/images/underlayImages/**/*.{webp,png}', { eager: true });

// map over our underlayImages module
export const underlayImages = Object.entries(underlayModules).map((module, index) => ({
  id: index,
  url: module[0]
}));

// importing all gameLogo image modules
export const gameLogoModules = import.meta.glob('/src/assets/images/gameLogos/**/*.png', { eager: true });

// gameLogo objects
export const gameLogos = Object.entries(gameLogoModules).map((module, index) => ({
    id: index,
    url: module[0]
}));

// importing bottomImage modules
export const bottomImageModules = import.meta.glob('/src/assets/images/bottomImages/**/*.jpg', { eager: true });

// bottomImages objects 
export const bottomImages = Object.entries(bottomImageModules).map((module, index) => ({
    id: index,
    url: module[0]
}));

console.log(protectionPrayerIcons);
