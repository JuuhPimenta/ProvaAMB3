import {createDrawerNavigator, DrawerNavigationProp} from "@react-navigation/drawer"
import {colors} from "../styles/colors"
import { FontAwesome5, Entypo } from "@expo/vector-icons"
import { ScreenCadastrar, ScreenListar } from "../screens"
type DrawerList = {
    Listar: undefined
    Cadastrar: undefined
  }
  type DrawerNavProp = DrawerNavigationProp<DrawerList>
  export type TabTypes = {
      navigation: DrawerNavProp
  }

  export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DrawerList>()
        return(
            <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary
                },
                headerTintColor: colors.white,
                drawerStyle: {
                    backgroundColor: colors.primary
                },
                drawerActiveTintColor: colors.white,
                drawerInactiveTintColor: colors.white
            }}
            
            >
                <Drawer.Screen name="Cadastrar" component={ScreenCadastrar} />
                <Drawer.Screen name="Listar" component={ScreenListar}/>
            </Drawer.Navigator>
        )
  }