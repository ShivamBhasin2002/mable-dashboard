import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter
} from '@chakra-ui/react';
import { useSelector } from 'redux/store';

const ScriptTagNotFoundCard = () => {
  const { onClose } = useDisclosure();
  const { script_tag_found } = useSelector((state) => state.pageSpeed);
  return (
    <>
      <Modal isCentered isOpen={!script_tag_found} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="!w-[660px] h-[580px]" borderRadius={20}>
          <ModalCloseButton />
          <ModalBody>
            <div className="w-[660px] h-[580px] bg-gradient-to-tr from-bgContainerFrom to-bgContainerTo rounded-[20px]"></div>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ScriptTagNotFoundCard;
