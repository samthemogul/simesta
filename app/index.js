import { Redirect } from "expo-router"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector(state => state.user.id)
  
  if(!user) {
    return <Redirect href={'/auth/login'} />
  }
  


  return (
    <Redirect href={'/home'} />
  )
}

export default Home