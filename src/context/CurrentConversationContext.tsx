import { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';

interface ConversationState {
    id: string | null;
}

type UserAction = { type: 'SET_CONVERSATION'; payload: ConversationState } | { type: 'CLEAN_CONVERSATION' };

interface UserContextProps {
    children: ReactNode;
}

const ConversationContext = createContext<{ state: ConversationState; dispatch: Dispatch<UserAction> } | undefined>(undefined);

const userReducer = (state: ConversationState, action: UserAction): ConversationState => {
    switch (action.type) {
        case 'SET_CONVERSATION':
            return { ...state, id: action.payload.id };
        case 'CLEAN_CONVERSATION':
            return { ...state, id: null };
        default:
            return state;
    }
};

const ConversationProvider = ({ children }: UserContextProps) => {
    const [state, dispatch] = useReducer(userReducer, { id: null });

    return (
        <ConversationContext.Provider value={{ state, dispatch }}>
            {children}
        </ConversationContext.Provider>
    );
};

const useCurrentConversation = () => {
    const context = useContext(ConversationContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export { ConversationProvider, useCurrentConversation };