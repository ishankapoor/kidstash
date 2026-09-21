const ledgers = {
  shanaya: [
    { type: "Deposit", date: "Sep 21, 2026 · 11:44 PM", amount: 1000.00 }
  ],
  vidar: [
    { type: "Deposit", date: "Sep 13, 2026 · 10:00 AM", amount: 10.00 },
    { type: "Withdrawal", date: "Sep 06, 2026 · 2:45 PM", amount: -3.25 },
    { type: "Deposit", date: "Aug 28, 2026 · 4:00 PM", amount: 7.00 }
  ]
};

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

function renderLedger(elementId, entries) {
  const ledger = document.getElementById(elementId);
  ledger.innerHTML = entries.map((entry) => {
    const rowClass = entry.amount < 0 ? "withdrawal" : "deposit";
    const sign = entry.amount < 0 ? "−" : "+";
    return `<tr class="${rowClass}">
      <td data-label="Type"><span class="entry-type">${entry.type}</span></td>
      <td data-label="Date & time">${entry.date}</td>
      <td data-label="Amount">${sign}${money.format(Math.abs(entry.amount))}</td>
    </tr>`;
  }).join("");
}

renderLedger("shanaya-ledger", ledgers.shanaya);
renderLedger("vidar-ledger", ledgers.vidar);