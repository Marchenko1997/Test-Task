import { createContext, useReducer, useCallback } from "react";
import PropTypes from 'prop-types';

const ModalContext = createContext();

const initialState = {
  camper_modal: {
    isOpen: false,
    content: null,
  },
  images_modal: { isOpen: false, content: null },
};

const modalReducer = (state, action) => {
    switch (action.type) {
      case 'OPEN_MODAL':
        return {
          ...state,
          [action.modalName]: { isOpen: true, content: action.content },
        };
      case 'CLOSE_MODAL':
        return {
          ...state,
          [action.modalName]: { isOpen: false, content: null },
        };
      default:
        return state;
    }
  };

  export const ModalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(modalReducer, initialState);

    const openModal = useCallback((modalName, content) => {
        dispatch({ type: 'OPEN_MODAL', modalName, content });
      }, []);
    
    
      const closeModal = useCallback((modalName) => {
        dispatch({ type: 'CLOSE_MODAL', modalName });
      }, []);

      
      return (
        <ModalContext.Provider
          value={{
            isOpen: Object.fromEntries(
              Object.entries(state).map(([key, value]) => [key, value.isOpen])
            ),
            modalContent: Object.fromEntries(
              Object.entries(state).map(([key, value]) => [key, value.content])
            ),
            openModal,
            closeModal,
          }}
        >
          {children}
        </ModalContext.Provider>
      );

      
  }

  ModalProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export { ModalContext };