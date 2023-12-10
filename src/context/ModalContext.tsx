// SearchContext.js
import { createContext, useContext, useState } from 'react';
import {collection, getDocs, } from "firebase/firestore";
import {db} from "../firebase/firestore.ts";
import {IUser} from "../components/GoogleButton/GoogleSignInButton.tsx";

interface ISearchContext {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
    searchResults: IUser[];
    handleSearch: () => void;
    isOpen: boolean;
    setIsOpen: (isOpen: (prev:boolean) => boolean) => void;
}

const SearchContext = createContext<ISearchContext>(
    {  searchTerm: '', setSearchTerm: () => null, searchResults: [], handleSearch: () => null , isOpen: false, setIsOpen: () => null
    });

const SearchProvider = ({ children }: {children: React.ReactNode}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<IUser[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleSearch = async () => {
        try {
            const usersCollection = collection(db, 'users');
            const querySnapshot = await getDocs(usersCollection);
            const results = querySnapshot.docs.map(doc => (
                { id: doc.id, email: doc.data().email, name: doc.data().name, photoUrl: doc.data().photoUrl }
            ));

            const filtred = results.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchResults(filtred);
        } catch (error) {
            console.error('Error searching users:', error);
        }
    };

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm, searchResults, handleSearch, setIsOpen, isOpen }}>
            {children}
        </SearchContext.Provider>
    );
};

const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};

export { SearchProvider, useSearch };