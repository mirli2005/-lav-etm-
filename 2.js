class Sirket {
  isciler = [
    [
      "Elvin Tacirzadə",
      "Nigar Mirzəyeva",
      "Səbinə Qəniyeva",
      "Mir Əli Mir Seyid"
    ],
    [
      "JS Developer",
      "Full Stack Developer",
      "PHP Developer",
      "Back End Developer"
    ],
    [3000, 1200, 1200, 800]
  ];

  constructor(ad) {
    this.ad = ad;
  }

  IscilerSiyahi() {
    let tbl = `
            <tr>
                <th>Ad Soyad</th>
                <th>Vəzifə</th>
                <th>Maas (Ayliq AZN)</th>
                <th>Maas (Illik AZN)</th>
                <th>Maas (Ayliq USD)</th>
                <th>Maas (Illik USD)</th>
            </tr>
        `;
    for (let i = 0; i < this.isciler[0].length; i++) {
      tbl += `
                <tr>
                    <td>${this.isciler[0][i]}</td>
                    <td>${this.isciler[1][i]}</td>
                    <td>${this.isciler[2][i]} AZN</td>
                    <td>${this.isciler[2][i] * 12} AZN</td>
                    <td>${Math.round(this.isciler[2][i] / 1.7)} USD</td>
                    <td>${Math.round((this.isciler[2][i] * 12) / 1.7)} USD</td>
                </tr>
            `;
    }
    return tbl;
  }

  input() {
    let tbl = document.getElementsByTagName("table")[1]
  }
}

let yuptech = new Sirket("Yup Technology");

onload = function () {
  let h1 = document.getElementsByTagName("h1")[0];
  let tbl = document.getElementsByTagName("table")[0];
  h1.innerHTML = yuptech.ad;
  tbl.innerHTML = yuptech.IscilerSiyahi();
};
function qur2() {
  let inp1 = document.getElementsByTagName("input")[0].value;
  let inp2 = document.getElementsByTagName("input")[1].value;
  let inp3 = document.getElementsByTagName("input")[2].value;
  isciler[0].push(inp1);
  isciler[1].push(inp2);
  isciler[2].push(inp3);
  
  return this.Isciler();
}
