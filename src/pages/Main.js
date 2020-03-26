import React from "react";
import { createGlobalStyle } from "styled-components";

import { color, fontWeight, fontFamily, fontSize } from "../helpers/constants";

import Link from "../components/Link";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import Section from "../components/Section";


const CSSReset = createGlobalStyle`
  html, body, p, ol, ul, li, hr, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size:100%;
    font-weight:normal;
  }
  textarea, input {
    border: 0;
    outline: 0;
  }
  ul {
    list-style:none;
  }
  button, input, select, textarea {
    margin: 0;
    border: 0;
    outline: 0;
  }
  html {
    box-sizing: border-box;
  }
  body {
    color: ${color.black};
    font-size: ${fontSize.medium};
    font-family: ${fontFamily.serif};
    font-weight: ${fontWeight.regular};
    background-color: ${color.white};
  }
`;

function Main() {
  return (
    <Wrapper>
      <CSSReset />

      <Section align="center">
        <Title>declarație.ro</Title>
      </Section>

      <Section bottom="extraSmall">
        Modelul oficial, simplificat, se poate găsi la {' '}
        <Link href="https://cdn.stirioficiale.ro/storage/26MODEL%20Declaratie%20proprie%20raspundere%202503.pdf">Declarație pe proprie răspundere </Link>
        și {' '}
        <Link href="https://cdn.stirioficiale.ro/storage/MODEL%20Adeverinta%20pentru%20angajatori.pdf">Adeverință angajator</Link>.
      </Section>
      <Section bottom="large">
        Documentul poate fi redactat/completat de pe PC/laptop în câmpurile predefinite,
        în formatul PDF, necesitând ulterior tipărirea și semnătura olografă ("de mână") a titularului.
      </Section>

    </Wrapper>
  );
}

export default Main;
