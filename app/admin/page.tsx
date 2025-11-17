// app/admin/page.tsx

import AdminDashboardClient from "./AdminDashboardClient";
import { getDashboardCounts } from "@/lib/actions/admin.actions";

export default async function AdminDashboard() {
  const counts = await getDashboardCounts();

  return <AdminDashboardClient counts={counts} />;
}
