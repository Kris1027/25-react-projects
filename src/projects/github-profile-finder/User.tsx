type UserProps = {
  login: string;
  avatar_url: string;
  created_at: string;
  public_repos: number;
  followers: number;
  following: number;
};

export const User = ({ user }: { user: UserProps }) => {
  return (
    <div>
      <div>
        <img src={user.avatar_url} alt="avatar" />
      </div>
      <a href={`https://github.com/${user.login}`} target="_blank">
        {user.login}
      </a>
      <p>User joined {new Date(user.created_at).toDateString()}</p>
      <p>Public Repos : {user.public_repos}</p>
      <p>Followers : {user.followers}</p>
      <p>Following : {user.following}</p>
    </div>
  );
};
