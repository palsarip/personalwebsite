/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Stack, Text } from "@chakra-ui/react";

export default function ProjectsTab() {
  return (
    <>
      <Box>
        <Text fontSize={"4xl"} fontWeight={"bold"} textAlign={"start"}>
          Here's some of my works
        </Text>
      </Box>
      <Box w={"full"} p={"1em 0em"} bgColor={"#B3D3E1"} border={"3px solid black"}>
        <Stack direction={"row"} spacing={"30px"} overflowX={"auto"}>
          <Box w={"15em"} h={"full"} mx={"1em"} border={"3px solid black"} borderRadius={"lg"} bgColor={"#0984E3"}>
            <Flex p={"0.5em 1em"} justifyContent={"space-between"} alignItems={"center"} borderTopRadius={"lg"}>
              <Box>
                <Text fontSize={"xl"} fontWeight={"bold"}>
                  MAXIMA 2022
                </Text>
              </Box>
              <Box>
                <Text fontSize={"xl"} fontWeight={"bold"}>
                  2
                </Text>
              </Box>
            </Flex>
            <Box w={"full"} h={"11.5em"} p={"0.5em 1em"} bgColor={"white"} borderBottomRadius={"lg"} outline={"3px solid black"}>
              tes
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
