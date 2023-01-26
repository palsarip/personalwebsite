import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Center,
  Flex,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
  Checkbox,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";

export default function AdminModal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [shift, setShift] = useState(false);
  const [a, setA] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      if (e.shiftKey && e.code === "KeyA") {
        onOpen();
      }
    });
  });

  function validateName(value: string) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! don't try anything illegal 😱";
    }
    return error;
  }

  return (
    <Box zIndex={999}>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size={"xl"} motionPreset={"slideInBottom"}>
        <ModalOverlay />
        <ModalContent bgColor={"white"} borderRadius={"lg"}>
          <Box w={"full"}>
            <Box p={"0.5em"} bgColor={"#FDCB6E"} border={"3px solid black"} transition={"0.2s ease-in-out"} borderTopRadius={"lg"}>
              <Center>
                <Box p={"0.25em 1em"} border={"3px solid black"} bgColor={"white"} borderRadius={"full"}>
                  <Text fontSize={"2xl"} fontWeight={"bold"}>
                    Admin login
                  </Text>
                </Box>
              </Center>
            </Box>
            <Box p={"1em"} borderLeft={"3px solid black"} borderRight={"3px solid black"} borderBottom={"3px solid black"} borderBottomRadius={"lg"}>
              <Box>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false,
                  }}
                  onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                  }}
                >
                  {({ handleSubmit, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                      <VStack spacing={4} align="flex-start">
                        <FormControl>
                          <FormLabel htmlFor="email">
                            <Text fontSize={"lg"} color={"black"} fontWeight={"black"}>
                              Username
                            </Text>
                          </FormLabel>
                          <Field as={Input} id="email" name="email" type="email" variant="filled" style={{ border: "2px solid black" }} />
                        </FormControl>
                        <FormControl isInvalid={!!errors.password && touched.password}>
                          <FormLabel htmlFor="password">
                            <Text fontSize={"lg"} color={"black"} fontWeight={"black"}>
                              Password
                            </Text>
                          </FormLabel>
                          <Field
                            as={Input}
                            id="password"
                            name="password"
                            type="password"
                            variant="filled"
                            validate={(value: string) => {
                              let error;
                              return error;
                            }}
                            style={{ border: "2px solid black" }}
                          />
                          <FormErrorMessage>{errors.password}</FormErrorMessage>
                        </FormControl>
                        <Button type="submit" bgColor={"black"} width="full" border={"2px solid black"}>
                          <Text fontSize={"lg"} color={"white"}>
                            SUBMIT
                          </Text>
                        </Button>
                      </VStack>
                    </form>
                  )}
                </Formik>
              </Box>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
}
