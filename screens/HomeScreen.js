import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemList from "../components/ItemList";
import { Theme } from "../Theme";
import PageTitle from "../components/PageTitle";

function HomeScreen() {
  const [scrollY, setScrollY] = useState(0);

  const onScrollHandler = useCallback((y) => {
    setScrollY(y);
  }, []);

  const showTitle = scrollY > Theme.headerHeight * 0.6;

  return (
    <View style={styles.container}>
      <Header scrollY={scrollY} />
      <PageTitle showTitle={showTitle} />
      <ItemList onScroll={onScrollHandler} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(242,242,247)",
  },
});

export default HomeScreen;
