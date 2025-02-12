export default async function SequentialApiCalls() {
  const fetchSequentialApi = async (apiList, callback) => {

    //METHOD1: WITHOUT Promise.all

    // let results = [];

    // for (let api of apiList) {
    //   try {
    //     const res = await fetch(api);
    //     if (!res.ok) throw new Error("Failed to fetch the data");
    //     const data = await res.json();
    //     results.push({ success: true, data });
    //     console.log("fetched data:", data);
    //   } catch (error) {
    //     console.error("Error fetching:", api, error);
    //   }
    // }

    // METHOD2: using map
    // Promise.all(apiList.map((api) => fetch(api).then((res) => res.json())))
    //   .then((results) => console.log("All APIs completed:", results))
    //   .catch((error) => console.error("Error:", error));
    // if (callback) callback();

    // METHOD3: Manual approach

    const api1 = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
      (res) => res.json()
    );
    const api2 = fetch("https://jsonplaceholder.typicode.com/todos/2").then(
      (res) => res.json()
    );
    const api3 = fetch("https://jsonplaceholder.typicode.com/todos/3").then(
      (res) => res.json()
    );

    Promise.all([api1, api2, api3])
      .then((results) => {
        console.log("All API responses:", results);
      })
      .catch((error) => {
        console.error("One or more API calls failed:", error);
      });
  };

  const apiList = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos2",
    "https://jsonplaceholder.typicode.com/todos/3",
  ];
  fetchSequentialApi(apiList, () => {
    console.log("All API calls are completed");
  });
}
