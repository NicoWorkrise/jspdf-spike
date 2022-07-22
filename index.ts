import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

const doc = new jsPDF();

const auditHistory = new Array(40).fill({
  newStatus: 'ready_for_payment',
  previousStatus: 'ready_for_client_review',
  user: 'Juan',
  createdAt: '1/17/2022, 1:21:00 PM',
})

doc.text("Status History for Pepe (01/02/22 - 01/15/22)", 10, 10);
doc.setFontSize(12);
doc.text("Job Sheet #239525", 10, 17);
autoTable(doc, {
  head: [['New Status', 'Old Status', 'User', 'Date']],
  body: auditHistory.map((audit) => [audit.newStatus, audit.previousStatus, audit.user, audit.createdAt]),
  theme: "grid",
  margin: { top: 20 },
})
doc.save("history.pdf");
