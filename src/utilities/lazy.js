import { lazy as reactLazy } from "react";

export const lazy = (importCallback, isDefaultExport) => {
  const lazyLoad = async () => {
    const module = await importCallback();
    const component = Object.keys(module)[0];

    return {
      [`${isDefaultExport ? "default" : "Component"}`]: module[component]
    };
  };

  return isDefaultExport ? reactLazy(lazyLoad) : lazyLoad;
};
