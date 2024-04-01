const dotenv = require('dotenv');
const path = require('path'); 
dotenv.config();

module.exports = {
  env: {
    EVENTS_ENDPOINT_FETCH: process.env.EVENTS_ENDPOINT_FETCH,
  },
  images: {
    domains: ['source.unsplash.com'],
  },
  webpack: (config) => {
    config.resolve.alias['@customTypes'] = path.join(__dirname, 'Types');
    config.resolve.alias['@api'] = path.join(__dirname, 'API');
    config.resolve.alias['@util'] = path.join(__dirname, 'Util');
    config.resolve.alias['@icon'] = path.join(__dirname, 'app');
    return config;
  },
};