import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMoneyBillTrendUp, faPeopleGroup, faArrowTrendUp, faChartLine, faDollarSign, faClipboardList, faWallet } from '@fortawesome/free-solid-svg-icons';
import img1 from './../../images/1.jpg';
import img2 from './../../images/2.jpg';
import img3 from './../../images/3.jpg';

export const getIcon = (icon) => <FontAwesomeIcon icon={icon} />;

export const NavbarData = [
    {
        icon: faHouse,
        heading: 'Dashboard'
    },
    {
        icon: faMoneyBillTrendUp,
        heading: 'Sales',
    },
    {
        icon: faPeopleGroup,
        heading: 'Customers',
    },
    {
        icon: faArrowTrendUp,
        heading: 'Trends',
    },
    {
        icon: faChartLine,
        heading: 'Analytics',
    }
];

export default getIcon;

export const PanelsData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb145a 0%, #bb145a 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 80,
        value: "26,740",
        png: faDollarSign,
        series: [
            {
                name: 'Series 1',
                data: [8, 16, 14, 26, 22, 33, 38]
            },
        ],
    },
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #5c13b0 0%, #5c13b0 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 72,
        value: "18,530",
        png: faWallet,
        series: [
            {
                name: "Revenue",
                data: [87, 134, 98, 176, 145, 113, 119],
            },
        ],
    },
    {
        title: "Expenses",
        color: {
            backGround: "linear-gradient(#3e15df -146.42%, #3e15df -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 58,
        value: "8,210",
        png: faClipboardList,
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
];

export const UpdatesData = [
    {
        img: img1,
        name: "Alice Cooper",
        noti: "has purchased a new Kindle Paperwhite.",
        time: "10 seconds ago",
    },
    {
        img: img2,
        name: "John Doe",
        noti: "has received a package from Amazon with wireless earbuds.",
        time: "1 hour ago",
    },
    {
        img: img3,
        name: "Natasha Romanoff",
        noti: "has ordered a new set of noise-cancelling headphones.",
        time: "3 hours ago",
    },
];
