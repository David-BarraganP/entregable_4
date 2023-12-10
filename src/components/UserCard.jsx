import { IconSquareRoundedXFilled } from "@tabler/icons-react";

const UserCard = ({
  showUserCard,
  onCloseUserCard,
  handleSubmit,
  register,
  createUser,
  isUpdating,
  updateUser,
  errors,
}) => {
  const submit = (currentUser) => {
    isUpdating
    ?  updateUser(currentUser)
    :  createUser(currentUser); 
  };

   console.log(errors)

  return (
    <section
      className={`fixed bg-black/30 top-0 left-0 right-0 h-screen flex justify-center items-center transition-all  p-2 ${
        showUserCard ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="grid gap-4 bg-white p-4 rounded-md relative w-[min(100%,_280px)]"
      >
        <button
          onClick={onCloseUserCard}
          type="button "
          className="absolute top-2 right-2 hover:text-red-500
      transition-colors"
        >
          <IconSquareRoundedXFilled size={20} />
        </button>
        <h2 className="text-center font-semibold">
          {isUpdating ? "Editar usuario" : "Nevo ususario"}
        </h2>
        <label className="grid gap-1 ">
          <span className="text-sm font-semibold">
            Email 
          </span>
          <input
            className="border-2 rounded-md p-1 outline-none"
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Este campo es requerido"
              }, 
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "El correo, se espera un conjunto de caracteres seguido por '@' y luego otro conjunto de caracteres seguido por un punto '.' y otro conjunto de caracteres fial.(por ejemplo, algo@carateres.com)"
              },
            })}
          />
             {errors.email && (
              <span className=" text-red-500 text-xs">
                {errors.email.message}
              </span>
             )}
        </label>

        <label className="grid gap-1">
          <span className="text-sm font-semibold">
            Contraseña 
          </span>
          <input
            className="border-2 rounded-md p-1 outline-none"
            type="text"
            {...register("password",{
              required: {
                value: true,
                message: "Este campo es requerido"
              }, 
              pattern: {
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                message: "La contraseña debe tener entre 6 y 16 caracteres, un numero y un caracter especial.",
              }
            })}
          />
           {errors.password && (
              <span className=" text-red-500 text-xs">
                {errors.password.message}
              </span>
             )}
        </label>

        <label className="grid gap-1 ">
          <span className="text-sm font-semibold">
            Nombre
          </span>
          <input
            className="border-2 rounded-md p-1 outline-none"
            type="text"
            {...register("first_name", {
              required: {
                value: true,
                message: "Este campo es requerido"
              }, 
              maxLength: {
                value: 10,
                message: "Maximo 20 caracteres"
              },
              minLength: {
                value: 3,
                message: "Minimo 3 caracteres"
              },
            })}
          />
           {errors.first_name && (
              <span className=" text-red-500 text-xs">
                {errors.first_name.message}
              </span>
             )}
        </label>

        <label className="grid gap-1 ">
          <span className="text-sm font-semibold">
            Apellidos 
          </span>
          <input
            className="border-2 rounded-md p-1 outline-none"
            type="text"
            {...register("last_name", {
              required: {
                value: true,
                message: "Este campo es requerido"
              }, 
              maxLength: {
                value: 20,
                message: "Maximo 20 caracteres"
              },
              minLength: {
                value: 3,
                message: "Minimo 3 caracteres"
              },
            })}
          />
           {errors.last_name && (
              <span className=" text-red-500 text-xs">
                {errors.last_name.message}
              </span>
             )}
        </label>

        <label className="grid gap-1 ">
          <span className="text-sm font-semibold">Cumpleaños</span>
          <input
            className="border-2 rounded-md p-1 outline-none"
            type="date"
            {...register("birthday", {
              required: {
                value: true,
                message: "Este campo es requerido"
              }, 
            })}
          />
           {errors.birthday && (
              <span className=" text-red-500 text-xs">
                {errors.birthday.message}
              </span>
             )}
        </label>

        <button
          type="submit"
          className="bg-violet-700  text-white font-semibold p-2 rounded-md 
        hover:bg-violet-900 transition-all uppercase"
        >
          {" "}
          {/*hover:tracking-widest */}
          {isUpdating ? "Guardar cambios" : "Agregar nuevo usuario"}
        </button>
      </form>
      {/*  */}
    </section>
  );
};

export default UserCard;
