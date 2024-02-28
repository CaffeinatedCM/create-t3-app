import { type Installer } from "~/installers/index.js";
import { addPackageDependency } from "~/utils/addPackageDependency.js";


export const stylexInstaller: Installer = ({ projectDir }) => {
  addPackageDependency({
    projectDir,
    dependencies: ["@stylexjs/open-props", "@stylexjs/stylex"],
    devMode: false,
  });
  addPackageDependency({
    projectDir,
    dependencies: ["@stylexjs/babel-plugin", "@stylexjs/nextjs-plugin"],
    devMode: true,
  });
};
