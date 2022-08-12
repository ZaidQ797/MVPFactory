import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Header from '../components/header';
import GridView from '../components/gridView';
import List from '../components/list';
import {Loading} from '../components/loading';
import {useSelector, useDispatch} from 'react-redux';
import ListView from '../components/listView';
import {getMovies, updateOrientation} from '../redux/actions/app';
import colors from '../utils/colors';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
const REFRESH = 'refresh';
const LOAD_MORE = 'loadMore';

const Home = ({navigation}) => {
  const {movies, orintation} = useSelector(state => state.app);
  const dispatch = useDispatch();
  const flatlistRef = useRef(null);
  const [selectedStatus, setStatus] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const onEndReachedCalledDuringMomentum = useRef(true);
  const [loading, setLoading] = useState(false);
  const [showFAB, setShowFAB] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [filteredCharacters, filteredMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = getMoviesList(page, REFRESH);
    return () => {
      unsubscribe;
    };
  }, []);

  //  GET LATEST CHARACTERS
  const getMoviesList = (page, type) => {
    const res = dispatch(getMovies(page, type));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  // REFRESH TO GET LATEST CHARACTERS

  const handleOnChange = value => {
    setInputValue(value);
    const filtered = movies?.filter(item => {
      return (
        item?.Title?.toUpperCase().includes(value.toUpperCase()) ||
        item?.Title?.toUpperCase().includes(value.toUpperCase()) ||
        item?.Title?.toUpperCase().includes(value.toUpperCase())
      );
    });
    filteredMovies(filtered);
  };

  return (
    <View style={styles.container}>
      <Header
        title={'Home'}
        showRight
        leftIcon={'menu'}
        onTogglePress={() => {
          dispatch(updateOrientation(orintation === 1 ? 2 : 1));
        }}
        onLeftPress={() => {
          navigation.toggleDrawer();
        }}
      />
      <List
        renderItem={(item, index) => (
          <ListView item={item} index={index} navigation={navigation} />
        )}
        data={inputValue || selectedStatus ? filteredCharacters : movies}
        flatlistRef={flatlistRef}
        onChangeText={handleOnChange}
        inputValue={inputValue}
        keyExtractor={item => item.id}
        showShowSearchBar={true}
      />

      <Loading visible={loading} />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {flex: 1},
});
