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
  styled
} from '@mui/material'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import navigation from '@/navigation/navigation'
import React from 'react'
import { ChildrenType, NavigationType } from '@/navigation/type'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useAuth } from '@/hooks/useAuth'
import MediaQuery from '@/core/utils/media-query'

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
    border: 'none',
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
  openDrawer: boolean
  setOpenDrawer: Dispatch<SetStateAction<boolean>>
}) => {
  const router = useRouter()
  const { t } = useTranslation()
  const auth = useAuth()

  const [openNav, setOpenNav] = useState([router.asPath])
  const [activeBtn, setActiveBtn] = useState(router.asPath)
  const laptop = MediaQuery().laptop
  const handleOpenNav = (item: ChildrenType) => {
    const collapseListPath: string[] = []
    item.children?.forEach(collapse => {
      collapseListPath.push(collapse.path)
    })

    const checkNavIncludePath = collapseListPath.some(path => {
      return openNav.some(nav => {
        if (nav.includes(path)) {
          const newOpenNav = openNav.filter(item => item !== nav)
          setOpenNav(newOpenNav)
        }
        return nav.includes(path)
      })
    })
    if (!checkNavIncludePath) {
      setOpenNav([...openNav, collapseListPath[0]])
    }
  }

  useEffect(() => {
    setOpenNav([router.asPath])
    if (laptop) {
      setOpenDrawer(false)
    }
    setActiveBtn(router.asPath)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])
  const selectedCollapse = (item: ChildrenType) => {
    const collapseListPath: string[] = []
    item.children?.forEach(collapse => {
      collapseListPath.push(collapse.path)
    })
    const selected = openNav.some(nav => {
      return collapseListPath.some(item => {
        return nav.includes(item)
      })
    })
    const closeAllCollapse = collapseListPath.some(item => {
      return router.asPath.includes(item)
    })

    return selected || closeAllCollapse
  }
  const openCollapse = (item: ChildrenType) => {
    const collapseListPath: string[] = []
    item.children?.forEach(collapse => {
      collapseListPath.push(collapse.path)
    })
    const open = openNav.some(nav => {
      return collapseListPath.some(item => {
        return nav.includes(item)
      })
    })

    return open
  }
  return (
    <>
      <DrawerWrapper
        sx={{
          marginLeft: !openDrawer ? '-280px' : 0
        }}
        variant='persistent'
        anchor='left'
        open={openDrawer}
        elevation={0}
        className='drawer_navigation'
      >
        <DrawerHeader>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LinkStyled href='/'>
              <Image src='/images/stan_logo.svg' width={40} height={40} priority={true} alt='Stan logo' />
            </LinkStyled>
            <Typography
              variant='h1'
              className={bungee.className}
              sx={{ ml: 4, color: 'turquoise.dark', fontFamily: 'var(--font-bungee)' }}
            >
              Stan
            </Typography>
          </Box>
          <IconButton color='inherit' onClick={() => setOpenDrawer(false)}>
            <IconifyIcon icon='line-md:menu-fold-left' />
          </IconButton>
        </DrawerHeader>
        <DrawerProfile>
          <Avatar
            sx={{ width: 64, height: 64 }}
            alt='Avatar'
            src={auth?.user?.avatar || '/images/default_avatar.png'}
          ></Avatar>
          <Typography variant='h3'>{auth?.user?.full_name}</Typography>
          <Typography>{auth?.user?.email}</Typography>
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
                  {t(`${section.title}`)}
                </ListSubheader>
                {section.children.map((item: ChildrenType) => {
                  if (item.type === 'item') {
                    return (
                      <LinkStyled key={`item-${item.title}`} href={`${item.path}`} sx={{ color: 'text.primary' }}>
                        <ListItemButton
                          key={`item-${item.title}`}
                          id={`item-${item.title}`}
                          selected={activeBtn.includes(item.path ?? '')}
                          sx={theme => ({
                            mx: '0.75rem !important',
                            my: '0.5rem !important',
                            borderRadius: '10px',
                            color: activeBtn.includes(item.path ?? '')
                              ? `${hexToRGBA(theme.palette.primary.contrastText, 0.9)}`
                              : '',
                            svg: {
                              color: activeBtn.includes(item.path ?? '')
                                ? `${hexToRGBA(theme.palette.primary.contrastText, 0.9)}`
                                : ''
                            },
                            background: activeBtn.includes(item.path ?? '')
                              ? `linear-gradient(145deg, ${hexToRGBA(theme.palette.primary.dark, 0.6)} 0%, ${hexToRGBA(
                                  theme.palette.secondary.dark,
                                  0.6
                                )} 100%)`
                              : 'transparent'
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
                            <IconifyIcon icon={item.icon} fontSize={24} />
                          </ListItemIcon>
                          <ListItemText primary={t(`${item.title}`)} />
                        </ListItemButton>
                      </LinkStyled>
                    )
                  } else {
                    return (
                      <React.Fragment key={`group-${item.title}`}>
                        <ListItemButton
                          key={`item-${item.title}`}
                          onClick={() => handleOpenNav(item)}
                          selected={selectedCollapse(item)}
                          sx={{
                            mx: '0.75rem !important',
                            my: '0.5rem !important',
                            borderRadius: '10px'
                          }}
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
                          <ListItemText primary={t(`${item.title}`)} />
                          {openCollapse(item) ? (
                            <IconifyIcon icon='icon-park-outline:down' fontSize={24} />
                          ) : (
                            <IconifyIcon icon='ic:round-navigate-next' fontSize={24} />
                          )}
                        </ListItemButton>
                        <Collapse in={openCollapse(item)} timeout='auto' unmountOnExit>
                          <List component='div' disablePadding sx={{ paddingLeft: '1rem' }}>
                            {item.children?.map((collapse: ChildrenType) => (
                              <LinkStyled
                                key={`item-${collapse.title}`}
                                href={`${collapse.path}`}
                                sx={{ color: 'text.primary' }}
                              >
                                <ListItemButton
                                  key={`item-${collapse.title}`}
                                  selected={activeBtn.includes(collapse.path ?? '')}
                                  sx={theme => ({
                                    mx: '0.75rem !important',
                                    my: '0.5rem !important',
                                    borderRadius: '10px',
                                    color: activeBtn.includes(collapse.path ?? '')
                                      ? `${hexToRGBA(theme.palette.primary.contrastText, 0.9)}`
                                      : '',
                                    svg: {
                                      color: activeBtn.includes(collapse.path ?? '')
                                        ? `${hexToRGBA(theme.palette.primary.contrastText, 0.9)}`
                                        : ''
                                    },
                                    background: activeBtn.includes(collapse.path ?? '')
                                      ? `linear-gradient(145deg, ${hexToRGBA(
                                          theme.palette.primary.dark,
                                          0.6
                                        )} 0%, ${hexToRGBA(theme.palette.secondary.dark, 0.6)} 100%)`
                                      : 'transparent'
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
                                  <ListItemText primary={t(`${collapse.title}`)} />
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
        <Divider sx={{ margin: '0 1rem' }}></Divider>
        <Typography sx={{ fontSize: 12, marginTop: '0.5rem', textAlign: 'center' }}>
          ❤️Stan Management with Chienfop533❤️
        </Typography>
        <Typography sx={{ fontSize: 12, marginBottom: '0.5rem', textAlign: 'center' }}>Version 0.1.0</Typography>
      </DrawerWrapper>
      {openDrawer ? (
        <Box
          sx={theme => ({
            width: '100%',
            height: '100%',
            backgroundColor: theme.palette.grey[500],
            opacity: 0.5,
            cursor: 'pointer',
            position: 'fixed',
            zIndex: 1111,
            [theme.breakpoints.up('lg')]: {
              display: 'none'
            }
          })}
          onClick={() => setOpenDrawer(false)}
        ></Box>
      ) : null}
    </>
  )
}

export default DrawerLayout
