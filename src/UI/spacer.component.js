import React from "react";
import styled, {useTheme} from "styled-components/native";

const sizesVariants = {
    small: 1,
    medium: 2,
    large: 3,
}

const positionsVariants = {
    top: 'marginTop',
    left: 'marginLeft',
    bottom: 'marginBottom',
    right: 'marginRight'
}

const getVariant = (position, size, theme) => {
    const sizeIndex = sizesVariants[size];
    const property = positionsVariants[position];
    const value = theme.space[sizeIndex];
    return `${property}:${value}`    
}

const SpacerView = styled.View`
    ${({variant}) => variant}
`

export const Spacer = (props) => {
    const theme = useTheme();
    const variant = getVariant(props.position, props.size, theme);

    return <SpacerView variant={variant}>{props.children}</SpacerView>;    
}


Spacer.defaultProps ={
    position: 'top',
    size: 'small',
}
