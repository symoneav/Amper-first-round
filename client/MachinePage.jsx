import React from "react";
import PropTypes from "prop-types";

const MachinePage = ({
	averageCycleTime,
	machine,
	partCount,
	partsByHour,
	productionTime,
	scrapCount,
	scrapPercentage,
	utilization,
}) => {
	//dummy company target machine data
	const companyMachineGoal = {
		averageCycleTimeTarg: 45,
		partsByHourAvg: 50,
		scrapsCountTarg: 70,
		scrapPercentageTarg: 0.05,
		utilizationTarg: 0.85,
	};
	//trying to extract the date without time
	let date = new Date();
	date = String(date);
	date = date.split(" ");
	let todaysDate = date.slice(0, 4);
	todaysDate = todaysDate.join(" ");
	//
	const scrapInPercentage = scrapPercentage * 100; //converting decimal to %
	const utilizationPercentage = utilization * 100; //converting decimal to %
	partsByHour.filter((part) => (part.time = String(part.time))); //I had to turn them into strings again even though they wetre strings because the browser was throwing a time error
	//going to model easy to view output feedback based on company specified machine target goals
	const companyTargetCycleAvg = (
		((companyMachineGoal.averageCycleTimeTarg - averageCycleTime) /
			companyMachineGoal.averageCycleTimeTarg) *
		-100
	).toFixed(2);
  const partsPerHourAvg = partCount / partsByHour.length;
	const companyTargetPartsPerHour = 
		((companyMachineGoal.partsByHourAvg - partsPerHourAvg)*-1).toFixed(2) 
	; //need better more distinguished names
	const companyScrapsCountTarg =
		(companyMachineGoal.scrapsCountTarg - scrapCount)*-1;
	const companyScrapPercentageTarg =
		(((companyMachineGoal.scrapPercentageTarg - scrapPercentage) /
			companyMachineGoal.scrapPercentageTarg) *
		-100).toFixed(2);
	const companyUtilizationTarg =
		(((companyMachineGoal.utilizationTarg - utilization) /
			companyMachineGoal.utilizationTarg) *
		-100).toFixed(2);
	//
	return (
		<div className="machine">
			<div className="machine-list-item">
				<h1>{machine.name}</h1>
				<div className="machine-id">
					<h2>Summary</h2>
					<h3>id#: {machine.id}</h3>
				</div>
				<div className="machine-info">
					<div className="right-column-machine-info">
						<div className="machine-general-info">
							<div className="machine-general-header">
								<h3> General Machine Information</h3>{" "}
							</div>
							<div className="machine-general-item">
								<b>Avg Time Per Cycle:</b> {averageCycleTime} seconds
							</div>
							<br />
							<div className="machine-general-item">
								{" "}
								<b>Scrap: </b> {scrapInPercentage} %
							</div>
							<br />
							<div className="machine-general-item">
								<b>Scrap Count: </b> {scrapCount} parts
							</div>
							<br />
							<div className="machine-general-item">
								{" "}
								<b>Production Time: </b> {productionTime} hours
							</div>
							<br />
							<div className="machine-general-item">
								<b>Utilization: </b> {utilizationPercentage} %{" "}
							</div>
						</div>
						<div className="company-machine-goals">
							<h3> Machine Productiviy Analysis</h3>
							<div className="company-machine-goal-item">
								<b>Target Cycle Avg: </b>{" "}
								{companyTargetCycleAvg <= 0 ? (
									<div className="green">{companyTargetCycleAvg} % <p>*You are under your company's machine cycle average goal by <span className='green'> {companyTargetCycleAvg} %</span>.</p></div>
								) : (
                <div className="red">{companyTargetCycleAvg} % <p>*You are over your company's machine cycle average goal by <span className='red'>{companyTargetCycleAvg} %</span>.</p></div>
								)}
							</div>
							<br />
							<div className="company-machine-goal-item">
								<b>Target Parts per hour: </b>
								{companyTargetPartsPerHour >= 0 ? (
									<div className="green">{companyTargetPartsPerHour} parts per hour <p>*You are over your company's average parts per hour goal by <span className='green'>{companyTargetPartsPerHour} parts per hour</span>.</p></div>
								) : (
                <div className="red">{companyTargetPartsPerHour} parts per hour <p>*You are under your company's average parts per hour goal by <span className='red'>{companyTargetPartsPerHour} parts per hour</span>.</p></div>
								)}
							</div>
              <br/>
              <div className="company-machine-goal-item">
                <b>Target Company Scraps Count: </b>{
                  companyScrapsCountTarg > 0 ? <div className='red'>{companyScrapsCountTarg} parts <p>*You are over your company's machine scrap count goal by <span className='red'>{companyScrapsCountTarg} parts</span>.</p></div>:<div className='green'>{companyScrapsCountTarg} parts <p>*You are at or under your company's scrap count goal by <span className='green'>{companyScrapsCountTarg} parts</span>.</p></div>
                }
              </div>
              <br/>
              <div className="company-machine-goal-item">
                <b>Target Company Scraps %: </b>{
                  companyScrapPercentageTarg >10 ? <div className='red'>{companyScrapPercentageTarg} %<p>*You are over your company's machine scrap ratio by <span className='red'>{companyScrapPercentageTarg} %</span>.</p></div>:<div className='green'>{companyScrapPercentageTarg} % <p>*You are under your company's machine scrap ratio by<span>{companyScrapPercentageTarg} %</span>.</p></div>
                } 
              </div>
              <br/>
              <div className="company-machine-goal-item">
              <b>Target Company Utilization: </b>{companyUtilizationTarg > 0 ? <div className='green'>{companyUtilizationTarg} %<p>*You are over your company's machine utilization goal by <span className='green'>{companyUtilizationTarg} %</span>.</p></div>: <div className='red'>{companyUtilizationTarg} %<p>*You are under your company's machine utilization goal by <span className='red'>{companyUtilizationTarg} %</span>.</p></div>}
              </div>
              <br/>
						</div>
					</div>
					<div className="machine-production-breakdown">
						<div>
							{" "}
							<div className="parts-by-hour-header">
								<b>Parts By Hour </b> <b>Date: {todaysDate}</b>
							</div>{" "}
							<br />
							{partsByHour.map((part) => (
								<div key={part.time} className="parts-per-hour">
									{" "}
									<div>
										<b>time: </b>
										{part.time}
									</div>
									<div>
										<b>count: </b>
										{part.count}
									</div>
								</div>
							))}
						</div>
						<div className="total-part-count">
							<b>Total Part Count:</b> {partCount}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

MachinePage.defaultProps = {};
MachinePage.propTypes = {
	averageCycleTime: PropTypes.number.isRequired,
	machine: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
	}),
	partCount: PropTypes.number.isRequired,
	partsByHour: PropTypes.arrayOf(
		PropTypes.shape({
			time: PropTypes.string.isRequired,
			count: PropTypes.number.isRequired,
		})
	),
	productionTime: PropTypes.number.isRequired,
	scrapCount: PropTypes.number.isRequired,
	scrapPercentage: PropTypes.number.isRequired,
	utilization: PropTypes.number.isRequired,
};

export default MachinePage;
