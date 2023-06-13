import { Languages } from './Languages';

export interface Settings {
	texturePack: boolean;
	language: keyof Languages<any>;
	assetsFolder: string;
}