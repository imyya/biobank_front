import { FcWorkflow, FcParallelTasks, FcSettings, FcRatings, FcBarChart, FcContacts, } from "react-icons/fc"
import { LuLogOut } from "react-icons/lu"

export const DASHBOARD_SIDEBAR_ITEMS_TOP= [    
       {
        key:'dashboard',
        label:'Dashboard',
        path:'/',
        icon:<FcWorkflow/>,

       },
       {
        key:'samples',
        label:'Samples',
        path:'/sample',
        icon:<FcParallelTasks/>,

       },
       {
        key:'rapports',
        label:'Rapports',
        path:'/rapport',
        icon:<FcRatings/>,

       },
       {
        key:'stats',
        label:'Stats',
        path:'/stats',
        icon:<FcBarChart/>,

       },
       {
        key:'users',
        label:'Users',
        path:'/users',
        icon:<FcContacts/>,

       },
       {
        key:'configurations',
        label:'Configurations',
        path:'/configurations',
        icon:<FcSettings/>,

       },
      

]

export const DASHBOARD_SIDEBAR_ITEMS_BOTTOM=[
    {
        key:'help',
        label:'Help & Support',
        path:'/help',
        icon:<FcSettings/>,

       },
       {
        key:'Logout',
        label:'Logout',
        path:'/logout',
        icon:<LuLogOut/>,

       },

]