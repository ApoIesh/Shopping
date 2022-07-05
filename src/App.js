import React, {Component} from 'react';
import {StatusBar, LogBox, Appearance} from 'react-native';

import RouterNavigator from './RouterNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef, isReadyRef} from './NavigationActions';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {black_color, white_color} from './components/Assets/style/startStyles';
import {changeLaguage, L} from './config';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);

export const colorScheme = Appearance.getColorScheme();
export const colorSchemeView = colorScheme === 'light' ? '#fff' : black_color;
export const colorSchemeText = colorScheme === 'light' ? black_color : '#fff';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true;
          }}
        >
          <StatusBar
            animated={true}
            barStyle={
              colorScheme === 'light' ? 'dark-content' : 'light-content'
            }
            backgroundColor={colorSchemeView}
          />

          <RouterNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

export default App;
