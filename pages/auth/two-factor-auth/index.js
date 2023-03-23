import LoginWithCode from '../../../components/auth/LoginWithCode'

const TwoFactorAuth = () => {
  return <LoginWithCode />
}

export default TwoFactorAuth

TwoFactorAuth.getLayout = function PageLayout (page) {
  return <>{page}</>
}
