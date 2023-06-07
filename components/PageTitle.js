import { useNavigation } from "@react-navigation/native";
import { memo, useLayoutEffect } from "react";
import { Theme } from "../Theme";

function PageTitle({ showTitle }) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    // headerShadowVisible: true one level higher also works
    const borderStyles = {
      elevation: showTitle ? 1 : 0,
      shadowOpacity: showTitle ? 1 : 0,
      borderBottomWidth: showTitle ? 0.5 : 0,
    };

    navigation.setOptions({
      title: showTitle ? "Home" : null,
      headerStyle: {
        backgroundColor: Theme.backgroundColor,
        ...borderStyles,
      },
    });
  }, [showTitle]);

  return <></>;
}

export default memo(PageTitle);
