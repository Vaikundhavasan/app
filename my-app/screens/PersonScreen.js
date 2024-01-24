import {
  View,
  Text,
  Dimensions,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";
import MovieList from "../components/movieList";
import Loading from "../components/loading";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function PersonScreen() {
  const [isFav, setIsFav] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  return (
    <ScrollView
      className="flex-1 bg-neutral-900 pt-5"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <SafeAreaView
        className={"z-20 w-full flex-row justify-between items-center p-4"}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.background}
          className="rounded-xl p-1 "
        >
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsFav(!isFav)}>
          <HeartIcon
            size="35"
            strokeWidth={2}
            color={isFav ? "red" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View className="flex-row justify-center " style={styles.boxShadow}>
            <View className="items-center rounded-full overflow-hidden w-72 h-72 border-2 border-neutral-500">
              <Image
                source={require("../assets/images/castImage2.png")}
                style={{ height: height * 0.43, width: width * 0.74 }}
              />
            </View>
          </View>

          <View className="mt-6">
            <Text className="text-white text-3xl font-bold text-center">
              Keanu Reeves
            </Text>
            <Text className="text-base text-neutral-500 text-center">
              London, United Kingdom
            </Text>
          </View>

          <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Gender</Text>
              <Text className="text-neutral-300 text-sm">Male</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Birthday</Text>
              <Text className="text-neutral-300 text-sm">1964-09-02</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Known for</Text>
              <Text className="text-neutral-300 text-sm">Acting</Text>
            </View>
            <View className="px-2 items-center">
              <Text className="text-white font-semibold">Popularity</Text>
              <Text className="text-neutral-300 text-sm">94.83</Text>
            </View>
          </View>

          <View className="my-6 mx-4 space-y-2">
            <Text className="text-white text-lg">Biography</Text>
            <Text className="text-neutral-400 tracking-wide">
              Keanu Charles Reeves, whose first name means "cool breeze over the
              mountains" in Hawaiian, was born September 2, 1964 in Beirut,
              Lebanon. He is the son of Patric Reeves, a showgirl and costume
              designer, and Samuel Nowlin Reeves, a geologist. Keanu's father
              was born in Hawaii, of British, Portuguese, Native Hawaiian, and
              Chinese ancestry, and Keanu's mother is originally from Essex
              England. After his parents' marriage dissolved, Keanu moved with
              his mother and younger sister, Kim Reeves, to New York City, then
              Toronto.
            </Text>
          </View>

          {/* movieList*/}
          <MovieList data={personMovies} title={"Movies"} hideSeeAll={true} />
        </View>
      )}
    </ScrollView>
  );
}
