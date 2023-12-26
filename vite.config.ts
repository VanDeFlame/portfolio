import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs-extra';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/portfolio/',
	plugins: [
		react(),
		{
			name: 'remove-png-plugin',
			async generateBundle() {
				async function removeFiles(folderPath: string) {
					const files = await fs.readdir(folderPath);

					for (const file of files) {
						const filePath = path.join(folderPath, file);

						if (fs.statSync(filePath).isFile()) {
							if (file.endsWith('.png')) {
								await fs.remove(filePath);
								counter++;
							}
						} else {
							// Recursive call for subfolders
							await removeFiles(filePath);
						}
					}
				}

				const distPath = path.resolve(__dirname, 'dist');
				let counter = 0;
				await removeFiles(distPath);

				console.log(`\n${counter} PNGs files removed from dist/`);
			},
		},
	],
});
