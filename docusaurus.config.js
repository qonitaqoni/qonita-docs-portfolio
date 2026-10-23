// @ts-check
// Note: type annotations allow type checking and IDE autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Technical Documentation Portfolio',
  tagline: 'Docs-as-Code Technical Writing Samples',
  favicon: 'img/favicon.ico',

  // Set the production url of the site here
  url: 'https://qonitaqoni.github.io',
  
  // Set the /<baseUrl>/ pathname under which the site is served
  baseUrl: '/qonita-docs-portfolio/',

  // GitHub pages deployment config.
  organizationName: 'qonitaqoni', // Usually GitHub org/username.
  projectName: 'qonita-docs-portfolio',    // Usually repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Enable the Mermaid plugin
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serves the docs at the site root (e.g., /index instead of /docs/index)
        },
        blog: false, // Disables the blog plugin if only need documentation
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      mermaid: {
        theme: { light: 'neutral', dark: 'dark' },
      },
      navbar: {
        title: 'Tech Writing Portfolio',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/qonitaqoni/qonita-docs-portfolio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Qonita's Technical Writing Portfolio. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;