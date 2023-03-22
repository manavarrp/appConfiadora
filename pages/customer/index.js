
export default function Home () {
  return (
    <>
      <p className='text-gray-dark text-3xl mb-16 font-bold'>Dashboard</p>
      <div className='grid lg:grid-cols-1 gap-5 mb-16' />

      <div className='bg-white h-auto shadow-sm'>
        <div className='overflow-x-auto md:col-span-3'>
          <h1 className='mb-4 text-xl'>Users</h1>
          <div className='overflow-x-auto items-center' />
        </div>
        <div />
        <div className='bg-white rounded h-20 shadow-sm '>
          <label
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-2'
            for='file_input'
          >
            Upload file
          </label>
          <input
            className='ml-2 block w-full text-sm text-gray rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
            aria-describedby='file_input_help'
            id='file_input'
            type='file'
          />
          <p
            className='ml-2 mt-1 text-sm text-gray-500 dark:text-gray-300'
            id='file_input_help'
          >
            PNG, JPG or GIF (MAX. 800x400px).
          </p>
        </div>
      </div>
    </>
  )
}
