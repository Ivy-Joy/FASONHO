export function ActivityList() {
  const activities = [
    {
      title: "Deployment successful",
      time: "2m ago",
    },
    {
      title: "New user registered",
      time: "12m ago",
    },
    {
      title: "Build completed",
      time: "48m ago",
    },
  ];

  return (
    <div className="rounded-xl border border-slate-100 bg-white p-4">
      <h4 className="mb-4 font-semibold text-[#0F172A]">
        Recent Activity
      </h4>

      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.title}
            className="flex items-start justify-between"
          >
            <div>
              <p className="text-sm font-medium text-slate-700">
                {activity.title}
              </p>
            </div>

            <span className="text-xs text-slate-400">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}