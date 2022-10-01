import styled from "styled-components";
import { Field } from "formik";

export const StyledLabel = styled.label`
    margin-bottom: ${p => p.theme.space[2]}px;
    display: flex;
    align-items: center;
`

export const StyledInput = styled.input`
    display: flex;
    border-radius: ${p => p.theme.radii.normal};
    margin-left: auto;
    outline: none;
    padding: ${p => p.theme.space[2]}px;
`
export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    background: ${p => p.theme.colors.white};
    padding: ${p => p.theme.space[4]}px;
    margin: ${p => p.theme.space[2]}px;
    border: ${p => p.theme.borders.normal};
    //align-items: center;
`

export const Button = styled.button`
    background: ${p => p.theme.colors.primary};
    border-radius: ${p => p.theme.radii.normal};
    padding: ${p => p.theme.space[1]}px;
    outline: none;
    border: none;
    color: ${p => p.theme.colors.white};
    max-width: 100px;
    margin-left: auto;
    &:hover, &:focus{
        transform: scale(1.1);
    }
`
export const ErrorSpan = styled.span`
    display: block;
    height: ${p => p.theme.space[5]}px;
    color: ${p => p.theme.colors.danger};
    font-size: ${p => p.theme.fontSizes.xs};
    margin-left: auto;
    justify-content: flex-end;
`

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    background-color: #e7e1e1;
    padding: ${p => p.theme.space[2]}px;
    &:first-child{
        margin-top: ${p => p.theme.space[3]}px;
        }
    &:nth-of-type(2n){
        background: lightgrey;
    }
`

export const StyledField = styled(Field)`
    border-radius: ${p => p.theme.radii.normal};
    padding: ${p => p.theme.space[2]}px;
    outline: none;
    border-color: ${p => p.theme.colors.primary};
    &:hover, &:focus{
        border-color: ${p => p.theme.colors.accent};
    }
`

export const StyledInputTwo = styled.input`
    border-radius: ${p => p.theme.radii.normal};
    padding: ${p => p.theme.space[2]}px;
    outline: none;
    border-color: ${p => p.theme.colors.primary};
    &:hover, &:focus{
        border-color: ${p => p.theme.colors.accent};
    } 
`