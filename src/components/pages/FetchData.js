import { useEffect, useState } from "react";
import axios from "axios";
const FetchData = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const url = "https://randomuser.me/api/";
    axios(url)
      .then((data) => {
        console.log(data.data.results);
        return setUser(data.data.results);
      })
      .catch((err) => {
        return err.message;
      });
  }, []);

  return (
    <div>
      <p>total: {user.length} </p>
    </div>
  );
};

export default FetchData;
