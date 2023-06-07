# FlatList Navigation Title

Example of how to use a FlatList (or ScrollView)

Based on the excellent work of the good people at Coinbase:

https://www.coinbase.com/blog/coinbases-animated-tabbar-in-react-native

## Good to know

- The FlatList (or ScrollView) is actually alligned just below the navbar. The illusion of being below the page header is created by setting the contentInset top property to the height of the page header (iOS only). ContentOffset is also needed for iOS. This specifies how much the user scrolled within the FlatList or ScrollView.

- Its a good idea to keep track of the UI and JS frame rates using the Performance Monitor in both the iOS and Android emulators. In the Android emulator press Cmd->M and click on "Show Performance Monitor". The first time you have to give the Expo App permission to display content over other apps. In the iOS simulator choose "Shake" in the Device menu (Ctrl, Command, Z)

- Minimizing re-renders is important to make sure the frame rate close to 60 fps. useCallback(), useMemo() and memo() are your friends here. Then for the child components instead of return default ChildComponent use return default memo(ChildComponent). This makes sure ChildComponent is only re-rendered when one of its props changed. If use pass down event handlers as props make sure to use useCallback to make sure they don't trigger ChildComponent re-renders.
