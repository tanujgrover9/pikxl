
import { useParams } from 'react-router-dom'


export default function ProductPage(){
const { id } = useParams()
return (
<div className="glass p-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="rounded overflow-hidden h-96 bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">High-res preview / video player (id: {id})</div>
<div>
<h2 className="text-2xl font-semibold">AI Artwork #{id}</h2>
<p className="text-gray-300 mt-2">Creator • Licensing options • Tags</p>
<div className="mt-6 flex gap-3">
<button className="px-6 py-3 bg-accent rounded font-semibold text-black">Buy Now</button>
<button className="px-6 py-3 border border-white/10 rounded">Add to Cart</button>
</div>
</div>
</div>
</div>
)
}