import {makeStyles} from "@mui/styles";
import {Drawer} from "@mui/material";
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {AddCircleOutlineOutlined, SubjectOutlined} from "@mui/icons-material";
import {useHistory, useLocation} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {format} from "date-fns";
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240
const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#F9F9F9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#ead5d5'
        },
        title: {
            padding: theme.spacing(2)
        },

        appbar: {
            width: `calc(100% - ${drawerWidth}px)!important`,
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar:{
            marginLeft:theme.spacing(2)
        }
    }
})

function Layout({children}) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const menuItems = [
        {
            text: 'My notes',
            icon: <SubjectOutlined color='secondary'/>,
            path: '/'
        },
        {
            text: 'Create note',
            icon: <AddCircleOutlineOutlined color='secondary'/>,
            path: '/create'
        }
    ]


    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                    <Avatar src="/unnamed.png" className={classes.avatar}/>
                </Toolbar>
            </AppBar>
            {/*{side drawer}*/}
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>
                        Ninja Notes
                    </Typography>
                </div>
                {/*list/links*/}
                <List>
                    {menuItems.map((i) => (
                        <ListItem
                            button
                            key={i.text}
                            onClick={() => history.push(i.path)}
                            className={location.pathname == i.path ? classes.active : null}
                        >
                            <ListItemIcon>{i.icon}</ListItemIcon>
                            <ListItemText primary={i.text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

export default Layout;