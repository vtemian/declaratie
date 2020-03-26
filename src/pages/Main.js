import React from "react";
import { createGlobalStyle } from "styled-components";
import { color, fontWeight, fontFamily, fontSize } from "../helpers/constants";

import Text from "../components/Text";
import Link from "../components/Link";
import Grid from "../components/Grid";
import TextField from "../components/TextField";
import Wrapper from "../components/Wrapper";
import CheckboxLabel from "../components/CheckboxLabel";
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
          <TextField name="loc_deplasare" />
          <Text size="small">
            Se vor menționa locurile în care persoana se deplasează, în ordinea în care aceasta intenționează să-și
            desfășoare traseul.
          </Text>
        </Grid>
      </Section>

      <Section bottom="small">
        <Text weight="bold">Motivul deplasarii:</Text>

        <CheckboxLabel name="deplasare_servici">
          Interes profesional, inclusiv între locuință/gospodărie și locul/locurile de desfășurare a
          activității profesionale și înapoi.
        </CheckboxLabel>

        <CheckboxLabel name="deplasare_bunuri">
          Asigurarea de bunuri care acoperă necesitățile de bază ale persoanelor și animalelor de
          companie/domestice.
        </CheckboxLabel>

        <CheckboxLabel name="deplasare_medicala">
          Asistență medicală care nu poate fi amânată și nici realizată de la distanță.
        </CheckboxLabel>

        <CheckboxLabel name="deplasare_ingrijire">
          Motive justificate, precum îngrijirea/ însoțirea unui minor/copilului, asistența persoanelor
          vârstnice, bolnave sau cu dizabilități ori deces al unui membru de familie.
        </CheckboxLabel>

        <CheckboxLabel name="deplasare_sport">
          Activitate fizică individuală (cu excluderea oricăror activități sportive de echipă/ colective)
          sau pentru nevoile animalelor de companie/domestice, în apropierea locuinței.
        </CheckboxLabel>

        <CheckboxLabel name="deplasare_agricola">
          Realizarea de activități agricole
          <TextField size="large" name="activitati_agricole" />.
        </CheckboxLabel>

        <CheckboxLabel name="deplasare_sange">
          Donarea de sânge, la centrele de transfuzie sanguină
        </CheckboxLabel>

        <CheckboxLabel name="deplasare_voluntariat">
          Scopuri umanitare sau de voluntariat.
        </CheckboxLabel>

        <CheckboxLabel name="deplasare_legume">
          Comercializarea de produse agroalimentare (în cazul producătorilor agricoli).
        </CheckboxLabel>

        <CheckboxLabel name="deplasare_bunuri_servici">
          Asigurarea de bunuri necesare desfășurării activității profesionale.
        </CheckboxLabel>

        <Text>
          Se va bifa doar motivul/motivele deplasării dintre cele prevăzute în listă, nefiind permise deplasări realizate invocând
          alte motive decât cele prevăzute în Ordonanța Militară nr. 3/2020
        </Text>

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
