import ComponentLogo from "../../components/accueil/Header/componentLogo";
import UserCondition from "./userCondition";
import FormInscriptionValidate from "./validator/formValidate";


export default function Insciption() {
  return (
    <div className="max-w-[400px] m-auto Tablette:max-w-[300px] mobil:max-w-[300px]">
      <div className="flex justify-center mt-4">
        <ComponentLogo />
      </div>
      <div className="flex flex-col justify-center my-10 px-4">
        <div className="border p-10 Tablette:p-5 mobil:p-3 MiniPortable:p-2">
          <h1 className="text-center text-3xl MiniPortable:text-xl">Bienvenu !</h1>
          <div className="my-8 MiniPortable:text-sm MiniPortable:my-3">
            <p className="my-4">remplissez vos informations dans les champs ci dessus</p>
            <div className="flex flex-col justify-center">
            {/* ici mettre le composant de formulaire */}
                <FormInscriptionValidate/>
                <UserCondition/>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
