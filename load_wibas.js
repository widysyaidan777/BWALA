fetch("wibas_wdh.csv")
  .then(res => res.text())
  .then(text => {
    const rows = text.split("\n").slice(1);
    const tbody = document.querySelector("#wibasTable tbody");

    rows.forEach((row, i) => {
      const cols = row.split(",");
      if (cols.length < 8) return;

      tbody.innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${cols[1]}</td>
          <td>${cols[2]}</td>
          <td>${cols[3]}</td>
          <td>${cols[4]}</td>
          <td>${cols[5]}</td>
          <td>${cols[6]}</td>
          <td>${cols[7]}</td>
        </tr>
      `;
    });
  });
