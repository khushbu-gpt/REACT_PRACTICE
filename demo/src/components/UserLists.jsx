import React, { useEffect, useState } from "react";
import { getAllUsers } from "../api/authApi";

const UserLists = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [users, setUser] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const res = await getAllUsers();
        setUser(res.data);
      } catch (err) {
        setError(err.response?.data?.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // useEffect(() => {
  //   const controller = new AbortController();

  //   api.get("/users", {
  //     signal: controller.signal,
  //   });

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  if (loading) return <div>Loadng...</div>;
  if (error) return console.log(error);
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center">Users</h1>
      <div className="flex gap-5 flex-wrap items-baseline justify-center my-5 py-5 bg-yellow-50">
        {users.slice(0,3).map((user) => {
          return (
            <div key={user.id}>
              {/* <Link href={`/users/${user.id}`}> */}
                <img
                  src={user?.avatar||user[0].avatar}
                  height={250}
                  width={250}
                  alt={user.name}
                />
                <p className="text-xl py-2 px-1">{user?.name}</p>
              {/* </Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserLists;
