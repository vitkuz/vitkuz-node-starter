/* eslint-disable arrow-body-style,no-plusplus */

const fetchContentService = require('../../../services/fetchContentService');

function createPageModel() {
  return new Promise((resolve, reject) => {
    const contentPromises = [

    ].map(key => fetchContentService[key]());

    Promise.all(contentPromises).then((entities) => {
      const content = {};
      const menu = [];

      for (const collection of entities) {
        Object.assign(content, collection);
        const [key] = Object.keys(collection);
        if (collection[key] && collection[key].length > 0) {
          menu.push(key);
        }
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
        menu,
        content,
      };

      resolve(pageModel);
    });
  });
}

module.exports = createPageModel;
