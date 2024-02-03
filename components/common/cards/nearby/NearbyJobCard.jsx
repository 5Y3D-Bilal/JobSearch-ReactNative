import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";

const NearbgJobCard = ({ job, handleNavigate }) => {
  // console.log(item);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: job?.employer_logo
              ? job.employer_logo
              : "https://marketplace.canva.com/EAEz3bZZwn8/1/0/1600w/canva-yellow-black-playful-lamp-bulb-idea-company-logo-G9Zt8jt7rYA.jpg",
          }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbgJobCard;
