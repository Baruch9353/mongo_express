import { getAllReports, createReport, confirmReport, deleteReport } from "../dal/reportDal.js";

export async function getReports(req, res) {
    const reports = await getAllReports();
    res.json(reports);
}

export async function postReport(req, res) {
    const reportData = req.body;
    const insertedId = await createReport(reportData);
    res.status(201).json({ insertedId });
}

export async function confirmReportController(req, res) {
    const id = req.params.id;
    const modifiedCount = await confirmReport(id);
    if (modifiedCount === 0) {
      return res.status(404).json({ error: "Report not found" });
    }
    res.json({ message: "Report confirmed" });
}

export async function deleteReportController(req, res) {
  const id = req.params.id;
    const deletedCount = await deleteReport(id);

    if (deletedCount === 0) {
      return res.status(404).json({ error: "Report not found" });
    }

    res.json({ message: "Report deleted" });
}