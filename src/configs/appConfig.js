let config = {};

export const getConfig = (key) => config[key] || '';

export const setConfig = (key, value) => (config[key] = value);

export const setInitialConfig = (keyValuePair) => {
  config = { ...config, ...keyValuePair };
  return config;
};

export const getAllConfig = () => config;
