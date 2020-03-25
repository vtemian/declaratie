import React from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { fontFamily } from "../helpers/constants";

const styles = StyleSheet.create({
  text: {
    lineHeight: "1.6",
    fontSize: "10pt",
    fontFamily: fontFamily.sansSerif,
  },
  section: {
    marginBottom: "1cm",
  },
  page: {
    padding: "2cm",
  },
  value: {
    borderBottom: "1px solid black",
    fontWeight: "bold",
  }
});

function Renderer({ context }) {
  return <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.text}>Declarație pe proprie răspundere,</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>
          Subsemnatul(a) <Text style={styles.value}>{context.nume}</Text>, fiul/fiica lui
          <Text style={styles.value}>###########</Text> și al
          <Text style={styles.value}>###########</Text> domiciliat(ă) în
          <Text style={styles.value}>###########</Text> județul/sectorul
          <Text style={styles.value}>###########</Text>, strada
          <Text style={styles.value}>###########</Text> număr
          <Text style={styles.value}>###########</Text>, bloc
          <Text style={styles.value}>###########</Text>, etaj
          <Text style={styles.value}>###########</Text>, apartament
          <Text style={styles.value}>###########</Text>, având
          CNP <Text style={styles.value}>###########</Text>, BI/CI seria
          <Text style={styles.value}>###########</Text>, număr
          .
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>
          Locuind în fapt în localitatea
          <Text style={styles.value}>###########</Text>
          <Text style={styles.value}>###########</Text>, județul/sectorul
          <Text style={styles.value}>###########</Text>, strada , număr
          <Text style={styles.value}>###########</Text>, bloc
          <Text style={styles.value}>###########</Text>, etaj
          <Text style={styles.value}>###########</Text>, apartament
          <Text style={styles.value}>###########</Text>.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>
          Cunoscând prevederile articolului 326, referitoare la falsul în declarații precum și ale art. 352 referitoare la
        zădărnicirea combaterii bolilor din Noul Cod Penal, declar pe proprie răspundere faptul că mă deplasez în
        interes profesional/personal, între orele
        <Text style={styles.value}>###########</Text>, de la
        <Text style={styles.value}>###########</Text>, până la
        <Text style={styles.value}>###########</Text> pentru:
        </Text>
      </View>

      <View>
        <Text style={styles.text}>
          Deplasarea între domiciliu și locul de muncă, atunci când activitatea profesională este esențială și nu poate
          fi organizată sub formă de lucru la distanță sau deplasarea în interes profesional care nu poate fi amânată.
        </Text>

        <Text style={styles.text}>
          Consult medical de specialitate care nu poate fi amânat.
          Deplasare pentru cumpărături de primă necesitate la unități comerciale din zona de domiciliu.
        </Text>

        <Text style={styles.text}>
          Deplasare pentru asigurarea asistenței pentru persoane în vârstă, vulnerabile sau pentru însoțirea copiilor.
        </Text>

        <Text style={styles.text}>
          Deplasare scurtă, lângă domiciliu, pentru desfășurarea de activități fizice individuale, în aer liber, cu
          excluderea oricărei forme de activitate sportivă colectivă.
        </Text>

        <Text style={styles.text}>
          Deplasare scurtă, lângă domiciliu, legată de nevoile animalelor de companie.
          Deplasare pentru rezolvarea următoarei situații urgente:
          <Text style={styles.value}>###########</Text>.
        </Text>

      </View>
    </Page>
  </Document>
}

export default Renderer
