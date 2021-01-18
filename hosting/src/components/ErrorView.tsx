import React from 'react';
import styled from '../style/styled';
import { captureException } from '@sentry/browser';
import ErrorIcon from 'mdi-react/ErrorIcon';
import { env } from '../App/config/env';

type Props = {
  error?: Error | null;
};

export class ErrorView extends React.Component<Props> {
  componentDidMount() {
    const { error } = this.props;

    if (!error) {
      return;
    }

    captureException(error);

    if (env.isDevelopment) {
      console.error(error);
    }
  }

  render() {
    return (
      <ErrorViewContainer>
        <ErrorIcon size={64} />
        <h2>An unknown error occurred!</h2>
        <p>Our engineers have been notified about it.</p>

        <h3>Troubleshooting tips</h3>
        <div>
          <ul>
            <li>Reloading the page would fix most problems.</li>
            <li>Clear the web browser cache if it fails.</li>
          </ul>
        </div>
      </ErrorViewContainer>
    );
  }
}

const ErrorViewContainer = styled.div`
  padding: 16px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme.palette.common.white};
  border-radius: 4px;
  background: ${(props) => props.theme.palette.common.white};

  > * {
    margin-bottom: 20px;
  }
`;
