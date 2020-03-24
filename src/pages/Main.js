import React, { Fragment } from "react";
import { PDFDownloadLink, Document, Page, View, StyleSheet, Font, Text as Content } from '@react-pdf/renderer'
import { createGlobalStyle } from "styled-components";

import { useSetState } from "../helpers/hooks";
import { color, fontFamily, fontSize } from "../helpers/constants";

import Text from "../components/Text";
import Title from "../components/Title";
import Input from "../components/Input";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Renderer from "../components/Renderer";

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

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Times-Roman'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
});

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

  const Declaration = ({context}) => (
    <View>
        <Content style={styles.title}>Declarație pe proprie răspundere</Content>
        <Content style={styles.text}>
          Subsemnatul(a) {context.nume}, fiul/fiica lui {context.tata} și al
          {context.mama}, domiciliat(ă) în {context.oras}, județ/sector {context.judet}, strada {context.strada}, număr
          {context.numar}, bloc {context.bloc}, etaj {context.etaj}, apartament
          {context.apartament}, având CNP {context.cnp}, BI/CI seria {context.ci_seria}, numar {context.ci_numar}.
        </Content>
    </View>
  );

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

        <PDFDownloadLink document={
          <Document>
            <Page size={"A4"}>
              <Declaration context={form} />
            </Page>
          </Document>
        } fileName={`declaratie-${form.nume}`}>
          {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>

      </Container>
      <Container>
        <Renderer>
          <Declaration context={form}/>
        </Renderer>
      </Container>
    </Fragment>
  );
}

export default Main;
