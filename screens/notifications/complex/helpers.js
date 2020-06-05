import { checkValidation } from '../../../helpers/func';

export const textButtonIcon = {
  name: 'ios-arrow-forward',
};

export const notificationInitialState = {
  title: { name: '', error: '', label: 'Title' },
  description: { name: '', error: '', label: 'Description' },
  status: 'IDLE',
  valid: false,
};

export function notificationReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_TITLE': {
      const { text } = action.payload;
      return {
        ...state,
        title: {
          ...state.title, error: '', name: text, valid: checkValidation(text),
        },
      };
    }
    case 'CHANGE_DESCRIPTION': {
      const { text } = action.payload;
      return {
        ...state,
        description: {
          ...state.description, error: '', name: text, valid: checkValidation(text),
        },
      };
    }
    // case 'CREATE':
    //   return {
    //     ...state,
    //     status: 'CREATING',
    //     text: {
    //       ...state.text,
    //       title: 'Preparing ...',
    //       subtitle: '',
    //       button: 'Creating',
    //     },
    //     icon: {
    //       name: 'hourglass-2',
    //       backgroundColor: theme.colors.secondary,
    //     },
    //   };
    // case 'INVALID':
    //   return { ...state, valid: false, text: { ...state.text, error: action.payload.text } };
    // case 'CREATE_SUCCESS':
    //   return {
    //     ...state,
    //     status: 'CREATED_SUCCESS',
    //     text: {
    //       ...state.text,
    //       button: 'Home',
    //       title: 'Hurray!',
    //       subtitle: 'You successfully created Quick notification: ',
    //     },
    //     icon: {
    //       name: 'check',
    //       backgroundColor: theme.colors.green,
    //     },
    //   };
    // case 'CREATE_FAILURE':
    //   return { ...state, status: 'CREATED_FAIL', text: { ...state.text, error: 'Created Fail' } };
    default:
      throw new Error();
  }
}

export default { notificationInitialState, notificationReducer, textButtonIcon };
