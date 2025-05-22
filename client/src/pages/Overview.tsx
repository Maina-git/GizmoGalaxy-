import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <div className="w-fill h-screen bg-blue-500 flex items-center justify-center">
        <h1 className="text-white font-bold text-5xl">Welcome Gizmo Galaxy</h1>
<Link to="/h">
<button className="px-5 py-3 bg-white text-blue-500 rounded-lg">to home</button>
</Link>
    </div>
  )
}

export default Overview;