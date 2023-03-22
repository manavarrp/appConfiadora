const Select = ({ className, onChange, options = [], emptyOptions, name, register }) => {
  return (
    <div>
      <select
        className={className}
        onChange={onChange}
        {...register(name)}
      >
        <option value="">{emptyOptions}</option>
        {options.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
