export function Dashboard() {
  return (
    <div className="flex flex-col gap-10 h-full">
      <iframe
        src="http://104.211.41.10:3000/d/a9d80681-3293-4683-b58d-a41e171b3733/tempo-necessario-preco?orgId=1&from=1701039118081&to=1701060718081"
        width="100%"
        height="700"
        frameBorder="0"
      ></iframe>
      <iframe
        src="http://104.211.41.10:3000/d-solo/a9d80681-3293-4683-b58d-a41e171b3733/tempo-necessario-preco?orgId=1&from=1701038365767&to=1701059965767&panelId=2"
        width="450"
        height="200"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
