import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Слой</span>,
  footer: {
    text: "ООО «Эникрафт»",
  },
  search: {
    placeholder: "Поиск",
  },
  feedback: {
    content: null,
  },
  gitTimestamp: () => <div />,
  editLink: {
    component: () => <div />,
  },
  toc: {
    title: "Содержание",
  },
  darkMode: false,
};

export default config;
