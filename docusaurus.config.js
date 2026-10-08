// @ts-check
// Note: type annotations allow type checking and IDE autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Technical Documentation Portfolio',
  tagline: 'Docs-as-Code Technical Writing Samples',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://qonitaqoni.github.io',
  
  // Set the /<baseUrl>/ pathname under which your site is served
  // MUST match your GitHub repository name exactly with leading and trailing slashes!
  baseUrl: '/qonita-docs-portfolio/',

  // GitHub pages deployment config.
  organizationName: 'qonitaqoni', // Usually your GitHub org/username.
  projectName: 'qonita-docs-portfolio',    // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serves the docs at the site root (e.g., /intro instead of /docs/intro)
        },
        blog: false, // Disables the blog plugin if you only need documentation
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
            href: 'https://github.com/YOUR-GITHUB-USERNAME/YOUR-REPOSITORY-NAME',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Technical Writing Portfolio. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;