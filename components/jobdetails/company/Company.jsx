import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: companyLogo
              ? companyLogo
              : "https://marketplace.canva.com/EAEz3bZZwn8/1/0/1600w/canva-yellow-black-playful-lamp-bulb-idea-company-logo-G9Zt8jt7rYA.jpg",
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} /</Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
