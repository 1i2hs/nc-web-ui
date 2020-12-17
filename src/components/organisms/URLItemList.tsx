import * as React from "react";
import { VariableSizeList, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Divider from "@material-ui/core/Divider";

import URLListItem from "../molecules/URLListItem";
import { URLData } from "../../types";

type URLListProps = {
  data: Array<URLData>;
};

const itemHeightMap: any = {};

const URLItemList = ({ data = [] }: URLListProps) => {
  const listRef = React.useRef<VariableSizeList>(null);

  const Item = ({ data, index, style }: ListChildComponentProps) => {
    const itemRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (itemRef.current) {
        setItemHeight(index, itemRef.current.clientHeight);
      }
    }, [index, itemRef]);

    const handleClickFavoriteButton = (isFavorite: boolean) => {
      console.log(isFavorite);
    };

    const handleClickCard = (event: React.MouseEvent) => {
      console.log(`clicked card, ${index}`);
    };

    return (
      <div style={style} ref={itemRef}>
        <URLListItem
          key={data.id}
          data={data[index]}
          onClick={handleClickCard}
          onClickFavorite={handleClickFavoriteButton}
          // onClickDelete={}
          // onClickShare={}
          // onClickTag={}
        />
        <Divider />
      </div>
    );
  };

  function getItemHeight(index: number) {
    return itemHeightMap[index] + 8 || 189.594; // default Card Height;
  }

  function setItemHeight(index: number, size: number) {
    listRef?.current?.resetAfterIndex(0);
    if (!itemHeightMap[index]) {
      itemHeightMap[index] = size;
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
          itemSize={getItemHeight}
          ref={listRef}
        >
          {Item}
        </VariableSizeList>
      )}
    </AutoSizer>
  );
};

export default URLItemList;
