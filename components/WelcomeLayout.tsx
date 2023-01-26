import React, { useState, useEffect } from "react";

//importing local components
import Navbar from "./Navbar";

//importing chakra ui components
import { Box, Flex, Center, background, transition } from "@chakra-ui/react";

//imporing framer motion components
import { motion } from "framer-motion";
import AdminModal from "./AdminModal";

const WelcomeLayout = ({ children }: any) => {
  const [isClicked, setIsClicked] = useState(false);

  // const cursorMove = (e: any) => {
  //   const cursor: any = document.querySelector(".cursor");
  //   cursor.style.left = e.pageX + "px";
  //   cursor.style.top = e.pageY + "px";
  // };

  // const cursorClick = (e: any) => {
  //   const cursor: any = document.querySelector(".cursor");
  //   {
  //     isClicked ? setIsClicked(false) : setIsClicked(true);
  //   }
  // };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      setIsLoaded(true);
    }, 1000);
  }),
    [];

  const welcomeAnimation = {
    welcome: {
      opacity: 1,
    },
    loading: { opacity: 0 },
  };

  return (
    <Center
      className={"page"}
      minH={"100vh"}
      backgroundColor={"#FDCB6E "}
      overflow={"hidden"}
      onMouseMove={(e: any) => {
        // cursorMove(e);
      }}
      onClick={(e: any) => {
        // cursorClick(e);
      }}
    >
      <motion.div animate={isLoaded ? "welcome" : "loading"} variants={welcomeAnimation}>
        <Box
        // display={{ base: "none", lg: "block" }}
        // className={"cursor"}
        // position={"fixed"}
        // w={"12.5px"}
        // h={"12.5px"}
        // borderRadius={"full"}
        // bgColor={"white"}
        // transform={"translate(-50%, -50%)"}
        // pointerEvents={"none"}
        // mixBlendMode={"difference"}
        // zIndex={999}
        />
      </motion.div>
      <AdminModal />
      {children}
    </Center>
  );
};

export default WelcomeLayout;
