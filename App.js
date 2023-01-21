import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#26254D" barStyle="light-content" translucent={false} />
      <Routes/>
    </NavigationContainer>
  );
}

