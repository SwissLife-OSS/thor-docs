/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible

const repoUrl = "https://github.com/ChilliCream/thor";

const siteConfig = {
  title: "Thor",
  tagline: "A complete tracing solution built for .Net core",
  url: "http://thor.chillicream.com",
  cname: "thor.chillicream.com",
  baseUrl: "/",
  gaTrackingId: "UA-72800164-2",
  projectName: "thor-docs",
  organizationName: "chillicream",
  repoUrl,
  headerLinks: [
    { doc: "installation", label: "Docs" },
    { doc: "example-break", label: "Examples" },
    { blog: false/*, label: "Blog"*/ },
    { search: false },
    { href: repoUrl, label: "GitHub" }
  ],
  headerIcon: "img/signet.svg",
  footerIcon: "img/signet.svg",
  favicon: "img/favicon.png",
  colors: {
    primaryColor: "#9a0d0d",
    secondaryColor: "#771717"
  },
  stylesheets: ["https://fonts.googleapis.com/css?family=Noto+Serif:400,700"],
  copyright: "Copyright © " + new Date().getFullYear() + " ChilliCream",
  editUrl: "https://github.com/ChilliCream/thor-docs/edit/master/docs/",
  /*algolia: {
    apiKey: "bf33c17016c2932f4993e27c5d3aba72",
    indexName: "thor"
  },*/
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "androidstudio"
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  onPageNav: "separate"
};

module.exports = siteConfig;