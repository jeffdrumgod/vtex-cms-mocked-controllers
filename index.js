const glob = require('glob-promise');
const { parse, resolve } = require('path');

const getListControlers = async () => {
  const files = await glob(resolve(__dirname, './controllers/*.js'));
  return files.map((item) => parse(item).name);
};

const getListTemplateInjections = async () => {
  const files = await glob(resolve(__dirname, './templates/injects/*.js'));
  return files.map((item) => require(resolve(__dirname, `./templates/injects/${parse(item).name}`)));
};

const getController = (tagName) => {
  return require(resolve(__dirname, `./controllers/${tagName}`));
};

module.exports = {
  getListControlers,
  getController,
  getListTemplateInjections,
};
