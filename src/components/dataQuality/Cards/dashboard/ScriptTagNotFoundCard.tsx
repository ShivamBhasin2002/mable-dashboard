import { useDisclosure, Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';
import Icon from 'assets/icons';
import { useEffect } from 'react';
import { useSelector } from 'redux/store';
import colors from 'utility/colors';
import {
  scriptTagNotFoundPopupBody,
  scriptTagNotFoundPopupHeader,
  supportEmail
} from 'utility/constants/strings';

const ScriptTagNotFoundCard = () => {
  const { scriptTagNotFound } = useSelector((state) => state.pageSpeed);
  const { onClose, isOpen, onOpen } = useDisclosure({ defaultIsOpen: !scriptTagNotFound });
  useEffect(() => {
    if (!scriptTagNotFound) onOpen();
  }, [scriptTagNotFound]);

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.100" backdropFilter="blur(10px) hue-rotate(15deg)" />
        <ModalContent minW={550} minH={450} borderRadius={20} backgroundColor={colors.transparent}>
          <article className="w-[550px] h-[450px] bg-gradient-to-tr from-bgContainerFrom to-bgContainerTo rounded-t-[20px] flex justify-center items-center">
            <div className="w-3/4 h-3/4 flex flex-col justify-between items-center">
              <Icon icon="scriptTagNotFound" />
              <div className="font-montserrat text-[24px] font-bold text-light">
                {scriptTagNotFoundPopupHeader}
              </div>
              <div className="font-lato text-[16px] text-center text-lines">
                {scriptTagNotFoundPopupBody}{' '}
                <a className="text-primary outline-none" href={`mailto:${supportEmail}`}>
                  {supportEmail}
                </a>
              </div>
            </div>
          </article>
          <footer
            className="w-[550px] h-[60px] bg-primary rounded-b-[20px] text-light font-lato font-bold text-[24px] flex justify-center items-center"
            onClick={onClose}
          >
            Dismiss
          </footer>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ScriptTagNotFoundCard;
