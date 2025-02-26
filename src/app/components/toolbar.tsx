"use client";

type ToolbarProps = {
  onLogout: () => void; // A function that takes no arguments and returns nothing
  userName: string | null;
};

const Toolbar: React.FC<ToolbarProps> = ({ onLogout, userName }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-end items-center space-x-4">
      {userName && <span className="text-gray-600">{userName}</span>}
      <button
        onClick={onLogout}
        className="bg-red-500 text-white py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export { Toolbar };
