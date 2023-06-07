import { memo } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  RefreshControl,
  Platform,
} from "react-native";
import { Theme } from "../Theme";

const data = Array.from({ length: 30 }, (_, index) => ({
  title: `Title ${index}`,
  key: `key-${index}`,
}));

// const itemHeight = 60;
// const itemMarginBottom = 1;

function ItemList({ onScroll }) {
  const onScrollHandler = (e) => {
    const y = e.nativeEvent.contentOffset.y;
    onScroll && onScroll(y);
  };

  return (
    <FlatList
      style={[styles.flatList]}
      data={data}
      renderItem={(itemData) => (
        <View
          style={[
            styles.item,
            // { height: itemHeight, marginBottom: itemMarginBottom },
          ]}
        >
          <Text>{itemData.item.title}</Text>
        </View>
      )}
      scrollEventThrottle={16}
      onScroll={onScrollHandler}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => null}
        />
      }
      // getItemLayout={(_, index) => ({
      //   // for better performance
      //   length: itemHeight + itemMarginBottom, //  HEIGHT + (MARGIN_VERTICAL * 2)
      //   offset: (itemHeight + itemMarginBottom) * index, //  ( HEIGHT + (MARGIN_VERTICAL*2) ) * (index)
      //   index,
      // })}
      initialNumToRender={15}
      maxToRenderPerBatch={10}
      contentInset={Platform.select({
        ios: { top: Theme.sizing.headerHeight },
      })}
      contentOffset={Platform.select({
        ios: {
          x: 0,
          y: -Theme.sizing.headerHeight,
        },
      })}
      contentContainerStyle={Platform.select({
        ios: {
          flexGrow: 1,
          paddingBottom: Theme.spacing.gutter,
        },
        android: {
          flexGrow: 1,
          paddingTop: Theme.sizing.headerHeight,
          paddingBottom: Theme.spacing.gutter,
        },
      })}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    marginHorizontal: 16,
    // borderRadius: 12,
  },
  item: {
    justifyContent: "center",
    padding: 12,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 1,
  },
});

export default memo(ItemList);
