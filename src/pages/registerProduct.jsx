// import { joiResolver } from "@hookform/resolvers/joi";
// import axios from "axios";
// import Joi from "joi";
// import { useForm } from "react-hook-form";

// const SchemaUser = Joi.object({
//   username: Joi.required(),
//   password: Joi.string().required(),
// });

// function RegisterProduct() {
//   const {
//     register,
//     formState: { error },
//     handleSubmit,
//   } = useForm({ resolver: joiResolver(SchemaUser) });

//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   console.log(error);
//   const handlerSubmiteForm = () => {
//     axios({
//       method: "post",
//       url: "https://dummyjson.com/user/login",
//       withCredentials: false,
//       data: {
//         username: { ...register("username") },
//         password: { ...register("password") },
//       },
//     })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <form className="my-20" onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label htmlFor="name">Nom</label>
//         <br />
//         <input
//           type="text"
//           id="name"
//           name="name"
//           {...register("username")}
//           className="border"
//         />
//         <br />
//       </div>

//       <div>
//         <label htmlFor="password">password</label>
//         <br />
//         <input
//           type="text"
//           id="password"
//           name="password"
//           {...register("password")}
//           className="border"
//         />
//         <br />
//         <button type="submite" className="border" onClick={handlerSubmiteForm}>
//           envoyer
//         </button>
//       </div>
//     </form>
//   );
// }

// export default RegisterProduct;
