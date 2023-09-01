import { ToastContainer } from 'react-toastify'

const CustomToastContainer = () => {
  const theme: 'light' | 'dark' = (localStorage.getItem('mode') as 'light' | 'dark') || 'light'
  return (
    <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
    />
  )
}

export default CustomToastContainer
