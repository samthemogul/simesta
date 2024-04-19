import {
    ScrollView,
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    TouchableOpacity,
    Image,
    FlatList
  } from "react-native";
  
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useContext, useEffect, useState } from "react";
  import { usePathname } from "expo-router";
  import { TabBarContext } from "../context/TabBarContext";
  import CustomTabBar from "../components/CustomTabBar";
  import BackButtonContainer from '../containers/BackButtonContainer'
  import Lecture from "../components/dashboard/Lecture";
  
  import { icons, COLORS, SIZES, images } from "../constants";
  import styles from '../styles/screens/lectures.style'

import { courseDetails } from '../constants/courses'

const CourseLectures = ({ courseId }) => {

    const topic = courseDetails.topics[0]
    const lectures = topic.lectures
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
      <View>
      <BackButtonContainer path="/course/1" />
        <Text style={styles.headerText}>{topic.name.length > 30 ? topic.name.slice(0, 29) + "..." : topic.name}</Text>
      </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <View style={styles.container}>

            {/* Overview container */}

            <View style={styles.courseImageContainer}>
                <Image style={styles.courseImage} source={courseDetails.image} resizeMode="cover" />
            </View>
            
            <View style={styles.overviewText}>
                <Text style={styles.overviewHeader}>Overview</Text>
                <Text style={styles.numberOfLectures}>{topic.lectures.length} lectures</Text>
            </View>

            <FlatList
              data={lectures}
              scrollEnabled={false}
              renderItem={({ item }) => (
                  <Lecture
                  lecture={item}
                  />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ rowGap: SIZES.small }}
        />


           
        

          </View>
        </ScrollView>
        <CustomTabBar />
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default CourseLectures
