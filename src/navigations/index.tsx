import {NavigationContainer, NavigationContainerEventMap} from '@react-navigation/native'
import { TabNavigation } from './tab.navigation'

export function Navigation() {
   return (
    <NavigationContainer>
       <TabNavigation />
    </NavigationContainer>
   )
}