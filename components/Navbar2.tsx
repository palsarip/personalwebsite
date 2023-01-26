import { useState } from "react";
import { useRouter } from "next/router";

//importing Chakra UI components
import { Box, Heading, Flex, Text, Stack, Button, IconButton, Center } from "@chakra-ui/react";

//importing react-icons icons
import { BsGithub, BsLink, BsLinkedin } from "react-icons/bs";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <Flex position={"sticky"} justifyContent={"space-between"} padding={"0.5em"} bgColor={"#FDCB6E"} borderBottom={"2px solid black"}>
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
          />
          <Button display={{ base: "block", lg: "none" }} colorScheme={"none"} transform={"rotate(180deg)"}>
            <RiBarChartHorizontalLine size={20} color={"black"} />
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
