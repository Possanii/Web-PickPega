export function Dashboard() {
  return (
    <div className="flex flex-col gap-10">
      <iframe
        src="http://104.211.41.10:3000/d-solo/ca3458d8-eb52-43c4-bd31-515371bec50d/teste?orgId=1&from=1700919461946&to=1700941061946&panelId=1"
        width="100%"
        height="200"
        frameBorder="0"
      ></iframe>
      <iframe
        src="http://104.211.41.10:3000/d-solo/b70a0914-7c82-4a0c-8185-7e2427f5b333/new-dashboard?orgId=1&from=1701025101105&to=1701046701105&theme=dark&panelId=1"
        width=""
        height="200"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
