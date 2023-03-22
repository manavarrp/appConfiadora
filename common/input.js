function Input({
  type = "text",
  placeholder = "",
  className,
  register,
  name,
 // errors,
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
     // errors={errors.name}
      {...register(name)}
      {...props}
    />
  );
}

export default Input;
