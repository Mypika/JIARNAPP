/**
 * **页面组件数据**
 * *数据*
 */
//首页内置组件
 export const MoulesList = moulesfc()

function moulesfc(){
    return [{msg:'容器组件',id:1,list:[
                                    {link:'Views',msg:'View',id:1},
                                    {link:'ScrollViews',msg:'ScrollView',id:2},  
                                        ]},
            {msg:'基础组件',id:2,list:[
                                    {link:'Texts',msg:'Text',id:1},
                                    {link:'Views',msg:'view',id:2},
                                    {link:'Views',msg:'touc',id:3}   
                                        ]},
            {msg:'表单组件',id:3,list:[
                                    {link:'Views',msg:'123',id:1},
                                    {link:'Views',msg:'view',id:2},
                                    {link:'Views',msg:'touc',id:3}   
                                        ]},
            {msg:'交互控件',id:4,list:[
                                    {link:'Views',msg:'123',id:1},
                                    {link:'Views',msg:'view',id:2},
                                    {link:'Views',msg:'touc',id:3}   
                                        ]},
            {msg:'列表视图',id:5,list:[
                                    {link:'SectionList',msg:'SectionList',id:1},
                                    {link:'Views',msg:'view',id:2},
                                    {link:'Views',msg:'touc',id:3}   
                                         ]},
            {msg:'ios组件',id:6,list:[
                                    {link:'Views',msg:'123',id:1},
                                    {link:'Views',msg:'view',id:2},
                                    {link:'Views',msg:'touc',id:3}   
                                        ]},
            {msg:'Android组件',id:7,list:[
                                    {link:'Views',msg:'123',id:1},
                                    {link:'Views',msg:'view',id:2},
                                    {link:'Views',msg:'touc',id:3}   
                                        ]}
    ]
}