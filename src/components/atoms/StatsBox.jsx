export default function StatsBox() {
	return (
		<article className="stats stats-vertical lg:stats-horizontal shadow text-center ">
			<div className="stat">
				<div className="stat-title">Downloads</div>
				<div className="stat-value text-secondary">31K</div>
				<div className="stat-desc">Jan 1st - Feb 1st</div>
			</div>

			<div className="stat">
				<div className="stat-title">New Users</div>
				<div className="stat-value text-secondary">4,200</div>
				<div className="stat-desc">↗︎ 400 (22%)</div>
			</div>

			<div className="stat">
				<div className="stat-title">New Registers</div>
				<div className="stat-value text-secondary">1,200</div>
				<div className="stat-desc">↘︎ 90 (14%)</div>
			</div>
		</article>
	);
}
