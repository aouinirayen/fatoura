import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea, Input} from "@nextui-org/react";
import { ChatBubbleLeftIcon, DocumentIcon, GlobeAltIcon, PaperAirplaneIcon, QrCodeIcon } from "@heroicons/react/24/outline";

export default function SendSMSModal() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const handleOpen = () => {
    onOpen();
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button onClick={handleOpen} className="flex items-center whitespace-nowrap gap-1 bg-default-800 text-default-200 w-full font-semibold">
            Send SMS <ChatBubbleLeftIcon className="w-4" />
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
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <div className="w-full flex gap-3 max-sm:flex-">
                    <Input
                        type="number"
                        label="Country Code"
                        placeholder="+216"
                        labelPlacement="inside"
                        variant="bordered"
                        className="max-w-[30%]"
                        startContent={
                            <GlobeAltIcon className="w-5" />
                        }
                    />
                    <Input
                        type="number"
                        variant={"bordered"}
                        label="Phone Number"
                        placeholder="92144354"
                    />
                </div>
                <Textarea
                    label="Message Content"
                    placeholder="Enter your message content here"
                    variant='bordered'
                    minRows={5}
                    maxRows={5}
                    className="w-full font-semibold"
                    fullWidth
                />
                <Button className="flex items-center gap-1" color="primary" onPress={onClose}>
                  Send as File
                  <DocumentIcon className="w-4" />
                </Button>
                <Button className="flex items-center gap-1" color="primary" onPress={onClose}>
                  Send as QR
                  <QrCodeIcon className="w-4" />
                </Button>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
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
