const fetchData = async () => {
  const rawData0 = await fetch("https://jsonplaceholder.typicode.com/users");
  const rawData1 = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonData = await rawData1.json();
  const textData = await rawData0.text();
  console.log("Data in JSON format", jsonData);
  console.log("Data in Text format", textData);
};

const FetchBtn = () => {
  return (
    <div>
      <p style={{ fontSize: "20px" }}>Click below to fetch data</p>
      <button onClick={fetchData} className="btn btn-primary m-5">
        Fetch
      </button>
    </div>
  );
};

export default FetchBtn;
