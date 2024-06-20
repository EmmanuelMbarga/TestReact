import joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

const ShemaUser = joi.object({
  nom: joi.string().min(4).max(40).required(),
  prenom: joi.string().min(4).max(20).required(),
  email: joi.string().min(13).max(100).required().lowercase(),
  password: joi.string().min(6).max(40).required(),
});

export default function FormInscriptionValidate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(ShemaUser) });
  // console.log(errors);

  const onSubmit = (data) => {
    console.log(data); //ce console.log va vous permettre de voir comment les données sont enregistré lors de l'inscription.  Si nous avons procédé ainsi c'est parce que l'api mis à notre dispotion ne nous expose pas toutes les URL notament celles qui permettent de faire des requettes pour l'inscription d'un utilisateur .
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="nom" className="labetStyle">
        votre Nom
      </label>
      <input
        type="text"
        id="nom"
        name="nom"
        {...register("nom")}
        className="inputStyle"
      />
      <br />
      {errors.nom && (
        <p className="errorStyle">
          le nom doit avoir au moins 4 caractères . svp veuillez reessayer
        </p>
      )}

      <label htmlFor="prenom" className="labetStyle">
        votre Prenom
      </label>
      <input
        type="text"
        id="prenom"
        name="prenom"
        {...register("prenom")}
        className="inputStyle"
      />
      <br />
      {errors.prenom && (
        <p className="errorStyle">
          le Prenom doit avoir au moins 4 caractères . svp veuillez reessayer
        </p>
      )}

      <label htmlFor="email" className="labetStyle">
        {" "}
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
        <p className="errorStyle">
          {"l'email"} doit avoir au moins 13 caractères . svp veuillez reessayer
        </p>
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
        <p className="errorStyle">
          le mot de passe doit avoir au moins 6 caractères . svp veuillez
          reessayer
        </p>
      )}

      <button
        type="submit"
        className="bg-yellow-400 shadow-md block w-full rounded p-2 text-lg MiniPortable:text-sm mt-4"
      >
        continuer
      </button>
    </form>
  );
}
