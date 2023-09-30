import {BottomTabNavigationProp, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { ScreenCadastrar, ScreenListar } from '../screens'

type TabList = {
  Listar: undefined
  Cadastrar: undefined
}
type TabNavProp = BottomTabNavigationProp<TabList>
export type TbTypes = {
    navigation: TabNavProp
}
export function TabNavigation(){
    const Tab = createBottomTabNavigator<TabList>()
        return(
            <Tab.Navigator>
                <Tab.Screen name='Listar' component={ScreenListar}/>
                <Tab.Screen name='Cadastrar' component={ScreenCadastrar}/>
            </Tab.Navigator>
        )
}