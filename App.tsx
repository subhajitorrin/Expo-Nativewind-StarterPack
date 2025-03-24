import { SafeAreaView, Text, View } from 'react-native';
import './global.css';

export default function App() {
  return (
    <SafeAreaView className='bg-white h-full w-full'>
      <View className='flex-1'>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}
