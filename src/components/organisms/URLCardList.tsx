import * as React from "react";
import { VariableSizeList, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import URLCard from "../molecules/URLCard";
import { URLData } from "../../types";

type URLListProps = {
  data: Array<URLData>;
};

const PLACEHOLDER_URLCARD: URLData = {
  id: "placeholder",
  title: "placeholder",
  dateAdded: "no-date",
  abstract: "placeholder",
  url: "placeholder",
  isFavorite: false,
  tagList: [],
};

const cardHeightMap: any = {};

const URLCardList = ({ data = [] }: URLListProps) => {
  const listRef = React.useRef<VariableSizeList>(null);

  const Card = ({ data, index, style }: ListChildComponentProps) => {
    const cardRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (cardRef.current) {
        setCardHeight(index, cardRef.current.clientHeight);
      }
    }, [index, cardRef]);

    const handleClickFavoriteButton = (isFavorite: boolean) => {
      console.log(isFavorite);
    };

    const handleClickCard = (event: React.MouseEvent) => {
      console.log(`clicked card, ${index}`);
    };

    return index > 0 ? (
      <URLCard
        ref={cardRef}
        key={data.id}
        data={data[index]}
        onClick={handleClickCard}
        onClickFavorite={handleClickFavoriteButton}
        // onClickDelete={}
        // onClickShare={}
        // onClickTag={}
        style={style}
      />
    ) : (
      <div style={{ height: 96 }} />
    );
  };

  function getCardHeight(index: number) {
    // default card height: 253.594 / placeholder height: 96
    return index > 0 ? cardHeightMap[index] || 261 : 96;
  }

  function setCardHeight(index: number, size: number) {
    listRef?.current?.resetAfterIndex(0);
    if (!cardHeightMap[index]) {
      cardHeightMap[index] = size;
    }
  }

  return (
    <AutoSizer>
      {({ height, width }) => (
        <VariableSizeList
          height={height}
          width={width}
          itemCount={data.length}
          itemData={[PLACEHOLDER_URLCARD].concat(data)}
          itemSize={getCardHeight}
          ref={listRef}
        >
          {Card}
        </VariableSizeList>
      )}
    </AutoSizer>
  );
};

export default URLCardList;
