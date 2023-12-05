export function Dashboard() {
  return (
    <>
      <div className="flex flex-col gap-10 w-full h-full">
        <div className="flex w-full gap-4">
          <div className="flex flex-col w-1/2 gap-4">
            <iframe
              src="http://104.211.41.10:3000/d-solo/a9d80681-3293-4683-b58d-a41e171b3733/tempo-necessario-preco?orgId=1&from=1701703774185&to=1701725374185&panelId=3"
              width="100%"
              height="300"
              frameBorder="0"
            ></iframe>
            <iframe
              src="http://104.211.41.10:3000/d-solo/a9d80681-3293-4683-b58d-a41e171b3733/tempo-necessario-preco?orgId=1&from=1701703832720&to=1701725432720&panelId=1"
              width="100%"
              height="300"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="w-1/2 h-full">
            <iframe
              src="http://104.211.41.10:3000/d-solo/a9d80681-3293-4683-b58d-a41e171b3733/tempo-necessario-preco?orgId=1&from=1701703817241&to=1701725417241&panelId=2"
              width="100%"
              height="616"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <iframe
          src="http://104.211.41.10:3000/d-solo/a9d80681-3293-4683-b58d-a41e171b3733/tempo-necessario-preco?orgId=1&from=1701703796235&to=1701725396235&panelId=5"
          width="100%"
          height="200"
          frameBorder="0"
        ></iframe>
        {/* <iframe
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
      ></iframe> */}
      </div>
    </>
  );
}
