/**
 * @param dateTimeISO Standard ISO format for datetime
 *
 * @returns formatted local string e.g. Minggu, 23 Januari 2024
 */
export function formatToLocal(dateTimeISO: string | null) {
  if (!dateTimeISO) {
    return "00";
  }
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const days = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
  ];
  // return akan seperti Minggu, 24 januari 2024
  //   buat instansi Date
  const dt = new Date(dateTimeISO);
  // ambil hari (format)
  const day = days[dt.getDay()];
  // ambil tanggal
  const date = dt.getDate();
  // ambil bulan (format)
  const month = months[dt.getMonth()];
  // ambil tahun
  const year = dt.getFullYear();
  // format waktu
  const time = `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;

  return `${day}, ${date} ${month} ${year} ${time}`;
}
