import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = () => {
    // TODO: Add proper validation and authentication logic
    if (email && password) {
      navigation.navigate('Home');
    } else {
      // You might want to show an error message here
      console.log('Please fill in all fields');
    }
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 justify-center px-6">
        <View className="items-center mb-12">
          <Text className="text-3xl font-bold text-black mb-2">Welcome Back</Text>
          <Text className="text-gray-600 text-lg">Sign in to continue</Text>
        </View>

        <View className="space-y-6">
          <View>
            <Text className="text-black text-lg mb-2">Email</Text>
            <TextInput
              className="w-full bg-gray-100 rounded-lg px-4 py-3 text-black text-lg"
              placeholder="Enter your email"
              placeholderTextColor="#666"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View>
            <Text className="text-black text-lg mb-2">Password</Text>
            <TextInput
              className="w-full bg-gray-100 rounded-lg px-4 py-3 text-black text-lg"
              placeholder="Enter your password"
              placeholderTextColor="#666"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            className="bg-black rounded-lg py-4 mt-6"
            onPress={handleLogin}
          >
            <Text className="text-white text-center font-semibold text-xl">
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="mt-4">
            <Text className="text-black text-center text-lg">
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center mt-8 space-x-1">
          <Text className="text-black text-lg">Don't have an account? </Text>
          <TouchableOpacity>
            <Text className="text-black font-bold text-lg">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
} 