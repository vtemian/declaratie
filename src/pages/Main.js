import React, { useState, useRef } from "react";
import { createGlobalStyle } from "styled-components";
import { pdf } from "@react-pdf/renderer";
import SignatureCanvas from "react-signature-canvas";
import FileSaver from "file-saver";

import { useEffect, useLocalStorage } from "../helpers/hooks";
import { color, fontWeight, fontFamily, fontSize } from "../helpers/constants";

import Text from "../components/Text";
import Grid from "../components/Grid";
import TextField from "../components/TextField";
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
        <Text size="medium" weight="bold" uppercase>
          Declarație pe proprie răspundere,
        </Text>
      </Section>

      <Section bottom="small">
        <Grid columns="1fr 2fr 2fr">
          <Text weight="bold">Nume, prenume:</Text>
          <TextField name="nume" />
          <TextField name="prenume" />
        </Grid>
      </Section>

      <Section bottom="small">
        <Grid columns="1fr 4fr">
          <Text weight="bold">Data nașterii:</Text>
          <TextField name="data_nasterii" type="date" />
        </Grid>
      </Section>

      <Section bottom="small">
        <Grid columns="1fr 4fr">
          <Text weight="bold">Adresa locuinței:</Text>
          <Grid align="flex-start" rows="1fr 1fr 1fr">
            <TextField name="adresa_1" />
            <TextField name="adresa_2" />
            <Text size="small">
              Se va completa adresa locuinței în care persoana locuiește în fapt, indiferent dacă este identică sau nu
              cu cea menționată în actul de identitate.
            </Text>
          </Grid>
        </Grid>
      </Section>

      <Section bottom="small">
        <Grid align="flex-start" columns="1fr" rows="1fr 1fr 1fr">
          <Text weight="bold">Locul/locurile deplasării:</Text>
          <TextField name="motiv_deplasare" />
          <Text size="small">
            Se vor menționa locurile în care persoana se deplasează, în ordinea în care aceasta intenționează să-și
            desfășoare traseul.
          </Text>
        </Grid>
      </Section>

      <Section>
        <Text size="small" weight="bold">
          Persoanele care au împlinit vârsta de 65 de ani completează doar pentru motivele prevăzute în câmpurile 1-6,
          deplasarea fiind permisă zilnic doar în intervalul orar 11.00 – 13.00.
        </Text>
      </Section>
    </Wrapper>
  );
}

export default Main;
