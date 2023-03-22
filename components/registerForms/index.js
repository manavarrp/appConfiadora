import { useFormContext } from "react-hook-form";
import styles from "../../styles/Username.module.css";
import Input from "../../common/input";
import { schema } from "../../validators/schema";
import { yupResolver } from "@hookform/resolvers/yup";

import React from "react";

function RegisterForms() {
  const {
    register,
    //formState: { errors },
  } = useFormContext({ resolver: yupResolver(schema) });
  return (
    <div >
      
      <div className="flex w-full mb-3 gap-3">
        <Input
          type="text"
          placeholder="Primer nombre"
          className={styles.textbox}
          name="firstName"
          register={register}
          //errors={errors.firstName}
        />
        <Input
          type="text"
          placeholder="Segundo nombre"
          className={styles.textbox}
          name="secondName"
          register={register}
        />
      </div>
      <div className="flex w-full mb-3 gap-3">
        <Input
          type="text"
          placeholder="Apellido Paterno"
          className={styles.textbox}
          name="firstLastName"
          register={register}
        />
        <Input
          type="text"
          placeholder="Apellido Materno "
          className={styles.textbox}
          name="secondLastName"
          register={register}
        />
      </div>
      <div className="flex w-full mb-3 gap-3">
        <Input
          type="text"
          placeholder="phone"
          className={styles.textbox}
          name="phoneNumber"
          register={register}
        />
        <Input
          type="date"
          placeholder="Fecha de nacimiento"
          className={styles.textbox}
          name="birthDate"
          register={register}
        />
      </div>
      <div className="w-full mb-3">
        <Input
          type="text"
          placeholder="Correo electronico"
          className={styles.textbox}
          name="email"
          register={register}
        />
      </div>
    </div>
  );
}

export default RegisterForms;
