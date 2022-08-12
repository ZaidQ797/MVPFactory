import NetInfo from '@react-native-community/netinfo';
export default NetInfo.addEventListener(networkState => {
  if (!networkState.isConnected) alert('Kindly Check your internet');
});
