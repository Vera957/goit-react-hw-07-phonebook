import React from "react";
import { ContactList } from "./ContactList";
import { Box } from "./Box";
import { FormikContactForm } from "./FormikContactForm/FormikContactForm";
import { GlobalStyle } from "GlobalStyle";
import { Field2 } from './Filter2/Filter2';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { selectIsLoading, selectError } from "redux/selectors";
import styled from "styled-components";

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (<>
    <Box
      m={4}
      p={4}
      height="100vh"
      bg='#f6f6f6'
      maxWidth='700px'
      ml='auto'
      mr='auto'
    ><GlobalStyle />
      <FormikContactForm/>
      <ContactList>
        <Field2 />
        {loading && <b>Request in progress...</b>}
        {error && <b>something goes wrong</b>}
        {!loading && !error && <B></B>}
      </ContactList>
    </Box>
  </>
  )
}

const B = styled.b`
  height: 1em;
  display: block;
  font-size: bold;
`