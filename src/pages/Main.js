import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

import { useSetState } from "../helpers/hooks";
import { color, fontWeight, fontFamily, fontSize } from "../helpers/constants";

import Input from "../components/Input";
import Title from "../components/Title";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import Urgency from "../components/Urgency";
import Paragraph from "../components/Paragraph";
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
  const [form, setForm] = useSetState({
    nume: undefined,
    nume_tata: undefined,
    nume_mama: undefined,
    adresa_localitate: undefined,
    adresa_judet: undefined,
    adresa_strada: undefined,
    adresa_numar: undefined,
    adresa_bloc: undefined,
    adresa_etaj: undefined,
    adresa_apartament: undefined,
    cnp: undefined,
    ci_seria: undefined,
    ci_numar: undefined,
    domiciliu_localitate: undefined,
    domiciliu_judet: undefined,
    domiciliu_strada: undefined,
    domiciliu_numar: undefined,
    domiciliu_bloc: undefined,
    domiciliu_etaj: undefined,
    domiciliu_apartament: undefined,
    interval_orar: undefined,
    traseu_start: undefined,
    situatie_urgenta: undefined,
    deplasare_servici: false,
    deplasare_consult: false,
    deplasare_cumparaturi: false,
    deplasare_ajutor: false,
    deplasare_scurta: false,
    deplasare_animale: false,
    deplasare_urgenta: false,
  });

  const onChange = ({ target }) => {
    setForm({
      [target.name]: target.value,
    });
  };

  const onCheck = ({ target }) => {
    setForm({
      [target.name]: target.checked,
    });
  };

  return (
    <Fragment>
      <CSSReset />
      <Wrapper>
        <Title>declarație.ro</Title>

        <Section>
          <Paragraph>Declarație pe proprie răspundere,</Paragraph>

          <Paragraph bottom="medium">
            Subsemnatul(a)
            <Input name="nume" value={form?.nume} onChange={onChange} />, fiul/fiica lui
            <Input name="nume_tata" value={form?.nume_tata} onChange={onChange} /> și al
            <Input name="nume_mama" value={form?.nume_mama} onChange={onChange} />, domiciliat(ă) în
            <Input name="adresa_localitate" value={form?.adresa_localitate} onChange={onChange} />, județul/sectorul
            <Input name="adresa_judet" value={form?.adresa_judet} onChange={onChange} />, strada
            <Input name="adresa_strada" value={form?.adresa_strada} onChange={onChange} />, număr
            <Input size="small" name="adresa_numar" value={form?.adresa_numar} onChange={onChange} />, bloc
            <Input size="small" name="adresa_bloc" value={form?.adresa_bloc} onChange={onChange} />, etaj
            <Input size="small" name="adresa_etaj" value={form?.adresa_etaj} onChange={onChange} />, apartament
            <Input size="small" name="adresa_apartament" value={form?.adresa_apartament} onChange={onChange} />, având
            CNP
            <Input name="cnp" value={form?.cnp} onChange={onChange} />, BI/CI seria
            <Input size="small" name="ci_seria" value={form?.ci_seria} onChange={onChange} />, număr
            <Input name="ci_numar" value={form?.ci_numar} onChange={onChange} />.
          </Paragraph>

          <Paragraph>
            Locuind în fapt în localitatea
            <Input name="domiciliu_localitate" value={form?.domiciliu_localitate} onChange={onChange} />,
            județul/sectorul <Input name="domiciliu_judet" value={form?.domiciliu_judet} onChange={onChange} />, strada
            <Input name="domiciliu_strada" value={form?.domiciliu_strada} onChange={onChange} />, număr
            <Input size="small" name="domiciliu_numar" value={form?.domiciliu_numar} onChange={onChange} />, bloc
            <Input size="small" name="domiciliu_bloc" value={form?.domiciliu_bloc} onChange={onChange} />, etaj
            <Input size="small" name="domiciliu_etaj" value={form?.domiciliu_etaj} onChange={onChange} />, apartament
            <Input size="small" name="domiciliu_apartament" value={form?.domiciliu_apartament} onChange={onChange} />.
          </Paragraph>

          <Paragraph bottom="medium">
            Cunoscând prevederile articolului 326, referitoare la falsul în declarații precum și ale art. 352
            referitoare la zădărnicirea combaterii bolilor din Noul Cod Penal, declar pe proprie răspundere faptul că mă
            deplasez în interes profesional/personal, între orele
            <Input name="interval_orar" value={form?.interval_orar} onChange={onChange} />, de la
            <Input size="large" name="traseu_start" value={form?.traseu_start} onChange={onChange} />, până la
            <Input size="large" name="traseu_sfarsit" value={form?.traseu_sfarsit} onChange={onChange} /> pentru:
          </Paragraph>

          <Paragraph bottom="initial">
            <Urgency name="deplasare_servici" checked={form?.deplasare_servici} onCheck={onCheck}>
              Deplasarea între domiciliu și locul de muncă, atunci când activitatea profesională este esențială și nu
              poate fi organizată sub formă de lucru la distanță sau deplasarea în interes profesional care nu poate fi
              amânată.
            </Urgency>
            <Urgency name="deplasare_consult" checked={form?.deplasare_consult} onCheck={onCheck}>
              Consult medical de specialitate care nu poate fi amânat.
            </Urgency>
            <Urgency name="deplasare_cumparaturi" checked={form?.deplasare_cumparaturi} onCheck={onCheck}>
              Deplasare pentru cumpărături de primă necesitate la unități comerciale din zona de domiciliu.
            </Urgency>
            <Urgency name="deplasare_ajutor" checked={form?.deplasare_ajutor} onCheck={onCheck}>
              Deplasare pentru asigurarea asistenței pentru persoane în vârstă, vulnerabile sau pentru însoțirea
              copiilor.
            </Urgency>
            <Urgency name="deplasare_scurta" checked={form?.deplasare_scurta} onCheck={onCheck}>
              Deplasare scurtă, lângă domiciliu, pentru desfășurarea de activități fizice individuale, în aer liber, cu
              excluderea oricărei forme de activitate sportivă colectivă.
            </Urgency>
            <Urgency name="deplasare_animale" checked={form?.deplasare_animale} onCheck={onCheck}>
              Deplasare scurtă, lângă domiciliu, legată de nevoile animalelor de companie.
            </Urgency>
            <Urgency name="deplasare_urgenta" checked={form?.deplasare_urgenta} onCheck={onCheck}>
              Deplasare pentru rezolvarea următoarei situații urgente:
              <Input size="large" name="situatie_urgenta" value={form?.situatie_urgenta} onChange={onChange} />.
            </Urgency>
          </Paragraph>
        </Section>

        <Button>Descarcă PDF</Button>

        <Section>
          <Paragraph textSize="tiny" bottom="initial">
            * Nu ne asumăm responsabilatea pentru corectitudinea, integralitatea și actualitatea informațiilor furnizate
            pe acest site sau pentru daunele rezultate din utilizarea sau neutilizarea lui.
          </Paragraph>
        </Section>
      </Wrapper>
    </Fragment>
  );
}

export default Main;
