import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import styles from "./nearbyjobs.style";

import { COLORS } from "../../../constants";
import NearbyCard from "../../common/cards/nearby/NearbyJobCard";

import useFetch from "../../../Hook/useFetch";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

const Nearbyjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
  });

  // console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Text>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Some thing went Worng</Text>
        ) : (
          data?.map((job, key) => <NearbyJobCard key={key + job} job={job} handleNavigate={() => router.push(`/job-details/${job.job_id}`)} />)
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
