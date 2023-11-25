import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBell,
    faEllipsis,
    faGear,
    faHouse,
    faInbox,
    faPaperPlane,
    faUserGroup
} from "@fortawesome/free-solid-svg-icons";
import ImageProfile from "../StyledComponents/ImageProfile.tsx";
import {useFirebase} from "../../context/FirebaseContext.tsx";

const Dashboard = () => {
    const firebase = useFirebase();
    console.log(firebase.user)
    return (
        <DashboardDiv>
            <ImageProfile imageUrl={firebase.user?.photoURL} active={true} size={'40px'}/>
            <NavButtons>
                <StyledIcon icon={faHouse}/>
                <StyledIcon icon={faPaperPlane}/>
                <StyledIcon icon={faInbox}/>
                <StyledIcon icon={faUserGroup}/>
                <StyledIcon icon={faBell}/>
                <StyledIcon icon={faEllipsis}/>
            </NavButtons>
            <StyledIcon icon={faGear} />
        </DashboardDiv>

    );
};

const DashboardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 5vw;
  color: #ffffff;
  background-color: #262626;
`

const NavButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`
const StyledIcon = styled(FontAwesomeIcon)`
  color: #686868;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 45px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2); /* Adjust the scale factor for the desired growth */
    color: #ffffff;
  }
`;

export default Dashboard;