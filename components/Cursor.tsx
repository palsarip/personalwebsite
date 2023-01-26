import { useState } from "react";
import { useRouter } from "next/router";

//importing Chakra UI components
import { Box, Heading, Flex, Text, Stack, Button, IconButton, Center } from "@chakra-ui/react";

export default function Cursor() {
  const cursorMove = (e: any) => {
    const cursor = e.currentTarget;
    cursor.style.left = e.clientX + "px";
    cursor.currentTarget.style.top = e.clientY + "px";
  };
  return (
    <Box
      position={"fixed"}
      w={"20px"}
      h={"20px"}
      borderRadius={"full"}
      bgColor={"black"}
      transition={"0.1 ease-in-out"}
      pointerEvents={"none"}
      onMouseMove={(e: any) => {
        cursorMove(e);
        console.log(e.clientX, e.clientY);
      }}
    />
  );
}
