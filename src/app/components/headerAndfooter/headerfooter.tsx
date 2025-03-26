import { useRouter } from 'next/navigation';

export const Header = () => {
    const router = useRouter();
    return (
        <header className="bg-blue-200 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">OfCourse</h1>
        <div className="space-x-2">
          <button
            className="bg-gray-300 px-4 py-1 rounded"
            onClick={() => router.push('/profile')}
          >
            Profiili
          </button>
          <button className="bg-gray-600 text-white px-4 py-1 rounded">
            Kirjaudu ulos
          </button>
        </div>
      </header>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-blue-200 p-4 flex justify-between items-center text-sm">
        <div>
          <p>OfCourse</p>
          <p>Tietoa</p>
          <p>Käyttöehdot</p>
          <p>Yhteystiedot</p>
        </div>
        <div className="text-center text-xs font-bold border border-black px-4 py-2 rounded-full">
          You problem with course? Don’t worry, OfCourse!
        </div>
        <div className="text-right">
          <p>mycourses.aalto.fi</p>
          <p>sisu.aalto.fi</p>
        </div>
      </footer>
    );
};

