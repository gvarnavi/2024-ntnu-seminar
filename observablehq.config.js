// See https://observablehq.com/framework/config for documentation.

import MarkdownItContainer from "markdown-it-container";
import MarkdownItFootnote from "markdown-it-footnote";

const head = `
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
<link rel="manifest" href="/assets/site.webmanifest">
`;

export default {
  title: "NTNU, TEM Gemini Center",
  head: head,
  root: "src",
  theme: "dark",
  typographer: true,
  pages: [
    {
      name: "Phase-Retrieval Background",
      open: true,
      collapsible: false,
      pages: [
        { name: "4D-STEM Measurements", path: "4dstem-measurements" },
        { name: "Phase Problem", path: "phase-problem" },
        {
          name: "Proximal Gradient Methods",
          path: "proximal-gradient-methods",
        },
        { name: "Electron Ptychography", path: "electron-ptychography" },
        {
          name: "Open Source Phase Retrieval",
          path: "open-source-phase-retrieval",
        },
      ],
    },
    {
      name: "Magnetic Ptychography",
      open: true,
      collapsible: false,
      pages: [
        { name: "Imaging Magnetic Textures", path: "magnetic-textures" },
        { name: "Bulk Antiferromagnets", path: "bulk-antiferromagnets" },
        {
          name: "Nanoparticle Antiferromagnets",
          path: "nanoparticle-antiferromagnets",
        },
        { name: "Joint XMCD", path: "joint-xmcd" },
        { name: "Acknowledgments", path: "acknowledgments" },
      ],
    },
  ],
  markdownIt: (md) =>
    md
      .use(MarkdownItContainer, "card") // ::: card
      .use(MarkdownItContainer, "hero") // ::: hero
      .use(MarkdownItFootnote), // [^1] or [^longnote]
};
