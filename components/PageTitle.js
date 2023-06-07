import { useNavigation } from "@react-navigation/native";
import { memo, useLayoutEffect } from "react";

function PageTitle({ showTitle }) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: showTitle ? "Home" : null,
    });
  }, [showTitle]);

  return <></>;
}

export default memo(PageTitle);
