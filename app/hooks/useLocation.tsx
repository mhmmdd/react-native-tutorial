import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>();

  useEffect(() => {
    getForegroundLocation();
  }, []);

  const getForegroundLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        alert("You have to enable the permission to use the app");
        return;
      }

      const locationObject = await Location.getLastKnownPositionAsync();
      if (!locationObject) return null;

      const {
        coords: { latitude, longitude },
      } = locationObject;
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  return location;
};

export default useLocation;
