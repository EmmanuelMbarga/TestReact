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
    console.log(data); //ce console.log va vous permettre de voir comment les données sont enregistré lors de la connexion
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="adresseEmail" className="labetStyle">
        adresse e-mail
      </label>
      <input type="text" id="adresseEmail" {...register("email")} className="inputStyle" />
      <br />
      {errors.email && <p className="errorStyle">email incorrect . reessayez svp</p>}
      <label htmlFor="mot de passe" className="labetStyle">
        Mot de passe
      </label>
      <input type="password" id="mot de passe" {...register("password")} className="inputStyle" />
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
