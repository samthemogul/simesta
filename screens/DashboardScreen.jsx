
import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TouchableOpacity
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useEffect } from "react";
import { usePathname } from "expo-router";
import { TabBarContext } from '../context/TabBarContext'
import DashboardSearch from "../components/dashboard/DashboardSearch";
import MileStones from "../containers/dashboard/MileStones";
import CoursesContainer from "../containers/dashboard/CoursesContainer";

import styles from "../styles/screens/dashboard.style";
import { icons, COLORS, SIZES } from "../constants";

const DashboardScreen = () => {
  const user = {
    name: "Samuel emeka",
    email: "john@doe.com",
  };
  const { display, setDisplay} = useContext(TabBarContext);
  const pathname= usePathname()

  useEffect(() => {
    setDisplay(true)
  
  }, [])
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <View style={styles.container}>
            <View style={styles.notificationWrapper}>
              <View></View>
              <Pressable style={styles.notIconContainer}>
                <View style={styles.notificationAlert} />
                <Ionicons name="notifications-outline" color={COLORS.dark} size={SIZES.xLarge} />
              </Pressable>
            </View>
            <Text style={styles.greeting}>
              Welcome, {user.name.split(" ")[0]}!
            </Text>

            {/* SearchBar */}
            <DashboardSearch placeholder={"search topics, courses e.t.c "} />

            {/* Milestones */}
            <MileStones />

            {/* Courses */}
            <CoursesContainer  />


          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default DashboardScreen;
