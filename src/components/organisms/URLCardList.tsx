import * as React from "react";
import { VariableSizeList, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import URLCard from "../molecules/URLCard";
import { URLData } from "../../types";

type URLListProps = {
  data: Array<URLData>;
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

    return (
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
    );
  };

  function getCardHeight(index: number) {
    return cardHeightMap[index] + 8 || 253.594; // default Card Height;
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
          itemData={data}
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
