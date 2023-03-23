const PhysicalPersonForm = ({ activeStep = 0 }) => {
  return (
    <>
      <div className='flex flex-col w-full gap-3 sm:flex-row relative'>
        {[
          'Datos Personales',
          'Dirección',
          'Datos laborales',
          'Datos Bancarios',
          'Datos Adicionales'
        ].map((step, index) => (
          <div
            key={step}
            className={`flex-1 border-b-2 text-cneter ${
              index <= activeStep
                ? 'border-blue text-blue'
                : 'border-gray text-gray'
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </>
  )
}

export default PhysicalPersonForm
