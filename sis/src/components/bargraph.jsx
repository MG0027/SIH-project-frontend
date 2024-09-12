import React, { PureComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-customized-event-mmwz85';
  
  state = {
    data: [
      {
        name: 'Day-1',
        MoistureLevel: 45,
        pv: 100,
        amt: 100,
      },
      {
        name: 'Page B',
        MoistureLevel: 30,
        pv: 100,
        amt: 100,
      },
      {
        name: 'Page C',
        MoistureLevel: 20,
        pv: 100,
        amt: 100,
      },
      {
        name: 'Page D',
        MoistureLevel: 27,
        pv: 100,
        amt: 100,
      },
      {
        name: 'Page E',
        MoistureLevel: 10,
        pv: 100,
        amt: 100,
      },
      {
        name: 'Page F',
        MoistureLevel: 23,
        pv: 100,
        amt: 100,
      },
      {
        name: 'Page G',
        MoistureLevel: 34,
        pv: 100,
        amt: 100,
      },
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];
    
    

    return (
      <div style={{ width: '100%' }}>
        <p>Click each rectangle <br />(Moisture level is in %)</p>
        <ResponsiveContainer width="100%" height={100}>
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="MoistureLevel" onClick={this.handleClick}>
              {data.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="content">{`MoistureLevel of "${activeItem.name}": ${activeItem.MoistureLevel}`}</p>
      </div>
    );
  }
}
