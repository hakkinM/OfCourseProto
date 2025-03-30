"use client"

import { useState } from "react"
import { CheckCircle, Search, SlidersHorizontal } from "lucide-react"
import { Header, Footer } from "../components/headerAndfooter/headerfooter"
import { useRouter } from "next/navigation"
import { Module } from "../types/types"
import { testModules } from "../components/test"


const degrees = [{ name: "Kandidaatin tutkinto" }, { name: "Maisterin tutkinto" }]
const sections = [{ name: "Pääaine" }, { name: "Sivuaine" }]
const schools = [
  { name: "ARTS" },
  { name: "BIZ" },
  { name: "ELEC" },
  { name: "ENG" },
  { name: "CHEM" },
  { name: "SCI" },
]

const SearchPage = () => {
  const [search, setSearch] = useState("")
  const [degree, setDegree] = useState<string | null>(null)
  const [section, setSection] = useState<string | null>(null)
  const [school, setSchool] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = () => {
    console.log({ search, degree, section, school })
  }

  const renderOptions = (
    label: string,
    options: { name: string }[],
    selected: string | null,
    setSelected: (name: string) => void
  ) => (
    <div>
      <h3 className="text-sm font-semibold mb-2">{label}</h3>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {options.map((opt) => (
          <div
            key={opt.name}
            onClick={() => setSelected(opt.name)}
            className={`cursor-pointer border rounded-lg px-4 py-2 flex justify-between items-center transition bg-white text-black ${
              selected === opt.name
                ? "border-blue-500 ring-2 ring-blue-500"
                : "hover:border-gray-300"
            }`}
          >
            <span>{opt.name}</span>
            {selected === opt.name && <CheckCircle className="text-blue-500" size={18} />}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col text-black bg-white">
      <Header />
      <main className="flex-1 px-6 py-8">
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
          <h1 className="text-2xl font-bold">Hae opintokokonaisuuksia</h1>

          {/* Search + Filters toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 shadow-sm bg-white w-full sm:max-w-md">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Hae opintokokonaisuuksia..."
                className="w-full outline-none text-sm bg-white text-black"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition"
              >
                <SlidersHorizontal size={16} />
                Suodattimet
              </button>

              <button
                onClick={handleSearch}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Hae
              </button>
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="grid md:grid-cols-3 gap-6">
                {renderOptions("Tutkinto", degrees, degree, setDegree)}
                {renderOptions("Aine", sections, section, setSection)}
                {renderOptions("Koulu", schools, school, setSchool)}
              </div>
            </div>
          )}

          {/* Results */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Tulokset</h2>
            <ModuleList modules={testModules}/>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default SearchPage


const ModuleList = ({ modules }: { modules: Module[] }) => {
  return (
    <div className="max-h-[500px] overflow-y-auto">
      {modules.map((module) => (
        <ModuleEntry key={module.moduleID} module={module} />
      ))}
    </div>
  );
};

const ModuleEntry = ({ module }: { module: Module }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/Modules/${module.moduleName}`)}
      className="w-full text-left border rounded p-4 bg-white shadow-sm hover:bg-gray-50 cursor-pointer"
    >
      <h3 className="font-semibold">
        {module.moduleName}
      </h3>
      <p>Katselukerrat: 123</p>
      <p>Arviointeja: 123</p>
    </button>
  );
};