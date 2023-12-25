export const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const fetchedData = await response.json();
      return fetchedData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };