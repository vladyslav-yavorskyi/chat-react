import styled from "styled-components";
import React from "react";

interface FlexProps {
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    margin?: string;
    children?: React.ReactNode;
}

const StyledFlex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'stretch'};
    align-items: ${props => props.alignItems || 'stretch'};
    margin: ${({margin}) => margin || '0'};
`
const Flex = (props: FlexProps) => {
    return <StyledFlex {...props}/>
};

export default Flex;