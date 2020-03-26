import * as Yup from "yup";

export const schema = Yup.object().shape({
  nume: Yup.string().required("required"),
  adresa_localitate: Yup.string().required("required"),
  adresa_judet: Yup.string().required("required"),
  adresa_strada: Yup.string().required("required"),
  // adresa_numar: "",
  // adresa_bloc: "",
  // adresa_etaj: "",
  // adresa_apartament: "",
  cnp: Yup.string().required("required"),
  ci_seria: Yup.string().required("required"),
  // ci_numar: "",
  // domiciliu_localitate: "",
  // domiciliu_judet: "",
  // domiciliu_strada: "",
  // domiciliu_numar: "",
  // domiciliu_bloc: "",
  // domiciliu_etaj: "",
  // domiciliu_apartament: "",
  interval_orar: Yup.string().required("required"),
  traseu_start: Yup.string().required("required"),
  traseu_sfarsit: Yup.string().required("required"),
  situatie_urgenta: Yup.string().when(["deplasare_urgenta"], { is: true, then: Yup.string().required() }),
  checkboxes_are_valid: Yup.bool().when(
    [
      "deplasare_servici",
      "deplasare_consult",
      "deplasare_cumparaturi",
      "deplasare_ajutor",
      "deplasare_scurta",
      "deplasare_animale",
      "deplasare_urgenta",
    ],
    {
      is: false,
      then: Yup.bool().oneOf([true], "Field must be checked"),
    },
  ),
});

// a: yup.string().when(['b', 'c'], {
//   is: (b, c) => !b && !c,
//   then: yup.string().required()
// }),
// b: yup.string().when(['a', 'c'], {
//   is: (a, c) => !a && !c,
//   then: yup.string().required()
// }),
// c: yup.string().when(['a', 'b'], {
//   is: (a, b) => !a && !b,
//   then: yup.string().required()
// })
