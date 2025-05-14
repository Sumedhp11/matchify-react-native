import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useRouter } from "expo-router";
import { Image, View } from "react-native";
import "../global.css";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      <View className="w-full items-center space-y-8">
        <Image
          source={require("@/assets/images/splashscreen.jpg")}
          className="w-96 h-96 rounded-3xl shadow-xl"
          resizeMode="cover"
        />

        <View className="space-y-2 px-2">
          <Text className="text-3xl font-extrabold text-center text-rose-700 mb-3">
            Welcome To Matchify
          </Text>
          <Text className="text-base text-center text-gray-600 leading-relaxed">
            Discover real connections. Meet people who match your heart, not
            just your profile.
          </Text>
        </View>

        <Button
          className="w-64 py-3.5 bg-rose-600 rounded-full shadow-sm active:bg-rose-700 mt-16"
          onPress={() => {
            router.replace("/(auth)/login");
          }}
        >
          <Text className="text-white text-lg font-semibold tracking-wide">
            Start Matching
          </Text>
        </Button>
      </View>
    </View>
  );
}
