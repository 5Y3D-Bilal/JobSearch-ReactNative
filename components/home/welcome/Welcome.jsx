import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";
const jobTypes = ["Full-time", "Part-time", "Contractor", "Main"];

const Welcome = ({ searchQuery, setSearchQuery, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Jhon</Text>
        <Text style={styles.userName}>Find Your Perfect Job Here!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMethod="scale"
            style={styles.searchBtnImage}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      </View>
    </View>
  );
};

export default Welcome;
