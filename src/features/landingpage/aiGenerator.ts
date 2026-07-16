export function detectTemplate(title: string) {
  const text = title.toLowerCase();

  if (text.includes("maulid"))
    return {
      template: "maulid",
      cover: "/landingpage/maulid.jpeg",
      quote: "Menebar Cinta Rasulullah SAW, Menguatkan Ukhuwah Islamiyah",
      theme: "green",
    };

  if (text.includes("yatim"))
    return {
      template: "yatim",
      cover: "/landingpage/yatim.jpg",
      quote: "Senyum Mereka Adalah Kebahagiaan Kita",
      theme: "blue",
    };

  if (text.includes("wakaf"))
    return {
      template: "wakaf",
      cover: "/landingpage/wakaf.jpg",
      quote: "Satu Huruf Dibaca, Pahala Mengalir Selamanya",
      theme: "purple",
    };

  if (text.includes("masjid"))
    return {
      template: "masjid",
      cover: "/landingpage/masjid.jpg",
      quote: "Bangun Rumah Allah, Bangun Peradaban",
      theme: "gold",
    };

  return {
    template: "pengajian",
    cover: "/landingpage/pengajian.jpg",
    quote: "Menuntut Ilmu, Menjemput Berkah",
    theme: "red",
  };
}