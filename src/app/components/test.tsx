"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

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

const steps = [
  { title: "Valitse tutkinto", description: "Mikä tutkinto sinua kiinnostaa?", options: degrees },
  { title: "Valitse aine", description: "Valitse pääaine vai sivuaine.", options: sections },
  { title: "Valitse koulu", description: "Missä koulussa haluat opiskella?", options: schools },
]

const SelectionFlow = () => {
  const [step, setStep] = useState(0)
  const [selections, setSelections] = useState<(string | null)[]>([null, null, null])

  const current = steps[step]

  const handleSelect = (name: string) => {
    const updated = [...selections]
    updated[step] = name
    setSelections(updated)
  }

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1)
    else {
      // Final submit logic here
      console.log("Final selections:", {
        degree: selections[0],
        section: selections[1],
        school: selections[2],
      })
    }
  }

  const handleBack = () => {
    if (step > 0) setStep(step - 1)
  }

  const isSelected = (name: string) => selections[step] === name;

  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">{current.title}</h1>
      <p className="text-gray-500 mb-6">{current.description}</p>

      <div className="grid grid-cols-2 gap-4">
        {current.options.map((opt) => (
          <div
            key={opt.name}
            onClick={() => handleSelect(opt.name)}
            className={`cursor-pointer border rounded-xl p-4 flex items-center justify-between transition-all ${
              isSelected(opt.name)
                ? "border-blue-500 ring-2 ring-blue-500"
                : "hover:border-gray-300"
            }`}
          >
            <span>{opt.name}</span>
            {isSelected(opt.name) && <CheckCircle className="text-blue-500" />}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        {step > 0 && (
          <button
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg"
            onClick={handleBack}
          >
            Takaisin
          </button>
        )}
        <button
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg ml-auto disabled:opacity-50 transition-all"
          onClick={handleNext}
          disabled={!selections[step]}
        >
          {step < steps.length - 1 ? "Seuraava" : "Valmis"}
        </button>
      </div>
    </div>
  )
}

export default SelectionFlow
