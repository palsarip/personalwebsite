import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";

const TransitionExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} leftIcon={<EmailIcon />} size={"lg"} variant={"solid"} bgColor={"#FDCB6E"} color={"black"} borderRadius={"lg"} border={"2px solid black"}>
        Say hi!
      </Button>
      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quasi ducimus quis debitis! Officiis corrupti maiores eaque, distinctio ratione mollitia ducimus officia. Ratione voluptatum minus, molestias praesentium
            aliquam, possimus eos qui, quas modi omnis odio cum? Minima magnam sed autem.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default function ModalForm() {
  return <TransitionExample />;
}
