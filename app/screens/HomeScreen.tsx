import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-6">
        <Text className="text-3xl font-bold text-black mb-4">Welcome Home!</Text>
        <Text className="text-gray-600 text-lg text-center mb-8">
          You have successfully logged in to your account.
        </Text>
        
        <TouchableOpacity
          className="bg-black rounded-lg py-4 px-8"
          onPress={() => navigation.navigate('Login')}
        >
          <Text className="text-white text-center font-semibold text-xl">
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 