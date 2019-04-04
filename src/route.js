import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from "./pages/home/HomePage";

const Routes = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(Routes);
