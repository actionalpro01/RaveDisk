import {StyleSheet, Dimensions} from 'react-native';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default StyleSheet.create({
  //container
  container: {flex: 1, backgroundColor: '#EBF0F1'},

  // Header
  Header: {
    width: w,
    height: (h * 7) / 50,

    backgroundColor: '#DC4A53',
  },

  InsideHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

    marginTop: (w * 75) / 600,
  },

  Logo: {
    paddingHorizontal: w / 15,
    height: h / 17,
  },

  HeaderText: {
    flexDirection: 'row',
  },

  TextLeft: {
    fontSize: 22,
    color: 'black',
    fontWeight: '700',
  },

  TextRight: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '700',
  },

  //Body
  Body: {
    flex: 1,
    alignSelf: 'center',
    top: (h * 11) / 667,
  },
  ItemView: {
    backgroundColor: '#FFFFFF',
    width: (w * 355) / 375,
    height: (w * 355) / 375,
    marginBottom: (h * 15) / 700,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingHorizontal: w / 30,
    paddingVertical: (w * 355) / 10000,
  },

  //Item:::

  //ItemTop
  ItemPartTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  AuthorDesign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  author: {
    fontSize: 18,
    fontWeight: '600',
    left: (w * 355) / 15000,
  },
  authorImage: {
    width: (w * 3) / 25,
    height: (w * 3) / 25,
    borderRadius: (w * 3) / 50,
  },
  Time: {
    fontSize: 18,
    color: '#999999',
  },

  //ItemMiddle
  ItemPartMiddle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: (w * 355) / 20000,
  },
  ListIconMiddle: {
    height: (w * 206) / 375,
    justifyContent: 'space-around',
    left: (w * 355) / 13000,
  },
  foodImage: {
    width: (w * 11) / 15,
    height: (w * 206) / 375,
    borderRadius: 10,
  },
  //ItemBottom
  ItemPartBottom: {},
  nameRate: {
    flexDirection: 'row',
    paddingVertical: (w * 355) / 10000,
    justifyContent: 'space-between',
  },
  nameProduct: {
    fontSize: 22,
    fontWeight: '500',
  },
  Place: {
    flexDirection: 'row',
  },
  PlaceIcon: {
    color: '#999999',
  },
  namePlace: {
    alignSelf: 'flex-end',
    fontSize: 18,
    color: '#999999',
  },

  Cafe: {
    color: '#3C92F7',
    fontWeight: '600',
  },
});
