import PersonPhysicalForm from '../../components/PersonPhysicalForm'
import WorkForm from '../../components/PersonPhysicalForm/WorkForm'

const WorkData = () => {
  return (
    <div className='grid lg:grid-cols-1 gap-5 mt-16 '>
      <div className='bg-white rounded h-10 shadow-sm '>
        <PersonPhysicalForm activeStep={3} />
      </div>
      <div>
        <WorkForm />
      </div>
    </div>

  )
}

export default WorkData
