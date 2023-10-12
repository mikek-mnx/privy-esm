import { URL } from "url";

export default {
  loaders: [
    {
      resolve(specifier, opts) {
        if (specifier === "@privy-io/server-auth") {
          let url = new URL(
            `./node_modules/${specifier}/dist/esm/index.js`,
            import.meta.url
          ).href;
          return { url };
        }
      },
      format(url, opts) {
        if (
          url.endsWith("node_modules/@privy-io/server-auth/dist/esm/index.js")
        ) {
          return { format: "module" };
        }
      },
      transform(source, opts) {},
    },
  ],
};
