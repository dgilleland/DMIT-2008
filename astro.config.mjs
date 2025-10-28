// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dgilleland.github.io',
  base: '/DMIT-2008',
  integrations: [
      starlight({
          title: "Dan's Docs",
          customCss: [
            // Path to your Tailwind base styles:
            './src/styles/global.css',
          ],
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dgilleland/DMIT-2008' }],
          sidebar: [
              {
                  label: 'About',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Start Here', slug: 'about/start-here' },
                      { label: 'React/NextJS History', slug: 'about/react-next-history'}
                  ],
              },
              {
                  label: 'Brightspace Lessons',
                  autogenerate: { directory: 'lessons' },
              },
              {
                  label: 'Other Tutorials',
                  autogenerate: { directory: 'tutorials' },
              },
              {
                  label: 'Troubleshooting',
                  autogenerate: { directory: 'troubleshooting' },
              },
              {
                  label: 'Grokking',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Learn to Teach', slug: 'grok/all' },
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});
