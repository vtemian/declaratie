import React from "react";

import Paragraph from "../pdf/Paragraph";
import Wrapper from "../pdf/Wrapper";
import Text from "../pdf/Text";


const Declaration = ({context}) =>  {
  return (
    <Wrapper>
      <Paragraph bottom="large">
        <Text>Declaratie pe proprie răspundere,</Text>
      </Paragraph>

      <Paragraph bottom="small">
        <Text>
          Subsemnatul(a) <Text textWeight="bold">{context.nume}</Text>, fiul/fiica lui  <Text textWeight="bold">{context.nume_tata}</Text> și al  <Text textWeight="bold">{context.nume_mama}</Text>,
          domiciliat(ă) în  <Text textWeight="bold">{context.adresa_localitate}</Text>, județul/sectorul
           <Text textWeight="bold">{context.adresa_judet}</Text>, strada
           <Text textWeight="bold">{context.adresa_strada}</Text>, număr
           <Text textWeight="bold">{context.adresa_numar}</Text>, bloc
           <Text textWeight="bold">{context.adresa_bloc}</Text>, etaj
           <Text textWeight="bold">{context.adresa_etaj}</Text>, apartament
           <Text textWeight="bold">{context.adresa_apartament}</Text>, având
          CNP
           <Text textWeight="bold">{context.cnp}</Text>, BI/CI seria
           <Text textWeight="bold">{context.ci_seria}</Text>, număr
           <Text textWeight="bold">{context.ci_numar}</Text>.
        </Text>
      </Paragraph>

      <Paragraph bottom="small">
        <Text>
          Locuind în fapt în localitatea
           <Text textWeight="bold">{context.domiciliu_localitate}</Text>,
          județul/sectorul  <Text textWeight="bold">{context.domiciliu_judet}</Text>, strada
           <Text textWeight="bold">{context.domiciliu_strada}</Text>, număr
           <Text textWeight="bold">{context.domiciliu_numar}</Text>, bloc
           <Text textWeight="bold">{context.domiciliu_bloc}</Text>, etaj
           <Text textWeight="bold">{context.domiciliu_etaj}</Text>, apartament
           <Text textWeight="bold">{context.domiciliu_apartament}</Text>.
        </Text>
      </Paragraph>

      <Paragraph bottom="small">
          <Text>
          Cunoscând prevederile articolului 326, referitoare la falsul în declarații precum și ale art. 352
          referitoare la zădărnicirea combaterii bolilor din Noul Cod Penal, declar pe proprie răspundere faptul că mă
          deplasez în interes profesional/personal, între orele
           <Text textWeight="bold">{context.interval_orar}</Text>, de la
           <Text textWeight="bold">{context.traseu_start}</Text>, până la
           <Text textWeight="bold">{context.traseu_sfarsit}</Text> pentru:
        </Text>
      </Paragraph>

      <Paragraph >
        <Text>
          Deplasarea între domiciliu și locul de muncă, atunci când activitatea profesională este esențială și nu
          poate fi organizată sub context de lucru la distanță sau deplasarea în interes profesional care nu poate fi
          amânată.
        </Text>

        <Text>
          Consult medical de specialitate care nu poate fi amânat.
        </Text>

        <Text>
          Deplasare pentru cumpărături de primă necesitate la unități comerciale din zona de domiciliu.
        </Text>

        <Text>
          Deplasare pentru asigurarea asistenței pentru persoane în vârstă, vulnerabile sau pentru însoțirea
          copiilor.
        </Text>

        <Text>
          Deplasare scurtă, lângă domiciliu, pentru desfășurarea de activități fizice individuale, în aer liber, cu
          excluderea oricărei context de activitate sportivă colectivă.
        </Text>

        <Text>
          Deplasare scurtă, lângă domiciliu, legată de nevoile animalelor de companie.
        </Text>

        <Text>
          Deplasare pentru rezolvarea următoarei situații urgente: <Text textWeight="bold">{context.situatie_urgenta}</Text>
        </Text>
      </Paragraph>

    </Wrapper>
  );
};

export default Declaration
