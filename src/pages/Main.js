import React, { useState, useRef } from "react";
import { Formik, Form } from "formik";
import { createGlobalStyle } from "styled-components";
import { pdf } from "@react-pdf/renderer";
import SignatureCanvas from "react-signature-canvas";
import FileSaver from "file-saver";

import { useEffect, useLocalStorage } from "../helpers/hooks";
import { color, fontWeight, fontFamily, fontSize } from "../helpers/constants";

import Link from "../components/Link";
import Title from "../components/Title";
import { Button, LightButton } from "../components/Button";
import Wrapper from "../components/Wrapper";
import Section from "../components/Section";
import Signature from "../components/Signature";
import { FTF, FCK } from "../components/FormControls";
import { schema } from "../helpers/validator";

import Renderer from "../pdf/Renderer";

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

const CANVAS_SIZE = {
  maxWidth: 760,
  maxHeight: 200,
};

function Main() {
  const [canvasSize, setCanvasSize] = useState({
    width: Math.min(window.screen.width, CANVAS_SIZE.maxWidth),
    height: CANVAS_SIZE.maxHeight,
  });

  const emptyValues = {
    nume: "",
    nume_tata: "",
    nume_mama: "",
    adresa_localitate: "",
    adresa_judet: "",
    adresa_strada: "",
    adresa_numar: "",
    adresa_bloc: "",
    adresa_etaj: "",
    adresa_apartament: "",
    cnp: "",
    ci_seria: "",
    ci_numar: "",
    domiciliu_localitate: "",
    domiciliu_judet: "",
    domiciliu_strada: "",
    domiciliu_numar: "",
    domiciliu_bloc: "",
    domiciliu_etaj: "",
    domiciliu_apartament: "",
    interval_orar: "",
    traseu_start: "",
    traseu_sfarsit: "",
    situatie_urgenta: "",
    deplasare_servici: false,
    deplasare_consult: false,
    deplasare_cumparaturi: false,
    deplasare_ajutor: false,
    deplasare_scurta: false,
    deplasare_animale: false,
    deplasare_urgenta: false,
    checkboxes_are_valid: false,
    signature: null,
  };

  const [initialValues, saveFormValues] = useLocalStorage("cachedForm", emptyValues);

  useEffect(() => {
    const onResizeWindow = () => {
      setCanvasSize({
        width: Math.min(window.screen.width, CANVAS_SIZE.maxWidth),
        height: CANVAS_SIZE.maxHeight,
      });
    };
    window.addEventListener("resize", onResizeWindow);
    return () => window.removeEventListener("resize", onResizeWindow);
  }, []);

  let signatureRef = useRef();

  const onClearSignature = (setFieldValue) => {
    signatureRef.clear();
    setFieldValue('signature', undefined);
  };

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
        <Title>declarație.ro</Title>
      </Section>

      <Formik
        initialValues={{ ...emptyValues, ...initialValues }}
        validationSchema={schema}
        onSubmit={async (values, errors) => {
          saveFormValues(values);
          const blob = await pdf(<Renderer form={values} />).toBlob();
          FileSaver.saveAs(blob, "declaratie_propie_raspundere.pdf");
        }}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form>
            <Section>Declarație pe proprie răspundere,</Section>

            <Section bottom="medium">
              Subsemnatul(a)
              <FTF name="nume" />, fiul/fiica lui
              <FTF name="nume_tata" /> și al
              <FTF name="nume_mama" />, domiciliat(ă) în
              <FTF name="adresa_localitate" />, județul/sectorul
              <FTF name="adresa_judet" />, strada
              <FTF name="adresa_strada" />, număr
              <FTF size="small" name="adresa_numar" />, bloc
              <FTF size="small" name="adresa_bloc" />, etaj
              <FTF size="small" name="adresa_etaj" />, apartament
              <FTF size="small" name="adresa_apartament" />, având CNP <FTF name="cnp" />, BI/CI seria
              <FTF size="small" name="ci_seria" />, număr
              <FTF name="ci_numar" />.
            </Section>

            <Section>
              Locuind în fapt în localitatea
              <FTF name="domiciliu_localitate" />
              , județul/sectorul <FTF name="domiciliu_judet" />
              , strada <FTF name="domiciliu_strada" />, număr
              <FTF size="small" name="domiciliu_numar" />, bloc
              <FTF size="small" name="domiciliu_bloc" />, etaj
              <FTF size="small" name="domiciliu_etaj" />, apartament
              <FTF size="small" name="domiciliu_apartament" />.
            </Section>

            <Section bottom="medium">
              Cunoscând prevederile articolului 326, referitoare la falsul în declarații precum și ale art. 352
              referitoare la zădărnicirea combaterii bolilor din Noul Cod Penal, declar pe proprie răspundere faptul că
              mă deplasez în interes profesional/personal, între orele
              <FTF name="interval_orar" />, de la
              <FTF size="large" name="traseu_start" />, până la
              <FTF size="large" name="traseu_sfarsit" /> pentru:
            </Section>

            <Section>
              <FCK hasError={errors.checkboxes_are_valid} name="deplasare_servici">
                Deplasarea între domiciliu și locul de muncă, atunci când activitatea profesională este esențială și nu
                poate fi organizată sub formă de lucru la distanță sau deplasarea în interes profesional care nu poate
                fi amânată.
              </FCK>
              <FCK hasError={errors.checkboxes_are_valid} name="deplasare_consult">
                Consult medical de specialitate care nu poate fi amânat.
              </FCK>
              <FCK hasError={errors.checkboxes_are_valid} name="deplasare_cumparaturi">
                Deplasare pentru cumpărături de primă necesitate la unități comerciale din zona de domiciliu.
              </FCK>
              <FCK hasError={errors.checkboxes_are_valid} name="deplasare_ajutor">
                Deplasare pentru asigurarea asistenței pentru persoane în vârstă, vulnerabile sau pentru însoțirea
                copiilor.
              </FCK>
              <FCK hasError={errors.checkboxes_are_valid} name="deplasare_scurta">
                Deplasare scurtă, lângă domiciliu, pentru desfășurarea de activități fizice individuale, în aer liber,
                cu excluderea oricărei forme de activitate sportivă colectivă.
              </FCK>
              <FCK hasError={errors.checkboxes_are_valid} name="deplasare_animale">
                Deplasare scurtă, lângă domiciliu, legată de nevoile animalelor de companie.
              </FCK>
              <FCK hasError={errors.checkboxes_are_valid} name="deplasare_urgenta">
                Deplasare pentru rezolvarea următoarei situații urgente:
                <FTF size="large" name="situatie_urgenta" />.
              </FCK>
            </Section>

            <Section bottom="extraSmall">
              Semnatura
              <Signature>
                <SignatureCanvas
                  penColor={color.black}
                  onEnd={e => setFieldValue('signature', signatureRef.toDataURL())}
                  ref={ref => (signatureRef = ref)}
                  canvasProps={canvasSize}
                />
              </Signature>
            </Section>
            <Section>
              <LightButton type="button" onClick={() => onClearSignature(setFieldValue)}>Șterge semnătura</LightButton>
            </Section>
            <Section align="center">
              <Button type="submit">Descarcă PDF</Button>
            </Section>
          </Form>
        )}
      </Formik>

      <Section bottom="small" textSize="small">
        * Nu ne asumăm responsabilatea pentru corectitudinea, integralitatea și actualitatea informațiilor furnizate pe
        acest site sau pentru daunele rezultate din utilizarea sau neutilizarea lui.
      </Section>
      <Section bottom="small" textSize="small">
        * Aplicația rulează doar în browser și nu colectează datele personale ale utilizatorului.
      </Section>

      <Section bottom="initial" textSize="small">
        Un proiect de{" "}
        <Link href="https://github.com/vtemian" target="_blank">
          Vlad Temian
        </Link>
        ,{" "}
        <Link href="https://balajmarius.com" target="_blank">
          Marius Bălaj
        </Link>
        ,{" "}
        <Link href="https://www.linkedin.com/in/mihai-grescenko-1730ab130" target="_blank">
          Mihai Grescenko
        </Link>
        .
      </Section>
    </Wrapper>
  );
}

export default Main;
