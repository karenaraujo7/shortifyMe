// import { sign } from "jsonwebtoken";
// import { env } from "../env";

// export default function generateToken(user: any) {
//   const { id, name, email } = user;

//   const signature = env.TOKEN_SIGN_SECRET;
//   const expiration = "6h";

//   return sign({ id, name, email }, signature, {
//     expiresIn: expiration,
//   });
// }
