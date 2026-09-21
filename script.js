const ledgers = {
  shanaya: [
    { type: "Deposit", date: "Sep 21, 2026", amount: 1000.00 }
  ],
  vidar: [
    { placeholder: true }
  ]
};

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

function renderLedger(elementId, entries) {
  const ledger = document.getElementById(elementId);
  ledger.innerHTML = entries.map((entry) => {
    if (entry.placeholder) {
      return `<tr class="placeholder-row">
        <td data-label="Type">—</td>
        <td data-label="Date">—</td>
        <td data-label="Amount">—</td>
      </tr>`;
    }
    const rowClass = entry.amount < 0 ? "withdrawal" : "deposit";
    const sign = entry.amount < 0 ? "−" : "+";
    return `<tr class="${rowClass}">
      <td data-label="Type"><span class="entry-type">${entry.type}</span></td>
      <td data-label="Date">${entry.date}</td>
      <td data-label="Amount">${sign}${money.format(Math.abs(entry.amount))}</td>
    </tr>`;
  }).join("");
}

renderLedger("shanaya-ledger", ledgers.shanaya);
renderLedger("vidar-ledger", ledgers.vidar);