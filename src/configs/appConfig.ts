let config: any = {};

export const getConfig = (key: string) => config[key] || '';

export const setConfig = (key: string, value: string | object | number) => (config[key] = value);

export const setInitialConfig = (keyValuePair: {}) => {
  config = { ...config, ...keyValuePair };
  return config;
};

export const getAllConfig = () => config;
