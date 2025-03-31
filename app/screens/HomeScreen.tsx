import { View, Text, TouchableOpacity } from 'react-native';
import { supabase } from '../../lib/supabase';

export default function HomeScreen() {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="mb-4 text-3xl font-bold text-black">Welcome Home!</Text>
        <Text className="mb-8 text-center text-lg text-gray-600">
          You have successfully logged in to your account.
        </Text>

        <TouchableOpacity className="rounded-lg bg-black px-8 py-4" onPress={handleLogout}>
          <Text className="text-center text-xl font-semibold text-white">Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
