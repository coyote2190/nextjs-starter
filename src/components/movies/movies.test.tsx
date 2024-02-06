import { fireEvent, screen, waitFor } from '@testing-library/react';
import axios, { AxiosError } from 'axios';
import Movies from './movies';
import { renderWithEveryProvider } from '../../__tests__/test-utils';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockUseUpdateListMovies = jest.fn();
const mockUseGetListMovies = jest.fn();

jest.mock('@/store/movies/hooks', () => ({
  useUpdateListMovies: jest.fn(() => mockUseUpdateListMovies)
}));

jest.mock('@/store/movies/selectors', () => ({
  useGetListMovies: jest.fn(() => mockUseGetListMovies)
}));

describe('Movies', () => {
  it('should render Movies by getByRole', () => {
    renderWithEveryProvider(<Movies />);

    const elementH1 = screen.getByRole('heading'); // have text

    expect(elementH1).toBeInTheDocument();
    expect(elementH1).toHaveTextContent(/Movies/i);
  });

  it('should render Movies by querySelector', () => {
    renderWithEveryProvider(<Movies />);

    const elementH1 = screen.queryByTestId('movies_h1');

    expect(elementH1).toBeInTheDocument();
    expect(elementH1).toHaveTextContent(/Movies/i); // have text
    expect(elementH1).toHaveTextContent('Movies'); // only text strict
  });

  it('should call api and update store when click btn', async () => {
    renderWithEveryProvider(<Movies />);

    mockedAxios.get.mockResolvedValue({
      data: [
        {
          Title: 'The Lion King',
          Year: '2019',
          Runtime: '118 min',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg'
        },
        {
          Title: 'Mowgli: Legend of the Jungle',
          Year: '2018',
          Runtime: '104 min',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg'
        },
        {
          Title: 'Doctor Strange',
          Year: '2016',
          Runtime: '115 min',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg'
        },
        {
          Title: 'John Wick',
          Year: '2014',
          Runtime: '101 min',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg'
        },
        {
          Title: 'The Notebook',
          Year: '2004',
          Runtime: '123 min'
        }
      ]
    });

    const submitBtn = screen.getByTestId('movies_btn');
    const errorMessage = screen.queryByTestId('movies_error-message');

    fireEvent.click(submitBtn);

    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(errorMessage).not.toBeInTheDocument();
    const movieList = screen.getAllByRole('listitem');
    expect(movieList).toHaveLength(5);
    expect(mockUseUpdateListMovies).toHaveBeenCalled();
  });

  it('should not call update store when api has error', async () => {
    renderWithEveryProvider(<Movies />);

    mockedAxios.get.mockRejectedValueOnce({
      response: {
        status: 400,
        statusText: 'Bad Request',
        data: {
          errors: ['Invalid request', 'Invalid Id']
        }
      }
    } as AxiosError);

    const submitBtn = screen.getByTestId('movies_btn');

    fireEvent.click(submitBtn);

    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));

    const errorMessage = screen.getByTestId('movies_error-message');

    const items = screen.queryAllByRole('listitem');
    expect(items.length).toBe(0);
    expect(errorMessage).toBeInTheDocument();
    expect(mockUseUpdateListMovies).not.toHaveBeenCalled();
  });
});
