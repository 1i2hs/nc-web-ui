import { TagData, URLData } from "./types";
import * as faker from "faker";

export function generateFakeURLData(count: number) {
  const dataList = new Array<URLData>(count);
  for (let index = 0; index < count; index++) {
    const estTagListSize = faker.random.number(10);
    const tagSet = new Set<string>();

    for (let i = 0; i < estTagListSize; i++) {
      const hashtag = `#${faker.hacker.noun()}`;
      tagSet.add(hashtag);
    }

    dataList[index] = {
      id: `${faker.random.uuid()}`,
      title: faker.lorem.sentence(),
      dateAdded: faker.date.past(2).toLocaleDateString(),
      abstract: faker.lorem.paragraph(1),
      url: faker.internet.url(),
      isFavorite: faker.random.boolean(),
      isArchived: faker.random.boolean(),
      tagList: Array.from(tagSet),
    };
  }

  const tagObj: { [key: string]: number } = Object.create(null);

  dataList.forEach((data) => {
    data.tagList.forEach((tag) => {
      tagObj[tag] = tagObj[tag] !== undefined ? tagObj[tag] + 1 : 1;
    });
  });

  const fakeCollection: {
    all: Array<URLData>;
    favorite: Array<URLData>;
    archive: Array<URLData>;
    tag: Array<TagData>;
  } = {
    all: dataList,
    favorite: dataList.filter((data) => data.isFavorite),
    archive: dataList.filter((data) => data.isArchived),
    tag: Object.entries(tagObj).map(([key, value]) => ({
      tag: key,
      urlDataCount: value,
    })),
  };

  return fakeCollection;
}
