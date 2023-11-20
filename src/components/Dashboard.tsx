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

const Dashboard = () => {
    return (
        <DashboardDiv>
            <Profile  src="https://picsum.photos/200" alt="user"/>
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

const Profile = styled.img`
    margin-top: 30px;
    width: 40px;
    height: 40px;
    border-radius: 50%;

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