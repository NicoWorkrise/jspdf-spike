import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

const doc = new jsPDF();

const auditHistoryHeader = [
  {
    newStatus: "New Status",
    previousStatus: "Old Status",
    user: "User",
    createdAt: "Date",
  },
];
const auditHistoryBody = new Array(40).fill({
  newStatus: "ready_for_payment",
  previousStatus: "ready_for_client_review",
  user: "Juan",
  createdAt: "1/17/2022, 1:21:00 PM",
});

doc.text("Status History for Pepe (01/02/22 - 01/15/22)", 10, 10);
doc.setFontSize(12);
doc.text("Job Sheet #239525", 10, 17);
autoTable(doc, {
  head: auditHistoryHeader,
  body: auditHistoryBody,
  startY: 20,
  styles: {
    fillColor: 255,
    textColor: 0,
    lineWidth: {
      bottom: 0.2,
    },
  },
  headStyles: {
    fontSize: 14,
    fontStyle: "normal",
    lineColor: 0,
    lineWidth: {
      bottom: 0.4,
    },
  },
});
doc.save("history.pdf");
