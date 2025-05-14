import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { SafeAreaView } from "react-native-safe-area-context";

const verifyOtp = () => {
  const [otp, setOtp] = useState<string | null>(null);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <View className="pt-10 px-6 items-center mb-64">
          <Text className="font-bold text-3xl text-rose-600">MATCHIFY</Text>
        </View>

        <View className="bg-slate-50 rounded-3xl px-6 mx-4 pt-6 pb-8 shadow-lg">
          <Text className="font-bold text-2xl text-gray-800 mb-4">
            Verify Your Otp
          </Text>

          <View className="mb-4">
            <OtpInput
              numberOfDigits={5}
              focusColor="red"
              onTextChange={(text) => setOtp(text)}
            />
          </View>

          <TouchableOpacity
            className="bg-rose-600 py-3.5 rounded-xl items-center justify-center mt-4"
            activeOpacity={0.8}
          >
            <Text className="text-white font-bold text-base">verify</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default verifyOtp;
