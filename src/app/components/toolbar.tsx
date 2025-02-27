"use client";

type ToolbarProps = {
  onLogout: () => void; // A function that takes no arguments and returns nothing
  userName: string | null;
};

const Toolbar: React.FC<ToolbarProps> = ({ onLogout, userName }) => {
  return (
    <div className="navbar bg-primary text-primary-content text-xl">
      {/*navbar start component */}
      <div className="navbar-start">
        <button className="btn btn-ghost text-2xl">OfCourse</button>
      </div>
      {/*navbar end components */}
      <div className="navbar-end">
        {userName && <span className="text-inherit p-4">{userName}</span>}
        <button
          onClick={onLogout}
          className="bg-blue-600 text-inherit py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

/*
const Navbar = () => {
  const router = useRouter();
  return (
    <div className="navbar bg-primary text-primary-content text-xl">
      <button
        className="btn btn-ghost text-2xl"
        onClick={() => router.push("/info")}
      >
        OfCourse
      </button>
    </div>
  );
};
*/

export { Toolbar };
