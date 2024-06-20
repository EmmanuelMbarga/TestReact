import { joiResolver } from "@hookform/resolvers/joi";
import joi from "joi";
import { useForm } from "react-hook-form";

const shemaConnexion = joi.object({
  email: joi.string().min(13).max(100).required().lowercase(),
  password: joi.string().min(6).max(40).required(),
});

export default function FormValidateConn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(shemaConnexion) });
  console.log(errors);

  const onSubmit = (data) => {
    console.log(data); //ce console.log va vous permettre de voir comment les données sont enregistré lors de la connexion. Si nous avons procédé ainsi c'est parce que l'api mis à notre dispotion ne nous expose pas toutes les URL notament celles qui permettent de faire des requettes pour la connexion .
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email" className="labetStyle">
        adresse e-mail
      </label>
      <input
        type="text"
        id="email"
        name="email"
        {...register("email")}
        className="inputStyle"
      />
      <br />
      {errors.email && (
        <p className="errorStyle">email incorrect . reessayez svp</p>
      )}
      <label htmlFor="password" className="labetStyle">
        Mot de passe
      </label>
      <input
        type="password"
        id="password"
        name="password"
        {...register("password")}
        className="inputStyle"
      />
      <br />
      {errors.password && (
        <p className="errorStyle">Mot de passe incorrect . reessayez svp</p>
      )}

      <button
        type="submit"
        className="bg-yellow-400 shadow-md w-full block rounded p-2 text-lg MiniPortable:text-sm mt-4"
      >
        connexion
      </button>
    </form>
  );
}
