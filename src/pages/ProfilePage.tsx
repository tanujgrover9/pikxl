
import { useParams } from 'react-router-dom'


export default function ProfilePage(){
const { id } = useParams()
return (
<div>
<div className="glass p-6 flex items-center gap-4">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent" />
<div>
<div className="font-semibold">Creator {id}</div>
<div className="text-sm text-gray-300">AI Artist • 120 items</div>
</div>
</div>


<div className="mt-6 grid md:grid-cols-3 gap-4">
{new Array(9).fill(0).map((_,i)=> (
<div key={i} className="bg-white/3 rounded h-40"></div>
))}
</div>
</div>
)
}