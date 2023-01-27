import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {useAuth} from "../hooks/useAuth";
import {Loading} from "../components/Loading";
import {Box} from "native-base";
import {AppRoutes} from "./app.routes";
import {AuthRoutes} from "./auth.routes";


const theme = DefaultTheme;
theme.colors.background = "#ffffff";

export function Routes() {

  const { user, isLoadingUserStorageData } = useAuth();

  if(isLoadingUserStorageData) {
    return <Loading />
  }

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        {user.email ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
