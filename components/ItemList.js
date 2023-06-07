import { memo } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

const data = Array.from({ length: 30 }, (_, index) => ({
  title: `Title ${index}`,
  key: `key-${index}`,
}));

function ItemList({ onScroll }) {
  function onScrollHandler(e) {
    const y = e.nativeEvent.contentOffset.y;
    onScroll && onScroll(y);
  }

  return (
    <FlatList
      style={styles.flatList}
      data={data}
      renderItem={(itemData) => (
        <View style={styles.item}>
          <Text>{itemData.item.title}</Text>
        </View>
      )}
      scrollEventThrottle={16}
      onScroll={onScrollHandler}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    marginHorizontal: 16,
    borderRadius: 12,
  },
  item: {
    padding: 12,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 1,
  },
});

export default memo(ItemList);
