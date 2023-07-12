import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material'

const DrawerLayout = () => {
  return (
    <Drawer
      sx={{
        width: 280,
        minHeight: '100vh',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box'
        }
      }}
      variant='persistent'
      anchor='left'
      open={true}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default DrawerLayout
