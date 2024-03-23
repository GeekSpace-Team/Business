// import { FC } from "react";
// import { Stack, Typography } from "@mui/material";
// import ReactLoading from "react-loading";

// const LoadingComponent: FC = () => {
//   return (
//     <>
//       <Stack alignItems="center" justifyContent="center" spacing={3}>
//         <img src="./images/logo.png" alt="logo" />
//         <Stack spacing={2} alignItems="center">
//           <Typography>Loading</Typography>
//           <Stack direction="row">
//             <ReactLoading
//               type={"balls"}
//               color={"#222222"}
//               height={50}
//               width={50}
//             />
//             <ReactLoading
//               type={"balls"}
//               color={"#222222"}
//               height={50}
//               width={50}
//             />
//           </Stack>
//         </Stack>
//       </Stack>
//     </>
//   );
// };

// export default LoadingComponent;

import { FC } from "react";

const LoadingComponent: FC = () => {
  return <div>Loading...</div>;
};

export default LoadingComponent;
