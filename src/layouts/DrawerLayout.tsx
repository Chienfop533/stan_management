import { bungee } from '@/assets/fonts/fonts'
import IconifyIcon from '@/core/components/icon'
import { LinkStyled } from '@/core/components/link'
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
  styled,
  useMediaQuery,
  useTheme
} from '@mui/material'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { OpenDrawerProps } from './UserLayout'

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: theme.spacing(2, 4),
  height: 60,
  justifyContent: 'space-between'
}))
const DrawerProfile = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: theme.spacing(2, 4),
  justifyContent: 'center',
  flexDirection: 'column'
}))

const DrawerLayout = ({
  openDrawer,
  setOpenDrawer
}: {
  openDrawer: OpenDrawerProps
  setOpenDrawer: Dispatch<SetStateAction<OpenDrawerProps>>
}) => {
  const theme = useTheme()
  const drawer = useMediaQuery(theme.breakpoints.down('lg'))
  const handleOpen = () => {
    if (!drawer) {
      setOpenDrawer(prev => ({ ...prev, default: false }))
    } else {
      setOpenDrawer(prev => ({ ...prev, responsive: false }))
    }
  }
  return (
    <Drawer
      sx={theme => ({
        width: 280,
        minHeight: '100vh',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box'
        },
        zIndex: 1200,
        position: 'absolute',
        marginLeft: !openDrawer.default ? '-280px' : 0,
        [theme.breakpoints.down('lg')]: {
          marginLeft: !openDrawer.responsive ? '-280px' : 0,
          div: {
            marginLeft: !openDrawer.responsive ? '-280px' : 0
          }
        }
      })}
      variant='persistent'
      anchor='left'
      open={!drawer ? openDrawer.default : openDrawer.responsive}
      elevation={0}
      className='drawer_navigation'
    >
      <DrawerHeader>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LinkStyled href='/'>
            <Image src='/images/stan_logo.svg' width={40} height={40} priority={true} alt='Stan logo' />
          </LinkStyled>
          <Typography variant='h1' className={bungee.className} sx={{ ml: 4, color: 'turquoise.dark' }}>
            Stan
          </Typography>
        </Box>
        <IconButton color='inherit' onClick={handleOpen}>
          <IconifyIcon icon='line-md:menu-fold-left' />
        </IconButton>
      </DrawerHeader>
      <DrawerProfile>
        <Avatar sx={{ width: 64, height: 64 }} alt='Avatar' src='/images/default_avatar.png'></Avatar>
        <Typography variant='h3'>Username</Typography>
        <Typography>username@gmail.com</Typography>
      </DrawerProfile>
      <Divider sx={{ margin: '0 1rem' }}></Divider>
      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          '& ul': { padding: 0 }
        }}
        subheader={<li />}
      >
        {[0, 1, 2, 3, 4].map(sectionId => (
          <li key={`section-${sectionId}`}>
            <ul>
              <ListSubheader sx={{ position: 'static' }}>{`I'm sticky ${sectionId}`}</ListSubheader>
              {[0, 1, 2].map(item => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </Drawer>
  )
}

export default DrawerLayout
