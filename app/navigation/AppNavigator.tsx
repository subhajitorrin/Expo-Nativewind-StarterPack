import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View } from 'react-native';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import { useAuth } from '../context/AuthContext';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  // Add other screens here
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {session && session.user ? (
          // Protected routes
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          // Public routes
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
