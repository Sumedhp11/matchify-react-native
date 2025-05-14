import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DatePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { useCallback, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EditProfile = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const [gender, setGender] = useState<string>("");
  const [showGenderPicker, setShowGenderPicker] = useState(false);

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  const handleDateChange = useCallback((event: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  }, []);

  const togglePicker = useCallback(() => {
    setShowPicker((prev) => !prev);
  }, []);

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);

  const toggleGenderPicker = useCallback(() => {
    setShowGenderPicker((prev) => !prev);
  }, []);

  const handleGenderSelect = useCallback((value: string) => {
    setGender(value);
    setShowGenderPicker(false);
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View className="pt-10 px-6 items-center">
        <Text className="font-bold text-3xl text-rose-600">MATCHIFY</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <View className="px-6 flex flex-col gap-y-5">
            {/* Name */}
            <View className="flex flex-col gap-y-1.5">
              <Label className="font-medium text-base text-gray-700">
                Full Name
              </Label>
              <Input
                className={`bg-white border 
                 border-gray-300
                 rounded-xl h-14 px-4 text-gray-900 shadow-sm`}
                placeholder="Enter your name"
                keyboardType="default"
              />
            </View>

            {/* Phone */}
            <View className="flex flex-col gap-y-1.5">
              <Label className="font-medium text-base text-gray-700">
                Phone Number
              </Label>
              <Input
                className={`bg-white border border-gray-300
                 rounded-xl h-14 px-4 text-gray-900 shadow-sm`}
                placeholder="Enter your phone"
                keyboardType="phone-pad"
                // value={formData.phone}
                // onChangeText={(text) => handleChange("phone", text)}
              />
              {/* {errors.phone && (
                <Text className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </Text>
              )} */}
            </View>

            {/* Email */}
            <View className="flex flex-col gap-y-1.5">
              <Label className="font-medium text-base text-gray-700">
                Email Address
              </Label>
              <Input
                className={`bg-white border border-gray-300
                 rounded-xl h-14 px-4 text-gray-900 shadow-sm`}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                // value={formData.email}
                // onChangeText={(text) => handleChange("email", text)}
              />
              {/* {errors.email && (
                <Text className="text-red-500 text-sm mt-1">
                  {errors.email}
                </Text>
              )} */}
            </View>
            <View className="flex flex-col gap-y-1.5">
              <Label className="font-medium text-base text-gray-700">
                Gender
              </Label>
              <TouchableOpacity
                onPress={toggleGenderPicker}
                className="bg-white border border-gray-300 rounded-xl h-14 px-4 flex-row items-center shadow-sm active:border-rose-600"
                accessibilityLabel="Select gender"
                accessibilityHint="Opens a picker to choose your gender"
                accessibilityRole="button"
                accessible={true}
              >
                <Text
                  className={`flex-1 text-base ${
                    gender ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  {gender
                    ? genderOptions.find((opt) => opt.value === gender)?.label
                    : "Select your gender"}
                </Text>
              </TouchableOpacity>
              {showGenderPicker && (
                <View className="bg-white border border-gray-300 rounded-xl mt-2 shadow-sm">
                  {genderOptions.map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      onPress={() => handleGenderSelect(option.value)}
                      className="px-4 py-3 border-b border-gray-200 last:border-b-0"
                      accessibilityLabel={option.label}
                      accessibilityRole="menuitem"
                    >
                      <Text className="text-gray-900 text-base">
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {/* Date of Birth */}
            <View className="flex flex-col gap-y-1.5">
              <Label
                className="font-medium text-base text-gray-700"
                nativeID="dateOfBirthLabel"
              >
                Date of Birth
              </Label>
              <TouchableOpacity
                onPress={togglePicker}
                className={`bg-white border border-gray-300
                 rounded-xl h-14 px-4 flex-row items-center shadow-sm`}
                accessibilityLabel="Select date of birth"
                accessibilityHint="Opens a date picker to choose your date of birth"
                accessibilityRole="button"
                accessible={true}
              >
                <Text
                  className={`flex-1 text-base ${
                    date ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  {date
                    ? moment(date).format("DD MMMM YYYY")
                    : "Select your date of birth"}
                </Text>
                {/* <Calendar size={20} color="#6b7280" /> */}
              </TouchableOpacity>
              {/* {errors.dob && (
                <Text className="text-red-500 text-sm mt-1">{errors.dob}</Text>
              )} */}
              {showPicker && (
                <View className="bg-gray-50 rounded-xl mt-2 p-2 border border-gray-200">
                  <DatePicker
                    value={date || maxDate}
                    mode="date"
                    display={Platform.OS === "ios" ? "inline" : "default"}
                    maximumDate={maxDate}
                    onChange={handleDateChange}
                    accentColor="white"
                    textColor="black"
                    style={{ backgroundColor: "#74959b" }}
                  />
                </View>
              )}
              <Text className="text-gray-500 text-xs mt-1">
                You must be at least 18 years old to use Matchify.
              </Text>
            </View>

            {/* Bio */}
            <View className="flex flex-col gap-y-1.5 mt-2">
              <Label className="font-medium text-base text-gray-700">Bio</Label>
              <Input
                className="bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 shadow-sm"
                placeholder="Tell us about yourself"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                style={{ height: 100 }}
                // value={formData.bio}
                // onChangeText={(text) => handleChange("bio", text)}
              />
              <Text className="text-gray-500 text-xs mt-1">
                Your bio will be visible to potential matches.
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EditProfile;
