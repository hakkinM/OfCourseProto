"use client"

import Image from "next/image"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { Header, Footer } from "@/app/components/headerAndfooter/headerfooter"
import { useParams } from "next/navigation"
import { testModules } from "@/app/components/test"
import { invalidModule } from "@/app/components/test"
import ReviewWindow from "@/app/pages/review-section"

const comments = [
  {
    avatar: "/user1.png",
    text: `Sivuaineen myötä sain selkeän käsityksen opintojen tulevasta suunnasta. Matikan sivuaine helpottaa oman pääaineen kurssien matemaattisten konseptien ymmärtämistä. Kesätöissäni tarvitsin varsinkin kurssin “Statistical Inference” tietoja erilaisten datajoukkojen käsittelyssä.`,
    upvotes: 62,
  },
  {
    avatar: "/user2.png",
    text: `Mid-tier sivuaine. Kurssit epäselkeää salakieltä, ja jos haluaa hyviä numeroita, pitää grindaa iha sikana. Ei varmaa mitä hyötyy yhdestäkään kurssista tulevaisuudessa.`,
    upvotes: -12,
  },
]

const ratings = [
  { label: "Yleisarvosana", value: 4, count: 340 },
  { label: "Valinnanvara", value: 4, count: 337 },
  { label: "Hyödyllisyys", value: 2, count: 329 },
  { label: "Mielekkyys", value: 3, count: 334 },
]

const ModuleDetail = () => {
  const { name } = useParams();

  const module = testModules.find((m) => (m.moduleName == name)) ?? invalidModule;

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-6 space-y-4">
        {/* Module Overview */}
        <div className="border rounded-lg bg-[#f3f6ff] p-4 flex flex-col md:flex-row items-start gap-4">
          <Image
            src="/module-image.jpg"
            alt="Module"
            width={140}
            height={140}
            className="rounded object-cover"
          />

          <div className="flex-1 space-y-1">
            <h2 className="text-lg font-semibold">{module.moduleName}</h2>
            <p className="text-sm text-gray-700 leading-snug">
              Tämän sivuaineen suorittamalla opiskelijat voivat kehittää matemaattista ajatteluaan ja ongelmanratkaisutaitoja, sekä oppia matematiikan ja tilastotieteen menetelmiä, joista on hyötyä tieteessä, teknologiassa, taiteissa ja kauppatieteissä.
            </p>

            <div className="flex gap-2 pt-2">
              <button className="bg-white px-3 py-1.5 border rounded-md hover:bg-gray-50 text-sm">
                Katso kurssit
              </button>
              <button className="bg-white px-3 py-1.5 border rounded-md hover:bg-gray-50 text-sm">
                Arvostele sivuaine
              </button>
            </div>
          </div>
          <div className="text-sm text-right space-y-1 min-w-[160px]">
            {ratings.map((r) => (
              <div key={r.label}>
                <span className="font-medium">{r.label}</span>{" "}
                <span className="text-yellow-500">{Array(r.value).fill("★").join("")}</span>
                <span className="text-gray-500 ml-1">{r.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div className="border rounded-lg bg-[#f3f6ff] p-4">
            <ReviewWindow pageID={module.moduleID} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ModuleDetail


/**
 *           <div className="space-y-2">
            {comments.map((c, i) => (
              <div
                key={i}
                className="bg-white border rounded-md p-3 flex gap-3 items-start"
              >
                <div className="flex-1 text-sm text-gray-800 leading-snug">
                  {c.text}
                </div>
                <div className="flex flex-col items-center text-xs min-w-[30px]">
                  <ThumbsUp className="text-green-600" size={16} />
                  <span className="font-semibold">{c.upvotes}</span>
                  <ThumbsDown className="text-red-600" size={16} />
                </div>
              </div>
            ))}
          </div>
 */