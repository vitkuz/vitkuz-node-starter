/* eslint-disable arrow-body-style,no-plusplus */
const faker = require('faker/locale/ru');

function Book() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    seoTitle: faker.lorem.words(),
    slug: faker.lorem.slug(),

    title: faker.lorem.words(),
    title_en: faker.lorem.words(),

    subtitle: faker.lorem.sentence(),
    subtitle_en: faker.lorem.sentence(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),

    authorRef: `${faker.name.firstName()} ${faker.name.lastName()}`,
    cover: faker.random.image(),

    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    ownedBy: [{}],

    likes: faker.random.number(),
    bookmarks: faker.random.number(),

    content: {
      summaries: [{}], // summaries of the book
      quotes: [{}],
      ideas: [{}],
      videos: [{}],
      files: [{}],
    },
  };
}

// console.log(faker.lorem.word());
// console.log(faker.lorem.words());
// console.log(faker.lorem.sentence());
// console.log(faker.lorem.slug());
// console.log(faker.lorem.sentences());
// console.log(faker.lorem.paragraph());
// console.log(faker.lorem.paragraphs());
// console.log(faker.lorem.text());

console.log(new Book());

function Channel() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    title: faker.lorem.words(),
    title_en: faker.lorem.words(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),
  };
}

function Course() {
  return {
    title: 'Sample Course title',
  };
}

function Event() {
  return {
    title: 'Sample Event title',
  };
}

function File() {
  return {
    title: 'Sample File title',
  };
}

function Idea() {
  return {
    title: 'Sample Idea title',
  };
}

function Infographic() {
  return {
    title: 'Sample Infographic title',
  };
}

function Movie() {
  return {
    title: 'Sample Movie title',
  };
}

function Product() {
  return {
    title: 'Sample Product title',
  };
}

function Quote() {
  return {
    title: 'Sample Quote title',
  };
}

function Story() {
  return {
    title: 'Sample Story title',
  };
}

function Tool() {
  return {
    title: 'Sample Tool title',
  };
}

function Video() {
  return {
    title: 'Sample Video title',
  };
}

function entitiesFactory(type) {
  switch(type) {
    case 'books':
      return Book;
    case 'channels':
      return Channel;
    case 'courses':
      return Course;
    case 'events':
      return Event;
    case 'files':
      return File;
    case 'ideas':
      return Idea;
    case 'infographics':
      return Infographic;
    case 'movies':
      return Movie;
    case 'products':
      return Product;
    case 'quotes':
      return Quote;
    case 'stories':
      return Story;
    case 'tools':
      return Tool;
    case 'videos':
      return Video;
    default:
      console.log(type);
      throw Error('There is no such entity yet', type);
  }
}

const generate = (type, number = 10) => {

  const Entity = entitiesFactory(type);
  const entities = [];

  for (let i = 0; i < number; i++) {
    entities.push(new Entity());
  }

  return entities;
};

const getContent = {
  books: () => {
    return new Promise((resolve, reject) => {
      resolve({ books: generate('books') });
    });
  },
  channels: () => {
    return new Promise((resolve, reject) => {
      resolve({ channels: generate('channels') });
    });
  },
  courses: () => {
    return new Promise((resolve, reject) => {
      resolve({ courses: generate('courses') });
    });
  },
  events: () => {
    return new Promise((resolve, reject) => {
      resolve({ events: generate('events') });
    });
  },
  files: () => {
    return new Promise((resolve, reject) => {
      resolve({ files: generate('files') });
    });
  },
  ideas: () => {
    return new Promise((resolve, reject) => {
      resolve({ ideas: generate('ideas') });
    });
  },
  infographics: () => {
    return new Promise((resolve, reject) => {
      resolve({ infographics: generate('infographics') });
    });
  },
  movies: () => {
    return new Promise((resolve, reject) => {
      resolve({ movies: generate('movies') });
    });
  },
  products: () => {
    return new Promise((resolve, reject) => {
      resolve({ products: generate('products') });
    });
  },
  quotes: () => {
    return new Promise((resolve, reject) => {
      resolve({ quotes: generate('quotes') });
    });
  },
  stories: () => {
    return new Promise((resolve, reject) => {
      resolve({ stories: generate('stories') });
    });
  },
  tools: () => {
    return new Promise((resolve, reject) => {
      resolve({ tools: generate('tools') });
    });
  },
  videos: () => {
    return new Promise((resolve, reject) => {
      resolve({ videos: generate('videos') });
    });
  },
};


function createPageModel() {
  return new Promise((resolve, reject) => {
    const contentPromises = Object.keys(getContent).map(key => getContent[key]());

    Promise.all(contentPromises).then((entities) => {
      const content = {};

      for(const collection of entities) {
        Object.assign(content, collection);
      }

      const pageModel = {
        _id: '321',
        title: 'Как что-то сделать?',
        title_en: 'En page title',
        subtitle: 'Великий подзаголовок',
        subtitle_en: 'Page title',
        description: 'Page description',
        description_en: 'Page En Description',
        url: '/1',
        uuid: '123-123-123',
        createdAt: 'date1',
        updatedAt: 'date2',
        ownedBy: 'user id ref',
        content,
      };

      resolve(pageModel);
    });
  });
}

module.exports = createPageModel;
