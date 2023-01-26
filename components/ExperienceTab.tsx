import { TabPanel, Tabs, Flex, TabList, Stack, Tab, Divider, TabPanels, UnorderedList, ListItem, Text, Box, Button, IconButton } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function ExperienceTab() {
  const tabsData = [
    {
      dataType: "multiple",
      title: "Multimedia Nusantara University",
      contribution: "Student",
      place: "Multimedia Nusantara University",
      date: "AUG 2021 - PRESENT",
      content: [
        {
          title: "MAXIMA 2022 (Campus Organization)",
          github: "https://github.com/MAXIMA-2022/mxm22-app-client",
          externalLink: "",
          description:
            "MAXIMA is a campus organization that is responsible for organizing the annual event of Multimedia Nusantara University. Through this organization, I become its Front-End Developer for about a year. I developed a website for students especially freshmen to explore campus activities in terms of academic and non-academic.",
        },
        {
          title: "Laboratorium Assistant",
          github: "",
          externalLink: "",
          description: "-",
        },
      ],
    },
    {
      dataType: "single",
      title: "COMPFEST 2022",
      contribution: "Participant",
      place: "",
      date: "JUL 2022 - SEPT 2022",
      content: [
        {
          title: "COMPFEST 2022 (National Competition)",
          description:
            "COMPFEST 2022 is one of the largest one-stop IT events in Indonesia organized by students of Universitas Indonesia Faculty of Computer Science. In this event, I collaborate with my friend and registered for SCPC (Senior Competitive Programming Contest).",
        },
      ],
    },
  ];

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

  return (
    <Tabs variant={"unstyled"}>
      <Flex display={["block", "flex"]} w={"full"} justifyContent={"space-between"}>
        <TabList position={"sticky"}>
          <Stack direction={["column"]} spacing={4}>
            {tabsData.map((tab, index) => (
              <Tab
                key={index}
                w={"16.1em"}
                h={"3.5em"}
                justifyContent={["center", "start"]}
                bgColor={"white"}
                zIndex={"1"}
                transition={"0.2s ease-in-out"}
                _selected={{
                  bgColor: "white",
                  outline: "3px solid black",
                }}

                // _hover={{
                //   outline: "3px solid gray",
                // }}
              >
                <Text fontSize={"lg"} fontWeight={"bold"}>
                  {tab.title}
                </Text>
              </Tab>
            ))}
          </Stack>
        </TabList>
        <Divider h={"auto"} my={["1em", "0"]} ms={["0", "1em"]} borderWidth={"0.1em"} orientation={"vertical"} borderRadius={"full"} borderColor={"#000"} opacity={1} />
        <TabPanels maxH={"40em"} overflow={"auto"} px={["0", "1.5em"]}>
          {tabsData.map((tab, index) => (
            <TabPanel p={0} h={"30em"} key={index}>
              <Box>
                <InViewWordsRef>
                  <Box>
                    <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"start"}>
                      {tab.contribution} @{" "}
                      <span
                        style={{
                          textDecoration: "underline",
                          textDecorationColor: "#0984E3",
                        }}
                      >
                        {tab.title}
                      </span>
                    </Text>
                  </Box>
                  <Box mt={"-0.5em"}>
                    <Text fontSize={"xl"} fontWeight={"bold"} textAlign={"start"}>
                      {tab.date}
                    </Text>
                  </Box>
                </InViewWordsRef>
                {tab.content?.map((content, index) => (
                  <InViewWordsRef2 key={index}>
                    <Box mt={"1.5em"} ms={"0.2em"} p={"1.5em"} bgColor={"#EDF2F7"} borderRadius={"lg"}>
                      <Stack direction={"row"} spacing={4}>
                        <Box>
                          <Flex justifyContent={"space-between"} alignItems={"center"}>
                            <Box>
                              <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"start"}>
                                {content.title}
                              </Text>
                            </Box>
                            {/* <Box>
                              <Stack direction="row" spacing={"-1em"}>
                                <Box display={content.github ? "flex" : "none"}>
                                  <IconButton icon={<BsGithub />} display={"inline-flex"} colorScheme={"black"} size="lg" color={"black"} _hover={{ color: "#718096" }} aria-label={""} />
                                </Box>
                                <Box display={content.externalLink ? "flex" : "none"}>
                                  <IconButton icon={<ExternalLinkIcon />} display={"inline-flex"} colorScheme={"black"} size="lg" color={"black"} _hover={{ color: "#718096" }} aria-label={""} />
                                </Box>
                              </Stack>
                            </Box> */}
                          </Flex>
                          <Text fontSize={"xl"} textAlign={"justify"}>
                            {content.description}
                          </Text>
                        </Box>
                      </Stack>
                    </Box>
                  </InViewWordsRef2>
                ))}
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Flex>
    </Tabs>
  );
}
