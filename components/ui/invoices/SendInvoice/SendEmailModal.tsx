import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea} from "@nextui-org/react";
import { EnvelopeIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function SendEmailModal() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const handleOpen = () => {
    onOpen();
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button onClick={handleOpen} className="flex items-center whitespace-nowrap gap-1 bg-purple-600 w-full text-white font-semibold">
            Send Email <EnvelopeIcon className="w-4" />
        </Button>
      </div>
      <Modal 
        size={"2xl"} 
        isOpen={isOpen} 
        onClose={onClose} 
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"> Send Email </ModalHeader>
              <ModalBody>
                <Input
                    type="email"
                    variant={"bordered"}
                    label="Email"
                    placeholder="cc: example@gmail.com"
                />
                <Textarea
                    label="Email Content"
                    placeholder="Enter your text content here"
                    variant='bordered'
                    minRows={5}
                    maxRows={5}
                    className="w-full font-semibold"
                    fullWidth
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button className="flex items-center gap-1" color="primary" onPress={onClose}>
                  Send
                  <PaperAirplaneIcon className="w-4" />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
