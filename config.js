System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  trace: true,

  map: {
    "babel": "npm:babel-core@5.8.25",
    "babel-runtime": "npm:babel-runtime@5.8.24",
    "colors.css": "npm:colors.css@2.3.0",
    "core-js": "npm:core-js@1.1.4",
    "css": "npm:jspm-loader-css-modules@1.0.0-beta1",
    "css-global": "npm:jspm-loader-css@1.0.0",
    "path": "npm:path@0.11.14",
    "postcss-safe-parser": "npm:postcss-safe-parser@1.0.1",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.24": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.5.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:colors.css@2.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@1.1.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:css-modules-loader-core@0.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@4.1.16",
      "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@0.0.5",
      "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@0.0.9",
      "postcss-modules-scope": "npm:postcss-modules-scope@0.0.8"
    },
    "npm:css-modules-loader-core@1.0.0-beta3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "icss-replace-symbols": "npm:icss-replace-symbols@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@5.0.6",
      "postcss-modules-constants": "npm:postcss-modules-constants@1.0.0",
      "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0-beta2",
      "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.0.0-beta1",
      "postcss-modules-scope": "npm:postcss-modules-scope@1.0.0-beta2"
    },
    "npm:css-selector-tokenizer@0.4.1": {
      "fastparse": "npm:fastparse@1.1.1"
    },
    "npm:css-selector-tokenizer@0.5.4": {
      "cssesc": "npm:cssesc@0.1.0",
      "fastparse": "npm:fastparse@1.1.1"
    },
    "npm:debounce@1.0.0": {
      "date-now": "npm:date-now@1.0.1"
    },
    "npm:es6-promise@2.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fastparse@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:has-flag@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:js-base64@2.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:jspm-loader-css-modules@1.0.0-beta1": {
      "jspm-loader-css": "npm:jspm-loader-css@1.0.0-beta1"
    },
    "npm:jspm-loader-css@1.0.0": {
      "css-modules-loader-core": "npm:css-modules-loader-core@0.0.12",
      "debounce": "npm:debounce@1.0.0",
      "path": "npm:path@0.12.7",
      "toposort": "npm:toposort@0.2.12"
    },
    "npm:jspm-loader-css@1.0.0-beta1": {
      "css-modules-loader-core": "npm:css-modules-loader-core@1.0.0-beta3",
      "debounce": "npm:debounce@1.0.0",
      "path": "npm:path@0.12.7",
      "toposort": "npm:toposort@0.2.12"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path@0.11.14": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path@0.12.7": {
      "process": "npm:process@0.11.2",
      "util": "npm:util@0.10.3"
    },
    "npm:postcss-modules-constants@1.0.0": {
      "icss-replace-symbols": "npm:icss-replace-symbols@1.0.1",
      "postcss": "npm:postcss@5.0.6"
    },
    "npm:postcss-modules-extract-imports@0.0.5": {
      "postcss": "npm:postcss@4.1.16",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss-modules-extract-imports@1.0.0-beta2": {
      "postcss": "npm:postcss@5.0.6",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss-modules-local-by-default@0.0.9": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.4.1",
      "postcss": "npm:postcss@4.1.16"
    },
    "npm:postcss-modules-local-by-default@1.0.0-beta1": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
      "postcss": "npm:postcss@5.0.6"
    },
    "npm:postcss-modules-scope@0.0.8": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
      "postcss": "npm:postcss@4.1.16",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss-modules-scope@1.0.0-beta2": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
      "postcss": "npm:postcss@5.0.6",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss-safe-parser@1.0.1": {
      "postcss": "npm:postcss@5.0.6"
    },
    "npm:postcss@4.1.16": {
      "es6-promise": "npm:es6-promise@2.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.4.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:postcss@5.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.5.0",
      "supports-color": "npm:supports-color@3.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:supports-color@3.1.1": {
      "has-flag": "npm:has-flag@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:toposort@0.2.12": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});
