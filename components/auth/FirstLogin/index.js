import styles from "../../../styles/Username.module.css";
import Logo from "../../common/Logo";
import { useForm } from "react-hook-form";
import Input from "../../common/Input";
import { firstLoginSchema } from "../../../utils/formSchema/firstLoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { decodeToken } from "../../../utils/decodeToken";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { changePasswordFirstLogin } from "../../../services/api";

const FirstLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(firstLoginSchema),
    initialValues: {
      currentPassword: "",
      newPassword: "",
    },
  });
  const { data } = useSession();

  // console.log(decodeToken(authDetails?.data?.token))
  const firstLoginSubmit = async (values) => {
    const payload = {
      ...values,
      token: data.token,
      changePassword: true,
      userName: data.userName,
    };
    const response = await changePasswordFirstLogin(payload);

    //dispatch(firstLogin(payload));
    console.log(response);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="md:w-[400px] shadow-sm shadow-gray bg-white w-[100%] mx-auto px-7 py-4 rounded-xl mt-8 items-center">
            <Logo />
            <div className="title flex flex-col items-center">
              <span className=" text-xl w-2/3 text-center text-gray">
                Cambia tu contraseña
              </span>
            </div>
            <form onSubmit={handleSubmit(firstLoginSubmit)}>
              <div className="textbox flex flex-col items-center gap-6">
                <Input
                  type="password"
                  placeholder="Contraseña actual"
                  className={styles.textbox}
                  name="currentPassword"
                  register={register}
                  error={errors?.currentPassword?.message}
                />

                <Input
                  type="password"
                  placeholder="Contraseña nueva"
                  className={styles.textbox}
                  name="newPassword"
                  register={register}
                  error={errors?.newPassword?.message}
                />

                <button
                  type="submit"
                  className={styles.btn}
                  //disabled={isLoading}
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstLogin;
