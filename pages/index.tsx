import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

//importing local components
import WelcomeLayout from "../components/WelcomeLayout";
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";

//importing Chakra UI components
import { Box, Flex, Heading, Text, Center, Button, background } from "@chakra-ui/react";

//importing GSAP
import { gsap } from "gsap";

//importing Framer Motion components
import { motion, transform } from "framer-motion";

const Welcome: NextPage = () => {
  //magnet button animation
  const moveMagnet = (e: any) => {
    var strength = 40;
    var magnetButton = e.currentTarget;
    var bounding = magnetButton.getBoundingClientRect();

    gsap.to(".welcome-text", {
      duration: 1,
      x: ((e.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) * strength,
      y: ((e.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) * strength,
      ease: "power4.out",
    });
  };

  const resetMagnet = () => {
    gsap.to(".welcome-text", {
      duration: 1,
      x: 0,
      y: 0,
      ease: "power4.out",
    });
  };

  //animation for page transition
  const [isClicked, setIsClicked] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dotLoaded, setDotLoaded] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      setIsLoaded(true);
    }, 500);
    setTimeout(async () => {
      setDotLoaded(true);
    }, 1000);

    if (isClicked) {
      setTimeout(async () => {
        Router.push("/home");
      }, 500);
    }
  }),
    [];

  const welcomeAnimation = {
    welcome: { opacity: 1 },
    loading: { opacity: 0 },
  };

  const dotAnimation = {
    welcome: { opacity: 1 },
    loading: { opacity: 0 },
  };

  const pageTransition = {
    goToHome: {
      opacity: 1,
      scale: 150,
      transition: {
        duration: 0.7,
      },
    },
    welcome: {
      opacity: 1,
    },
  };

  return (
    <WelcomeLayout>
      <Center position={"fixed"} zIndex={1}>
        <motion.div animate={dotLoaded ? "welcome" : "loading"} variants={dotAnimation}>
          <motion.div animate={isClicked ? "goToHome" : "welcome"} variants={pageTransition}>
            <Box w={"15px"} h={"15px"} bgColor={"#DFE6E9"} borderRadius={"full"}></Box>
          </motion.div>
        </motion.div>
      </Center>
      <Center
        w={"25em"}
        h={"20em"}
        onMouseMove={(e: any) => {
          moveMagnet(e);
        }}
        onMouseLeave={(e: any) => {
          resetMagnet();
        }}
      >
        <motion.div animate={isLoaded ? "welcome" : "loading"} variants={welcomeAnimation}>
          {isClicked ? (
            <Button zIndex={-1}></Button>
          ) : (
            <Button
              className={"welcome-text"}
              padding={"1em"}
              colorScheme={"black"}
              bgColor={"white"}
              border={"2px solid black"}
              borderRadius={"full"}
              size="lg"
              color={"black"}
              zIndex={99}
              _hover={{ backgroundColor: "black", color: "white", border: "none" }}
              onClick={() => {
                {
                  isClicked ? setIsClicked(false) : setIsClicked(true);
                }
              }}
            >
              <Text fontSize={"xl"}>Hello World</Text>
            </Button>
          )}
        </motion.div>
      </Center>
    </WelcomeLayout>
  );
};

export default Welcome;
