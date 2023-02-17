import React, { Component } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import NotificationMessage from 'components/Notification';
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    return this.setState(prevState => ({
      [event]: prevState[event] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback()) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const total = countTotalFeedback();
    const positiveFeedback = countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          ) : (
            <NotificationMessage message="There is no feedback!" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
