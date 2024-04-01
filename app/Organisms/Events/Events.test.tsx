import { render, screen, waitFor, within } from '@testing-library/react';
import axios from 'axios';

import Events from './';

import { describe } from 'node:test';

jest.mock('axios');
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
  }),
}));

const mockedAxios = axios as jest.Mocked<typeof axios>

const mockEvents = [
  {
    id: "asd",
    name: "event 1",
    slug: "event-1/asd",
    status: 1,
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: new Date(),
    data: {
      timezone: "Asia/Vladivostok",
      location_long: 103.22593,
      location_lat: -28.619245,
      scheduled_dates: [new Date('2024-01-20 02:15:44'), new Date('2024-01-21 02:59:04'), new Date('2024-01-22 15:49:09')],
    }
  }
];

describe('Events', () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({ data: { data: mockEvents } });
  });

  it('should render spinner before if data is loading', async () => {
    render(<Events />);
    await waitFor(() => {
      expect(screen.getByRole('progressbar'))
    });
  });

  it('should render Events with components', async () => {
    render(<Events />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
    expect(screen.getByText('event 1')).toBeInTheDocument();
    expect(screen.getByText('Event Hub')).toBeInTheDocument();

    const link = screen.getByRole('link', {
      name: /event-image event 1 Sat Jan 20 2024 - Mon Jan 22 2024 London/i
    });
    
    within(link).getByRole('img', {
      name: /event\-image/i
    });
  });
});