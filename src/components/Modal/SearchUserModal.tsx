import  {  useEffect } from 'react';
import styled from 'styled-components';
import {useSearch} from "../../context/ModalContext.tsx";
import UserComponent from "./UserComponent.tsx";
// Styled components
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  width: 100%;
`;

const SearchUserModal = () => {
   const { searchTerm, setSearchTerm, searchResults, handleSearch , setIsOpen, isOpen} = useSearch();

    useEffect(() => {
        if (searchTerm.length > 0) {
            handleSearch();
        }
    }, [searchTerm, handleSearch]);

    return (
        <>
            {isOpen && (
                <ModalWrapper >
                    <ModalContent>
                        <h2>Search Users</h2>
                        <Input
                            type="text"
                            placeholder="Enter user name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        {searchResults.length > 0 ? (
                            <ul>
                                {searchResults.map((user) => (
                                    <UserComponent name={user.name as string} imgUrl={user.photoUrl as string} id={user.id} key={user.id} />
                                ))}
                            </ul>
                        ) : (
                            <p>No results found.</p>
                        )}

                        <button onClick={() => setIsOpen((prev) => !prev)}>Close</button>
                    </ModalContent>
                </ModalWrapper>
            )}
        </>


    );
};

export default SearchUserModal;