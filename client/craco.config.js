const path = require('path');
const webpack = require('webpack');
const dateFns = require('date-fns');

const resolvePath = (...restP) => path.resolve(__dirname, ...restP);

const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config');

const { theme } = resolveConfig(tailwindConfig);

module.exports = {
  webpack: {
    alias: {
      '@app': resolvePath('src'),
      '@layouts': resolvePath('src/layouts'),
      '@routes': resolvePath('src/routes'),
      '@modules': resolvePath('src/modules'),
      '@core': resolvePath('src/core')
    },
    plugins: [
      new webpack.DefinePlugin({
        _THEME_: JSON.stringify(theme),
        _BUILD_: JSON.stringify({
          date: dateFns.format(new Date(), 'dd.MM.yyyy, HH:mm'),
        }),
      })
    ]
  }
};
