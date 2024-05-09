import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Tabs from "./navigation/Tabs"
import { useNavigation } from "@react-navigation/native"

export default function App() {
	return (
		<NavigationContainer>
			<Tabs />
		</NavigationContainer>
	)
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
