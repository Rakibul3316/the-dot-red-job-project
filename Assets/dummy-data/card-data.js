import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CommentIcon from '@mui/icons-material/Comment';

export const cardData = [
    {
        title: 'EARNINGS (MONTHLY)',
        amount: '$40,000',
        increment: '3.48%',
        incremtntIcon: <ArrowUpwardIcon />,
        Icon: <CalendarTodayIcon />,
        smallText: 'Since last month',
        iconColor: '#6777ef',
    },
    {
        title: 'SALES',
        amount: '650',
        increment: '12%',
        incremtntIcon: <ArrowUpwardIcon />,
        Icon: <ShoppingCartIcon />,
        smallText: 'Since last years',
        iconColor: '#3abaf4',
    },
    {
        title: 'NEW USER',
        amount: '366',
        increment: '20.4%',
        incremtntIcon: <ArrowUpwardIcon />,
        Icon: <PeopleAltIcon />,
        smallText: 'Since last month',
        iconColor: '#66bb6a',
    },
    {
        title: 'PENDING REQUESTS',
        amount: '18',
        increment: '1.10%',
        incremtntIcon: <ArrowDownwardIcon />,
        Icon: <CommentIcon />,
        smallText: ' Since yesterday',
        iconColor: '#ffa426',
        incrementColor: '#fc544b'
    }
]