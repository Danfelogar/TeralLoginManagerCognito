export function dateConverter(fecha: string) {
  const fechaObjeto = new Date(fecha);
  const dia = fechaObjeto.getDate();
  const mes = fechaObjeto.getMonth() + 1; // Los meses comienzan en 0, por lo que debemos sumar 1
  const anio = fechaObjeto.getFullYear();

  // Asegurémonos de tener siempre dos dígitos para el día y el mes
  const diaFormateado = ('0' + dia).slice(-2);
  const mesFormateado = ('0' + mes).slice(-2);

  return diaFormateado + '/' + mesFormateado + '/' + anio;
}
