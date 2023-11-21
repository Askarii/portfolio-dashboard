import { 
    MdAnalytics,
    MdDashboard, 
    MdHelp, 
    MdList, 
    MdPeople, 
    MdPriceCheck, 
    MdSettings, 
    MdShoppingBag, 
    MdSupervisedUserCircle,
    MdWork
} from "react-icons/md"
export const items = [
    {
        title: "Pages",
        lists: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />

            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdPriceCheck />
            }
        ]
    },
    {
        title: "Analysis",
        lists: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics />
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople />
            }
        ]
    },
    {
        title: "Users",
        lists: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdSettings />
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelp />
            },
            {
                title: "Logout",
                path: "/dasboard/logout",
                icon: <MdList />
            }
        ]
    }
]