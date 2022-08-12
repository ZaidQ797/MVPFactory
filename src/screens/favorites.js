import React, {useState, useRef} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Header from '../components/header';
import List from '../components/list';
import {useSelector} from 'react-redux';
import ListView from '../components/listView';
import colors from '../utils/colors';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {appImages} from '../assets';
import {wp, hp} from '../utils/responsive';
const Favorites = ({navigation}) => {
  const {favorites} = useSelector(state => state.app);
  const flatlistRef = useRef(null);
  const onEndReachedCalledDuringMomentum = useRef(true);
  const [showFAB, setShowFAB] = useState(false);

  const scrollToTop = () => {
    flatlistRef.current.scrollToOffset({animated: true, offset: 0});
    setTimeout(() => {
      setShowFAB(false);
    }, 300);
  };

  return (
    <View style={styles.container}>
      <Header
        title={'Favorites'}
        leftIcon={'menu'}
        onLeftPress={() => {
          navigation.toggleDrawer();
        }}
      />
      {favorites?.length > 0 ? (
        <List
          renderItem={(item, index) => (
            <ListView item={item} index={index} navigation={navigation} />
          )}
          data={favorites}
          flatlistRef={flatlistRef}
          refreshing={false}
          keyExtractor={item => item.id}
          onScroll={e => e.nativeEvent.contentOffset.y < 4 && setShowFAB(false)}
          onMomentumScrollBegin={() => {
            setShowFAB(true);
            onEndReachedCalledDuringMomentum.current = false;
          }}
        />
      ) : (
        <Image source={appImages.noData} style={styles.noData} />
      )}
      {showFAB && (
        <ActionButton
          size={50}
          onPress={() => {
            scrollToTop();
          }}
          icon={<Icon name="arrow-up-outline" size={20} color={colors.white} />}
          buttonColor={colors.primary}
        />
      )}
    </View>
  );
};

export default Favorites;
const styles = StyleSheet.create({
  container: {flex: 1},
  noData: {
    height: hp(80),
    width: wp(80),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
