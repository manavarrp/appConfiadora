import PersonPhysicalForm from '../../components/PersonPhysicalForm'
import BankForm from '../../components/PersonPhysicalForm/BankForm'

const BankData = () => {
  return (
    <div className='grid lg:grid-cols-1 gap-5 mt-16 '>
      <div className='bg-white rounded h-10 shadow-sm '>
        <PersonPhysicalForm activeStep={2} />
      </div>
      <div>
        <BankForm />
      </div>
    </div>

  )
}

export default BankData
