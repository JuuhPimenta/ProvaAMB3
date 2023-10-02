import {NavigationContainer, NavigationContainerEventMap} from '@react-navigation/native'
import { TabNavigation } from './tab.navigation'
import { DrawerNavigation } from './drawer.navigation'

export function Navigation() {
   return (
    <NavigationContainer>
       <TabNavigation />
    </NavigationContainer>
   )
}