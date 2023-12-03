// vite.config.ts
import react from "file:///Users/barnes/Desktop/projs/group-monitor/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { resolve } from "path";
import { defineConfig } from "file:///Users/barnes/Desktop/projs/group-monitor/node_modules/vite/dist/node/index.js";
import { crx } from "file:///Users/barnes/Desktop/projs/group-monitor/node_modules/@crxjs/vite-plugin/dist/index.mjs";
import merge from "file:///Users/barnes/Desktop/projs/group-monitor/node_modules/lodash/merge.js";
import tailwindcss from "file:///Users/barnes/Desktop/projs/group-monitor/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///Users/barnes/Desktop/projs/group-monitor/node_modules/autoprefixer/lib/autoprefixer.js";

// manifest.json
var manifest_default = {
  manifest_version: 3,
  name: "<name>",
  version: "0.0.0",
  options_ui: {
    page: "src/pages/options/index.html"
  },
  background: {
    service_worker: "src/pages/background/index.ts",
    type: "module"
  },
  action: {
    default_icon: {
      "32": "icon-32.png"
    }
  },
  host_permissions: [
    "https://*.facebook.com/*",
    "https://*.twitter.com/*",
    "https://*.linkedin.com/*",
    "https://*.reddit.com/*",
    "https://www.google.com/*",
    "https://ddevi.com/*"
  ],
  icons: {
    "128": "icon-128.png"
  },
  optional_host_permissions: ["https://*.instagram.com/*"],
  permissions: [
    "storage",
    "cookies",
    "declarativeNetRequest",
    "alarms",
    "notifications",
    "contextMenus"
  ],
  web_accessible_resources: [
    {
      resources: ["contentStyle.css", "icon-128.png", "icon-32.png"],
      matches: []
    }
  ]
};

// manifest.dev.json
var manifest_dev_default = {
  action: {
    default_icon: "public/dev-icon-32.png"
  },
  icons: {
    "128": "public/dev-icon-128.png"
  },
  web_accessible_resources: [
    {
      resources: [
        "contentStyle.css",
        "dev-icon-128.png",
        "dev-icon-32.png"
      ]
    }
  ]
};

// package.json
var package_default = {
  name: "group-monitor",
  displayName: "FB Group Monitor",
  version: "1.1.0",
  description: "A simple chrome extension to monitor FB Posts",
  license: "MIT",
  scripts: {
    build: "vite build",
    dev: "nodemon"
  },
  type: "module",
  dependencies: {
    "@graywolfai/react-heroicons": "^2.0.1",
    "chart.js": "^4.4.0",
    "chartjs-adapter-date-fns": "^3.0.0",
    "date-fns": "^2.30.0",
    lodash: "^4.17.21",
    react: "^18.2.0",
    "react-chartjs-2": "^5.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.12.0",
    "webextension-polyfill": "^0.10.0"
  },
  devDependencies: {
    "@crxjs/vite-plugin": "^1.0.14",
    "@types/chrome": "^0.0.237",
    "@types/lodash": "^4.14.197",
    "@types/node": "^18.11.18",
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@types/webextension-polyfill": "^0.10.0",
    "@typescript-eslint/eslint-plugin": "^5.49.0",
    "@typescript-eslint/parser": "^5.49.0",
    "@vitejs/plugin-react-swc": "^3.0.1",
    autoprefixer: "^10.4.13",
    eslint: "^8.32.0",
    "eslint-config-prettier": "^8.6.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-react": "^7.32.1",
    "eslint-plugin-react-hooks": "^4.3.0",
    "fs-extra": "^11.1.0",
    nodemon: "^2.0.20",
    postcss: "^8.4.21",
    tailwindcss: "^3.2.4",
    "ts-node": "^10.9.1",
    typescript: "^4.9.4",
    vite: "^4.0.4"
  }
};

// vite.config.ts
var __vite_injected_original_dirname = "/Users/barnes/Desktop/projs/group-monitor";
var root = resolve(__vite_injected_original_dirname, "src");
var assetsDir = resolve(root, "assets");
var outDir = resolve(__vite_injected_original_dirname, "dist");
var publicDir = resolve(__vite_injected_original_dirname, "public");
var isDev = process.env.__DEV__ === "true";
var extensionManifest = {
  ...merge(manifest_default, isDev ? manifest_dev_default : {}),
  manifest_version: 3,
  name: isDev ? `DEV: ${package_default.displayName}` : package_default.displayName,
  description: package_default.description,
  version: package_default.version
};
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
      "@pages": resolve(root, "pages")
      // Add an alias for the pages directory
    }
  },
  plugins: [
    react(),
    crx({
      manifest: extensionManifest
    })
  ],
  publicDir,
  // Add HTML file generation for each entry point
  base: "./",
  build: {
    outDir,
    rollupOptions: {
      input: {
        home: resolve(root, "pages/home/index.html"),
        dashboard: resolve(root, "pages/dashboard/index.html")
      }
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAibWFuaWZlc3QuanNvbiIsICJtYW5pZmVzdC5kZXYuanNvbiIsICJwYWNrYWdlLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYmFybmVzL0Rlc2t0b3AvcHJvanMvZ3JvdXAtbW9uaXRvclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2Jhcm5lcy9EZXNrdG9wL3Byb2pzL2dyb3VwLW1vbml0b3Ivdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2Jhcm5lcy9EZXNrdG9wL3Byb2pzL2dyb3VwLW1vbml0b3Ivdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgY3J4LCBNYW5pZmVzdFYzRXhwb3J0IH0gZnJvbSBcIkBjcnhqcy92aXRlLXBsdWdpblwiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCJsb2Rhc2gvbWVyZ2VcIjtcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwidGFpbHdpbmRjc3NcIjtcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSBcImF1dG9wcmVmaXhlclwiO1xuaW1wb3J0IG1hbmlmZXN0IGZyb20gXCIuL21hbmlmZXN0Lmpzb25cIjtcbmltcG9ydCBkZXZNYW5pZmVzdCBmcm9tIFwiLi9tYW5pZmVzdC5kZXYuanNvblwiO1xuaW1wb3J0IHBrZyBmcm9tIFwiLi9wYWNrYWdlLmpzb25cIjtcblxuY29uc3Qgcm9vdCA9IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKTtcbmNvbnN0IGFzc2V0c0RpciA9IHJlc29sdmUocm9vdCwgXCJhc3NldHNcIik7XG5jb25zdCBvdXREaXIgPSByZXNvbHZlKF9fZGlybmFtZSwgXCJkaXN0XCIpO1xuY29uc3QgcHVibGljRGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsIFwicHVibGljXCIpO1xuXG5jb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Ll9fREVWX18gPT09IFwidHJ1ZVwiO1xuXG5jb25zdCBleHRlbnNpb25NYW5pZmVzdCA9IHtcbiAgLi4ubWVyZ2UobWFuaWZlc3QsIGlzRGV2ID8gZGV2TWFuaWZlc3QgOiB7fSksXG4gIG1hbmlmZXN0X3ZlcnNpb246IDMsXG4gIG5hbWU6IGlzRGV2ID8gYERFVjogJHtwa2cuZGlzcGxheU5hbWV9YCA6IHBrZy5kaXNwbGF5TmFtZSxcbiAgZGVzY3JpcHRpb246IHBrZy5kZXNjcmlwdGlvbixcbiAgdmVyc2lvbjogcGtnLnZlcnNpb24sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQHNyY1wiOiByb290LFxuICAgICAgXCJAYXNzZXRzXCI6IGFzc2V0c0RpcixcbiAgICAgIFwiQHBhZ2VzXCI6IHJlc29sdmUocm9vdCwgXCJwYWdlc1wiKSwgLy8gQWRkIGFuIGFsaWFzIGZvciB0aGUgcGFnZXMgZGlyZWN0b3J5XG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgY3J4KHtcbiAgICAgIG1hbmlmZXN0OiBleHRlbnNpb25NYW5pZmVzdCBhcyBNYW5pZmVzdFYzRXhwb3J0LFxuICAgIH0pLFxuICBdLFxuICBwdWJsaWNEaXIsXG5cbiAgLy8gQWRkIEhUTUwgZmlsZSBnZW5lcmF0aW9uIGZvciBlYWNoIGVudHJ5IHBvaW50XG4gIGJhc2U6IFwiLi9cIixcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXIsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgaG9tZTogcmVzb2x2ZShyb290LCBcInBhZ2VzL2hvbWUvaW5kZXguaHRtbFwiKSxcbiAgICAgICAgZGFzaGJvYXJkOiByZXNvbHZlKHJvb3QsIFwicGFnZXMvZGFzaGJvYXJkL2luZGV4Lmh0bWxcIiksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFt0YWlsd2luZGNzcywgYXV0b3ByZWZpeGVyXSxcbiAgICB9LFxuICB9LFxufSk7XG4iLCAie1xuICBcIm1hbmlmZXN0X3ZlcnNpb25cIjogMyxcbiAgXCJuYW1lXCI6IFwiPG5hbWU+XCIsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4wXCIsXG4gIFwib3B0aW9uc191aVwiOiB7XG4gICAgXCJwYWdlXCI6IFwic3JjL3BhZ2VzL29wdGlvbnMvaW5kZXguaHRtbFwiXG4gIH0sXG4gIFwiYmFja2dyb3VuZFwiOiB7XG4gICAgXCJzZXJ2aWNlX3dvcmtlclwiOiBcInNyYy9wYWdlcy9iYWNrZ3JvdW5kL2luZGV4LnRzXCIsXG4gICAgXCJ0eXBlXCI6IFwibW9kdWxlXCJcbiAgfSxcbiAgXCJhY3Rpb25cIjoge1xuICAgIFwiZGVmYXVsdF9pY29uXCI6IHtcbiAgICAgIFwiMzJcIjogXCJpY29uLTMyLnBuZ1wiXG4gICAgfVxuICB9LFxuICBcImhvc3RfcGVybWlzc2lvbnNcIjogW1xuICAgIFwiaHR0cHM6Ly8qLmZhY2Vib29rLmNvbS8qXCIsXG4gICAgXCJodHRwczovLyoudHdpdHRlci5jb20vKlwiLFxuICAgIFwiaHR0cHM6Ly8qLmxpbmtlZGluLmNvbS8qXCIsXG4gICAgXCJodHRwczovLyoucmVkZGl0LmNvbS8qXCIsXG4gICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tLypcIixcbiAgICBcImh0dHBzOi8vZGRldmkuY29tLypcIlxuICBdLFxuICBcImljb25zXCI6IHtcbiAgICBcIjEyOFwiOiBcImljb24tMTI4LnBuZ1wiXG4gIH0sXG4gIFwib3B0aW9uYWxfaG9zdF9wZXJtaXNzaW9uc1wiOiBbXCJodHRwczovLyouaW5zdGFncmFtLmNvbS8qXCJdLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICBcInN0b3JhZ2VcIixcbiAgICBcImNvb2tpZXNcIixcbiAgICBcImRlY2xhcmF0aXZlTmV0UmVxdWVzdFwiLFxuICAgIFwiYWxhcm1zXCIsXG4gICAgXCJub3RpZmljYXRpb25zXCIsXG4gICAgXCJjb250ZXh0TWVudXNcIlxuICBdLFxuICBcIndlYl9hY2Nlc3NpYmxlX3Jlc291cmNlc1wiOiBbXG4gICAge1xuICAgICAgXCJyZXNvdXJjZXNcIjogW1wiY29udGVudFN0eWxlLmNzc1wiLCBcImljb24tMTI4LnBuZ1wiLCBcImljb24tMzIucG5nXCJdLFxuICAgICAgXCJtYXRjaGVzXCI6IFtdXG4gICAgfVxuICBdXG59XG4iLCAie1xuICBcImFjdGlvblwiOiB7XG4gICAgXCJkZWZhdWx0X2ljb25cIjogXCJwdWJsaWMvZGV2LWljb24tMzIucG5nXCJcbiAgfSxcbiAgXCJpY29uc1wiOiB7XG4gICAgXCIxMjhcIjogXCJwdWJsaWMvZGV2LWljb24tMTI4LnBuZ1wiXG4gIH0sXG4gIFwid2ViX2FjY2Vzc2libGVfcmVzb3VyY2VzXCI6IFtcbiAgICB7XG4gICAgICBcInJlc291cmNlc1wiOiBbXG4gICAgICAgIFwiY29udGVudFN0eWxlLmNzc1wiLFxuICAgICAgICBcImRldi1pY29uLTEyOC5wbmdcIixcbiAgICAgICAgXCJkZXYtaWNvbi0zMi5wbmdcIlxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuIiwgIntcbiAgXCJuYW1lXCI6IFwiZ3JvdXAtbW9uaXRvclwiLFxuICBcImRpc3BsYXlOYW1lXCI6IFwiRkIgR3JvdXAgTW9uaXRvclwiLFxuICBcInZlcnNpb25cIjogXCIxLjEuMFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQSBzaW1wbGUgY2hyb21lIGV4dGVuc2lvbiB0byBtb25pdG9yIEZCIFBvc3RzXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJ2aXRlIGJ1aWxkXCIsXG4gICAgXCJkZXZcIjogXCJub2RlbW9uXCJcbiAgfSxcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBncmF5d29sZmFpL3JlYWN0LWhlcm9pY29uc1wiOiBcIl4yLjAuMVwiLFxuICAgIFwiY2hhcnQuanNcIjogXCJeNC40LjBcIixcbiAgICBcImNoYXJ0anMtYWRhcHRlci1kYXRlLWZuc1wiOiBcIl4zLjAuMFwiLFxuICAgIFwiZGF0ZS1mbnNcIjogXCJeMi4zMC4wXCIsXG4gICAgXCJsb2Rhc2hcIjogXCJeNC4xNy4yMVwiLFxuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1jaGFydGpzLTJcIjogXCJeNS4yLjBcIixcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWljb25zXCI6IFwiXjQuMTIuMFwiLFxuICAgIFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCI6IFwiXjAuMTAuMFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBjcnhqcy92aXRlLXBsdWdpblwiOiBcIl4xLjAuMTRcIixcbiAgICBcIkB0eXBlcy9jaHJvbWVcIjogXCJeMC4wLjIzN1wiLFxuICAgIFwiQHR5cGVzL2xvZGFzaFwiOiBcIl40LjE0LjE5N1wiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMTguMTEuMThcIixcbiAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIl4xOC4wLjI3XCIsXG4gICAgXCJAdHlwZXMvcmVhY3QtZG9tXCI6IFwiXjE4LjAuMTBcIixcbiAgICBcIkB0eXBlcy93ZWJleHRlbnNpb24tcG9seWZpbGxcIjogXCJeMC4xMC4wXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIl41LjQ5LjBcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCJeNS40OS4wXCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjogXCJeMy4wLjFcIixcbiAgICBcImF1dG9wcmVmaXhlclwiOiBcIl4xMC40LjEzXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOC4zMi4wXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLXByZXR0aWVyXCI6IFwiXjguNi4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjI3LjVcIixcbiAgICBcImVzbGludC1wbHVnaW4tanN4LWExMXlcIjogXCJeNi43LjFcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3RcIjogXCJeNy4zMi4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0LWhvb2tzXCI6IFwiXjQuMy4wXCIsXG4gICAgXCJmcy1leHRyYVwiOiBcIl4xMS4xLjBcIixcbiAgICBcIm5vZGVtb25cIjogXCJeMi4wLjIwXCIsXG4gICAgXCJwb3N0Y3NzXCI6IFwiXjguNC4yMVwiLFxuICAgIFwidGFpbHdpbmRjc3NcIjogXCJeMy4yLjRcIixcbiAgICBcInRzLW5vZGVcIjogXCJeMTAuOS4xXCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjQuOS40XCIsXG4gICAgXCJ2aXRlXCI6IFwiXjQuMC40XCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2UyxPQUFPLFdBQVc7QUFDL1QsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsV0FBNkI7QUFDdEMsT0FBTyxXQUFXO0FBQ2xCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sa0JBQWtCOzs7QUNOekI7QUFBQSxFQUNFLGtCQUFvQjtBQUFBLEVBQ3BCLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxFQUNYLFlBQWM7QUFBQSxJQUNaLE1BQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxZQUFjO0FBQUEsSUFDWixnQkFBa0I7QUFBQSxJQUNsQixNQUFRO0FBQUEsRUFDVjtBQUFB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
