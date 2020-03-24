import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

import { useSetState } from "../helpers/hooks";
import { color, fontFamily, fontSize } from "../helpers/constants";

import Text from "../components/Text";
import Title from "../components/Title";
import Input from "../components/Input";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";

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
  }
  html {
    box-sizing: border-box;
  }
  body {
    color: ${color.black};
    font-size: ${fontSize.medium};
    font-family: ${fontFamily.serif};
    background-color: ${color.gray};
  }
`;

function Main() {
  const [form, setForm] = useSetState({
    nume: undefined,
    tata: undefined,
    mama: undefined,
    oras: undefined,
    judet: undefined,
    strada: undefined,
    numar: undefined,
    bloc: undefined,
    etaj: undefined,
    apartament: undefined,
    cnp: undefined,
    ci_seria: undefined,
    ci_numar: undefined,
  });

  const onChange = ({ target }) => {
    setForm({
      [target.name]: target.value,
    });
  };

  return (
    <Fragment>
      <CSSReset />
      <Container>
        <Wrapper>
          <Title>Declarație pe proprie răspundere,</Title>
          <Text>Subsemnatul(a)</Text>
          <Input name="nume" placeholder="George Popescu" value={form.nume} onChange={onChange} />, fiul/fiica lui
          <Input name="tata" placeholder="Ion Popescu" value={form.tata} onChange={onChange} /> și al
          <Input name="mama" placeholder="Maria Popescu" value={form.mama} onChange={onChange} />, domiciliat(ă) în
          <Input name="oras" placeholder="Timișoara" value={form.oras} onChange={onChange} />, județ/sector
          <Input name="judet" placeholder="Timiș" value={form.judet} onChange={onChange} />, strada
          <Input name="strada" placeholder="Mihai Viteazul" value={form.strada} onChange={onChange} />, număr
          <Input name="numar" placeholder="2" value={form.numar} onChange={onChange} />, bloc
          <Input name="bloc" placeholder="3B" value={form.bloc} onChange={onChange} />, etaj
          <Input name="etaj" placeholder="5" value={form.etaj} onChange={onChange} />, apartament
          <Input name="apartament" placeholder="2C" value={form.apartament} onChange={onChange} />, având CNP
          <Input name="cnp" placeholder="1234567891011" value={form.cnp} onChange={onChange} />, BI/CI seria
          <Input name="ci_seria" placeholder="TM" value={form.ci_seria} onChange={onChange} />, numar
          <Input name="ci_numar" placeholder="123456" value={form.ci_numar} onChange={onChange} />.
        </Wrapper>
      </Container>
    </Fragment>
  );
}

export default Main;
