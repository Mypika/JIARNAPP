import {React} from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Index from '../tabs/index'
import User from '../tabs/user'
import Circle from '../tabs/circle'
import HighComponent from '../tabs/HighComponent';

const TabNavigator = createBottomTabNavigator(
    {
        Index: {
            screen: Index,
        },
        Circle:{ 
            screen: Circle
        },
        HighComponent: {
            screen: HighComponent,
        },
        User: {
            screen: User,
        }
    },
    {
        tabBarOptions: {
            //当前选中的tab bar的文本颜色和图标颜色
            activeTintColor: '#ff0001',
            //当前未选中的tab bar的文本颜色和图标颜色
            inactiveTintColor: '#089456',
            //是否显示tab bar的图标，默认是false
            showIcon: true,
            //showLabel - 是否显示tab bar的文本，默认是true
            showLabel: true,
            //是否将文本转换为大小，默认是true
            upperCaseLabel: false,
            //material design中的波纹颜色(仅支持Android >= 5.0)
            pressColor: '#788493',
            //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
            pressOpacity: 0.8,
            //tab bar的样式
            style: {
                // backgroundColor: '#f0f0f0',
                borderTopColor:'#000',
                paddingBottom: 1,
                borderTopWidth: 1,
                paddingTop:1,
                borderTopColor: '#ccc',
            },
            //tab bar的文本样式
            labelStyle: {
                fontSize: 10,
                margin: 1
            },
            //tab 页指示符的样式 (tab页下面的一条线).
            indicatorStyle: {height: 0},
        },
        //tab bar的位置, 可选值： 'top' or 'bottom'
        tabBarPosition: 'bottom',
        //是否允许滑动切换tab页
        swipeEnabled: true,
        //是否在切换tab页时使用动画
        animationEnabled: true,
        //是否懒加载
        lazy: true,
        //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
        backBehavior: 'none',
    }
)
export default TabNavigator