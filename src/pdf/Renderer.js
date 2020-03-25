import React from "react";
import format from "date-format";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

import { color, fontFamily } from "../helpers/constants";

const styles = StyleSheet.create({
  page: {
    padding: "80pt",
    fontSize: "11pt",
    lineHeight: "1.4",
  },
  text: {
    fontFamily: fontFamily.sansSerif,
  },
  textBold: {
    paddingVertical: '20pt',
    textTransform: "uppercase",
    fontFamily: fontFamily.sansSerifCondensed,
  },
  section: {
    marginBottom: "20pt",
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    marginBottom: "40pt",
  },
  block: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "10pt",
  },
  checkbox: {
    width: "10pt",
    height: "10pt",
    marginTop: "2pt",
    marginRight: "10pt",
    border: `1pt solid ${color.black}`,
  },
  checked: {
    backgroundColor: color.black,
  },
  placeholder: {
    width: "150pt",
    marginTop: "10pt",
    borderBottom: `1pt solid ${color.black}`,
  },
});

function Renderer({ form }) {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.text}>Declarație pe proprie răspundere,</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>
            Subsemnatul(a) <Text style={styles.textBold}>{form?.nume}</Text>, fiul/fiica lui
            <Text style={styles.textBold}>{form?.nume_tata}</Text> și al
            <Text style={styles.textBold}>{form?.nume_mama}</Text> domiciliat(ă) în
            <Text style={styles.textBold}>{form?.adresa_localitate}</Text> județul/sectorul
            <Text style={styles.textBold}>{form?.adresa_judet}</Text>, strada
            <Text style={styles.textBold}>{form?.adresa_strada}</Text> număr
            <Text style={styles.textBold}>{form?.adresa_numar}</Text>, bloc
            <Text style={styles.textBold}>{form?.bloc}</Text>, etaj
            <Text style={styles.textBold}>{form?.etaj}</Text>, apartament
            <Text style={styles.textBold}>{form?.apartament}</Text>, având CNP
            <Text style={styles.textBold}>{form?.cnp}</Text>, BI/CI seria
            <Text style={styles.textBold}>{form?.ci_seria}</Text>, număr
            <Text style={styles.textBold}>{form?.ci_numar}</Text>.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>
            Locuind în fapt în localitatea <Text style={styles.textBold}>{form?.domiciliu_localitate}</Text>,
            județul/sectorul
            <Text style={styles.textBold}>{form?.domiciliu_judet}</Text>, strada
            <Text style={styles.textBold}>{form?.domiciliu_strada}</Text>, număr
            <Text style={styles.textBold}>{form?.domiciliu_numar}</Text>, bloc
            <Text style={styles.textBold}>{form?.domiciliu_bloc}</Text>, etaj
            <Text style={styles.textBold}>{form?.domiciliu_etaj}</Text>, apartament
            <Text style={styles.textBold}>{form?.domiciliu_apartament}</Text>.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>
            Cunoscând prevederile articolului 326, referitoare la falsul în declarații precum și ale art. 352
            referitoare la zădărnicirea combaterii bolilor din Noul Cod Penal, declar pe proprie răspundere faptul că mă
            deplasez în interes profesional/personal, între orele
            <Text style={styles.textBold}>{form?.interval_orar}</Text>, de la
            <Text style={styles.textBold}>{form?.traseu_start}</Text>, până la
            <Text style={styles.textBold}>{form?.traseu_sfarsit}</Text> pentru:
          </Text>
        </View>

        <View style={styles.list}>
          <View style={styles.block}>
            <View style={[styles.checkbox, form?.deplasare_servici && styles.checked]} />
            <Text style={styles.text}>
              Deplasarea între domiciliu și locul de muncă, atunci când activitatea profesională este esențială și nu
              poate fi organizată sub formă de lucru la distanță sau deplasarea în interes profesional care nu poate fi
              amânată.
            </Text>
          </View>
          <View style={styles.block}>
            <View style={[styles.checkbox, form?.deplasare_consult && styles.checked]} />
            <Text style={styles.text}>
              Consult medical de specialitate care nu poate fi amânat. Deplasare pentru cumpărături de primă necesitate
              la unități comerciale din zona de domiciliu.
            </Text>
          </View>
          <View style={styles.block}>
            <View style={[styles.checkbox, form?.deplasare_cumparaturi && styles.checked]} />
            <Text style={styles.text}>
              Deplasare pentru cumpărături de primă necesitate la unități comerciale din zona de domiciliu.
            </Text>
          </View>
          <View style={styles.block}>
            <View style={[styles.checkbox, form?.deplasare_ajutor && styles.checked]} />
            <Text style={styles.text}>
              Deplasare pentru asigurarea asistenței pentru persoane în vârstă, vulnerabile sau pentru însoțirea
              copiilor.
            </Text>
          </View>
          <View style={styles.block}>
            <View style={[styles.checkbox, form?.deplasare_scurta && styles.checked]} />
            <Text style={styles.text}>
              Deplasare scurtă, lângă domiciliu, pentru desfășurarea de activități fizice individuale, în aer liber, cu
              excluderea oricărei forme de activitate sportivă colectivă.
            </Text>
          </View>
          <View style={styles.block}>
            <View style={[styles.checkbox, form?.deplasare_animale && styles.checked]} />
            <Text style={styles.text}>
              Deplasare scurtă, lângă domiciliu, legată de nevoile animalelor de companie.
            </Text>
          </View>
          <View style={styles.block}>
            <View style={[styles.checkbox, form?.deplasare_urgenta && styles.checked]} />
            <Text style={styles.text}>
              Deplasare pentru rezolvarea următoarei situații urgente:
              <Text style={styles.textBold}>{form?.situatie_urgenta}</Text>.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Atât declar, susțin și semnez.</Text>
        </View>

        <View style={styles.grid}>
          <View>
            <Text style={styles.text}>Data</Text>
            <Text style={styles.text}>{format("dd-MM-yyyy", new Date())}</Text>
          </View>
          <View>
            <Text style={styles.text}>Semnatura</Text>
            <View style={styles.placeholder} />
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Renderer;
