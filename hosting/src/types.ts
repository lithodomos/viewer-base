// https://github.com/piotrwitek/utility-types
export type $PropertyType<T extends object, K extends keyof T> = T[K];

export type Location = {
  coords: {
    longitude: number;
    latitude: number;
  };
  timestamp: number;
};
