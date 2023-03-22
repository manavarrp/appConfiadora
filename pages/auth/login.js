import Loginpage from '../../components/auth/Loginpage'

const login = () => {
  return (
    <>
      <Loginpage />
    </>
  )
}

export default login

login.getLayout = function PageLayout (page) {
  return <>{page}</>
}
