const generate = require('../mocks/generate');

const getContent = {
  books: () => {
    return new Promise((resolve, reject) => {
      if (process.env.USE_MOCKS) {
        resolve({ books: generate('books') });
      } else {

      }
    });
  },
  channels: () => {
    return new Promise((resolve, reject) => {
      if (process.env.USE_MOCKS) {
        resolve({ channels: generate('channels') });
      } else  {

      }

    });
  },
  courses: () => {
    return new Promise((resolve, reject) => {
      if (process.env.USE_MOCKS) {
        resolve({ courses: generate('courses') });
      } else  {

      }
    });
  },
  events: () => {
    return new Promise((resolve, reject) => {
      if (process.env.USE_MOCKS) {
        resolve({ events: generate('events') });
      } else  {

      }
    });
  },
  files: () => {
    return new Promise((resolve, reject) => {
      if (process.env.USE_MOCKS) {
        resolve({ files: generate('files') });
      } else {

      }
    });
  },
  ideas: () => {
    return new Promise((resolve, reject) => {
      if (process.env.USE_MOCKS) {
        resolve({ ideas: generate('ideas') });
      } else {

      }
    });
  },
  infographics: () => {
    return new Promise((resolve, reject) => {
      if (process.env.USE_MOCKS) {
        resolve({ infographics: generate('infographics') });
      } else {

      }
    });
  },
  movies: () => {
    return new Promise((resolve, reject) => {
      if (process.env.USE_MOCKS) {
        resolve({ movies: generate('movies') });
      } else {

      }
    });
  },
  products: () => {
    return new Promise((resolve, reject) => {
      if (process.env.USE_MOCKS) {
        resolve({ products: generate('products') });
      } else {

      }
    });
  },
  quotes: () => {
    return new Promise((resolve, reject) => {
      if (process.env.USE_MOCKS) {
        resolve({ quotes: generate('quotes') });
      } else {

      }
    });
  },
  stories: () => {
    return new Promise((resolve, reject) => {
      if (process.env.USE_MOCKS) {
        resolve({ stories: generate('stories') });
      } else {

      }
    });
  },
  tools: () => {
    return new Promise((resolve, reject) => {
      if (process.env.USE_MOCKS) {
        resolve({ tools: generate('tools') });
      } else {

      }
    });
  },
  videos: () => {
    return new Promise((resolve, reject) => {
      if (process.env.USE_MOCKS) {
        resolve({ videos: generate('videos') });
      } else {

      }
    });
  },
};

module.exports = getContent;
