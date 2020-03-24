import React from "react";

import Paragraph from "../pdf/Paragraph";
import Wrapper from "../pdf/Wrapper";
import Text from "../pdf/Text";


const Declaration = ({context}) => {
  return (
    <Wrapper>
      <Paragraph bottom="large">
        <Text>Declarație pe proprie răspundere,</Text>
      </Paragraph>

      <Paragraph bottom="medium">
        <Text>
          Subsemnatul(a)
          {context.nume}, fiul/fiica lui {context.nume_tata} și al
          {context.nume_mama}, domiciliat(ă) în {context.adresa_localitate}, județul/sectorul
          {context.adresa_judet}, strada
          {context.adresa_strada}, număr
          {context.adresa_numar}, bloc
          {context.adresa_bloc}, etaj
          {context.adresa_etaj}, apartament
          {context.adresa_apartament}, având
          CNP
          {context.cnp}, BI/CI seria
          {context.ci_seria}, număr
          {context.ci_numar}.
        </Text>
      </Paragraph>

    </Wrapper>
  );
};

export default Declaration
