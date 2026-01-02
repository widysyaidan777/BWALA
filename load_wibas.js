fetch("wibas_wdh.csv")
  .then(response => response.text())
  .then(csv => {
    const rows = csv.trim().split("\n");
    const tbody = document.querySelector("#wibasTable tbody");

    rows.slice(1).forEach(row => {
      const cols = row.split(",");
      const tr = document.createElement("tr");

      cols.forEach(col => {
        const td = document.createElement("td");
        td.textContent = col;
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });
  })
  .catch(err => console.error("CSV load error:", err));
