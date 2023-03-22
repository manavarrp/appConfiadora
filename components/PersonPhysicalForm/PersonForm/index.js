import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import styles from "../../../styles/Username.module.css";
import Input from "../../common/Input";

function RegisterForms() {
  const isLoading = useSelector((state) => state.auth);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(loginSchema),
    initialValues: {
      UserName: "",
      Password: "",
    },
  });

  const onSubmitPersonForm = () => {
    router.push("/personal-form/address-data");
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmitPersonForm)}
        className="mx-auto max-w-screen-md"
      >
        <div className="w-full mb-3">
          <Input
            type="text"
            placeholder="Nombres Completos"
            className={styles.textbox}
            name="email"
            register={register}
            // error={errors?.email?.message}
          />
        </div>
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Input
            type="text"
            placeholder="Telefono"
            className={styles.textbox}
            name="firstName"
            register={register}

            // error={errors?.firstName?.message}
          />
          <Input
            type="text"
            placeholder="Correo Electronico"
            className={styles.textbox}
            name="secondName"
            register={register}

            // error={errors?.secondName?.message}
          />
        </div>
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Input
            type="text"
            placeholder="Fecha de nacimiento"
            className={styles.textbox}
            name="birthDate"
            register={register}

            // error={errors?.birthDate?.message}
          />
          <Input
            type="text"
            placeholder="Estado de Nacimiento"
            className={styles.textbox}
            name="secondLastName"
            register={register}

            // error={errors?.secondLastName?.message}
          />
        </div>
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Input
            type="text"
            placeholder="Genero"
            className={styles.textbox}
            name="phoneNumber"
            register={register}
            error={errors?.phoneNumber?.message}
          />
          <Input
            type="text"
            placeholder="Telefono"
            className={styles.textbox}
            name="birthDate"
            register={register}

            // error={errors?.birthDate?.message}
          />
        </div>
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Input
            type="text"
            placeholder="CURP"
            className={styles.textbox}
            name="phoneNumber"
            register={register}
            error={errors?.phoneNumber?.message}
          />
          <Input
            type="text"
            placeholder="RFC"
            className={styles.textbox}
            name="birthDate"
            register={register}

            // error={errors?.birthDate?.message}
          />
        </div>
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Input
            type="text"
            placeholder="Nacionalidad"
            className={styles.textbox}
            name="phoneNumber"
            register={register}
            error={errors?.phoneNumber?.message}
          />
          <Input
            type="text"
            placeholder="Pais de residencia"
            className={styles.textbox}
            name="birthDate"
            register={register}

            // error={errors?.birthDate?.message}
          />
        </div>
        <div className="w-full mb-3">
          <label className="text-darkBlue">
            Adjuntar foto INE por ambos lados.
          </label>
          <Input
            type="file"
            className={styles.textbox}
            name="ine"
            register={register}
            // error={errors?.email?.message}
          />
          <p
            className="ml-2 mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            PNG, JPG ó PDF (MAX. 800x400px).
          </p>
        </div>
        <div className="flex justify-wrap mt-5">
          <button
            type="submit"
            className=" border bg-blue w-full py-4 rounded-lg text-white text-xl shadow-sm text-center sm:w-1/4"
          >
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForms;
