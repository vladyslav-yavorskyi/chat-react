import styled from "styled-components";

interface ImageProfileProps {
    imageUrl: string | undefined | null;
    active: boolean;
    size: string;
}
const ImageProfile = ({imageUrl, active, size}: ImageProfileProps) => {
    return (
        <ProfileContainer size={size}>
            <StatusIndicator $status={active} />
            <ProfileImage src={imageUrl as string} alt="Profile" />
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

const StatusIndicator = styled.div<{$status: boolean}>`
    position: absolute;
    top: 2.5px;
    left: 2.5px;
    width: 10px;
    height: 10px;
    background-color: ${({$status}) => $status ? '#44d6b5' : '#ccc'};
    border-radius: 50%;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px #fff;
    z-index: 2;
`;

export default ImageProfile;