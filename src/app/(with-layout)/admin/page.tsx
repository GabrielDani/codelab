import { getNewPurchasedCoursesStats, getNewUsersStats } from "@/actions/stats";
import { StatsCharts } from "@/components/pages/admin/stats-charts";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const newUsers = await getNewUsersStats();
  const newPurchasedCourses = await getNewPurchasedCoursesStats();

  console.log(newUsers, newPurchasedCourses);
  return (
    <>
      <StatsCharts
        newUsersStats={newUsers}
        newPurchasedCoursesStats={newPurchasedCourses}
      />
    </>
  );
}
