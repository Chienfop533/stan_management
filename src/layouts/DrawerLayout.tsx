import { bungee } from '@/assets/fonts/fonts'
import IconifyIcon from '@/core/components/icon'
import { LinkStyled } from '@/core/components/link'
import {
  Avatar,
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
  styled,
  useMediaQuery,
  useTheme
} from '@mui/material'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import { OpenDrawerProps } from './UserLayout'
import navigation from '@/navigation/navigation'
import React from 'react'
import { ChildrenType, NavigationType } from '@/navigation/type'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import { useRouter } from 'next/router'

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: theme.spacing(2, 4),
  marginLeft: '1rem !important',
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
const DrawerWrapper = styled(Drawer)(({ theme }) => ({
  width: 280,
  minHeight: '100vh',
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 280,
    boxSizing: 'border-box'
  },
  zIndex: 1200,
  position: 'absolute',
  '.MuiPaper-root': {
    background: `linear-gradient(160deg, ${hexToRGBA(theme.palette.backgroundColor.primary, 1)} 0%, ${hexToRGBA(
      theme.palette.backgroundColor.secondary,
      1
    )} 25%, ${hexToRGBA(theme.palette.backgroundColor.primary, 1)} 75%, ${hexToRGBA(
      theme.palette.backgroundColor.secondary,
      1
    )} 100%)`
  }
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
  const [openNav, setOpenNav] = useState(true)
  const handleOpenNav = () => {
    setOpenNav(!openNav)
  }
  return (
    <DrawerWrapper
      sx={theme => ({
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
          '& ul': { padding: 0 }
        }}
        key='section'
      >
        {navigation.map((section: NavigationType) => (
          <li key={`section-${section.title}`}>
            <ul>
              <ListSubheader
                sx={{
                  position: 'static',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-nunito)',
                  lineHeight: '36px',
                  background: 'transparent'
                }}
              >
                {section.title}
              </ListSubheader>
              {section.children.map((item: ChildrenType) => {
                if (item.type === 'item') {
                  return (
                    <LinkStyled key={`item-${item.title}`} href={`${item.path}`} sx={{ color: 'text.primary' }}>
                      <ListItemButton
                        key={`item-${item.title}`}
                        id={`item-${item.title}`}
                        selected={false}
                        sx={{ mx: '0.75rem !important', my: '0.5rem !important', borderRadius: '10px' }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 42,
                            height: 24,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <IconifyIcon icon={item.icon} fontSize={24} />
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItemButton>
                    </LinkStyled>
                  )
                } else {
                  return (
                    <React.Fragment key={`group-${item.title}`}>
                      <ListItemButton
                        key={`item-${item.title}`}
                        onClick={handleOpenNav}
                        selected={true}
                        sx={{ mx: '0.75rem !important', my: '0.5rem !important', borderRadius: '10px' }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 42,
                            height: 24,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <IconifyIcon icon={item.icon} fontSize={24} />
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                        {openNav ? (
                          <IconifyIcon icon='icon-park-outline:down' fontSize={24} />
                        ) : (
                          <IconifyIcon icon='ic:round-navigate-next' fontSize={24} />
                        )}
                      </ListItemButton>
                      <Collapse in={openNav} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding sx={{ paddingLeft: '1rem' }}>
                          {item.children?.map((collapse: ChildrenType) => (
                            <LinkStyled
                              key={`item-${collapse.title}`}
                              href={`${collapse.path}`}
                              sx={{ color: 'text.primary' }}
                            >
                              <ListItemButton
                                key={`item-${collapse.title}`}
                                selected={true}
                                sx={theme => ({
                                  mx: '0.75rem !important',
                                  my: '0.5rem !important',
                                  borderRadius: '10px',
                                  color: `${hexToRGBA(theme.palette.primary.contrastText, 0.85)}`,
                                  svg: {
                                    color: `${hexToRGBA(theme.palette.primary.contrastText, 0.85)}`
                                  },
                                  background: `linear-gradient(145deg, ${hexToRGBA(
                                    theme.palette.primary.dark,
                                    0.5
                                  )} 0%, ${hexToRGBA(theme.palette.secondary.dark, 0.5)} 100%)`
                                })}
                              >
                                <ListItemIcon
                                  sx={{
                                    minWidth: 42,
                                    height: 24,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                  }}
                                >
                                  <IconifyIcon icon={collapse.icon} width={24} height={24} />
                                </ListItemIcon>
                                <ListItemText primary={collapse.title} />
                              </ListItemButton>
                            </LinkStyled>
                          ))}
                        </List>
                      </Collapse>
                    </React.Fragment>
                  )
                }
              })}
            </ul>
          </li>
        ))}
      </List>
    </DrawerWrapper>
  )
}

export default DrawerLayout
