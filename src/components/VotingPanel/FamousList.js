// @flow
import React, { PureComponent } from 'react';
import FamousWrapper from './FamousWrapper';
import Famous from './Famous';

type State = {
  famous: Object[]
}

class FamousList extends PureComponent<State> {
  state = {
    famous: [],
    error: false
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    try {
      const response = await fetch('/data/data.json');
      const famous = await response.json();
      this.setState({
        famous,
      });
    } catch (ex) {
      this.setState({
        error: true,
      });
    }
  }

  render() {
    const { famous } = this.state;
    return (
      <FamousWrapper>
        {famous.map(ruling => (
          <Famous
            key={ruling.id}
            image={ruling.image}
            name={ruling.name}
            date={ruling.date}
            field={ruling.field}
            description={ruling.description}
          />
        ))}
      </FamousWrapper>
    );
  }
}

export default FamousList;
