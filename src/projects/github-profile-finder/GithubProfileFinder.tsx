import { useEffect, useState } from "react";
import { User } from "./User";

// `https://api.github.com/users/${username}`
export const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("kris1027");
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchGithubProfileData() {
    setIsLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    if (data) {
      setProfile(data);
      setIsLoading(false);
      setUserName("");
    }
    console.log(data);
  }

  function handleSearch() {
    fetchGithubProfileData();
  }

  useEffect(() => {
    fetchGithubProfileData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p-4">
      <div className="space-x-4">
        <input
          className="px-4 py-2 border-2"
          name="search-by-username"
          type="text"
          placeholder="Enter username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button
          className="px-6 py-2 bg-blue-500 text-white active:scale-95"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div>{profile !== null ? <User user={profile} /> : null}</div>
    </div>
  );
};
