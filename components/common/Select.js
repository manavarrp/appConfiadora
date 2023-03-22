const Select = ({
  className,
  onChange,
  options = [],
  emptyOptions,
  name,
  register,
  error,
  ...props
}) => {
  return (
    <div className='flex flex-col w-full'>
      <select
        className={className}
        onChange={onChange}
        {...register(name)}
        {...props}
      >
        <option value=''>{emptyOptions}</option>
        {options.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      {Boolean(error) && <span className='text-red'>{error}</span>}
    </div>
  )
}

export default Select
