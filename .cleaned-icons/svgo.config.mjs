export default {
  "plugins": [
    "preset-default",
    "removeDimensions",
    {
      "name": "convertColors",
      "params": {
        "names2hex": {
          "#212121": "#212121"
        }
      }
    },
    {
      "name": "convertPathData",
      "params": {
        "noSpaceAfterFlags": true
      }
    }
  ]
};
