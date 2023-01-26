/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import React, { useEffect, useState, useRef } from "react";

//importing local components
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ModalForm from "../components/ModalForm";

//importing Chakra UI components
import { Box, Flex, Heading, Text, Center, Button, Stack, Tooltip } from "@chakra-ui/react";

//importing framer motion components
import { motion, transform, useInView } from "framer-motion";

//importing chakra ui icons
import { EmailIcon } from "@chakra-ui/icons";

const Home: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const blockMain = {
    visible: {
      opacity: 1,
      x: "0%",
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 1,
      x: "0%",
      transition: {},
    },
  };

  const blockChildren = {
    visible: {
      opacity: 1,
      x: "0%",
    },
    hidden: {
      opacity: 0,
      x: "-25%",
    },
  };

  const headerWordMain = {
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.4,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      y: "0",
      transition: {},
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  const headerWordChildren = {
    hidden: {
      y: "0",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const aboutMeTitle = {
    visible: {
      opacity: 1,
      x: "0%",
      transition: {
        delay: 2.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      x: "-5%",
      transition: {},
    },
  };

  const Title = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  return (
    <Layout>
      <Box>
        <motion.div>
          <Stack direction={"row"} spacing={3} mb={"0.5em"}>
            <motion.div variants={blockChildren} initial={"hidden"} animate={"visible"} transition={{ delay: 1.2 }}>
              <Tooltip label={"Go to About me"} fontSize={"md"} placement={"top"} bg={"white"} color={"black"} border={"1.5px solid black"} hasArrow>
                <Box w={"3em"} h={"1em"} bgColor={"#D63031"} borderRadius={"0.3em"} mb={"0.5em"} border={"2px solid black"} _hover={{ cursor: "pointer" }}></Box>
              </Tooltip>
            </motion.div>
            <motion.div variants={blockChildren} initial={"hidden"} animate={"visible"} transition={{ delay: 1 }}>
              <Tooltip label={"Go to "} fontSize={"md"} placement={"top"} bg={"white"} color={"black"} border={"1.5px solid black"} hasArrow>
                <Box w={"3em"} h={"1em"} bgColor={"#0984E3"} borderRadius={"0.3em"} mb={"0.5em"} border={"2px solid black"} _hover={{ cursor: "pointer" }}></Box>
              </Tooltip>
            </motion.div>
            <motion.div variants={blockChildren} initial={"hidden"} animate={"visible"} transition={{ delay: 0.8 }}>
              <Tooltip label={"Go to "} fontSize={"md"} placement={"top"} bg={"white"} color={"black"} border={"1.5px solid black"} hasArrow>
                <Box w={"3em"} h={"1em"} bgColor={"#00B894"} borderRadius={"0.3em"} mb={"0.5em"} border={"2px solid black"} _hover={{ cursor: "pointer" }}></Box>
              </Tooltip>
            </motion.div>
          </Stack>
        </motion.div>
      </Box>
      <motion.div variants={headerWordMain} initial={"hidden"} animate={"visible"} exit={"exit"}>
        <Box w={"full"} bgColor={"white"} p={"2em"} border={"3px solid black"} boxShadow={"8px 8px 0px 0px black"} transition={"0.2s ease-in-out"} _hover={{ boxShadow: "11px 11px 0px 0px black" }}>
          <Box className={"header"}>
            <motion.div variants={headerWordChildren}>
              <Text fontSize={["xl", "5xl"]}>
                Howdy! <span style={{ fontWeight: "bold" }}>Naufal Syarif</span> here.
              </Text>
            </motion.div>
            <motion.div variants={headerWordChildren}>
              <Text fontSize={"2xl"}>
                I'm a college student based in Tangerang, Indonesia. I am incredibly interested in front-end development, creative development, and full-stack development. All I am interested in are both web and mobile applications.
                currently looking for some opportunities to work with a team.
              </Text>
            </motion.div>
            <motion.div variants={headerWordChildren}>
              <Text fontSize={"2xl"}>
                {" "}
                <br /> Btw nice to meet ya'll! Why don't you get in touch with me? 👀
              </Text>
            </motion.div>
            <motion.div variants={headerWordChildren}>
              <Stack direction={"row"} spacing={2} mt={"1.5em"}>
                <Button leftIcon={<EmailIcon />} size={"lg"} variant={"solid"} bgColor={"#FDCB6E"} color={"black"} borderRadius={"lg"} border={"2px solid black"}>
                  Say hi!
                </Button>
                {/* <Button w={"5em"} colorScheme={"black"} bgColor={"white"} border={"2px solid black"} borderRadius={"full"} size="md" color={"black"} _hover={{ backgroundColor: "black", color: "white" }}>
              <Text>Download CV</Text>
            </Button> */}
              </Stack>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
      <Box className={"about"} mt={"5em"}>
        <Title>
          <Box w={"13em"} bgColor={"#D63031"} borderRadius={"2xl"} p={"0.5em"} border={"3px solid black"}>
            <Box bgColor={"white"} borderRadius={"2xl"} border={"3px solid black"} p={"0.1em 0.5em"}>
              <Text fontSize={"3xl"} fontWeight={"bold"} align={"center"}>
                About Me
              </Text>
            </Box>
          </Box>
        </Title>
        <Box mt={"25em"}>
          <Text fontSize={"2xl"}>I'm a sophomore Informatics major at Multimedia Nusantara University. </Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
