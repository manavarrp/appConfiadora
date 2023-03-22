import Register from '../../components/auth/Register'

const RegisterForm = () => {
  return (
    <did>
      <Register />
    </did>
  )
}

export default RegisterForm

RegisterForm.getLayout = function PageLayout (page) {
  return <>{page}</>
}
