import Image from "next/image"

export function WishlistCard({ title, description, imageUrl }) {
  return (
    <div className="bg-white/90 rounded-3xl p-4 flex items-center gap-4 shadow-sm">
      <div className="relative w-12 h-12 shrink-0">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover rounded-full"
        />
      </div>
      <div>
        <h3 className="font-semibold text-pink-500">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
