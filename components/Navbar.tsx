import { useState } from "react";
import { useRouter } from "next/router";

//importing Chakra UI components
import { Box, Heading, Flex, Text, Stack, Button, IconButton, Center, useDisclosure, DrawerOverlay, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerCloseButton, Divider } from "@chakra-ui/react";

//importing react-icons icons
import { BsGithub, BsLink, BsLinkedin } from "react-icons/bs";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");

  return (
    <Flex position={"sticky"} justifyContent={"space-between"} padding={"0.5em"} paddingX={{ base: "1em", md: "2em", xl: "12.5em" }} bgColor={"#FDCB6E"} borderBottom={"2px solid black"} boxShadow={"md"}>
      <Flex>
        <Stack direction="row" spacing={2}>
          <Button padding={"1em"} colorScheme={"black"} bgColor={"white"} border={"2px solid black"} borderRadius={"full"} size="md" color={"black"} _hover={{ backgroundColor: "black", color: "white" }}>
            <Text>Naufal Syarif</Text>
          </Button>
        </Stack>
      </Flex>
      <Flex>
        <Stack direction={"row"} spacing={4}>
          <Button
            display={{ base: "none", lg: "flex" }}
            padding={"1em"}
            colorScheme={"black"}
            bgColor={"white"}
            border={"2px solid black"}
            borderRadius={"full"}
            size="md"
            color={"black"}
            _hover={{ backgroundColor: "black", color: "white" }}
          >
            <Text>Home</Text>
          </Button>
          <Button
            display={{ base: "none", lg: "flex" }}
            padding={"1em"}
            colorScheme={"black"}
            bgColor={"white"}
            border={"2px solid black"}
            borderRadius={"full"}
            size="md"
            color={"black"}
            _hover={{ backgroundColor: "black", color: "white" }}
          >
            <Text>Experience</Text>
          </Button>
        </Stack>
      </Flex>
      <Flex>
        <Stack direction="row" spacing={2}>
          <IconButton
            icon={<BsGithub />}
            display={{ base: "none", lg: "flex" }}
            padding={"1em"}
            colorScheme={"black"}
            bgColor={"white"}
            border={"2px solid black"}
            borderRadius={"full"}
            size="md"
            color={"black"}
            _hover={{ backgroundColor: "black", color: "white" }}
            aria-label={""}
          />
          <IconButton
            icon={<BsLinkedin />}
            display={{ base: "none", lg: "flex" }}
            padding={"1em"}
            colorScheme={"black"}
            bgColor={"white"}
            border={"2px solid black"}
            borderRadius={"full"}
            size="md"
            color={"black"}
            _hover={{ backgroundColor: "black", color: "white" }}
            aria-label={""}
          />
          <Button display={{ base: "block", lg: "none" }} colorScheme={"none"} transform={"rotate(180deg)"} onClick={onOpen}>
            <RiBarChartHorizontalLine size={20} color={"black"} />
          </Button>
        </Stack>
      </Flex>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen} size={"xs"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bgColor={"#FDCB6E"} border={"2px solid black"} py={"1.15em"}>
            {/* Basic Drawer */}
          </DrawerHeader>
          <DrawerBody borderRight={"2px solid black"} borderBottom={"2px solid black"} borderLeft={"2px solid black"}>
            <Stack direction={"column"} spacing={3} mt={"0.5em"} mb={"5em"}>
              <Button colorScheme={"black"} bgColor={"white"} border={"2px solid black"} borderRadius={"md"} size="md" color={"black"} _hover={{ backgroundColor: "black", color: "white" }}>
                Home
              </Button>
              <Button colorScheme={"black"} bgColor={"white"} border={"2px solid black"} borderRadius={"md"} size="md" color={"black"} _hover={{ backgroundColor: "black", color: "white" }}>
                Experience
              </Button>
            </Stack>
            <Divider />
            <Stack direction={"column"} spacing={3} mt={"1em"} mb={"5em"}>
              <IconButton
                icon={<BsGithub />}
                padding={"1em"}
                colorScheme={"black"}
                bgColor={"black"}
                border={"2px solid "}
                borderRadius={"md"}
                size="md"
                color={"white"}
                _hover={{ backgroundColor: "black", color: "white" }}
                aria-label={""}
              />
              <IconButton
                icon={<BsLinkedin />}
                padding={"1em"}
                colorScheme={"black"}
                bgColor={"#0a66c2 "}
                border={"2px solid black"}
                borderRadius={"md"}
                size="md"
                color={"white"}
                _hover={{ backgroundColor: "black", color: "white" }}
                aria-label={""}
              />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
