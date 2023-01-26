/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import React, { useEffect, useState, useRef } from "react";
import Img from "next/image";

//importing local components
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ModalForm from "../components/ModalForm";
import ProjectsTab from "../components/ProjectsTab";

//importing Chakra UI components
import {
  Box,
  Flex,
  Heading,
  Text,
  Center,
  Button,
  Stack,
  Tooltip,
  Image,
  Link,
  Wrap,
  WrapItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Divider,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";

//importing framer motion components
import { motion, transform, useInView } from "framer-motion";

//importing chakra ui icons
import { EmailIcon } from "@chakra-ui/icons";

//importing react-icons icons
import { FaHtml5, FaCss3, FaCss3Alt, FaPython, FaJs, FaReact, FaRegWindowMinimize, FaWindowMinimize } from "react-icons/fa";
import { SiJavascript, SiLua } from "react-icons/si";
import { TbBrandNextjs, TbRectangle } from "react-icons/tb";
import { AiFillCloseSquare } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { VscChromeMinimize } from "react-icons/vsc";
import AdminModal from "../components/AdminModal";
import ExperienceTab from "../components/ExperienceTab";

const Home: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isSmallerThan769] = useMediaQuery("(max-width: 768px)");

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

  const InViewTitle = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s ease-in-out 0.3s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  const InView1 = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s ease-in-out 0.3s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  const InView2 = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s ease-in-out 0.3s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  const InViewWords = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s ease-in-out 0.5s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  const InViewWords2 = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s ease-in-out 0.7s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  const InViewWords3 = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s ease-in-out 0.9s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  const InViewWords4 = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s ease-in-out 1.1s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  const InViewWordsRef = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s ease-in-out 0s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  const InViewWordsRef2 = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s ease-in-out 0.1s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  const InViewWordsRef3 = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s ease-in-out 0.2s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  const InViewWordsRef4 = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s ease-in-out 0.3s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  const InViewWordsRef5 = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s ease-in-out 0.4s",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  };

  const Home = () => {
    return (
      <>
        <Box>
          <motion.div>
            <Stack direction={"row"} spacing={3} mb={"0.5em"}>
              <motion.div variants={blockChildren} initial={"hidden"} animate={"visible"} transition={{ delay: 1.2 }}>
                <Tooltip label={"Go to About me"} fontSize={"md"} placement={"top"} bg={"white"} color={"black"} border={"1.5px solid black"} hasArrow>
                  <Link href={"#about"}>
                    <Box w={"3em"} h={"1em"} bgColor={"#D63031"} borderRadius={"0.3em"} mb={"0.5em"} border={"2px solid black"} _hover={{ cursor: "pointer" }}></Box>
                  </Link>
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
          <Box w={"full"} bgColor={"white"} p={["1.5em", "2em"]} border={"3px solid black"} boxShadow={["none", "8px 8px 0px 0px black"]} transition={"0.2s ease-in-out"} _hover={{ boxShadow: "11px 11px 0px 0px black" }}>
            <Box className={"header"}>
              <motion.div variants={headerWordChildren}>
                <Text fontSize={["3xl", "5xl"]}>
                  Howdy! <span style={{ fontWeight: "bold" }}>Naufal Syarif</span> here.
                </Text>
              </motion.div>
              <motion.div variants={headerWordChildren}>
                <Text fontSize={"2xl"} textAlign={"justify"}>
                  I'm a college student based in Tangerang, Indonesia. I am incredibly interested in front-end development, creative development, and full-stack development. All I am interested in are both web and mobile applications.
                  currently looking for some opportunities to work with a team.
                </Text>
              </motion.div>
              <motion.div variants={headerWordChildren}>
                <Text fontSize={"2xl"} textAlign={"justify"}>
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
      </>
    );
  };

  const About = () => {
    return (
      <>
        <Box id={"about"} className={"about"} mt={"5em"}>
          <InViewTitle>
            <Box w={"13em"} bgColor={"#D63031"} borderRadius={"2xl"} p={"0.5em"} outline={"3px solid black"}>
              <Box bgColor={"white"} borderRadius={"2xl"} border={"3px solid black"}>
                <Text fontSize={"3xl"} fontWeight={"bold"} align={"center"}>
                  About Me
                </Text>
              </Box>
            </Box>
          </InViewTitle>
          <Box>
            <Stack mt={"2em"} direction={["column-reverse", "row"]} spacing={8}>
              <InView1>
                <Box
                  w={"full"}
                  h={["auto", "auto", "auto", "27em", "29.2em"]}
                  bgColor={"white"}
                  outline={"3px solid black"}
                  borderRadius={"xl"}
                  boxShadow={["none", "8px 8px 0px 0px black"]}
                  transition={"0.2s ease-in-out"}
                  _hover={{ boxShadow: "11px 11px 0px 0px black" }}
                >
                  <Box borderRadius={"xl"} bgColor={"#D63031"}>
                    <Flex justifyContent={"start"} alignItems={"center"} p={"1.5em 1.2em"} w={"full"} h={"1.5em"} borderTopRadius={"xl"} outline={"3px solid black"}>
                      <Stack direction={"row"} spacing={3}>
                        <Box w={"1.2em"} h={"1.2em"} bgColor={"white"} borderRadius={"full"} border={"2px solid black"}></Box>
                        <Box w={"1.2em"} h={"1.2em"} bgColor={"white"} borderRadius={"full"} border={"2px solid black"}></Box>
                        <Box w={"1.2em"} h={"1.2em"} bgColor={"white"} borderRadius={"full"} border={"2px solid black"}></Box>
                      </Stack>
                    </Flex>
                    <Flex p={["1.5em", "2em"]} bgColor={"white"} overflow={"hidden"} borderBottomRadius={"xl"}>
                      <Stack maxW={["35em", "35em", "45em", "45em", "full"]} direction={"column"} spacing={4} me={["0em", "0em", "3em", "3em", "6em"]}>
                        <InViewWords>
                          <Text fontSize={"2xl"} textAlign={"justify"}>
                            Btw let's get to know me! 🤩
                          </Text>
                        </InViewWords>
                        <InViewWords2>
                          <Text fontSize={"2xl"} textAlign={"justify"}>
                            I'm a second year Informatics student at <span style={{ fontWeight: "bold" }}>Multimedia Nusantara University</span>. Nowadays, I'm focusing on my studies and desire to sell services website building on
                            <span style={{ fontWeight: "bold" }}> Fiverr</span>.
                          </Text>
                        </InViewWords2>
                        <InViewWords3>
                          <Text fontSize={"2xl"} textAlign={"justify"}>
                            After graduating from university, I have a desire to start my own business related to my major. With this lil about me, I hope you get to know me better!
                          </Text>
                        </InViewWords3>
                      </Stack>
                      {/* <InViewWords4> */}
                      {/* <Box> */}
                      <Image
                        display={["none", "none", "block", "block", "block"]}
                        src={"/me.png"}
                        alt={"me"}
                        boxSize={["225px", "225px", "150px", "175px", "225px"]}
                        objectFit={"contain"}
                        transform={"scaleX(-1)"}
                        borderRadius={"xl"}
                        outline={"3px solid black"}
                        // boxShadow={"8px 8px 0px 0px black"}
                        transition={"0.2s ease-in-out"}
                        // _hover={{ transform: "scale(1.1)" }}
                      />
                      {/* </Box> */}
                      {/* </InViewWords4> */}
                    </Flex>
                  </Box>
                </Box>
              </InView1>
              <InView2>
                <Flex
                  display={["none", "none", "none", "block", "block"]}
                  w={["10em", "10em", "10em", "10em", "10em"]}
                  h={["auto", "auto", "auto", "27em", "29.2em"]}
                  bgColor={"#D63031"}
                  outline={"3px solid black"}
                  borderRadius={"xl"}
                  boxShadow={["none", "8px 8px 0px 0px black"]}
                  transition={"0.2s ease-in-out"}
                  _hover={{ boxShadow: "11px 11px 0px 0px black" }}
                ></Flex>
              </InView2>
            </Stack>
          </Box>
        </Box>
      </>
    );
  };

  const Experience = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Box id={"experience"} className={"experience"} mt={"5em"}>
          <InViewTitle>
            <Box w={"13em"} bgColor={"#0984E3"} p={"0.5em"} outline={"3px solid black"}>
              <Box bgColor={"white"} border={"3px solid black"}>
                <Text fontSize={"3xl"} fontWeight={"bold"} align={"center"}>
                  Experience
                </Text>
              </Box>
            </Box>
          </InViewTitle>
          <Stack direction={"row"} mt={"2em"} spacing={7}>
            {/* <Box display={["none", "block"]}>
              <Stack direction={"column"} spacing={[0, 6]}>
                <Flex
                  display={["none", "none", "none", "block", "block"]}
                  w={["10em", "10em", "10em", "10em", "10em"]}
                  h={"5em"}
                  bgColor={"#0984E3"}
                  outline={"3px solid black"}
                  // boxShadow={"8px 8px 0px 0px black"}
                  transition={"0.2s ease-in-out"}
                  _hover={{ boxShadow: "11px 11px 0px 0px black" }}
                ></Flex>
                <Flex
                  display={["none", "none", "none", "block", "block"]}
                  w={["10em", "10em", "10em", "10em", "10em"]}
                  h={"5em"}
                  bgColor={"#0984E3"}
                  outline={"3px solid black"}
                  // boxShadow={"8px 8px 0px 0px black"}
                  transition={"0.2s ease-in-out"}
                  _hover={{ boxShadow: "11px 11px 0px 0px black" }}
                ></Flex>
                <Flex
                  display={["none", "none", "none", "block", "block"]}
                  w={["10em", "10em", "10em", "10em", "10em"]}
                  h={"5em"}
                  bgColor={"#0984E3"}
                  outline={"3px solid black"}
                  // boxShadow={"8px 8px 0px 0px black"}
                  transition={"0.2s ease-in-out"}
                  _hover={{ boxShadow: "11px 11px 0px 0px black" }}
                ></Flex>
              </Stack>
            </Box> */}
            <Box w={"full"}>
              <Tabs variant={"unstyled"} bgColor={"#0984E3"} size={"lg"} outline={"3px solid black"} boxShadow={["none", "8px 8px 0px 0px black"]} transition={"0.2s ease-in-out"} _hover={{ boxShadow: "11px 11px 0px 0px black" }}>
                <Flex p={"0.5em"} justifyContent={"end"} alignContent={"center"}>
                  <Stack direction={"row"} spacing={2}>
                    <Box
                      w={"2.5em"}
                      bgColor={"white"}
                      border={"3px solid black"}
                      _hover={{
                        bgColor: "#DBDBDB",
                        cursor: "pointer",
                      }}
                      transition={"0.1s ease-in-out"}
                    >
                      <Center>
                        <Text fontSize={"3xl"} fontWeight={"bold"} align={"center"}>
                          <VscChromeMinimize />
                        </Text>
                      </Center>
                    </Box>
                    <Box
                      w={"2.5em"}
                      bgColor={"white"}
                      border={"3px solid black"}
                      _hover={{
                        bgColor: "#DBDBDB",
                        cursor: "pointer",
                      }}
                      transition={"0.1s ease-in-out"}
                      onClick={onOpen}
                    >
                      <Center>
                        <Text fontSize={"3xl"} fontWeight={"bold"} align={"center"}>
                          <TbRectangle />
                        </Text>
                      </Center>
                    </Box>
                    <Box
                      w={"2.5em"}
                      bgColor={"#D63031"}
                      border={"3px solid black"}
                      _hover={{
                        bgColor: "#B12B2C",
                        cursor: "pointer",
                      }}
                      transition={"0.1s ease-in-out"}
                    >
                      <Center>
                        <Text fontSize={"3xl"} fontWeight={"bold"} align={"center"}>
                          <GrFormClose />
                        </Text>
                      </Center>
                    </Box>
                  </Stack>
                </Flex>
                <TabList p={["0 0.5em", "0em 2em 0em 2em"]}>
                  <Stack direction={"row"} spacing={4} overflow={"auto"}>
                    <Tab
                      w={"8em"}
                      _selected={{
                        bgColor: "white",
                        borderTop: "3px solid black",
                        borderLeft: "3px solid black",
                        borderRight: "3px solid black",
                      }}
                      zIndex={1}
                    >
                      <Text fontSize={"xl"} fontWeight={"bold"}>
                        Experience
                      </Text>
                    </Tab>
                    <Tab
                      w={"8em"}
                      _selected={{
                        bgColor: "white",
                        borderTop: "3px solid black",
                        borderLeft: "3px solid black",
                        borderRight: "3px solid black",
                      }}
                      zIndex={1}
                    >
                      <Text fontSize={"xl"} fontWeight={"bold"}>
                        Lab
                      </Text>
                    </Tab>
                    <Tab
                      w={"8em"}
                      _selected={{
                        bgColor: "white",
                        borderTop: "3px solid black",
                        borderLeft: "3px solid black",
                        borderRight: "3px solid black",
                      }}
                      zIndex={1}
                    >
                      <Text fontSize={"xl"} fontWeight={"bold"}>
                        Projects
                      </Text>
                    </Tab>
                  </Stack>
                </TabList>
                <TabPanels>
                  <TabPanel p={"3em 2em"} bgColor={"white"} outline={"3px solid black"}>
                    <ExperienceTab />
                  </TabPanel>
                  <TabPanel bgColor={"white"} outline={"3px solid black"}>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel bgColor={"white"} outline={"3px solid black"} p={"1em 2em"}>
                    <ProjectsTab />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Stack>
          <Modal onClose={onClose} isOpen={isOpen} isCentered size={"xl"}>
            <ModalOverlay />
            <ModalContent outline={"3px solid black"} bgColor={"white"} borderRadius={"none"}>
              <Stack direction={"row"} spacing={7}>
                <Box w={"full"}>
                  <Tabs variant={"unstyled"} bgColor={"#0984E3"} size={"lg"} outline={"3px solid black"} transition={"0.2s ease-in-out"}>
                    <Flex p={"0.8em"} justifyContent={"end"} alignContent={"center"}>
                      <Stack direction={"row"} spacing={2}>
                        <Box
                          w={"2.5em"}
                          bgColor={"#D63031"}
                          border={"3px solid black"}
                          _hover={{
                            bgColor: "#B12B2C",
                            cursor: "pointer",
                          }}
                          transition={"0.1s ease-in-out"}
                          onClick={onClose}
                        >
                          <Center>
                            <Text fontSize={"3xl"} fontWeight={"bold"} align={"center"}>
                              <GrFormClose />
                            </Text>
                          </Center>
                        </Box>
                      </Stack>
                    </Flex>
                    <TabList p={"0em 2em 0em 2em"}>
                      <Stack direction={"row"} spacing={4}>
                        <Tab
                          w={"8em"}
                          _selected={{
                            bgColor: "white",
                            borderTop: "3px solid black",
                            borderLeft: "3px solid black",
                            borderRight: "3px solid black",
                          }}
                          zIndex={1}
                        >
                          <Text fontSize={"xl"} fontWeight={"bold"}>
                            Experience
                          </Text>
                        </Tab>
                        <Tab
                          w={"8em"}
                          _selected={{
                            bgColor: "white",
                            borderTop: "3px solid black",
                            borderLeft: "3px solid black",
                            borderRight: "3px solid black",
                          }}
                          zIndex={1}
                        >
                          <Text fontSize={"xl"} fontWeight={"bold"}>
                            Lab
                          </Text>
                        </Tab>
                        <Tab
                          w={"8em"}
                          _selected={{
                            bgColor: "white",
                            borderTop: "3px solid black",
                            borderLeft: "3px solid black",
                            borderRight: "3px solid black",
                          }}
                          zIndex={1}
                        >
                          <Text fontSize={"xl"} fontWeight={"bold"}>
                            Projects
                          </Text>
                        </Tab>
                      </Stack>
                    </TabList>
                    <TabPanels>
                      <TabPanel bgColor={"white"} outline={"3px solid black"}>
                        <Text fontSize={"2xl"}>tes</Text>
                      </TabPanel>
                      <TabPanel bgColor={"white"} outline={"3px solid black"}>
                        <p>two!</p>
                      </TabPanel>
                      <TabPanel bgColor={"white"} outline={"3px solid black"}>
                        <p>three!</p>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </Box>
              </Stack>
            </ModalContent>
          </Modal>
        </Box>
      </>
    );
  };

  return (
    <Layout>
      <Home />
      <About />
      <Experience />
    </Layout>
  );
};

export default Home;
