import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Text } from "@/components/ui/text";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
const login = () => {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();
  const sendOtp = async () => {
    router.push("/(auth)/verify-otp");
    console.log(email);
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <View className="pt-10 px-6 items-center">
          <Text className="font-bold text-3xl text-rose-600">MATCHIFY</Text>
          <Text className="text-gray-500 text-center mt-1 text-sm">
            Find Your Perfect Match And Live Long Loving Life
          </Text>
        </View>

        <View className="flex-1 px-4 pt-6 pb-2 justify-center items-center">
          <Image
            source={require("@/assets/images/login-image.jpg")}
            resizeMode="cover"
            className="w-full h-full rounded-2xl"
          />
        </View>

        <View className="bg-slate-50 rounded-t-3xl px-6 pt-6 pb-8 shadow-lg">
          <Text className="font-bold text-2xl text-gray-800 mb-4">
            Welcome Back
          </Text>

          <View className="mb-4">
            <Label className="text-gray-700 font-medium mb-2">
              Email Address
            </Label>
            <Input
              className="bg-white border border-gray-200 rounded-xl h-12 px-4 text-gray-900"
              placeholder="Enter Your Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <TouchableOpacity
            className="bg-rose-600 py-3.5 rounded-xl items-center justify-center mt-4"
            activeOpacity={0.8}
            onPress={sendOtp}
          >
            <Text className="text-white font-bold text-base">Continue</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default login;
