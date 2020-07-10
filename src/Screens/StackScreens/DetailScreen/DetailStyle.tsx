import {StyleSheet, Dimensions} from 'react-native';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  ButtonBack: {
    marginTop: h / 22,
    marginLeft: w / 40,
    alignSelf: 'flex-start',
  },
  ImageBackground: {
    width: w,
    height: (h * 39) / 100,
  },
  HeaderIcon: {
    color: '#fff',
    fontSize: 37,
  },
  HeaderText: {
    paddingLeft: w / 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  RestaurantName: {
    color: '#fff',
    fontSize: 23,
    fontWeight: '600',
  },
  Rate: {
    flexDirection: 'row',
    paddingVertical: h / 40,
    alignItems: 'center',
  },
  Star: {top: h / 500},
  numberRate: {
    color: '#fff',
    fontSize: 18,
    left: w / 30,
  },

  //Heart
  Heart: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: '#DC4A53',
    padding: (w * 279) / 10000,
    borderRadius: 10000,
    top: (h * 39) / 110,
    alignSelf: 'flex-end',
    right: w / 30,
  },
  HeartInside: {
    color: '#fff',
  },

  //Body
  Body: {
    paddingHorizontal: w / 50,
    flex: 1,
  },

  //BodyTop
  BodyTop: {
    paddingVertical: h / 20,
    borderBottomWidth: 2,
    borderColor: '#FDF4F4',
  },
  flexIconText: {
    flexDirection: 'row',
  },
  flexIconTextMid: {
    paddingVertical: h / 40,
    flexDirection: 'row',
  },
  Icon: {
    paddingHorizontal: w / 25,
    color: '#38424C',
  },
  TextInfo: {
    color: '#646464',
    fontSize: 18,
  },
  //BodyMiddle
  BodyMiddle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: h / 20,
    borderBottomWidth: 2,
    borderColor: '#FDF4F4',
  },
  IconText: {
    alignItems: 'center',
  },
  BodyText: {
    top: h / 70,
    color: '#646464',
    fontSize: 16,
    fontWeight: '500',
  },

  //BodyBottom
  BodyBottom: {
    alignItems: 'center',
    justifyContent: 'center',

    flex: 1,
  },
  RateBottom: {
    paddingTop: h / 13,
  },
});
