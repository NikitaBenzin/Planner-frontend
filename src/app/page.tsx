import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<h1>About Planner</h1>
			<Link href={'/i'}>Dashboard</Link>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio placeat
				odio adipisci suscipit. Beatae suscipit, animi excepturi corrupti
				consectetur, dicta aperiam est velit adipisci, harum veniam explicabo
				consequatur numquam unde?
			</p>
		</div>
	)
}
