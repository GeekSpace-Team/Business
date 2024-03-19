// import React, { useEffect, useRef, useState } from "react";
// import Modal from "@mui/material/Modal";
// import { Box, Button } from "@mui/material";
// import MusicNoteIcon from "@mui/icons-material/MusicNote";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   bgcolor: "#fff",
//   boxShadow: 24,
//   width: 300,
//   p: 4,
//   borderRadius: "6px",
//   display: "flex",
//   justifyContent: "center",
// };

// const MusicPlayer: React.FC = () => {
//   // const [open, setOpen] = useState(true); // Set initial state to true
//   // const songUrl = "../../assets/mp3/music1.mp3"; // Replace with your song URL

//   // const togglePlay = () => {
//   //   const audioElement = document.querySelector("audio");
//   //   if (audioElement) {
//   //     audioElement.play(); // Play the audio directly
//   //   } else {
//   //     console.error("Audio element not found!"); // Log error if not found
//   //   }
//   //   // Optionally close the modal after a short delay
//   //   setTimeout(() => setOpen(false), 1000); // Close after 1 second
//   // };

//   const [open, setOpen] = useState(false);
//   const [play, setPlay] = useState(true);
//   const audioRef = useRef<any>();

//   const pause = () => {
//     setPlay(false);
//     audioRef.current.pause();
//   };

//   const notPause = () => {
//     setPlay(true);
//     audioRef.current.play();
//   };

//   useEffect(() => {
//     if (hash) {
//       const a = document.createElement("a");
//       a.setAttribute("href", hash);
//       a.click();
//     } else {
//       window.scrollY = 0;
//     }
//   }, [hash]);

//   return (
//     <>
//       <Modal
//         open={open}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           {/* <button
//             onClick={() => (
//               setPlay(!play),
//               play ? audioRef!.current!.pause() : audioRef!.current!.play()
//             )}
//           ></button> */}
//           <Button
//             startIcon={<MusicNoteIcon />}
//             variant="contained"
//             sx={{
//               textTransform: "none",
//               color: "#fff",
//               background: "#222222",
//               "&:hover": { background: "#222222" },
//             }}
//             onClick={() => (
//               setPlay(!play),
//               play ? audioRef!.current!.pause() : audioRef!.current!.play()
//             )}
//           >
//             Play Music
//           </Button>
//           {/* <audio src={songUrl} controls autoPlay hidden></audio> */}
//           <audio
//             loop
//             autoPlay
//             ref={audioRef}
//             src={import.meta.env.VITE_URL + "../../assets/mp3/music1.mp3"}
//           ></audio>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default MusicPlayer;
