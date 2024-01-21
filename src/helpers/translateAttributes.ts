import Translate from "src/model/Translate";

export function translateAttributes(
  objeto: Translate,
  traducciones: Record<string, string>
): Record<string, string> {
  const objetoTraducido: Record<string, string> = {};

  for (const clave in objeto) {
    if (traducciones.hasOwnProperty(clave)) {
      objetoTraducido[traducciones[clave]] = objeto[clave];
    } else {
      objetoTraducido[clave] = objeto[clave];
    }
  }

  return objetoTraducido;
}