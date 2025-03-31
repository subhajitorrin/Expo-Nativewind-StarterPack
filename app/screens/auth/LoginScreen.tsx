import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { supabase } from '../../../lib/supabase';
import { useAuth } from '../../context/AuthContext';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { session } = useAuth();

  async function signInWithEmail() {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) throw error;
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }

  async function signUpWithEmail() {
    if (!email || !password || !username) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      // 1. Create auth user in Supabase
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (authError) throw authError;

      if (authData.user) {
        // 2. Create user record in database
        const { error: dbError } = await supabase
          .from('User')
          .insert([
            {
              id: authData.user.id,
              email: email,
              username: username,
              password: password // Note: In production, you should hash this password
            }
          ]);

        if (dbError) throw dbError;

        Alert.alert('Success', 'Please check your inbox for email verification!');
        setIsSignUp(false); // Switch back to sign in mode
      }
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 justify-center px-6">
        <View className="items-center mb-12">
          <Text className="text-3xl font-bold text-black mb-2">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </Text>
          <Text className="text-gray-600 text-lg">
            {isSignUp ? 'Sign up to get started' : 'Sign in to continue'}
          </Text>
        </View>

        <View className="space-y-6">
          {isSignUp && (
            <View>
              <Text className="text-black text-lg mb-2">Username</Text>
              <TextInput
                className="w-full bg-gray-100 rounded-lg px-4 py-3 text-black text-lg"
                placeholder="Enter your username"
                placeholderTextColor="#666"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                editable={!loading}
              />
            </View>
          )}

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
              editable={!loading}
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
              editable={!loading}
            />
          </View>

          <TouchableOpacity
            className={`bg-black rounded-lg py-4 mt-6 ${loading ? 'opacity-70' : ''}`}
            onPress={isSignUp ? signUpWithEmail : signInWithEmail}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-white text-center font-semibold text-xl">
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </Text>
            )}
          </TouchableOpacity>

          {!isSignUp && (
            <TouchableOpacity className="mt-4" disabled={loading}>
              <Text className="text-black text-center text-lg">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View className="flex-row justify-center mt-8 space-x-1">
          <Text className="text-black text-lg">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          </Text>
          <TouchableOpacity 
            onPress={() => {
              setIsSignUp(!isSignUp);
              setUsername('');
              setEmail('');
              setPassword('');
            }}
            disabled={loading}
          >
            <Text className="text-black font-bold text-lg">
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
} 