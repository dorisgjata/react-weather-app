import React from 'react';
import { Box, Grommet, Text, Anchor, Button } from 'grommet';
const theme = {
	global: {
		colors: {
			blue: '#ADD8E6'
		},
		font: {
			family: 'Roboto',
			size: '14px',
			height: '20px'
		}
	}
};
const today = new Date();
const date = today.getDate();
const day = today.getDay();
const monthNum = today.getMonth();
const year = today.getFullYear();
const daysName = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ];
const monthsName = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

const weekDay = daysName.find((item, index) => {
	if (day === index + 1) return item;
});
const month = monthsName.find((item, index) => {
	if (monthNum === index) return item;
});
const fullDate = date + ', ' + weekDay + ' ' + month + ' ' + year;
export default class App extends React.Component {
	render() {
		console.log(date, weekDay, month, year, daysName);
		return (
			<Grommet theme={theme}>
				<Box justify="center" direction="row-responsive" align="center" pad="large" gap="medium">
					<Box
						background="linear-gradient(to top,  #04befe   0%,  #209cff 100%)"
						align="center"
						pad="medium"
						gap="medium"
						round
					>
						<Box justify="center" direction="column-responsive">
							<Box pad="xsmall">
								<Text color="white">{fullDate}</Text>
							</Box>
						</Box>
						<Text color="white">42*</Text>
					</Box>
				</Box>
			</Grommet>
		);
	}
}
