export function detectTemplate(title: string) {
  const text = title.toLowerCase();

  if (text.includes("maulid"))
    return {
      template: "maulid",
      quote: "Menebar Cinta Rasulullah SAW, Menguatkan Ukhuwah Islamiyah",
      theme: "green",
    };

  if (text.includes("yatim"))
    return {
      template: "yatim",
      quote: "Senyum Mereka Adalah Kebahagiaan Kita",
      theme: "blue",
    };

  if (text.includes("wakaf"))
    return {
      template: "wakaf",
      quote: "Satu Huruf Dibaca, Pahala Mengalir Selamanya",
      theme: "purple",
    };

  if (text.includes("masjid"))
    return {
      template: "masjid",
      quote: "Bangun Rumah Allah, Bangun Peradaban",
      theme: "gold",
    };

  return {
    template: "pengajian",
    quote: "Menuntut Ilmu, Menjemput Berkah",
    theme: "red",
  };
}