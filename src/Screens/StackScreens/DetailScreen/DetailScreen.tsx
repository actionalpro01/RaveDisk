import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();
import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();
import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont();
import styles from './DetailStyle';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RateStar} from '@component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();

const Star = (props) => {
  return (
    <View>
      <FontAwesome
        name={props.filled === true ? 'star' : 'star-o'}
        size={23}
        style={styles.eachStar}
      />
    </View>
  );
};
export function DetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params.props;
  const [rating, setRating] = useState(0);
  let stars = [];
  for (let x = 1; x <= 5; x++) {
    stars.push(
      <TouchableWithoutFeedback key={x} onPress={() => setRating(x)}>
        <Animated.View>
          <Star filled={x <= rating ? true : false} />
        </Animated.View>
      </TouchableWithoutFeedback>,
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <ImageBackground
          source={require('./Image/image.png')}
          style={styles.ImageBackground}>
          <TouchableOpacity
            style={styles.ButtonBack}
            onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              style={styles.HeaderIcon}
            />
          </TouchableOpacity>
          <View style={styles.HeaderText}>
            <Text style={styles.RestaurantName}>Markusstad Restaurant</Text>
            <View style={styles.Rate}>
              <Text style={styles.Star}>
                <RateStar star={params.star} />
              </Text>
              <Text style={styles.numberRate}>{params.totalRate} Ratings</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <TouchableOpacity style={styles.Heart}>
        <AntDesign name="hearto" size={30} style={styles.HeartInside} />
      </TouchableOpacity>
      <View style={styles.Body}>
        <View style={styles.BodyTop}>
          <View style={styles.flexIconText}>
            <Feather name="map-pin" style={styles.Icon} size={23} />
            <Text style={styles.TextInfo}>{params.location}</Text>
          </View>
          <View style={styles.flexIconTextMid}>
            <Feather name="phone" style={styles.Icon} size={23} />
            <Text style={styles.TextInfo}>{params.phone}</Text>
          </View>
          <View style={styles.flexIconText}>
            <MaterialCommunityIcons
              name="clock-time-nine-outline"
              style={styles.Icon}
              size={27}
            />
            <Text style={styles.TextInfo}>{params.time}</Text>
          </View>
        </View>
        <View style={styles.BodyMiddle}>
          <View style={styles.IconText}>
            <Image source={require('./Image/shop.png')} />
            <Text style={styles.BodyText}>INFO</Text>
          </View>
          <View style={styles.IconText}>
            <Image source={require('./Image/menu.png')} />
            <Text style={styles.BodyText}>MENU</Text>
          </View>
          <View style={styles.IconText}>
            <Image source={require('./Image/rating.png')} />
            <Text style={styles.BodyText}>REVIEW</Text>
          </View>
        </View>
        <View style={styles.BodyBottom}>
          <Text style={styles.TextInfo}>Rate this venue</Text>
          <View style={styles.listStars}>{stars}</View>
        </View>
      </View>
    </View>
  );
}
