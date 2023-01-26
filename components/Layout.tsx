import React, { useState, useEffect } from "react";

//importing local components
import Navbar from "./Navbar";

//importing chakra ui components
import { Box, Flex, Center, Text } from "@chakra-ui/react";

//importing chakra ui icons
import { TriangleDownIcon } from "@chakra-ui/icons";

//imporing framer motion components
import { motion } from "framer-motion";
import AdminModal from "./AdminModal";

const Layout = ({ children }: any) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

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

  useEffect(() => {
    setTimeout(async () => {
      setIsLoaded(true);
    }, 1000);

    onscroll = (e: any) => {
      if (e.deltaY > 0 || window.scrollY > 0) {
        setIsScrolling(true);
        console.log("scrolling down");
      } else {
        setTimeout(async () => {
          setIsScrolling(false);
        }, 5000);
      }
    };
  }),
    [];

  const mainVariant = {
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 0.3,
        all: "0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      },
    },
    hidden: {
      opacity: 0,
      y: "-150%",
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  const revealing = {
    visible: {
      opacity: 1,
      transition: {
        delay: 2.8,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const scrollAnimation = {
    scroll: {
      opacity: 1,
      y: "10px",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
    loading: {
      opacity: 1,
      y: "5px",
    },
  };

  return (
    <Box
      className={"page"}
      minH={"100vh"}
      backgroundColor={"#DFE6E9 "}
      overflow={"hidden"}
      onMouseMove={(e: any) => {
        // cursorMove(e);
      }}
      onClick={(e: any) => {
        // cursorClick(e);
      }}
    >
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
      // zIndex={9999}
      />
      <Box position={"fixed"} left={0} right={0} zIndex={99}>
        <Box>
          <AdminModal />
        </Box>
        <motion.div variants={mainVariant} initial={"hidden"} animate={"visible"} exit={"exit"}>
          <Navbar />
        </motion.div>
      </Box>
      <Box p={{ base: "8em 0em", xl: "8em 12.5em" }} mx={{ base: "1em", lg: "2em", xl: "0em" }}>
        {children}
        <Center position={"fixed"} left={0} bottom={0} right={0} mb={"2em"}>
          <motion.div variants={revealing} initial={"hidden"} animate={"visible"}>
            <Box w={"10em"} opacity={isScrolling ? "0%" : "100%"} transition={"0.2s"}>
              <motion.div
                animate={{
                  y: [5, 0, 5, 0, 5],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <Text fontSize={"xl"} fontWeight={"bold"} align={"center"}>
                  Scroll Down
                </Text>
                <Text align={"center"} fontSize={"xl"} mt={"-0.3em"}>
                  <TriangleDownIcon />
                </Text>
              </motion.div>
            </Box>
          </motion.div>
        </Center>
      </Box>
    </Box>
  );
};

export default Layout;
