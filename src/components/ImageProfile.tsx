import styled from "styled-components";

interface ImageProfileProps {
    imageUrl: string;
    active: boolean;
    size: string;
}
const ImageProfile = ({imageUrl, active, size}: ImageProfileProps) => {
    return (
        <ProfileContainer size={size}>
            <StatusIndicator active={active} />
            <ProfileImage src={imageUrl} alt="Profile" />
        </ProfileContainer>
    );
};

const ProfileContainer = styled.div<{size: string}>`
    position: relative;
    width: ${({size}) => size || '40px'};
    height: ${({size}) => size || '40px'};
    overflow: hidden;
    margin: 10px;
    cursor: pointer;
    z-index: 1;
`

const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`

const StatusIndicator = styled.div<{active: boolean}>`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 10px;
    height: 10px;
    background-color: ${({active}) => active ? '#44d6b5' : '#ccc'};
    border-radius: 50%;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px #fff;
    z-index: 2;
`;

export default ImageProfile;