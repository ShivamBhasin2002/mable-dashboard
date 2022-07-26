import { useDisclosure, Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';
import Icon from 'assets/icons';
import React from 'react';
import colors from 'utility/colors';
import { defaultErrorModalCloseButtonText } from 'utility/constants/strings';
import { reloadScreen } from 'utility/functions/helper';
import { ErrorProps } from 'utility/typeDefinitions/componentPropTypes';

const Error = ({
  header,
  body,
  icon = 'errorModal',
  footerText = defaultErrorModalCloseButtonText,
  handleClick,
  reload = false,
  closable = true
}: ErrorProps) => {
  const { onClose, isOpen } = useDisclosure({ defaultIsOpen: true });
  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      closeOnEsc={closable}
      closeOnOverlayClick={closable}
    >
      <ModalOverlay bg="blackAlpha.100" backdropFilter="blur(10px) hue-rotate(15deg)" />
      <ModalContent minW={550} minH={450} borderRadius={20} backgroundColor={colors.transparent}>
        <article className="w-[34.375rem] h-[28.125rem] bg-gradient-to-tr from-bgContainerFrom to-bgContainerTo rounded-t-[1.25rem] flex justify-center items-center">
          <div className="w-3/4 h-3/4 flex flex-col justify-between items-center">
            <Icon icon={icon} />
            <div className="font-montserrat text-[1.5rem] font-bold text-light">{header}</div>
            <div className="font-lato text-[1rem] text-center text-lines">{body}</div>
          </div>
        </article>
        <footer
          className="w-[34.375rem] h-[3.75rem] bg-primary rounded-b-[1.25rem] text-light font-lato font-bold text-[1.5rem] flex justify-center items-center"
          onClick={reload ? reloadScreen : handleClick || onClose}
        >
          {footerText}
        </footer>
      </ModalContent>
    </Modal>
  );
};

export default Error;
