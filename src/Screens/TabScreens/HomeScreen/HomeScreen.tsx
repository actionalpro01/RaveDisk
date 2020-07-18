import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont();
import EvilIcons from 'react-native-vector-icons/EvilIcons';
EvilIcons.loadFont();
import Fontisto from 'react-native-vector-icons/Fontisto';
Fontisto.loadFont();
import axios from 'axios';
import styles from './HomeStyle';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {RateStar} from '@component';
export function HomeScreen() {
  useEffect(() => {
    getData();
  }, []);
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const getData = () => {
    axios({
      method: 'get',
      url: 'https://5eec5c4b5e298b0016b69a76.mockapi.io/abcsoft/foods',
    }).then(function (response) {
      setData(response.data);
    });
  };
  interface ListItemProp {
    id: string;
    author: string;
    authorImage: string;
    foodName: string;
    foodImage: string;
    star: number;
    createAt: string;
    location: string;
    totalRate: number;
    phone: string;
    time: string;
    likeByMe: boolean;
  }

  const Item = (props: ListItemProp) => {
    const checkLike = (id: string) => {
      const cloneData = [...data];
      let itemSelected = cloneData.find((item) => item.id === id);
      if (itemSelected) {
        itemSelected.likeByMe = !itemSelected.likeByMe;
      }
      setData(cloneData);
    };
    return (
      <TouchableOpacity
        style={styles.ItemView}
        onPress={() => navigation.navigate('Details', {props})}>
        <View>
          <View style={styles.ItemPartTop}>
            <View style={styles.AuthorDesign}>
              <Image
                source={{uri: props.authorImage}}
                style={styles.authorImage}
              />
              <Text style={styles.author}>{props.author}</Text>
            </View>
            <Text style={styles.Time}>{moment(props.createAt).fromNow()}</Text>
          </View>
          <View style={styles.ItemPartMiddle}>
            <View style={styles.ListIconMiddle}>
              <TouchableOpacity onPress={() => checkLike(props.id)}>
                {props.likeByMe ? (
                  <AntDesign
                    name="heart"
                    size={27}
                    style={{color: '#EB434B'}}
                  />
                ) : (
                  <AntDesign name="hearto" size={27} />
                )}
              </TouchableOpacity>

              <Fontisto name="comment" size={22} />
              <AntDesign name="flag" size={27} />
            </View>
            <View>
              <Image source={{uri: props.foodImage}} style={styles.foodImage} />
              <View style={styles.ItemPartBottom}>
                <View style={styles.nameRate}>
                  <Text style={styles.nameProduct}>{props.foodName}</Text>
                  <Text style={styles.rateProduct}>
                    <RateStar star={props.star} />
                  </Text>
                </View>
                <View style={styles.Place}>
                  <AntDesign
                    name="enviromento"
                    size={20}
                    style={styles.PlaceIcon}
                  />
                  <Text style={styles.namePlace}>
                    At <Text style={styles.Cafe}>{props.location}</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <View style={styles.InsideHeader}>
          <Image
            source={require('./ImageHome/Logo2.png')}
            style={styles.Logo}
            resizeMode="contain"
          />
          <View style={styles.HeaderText}>
            <Text style={styles.TextLeft}>Rave</Text>
            <Text style={styles.TextRight}>Disk</Text>
          </View>
        </View>
      </View>
      <View style={styles.Body}>
        <FlatList
          data={data}
          renderItem={({item}) => Item(item)}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
