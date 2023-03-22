import { CUSTOMER, ADMIN, CONSULTANT } from './roles'

const APP_ROLES = [CUSTOMER, ADMIN, CONSULTANT]

const navigate = (router, authDetails) => {
  if (APP_ROLES.includes(authDetails?.user?.role)) {
    router.replace('/')
  } else if (authDetails?.user?.role === CONSULTANT) {
    router.replace('/admin/dashboard')
  } else {
    router.replace('/login')
  }
}

export { navigate }
