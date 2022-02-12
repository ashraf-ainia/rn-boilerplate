import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';

export default async () => ({
  root: {
    sideMenu: {
      options: {
        sideMenu: {
          left: {
            width: Dimensions.get('screen').width / 1.5,
          },
        },
      },
      left: {
        component: {
          id: 'SideMenu',
          name: 'SideMenu',
        },
      },
      center: {
        id: 'BASE_LAYOUT',
        bottomTabs: {
          options: {
            topBar: {
              visible: true,
            },
          },
          children: [
            {
              stack: {
                id: 'MAIN_LAYOUT',
                children: [
                  {
                    component: {
                      id: 'MainScreen',
                      name: 'MainScreen',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'Main',
                    icon: await Icon.getImageSource('home', 20),
                    selectedIcon: await Icon.getImageSource(
                      'home',
                      25,
                      Colors.primary,
                    ),
                    selectedTextColor: Colors.primary,
                    fontFamily: 'Cairo-Bold'
                  },
                },
              },
            },
            {
              stack: {
                id: 'MORE_LAYOUT',
                options: {
                  bottomTab: {
                    text: 'More',
                    icon: await Icon.getImageSource('ellipsis-horizontal', 30),
                    selectTabOnPress: false,
                    fontFamily: 'Cairo-Bold'
                  },
                },
              },
            },
          ],
        },
      },
    },
  },
});
